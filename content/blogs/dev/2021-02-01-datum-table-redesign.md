---
title: Datum database schema redesign
date: 2021-02-01
tags: dev, database
---
A big part of what SolarNetwork does is collect and store data from all sorts of devices and
services. The type of data collected varies quite a bit, so SolarNetwork has a flexible design for
storing it, which we call _datum_.

<!--more-->

A _datum_ is a collection of properties tied to a specific
_timestamp_ and _object_ and _source_. An _object_ is either a SolarNode device (a _node_) or a
physical _location_ (such as a building address or GPS coordinates). A _source_ is a user-assigned
name.

For example, a _node_ datum collected from a power meter might have properties like this:

{{<table>}}
| Property | Value |
|:---------|:------|
| `ts`        | `2021-01-01 12:00:00+13` |
| `node_id`   | `123` |
| `source_id` | `/meter/1` |
| `current`   | `9.733` |
| `voltage`   | `239.5` |
| `watts`     | `2331` |
| `wattHours` | `340983098` |
| `status`    | `OK` |
{{</table>}}

## Old database design

Until now, SolarNetwork stored this data as a set of JSON objects, based on a simple classification
of _instantaneous_ vs _accumulating_ vs _status_ property types. Along with columns for the
timestamp, object ID, and source ID of the datum, the database table had JSON columns for each set
of properties, sort of like this:

{{<table>}}
| Column      | Datatype  | Value |
|:------------|:----------|:------|
| `ts`        | timestamp | `2021-01-01 12:00:00+13` |
| `node_id`   | bigint    | `123` |
| `source_id` | text      | `/meter/1` |
| `jdata_i`   | JSON      | `{"current":9.733,"voltage":239.5,"watts":2331}` |
| `jdata_a`   | JSON      | `{"wattHours":340983098}` |
| `jdata_s`   | JSON      | `{"status":OK}` |
{{</table>}}

Additionally, users are allowed to store arbitrary metadata for object + source ID pairs, in the
form of a JSON object. In the old database design a separate table holds this information, using
the object ID and source ID pair as its primary key. A row in the database table for node source
metadata might look like this:

{{<table>}}
| Column      | Datatype  | Value |
|:------------|:----------|:------|
| `node_id`   | bigint    | `123` |
| `source_id` | text      | `/meter/1` |
| `jdata`     | JSON      | `{"description":"Power meter for house supply."}` |
{{</table>}}

## Design problems

Although quite flexible (and having served SolarNetwork well for many years), the database design
had some notable drawbacks:

 * **Hard to handle source ID changes** — source ID values are just text defined by users, but they
   usually have important information encoded into them, such as a logical typology of where the
   data is being collected from. Sometimes source IDs need to be changed, but in this design the
   source ID is physically part of each datum. To change the source ID, every datum row with the
   source ID to change needs to be updated, which can be a very expensive operation to perform.
 * **Property names are duplicated** — every datum row stores the property names along with their
   corresponding values, as JSON objects. This is very inefficient given most datum for a given
   source ID will contain the same properties, just with different values. This duplication
   increases the amount of storage required to hold the data, and decreases the speed at which the
   data can be queried because there is simply more data to sift through.
{.uk-list .uk-list-disc}

## New database design

To overcome these design problems, we've developed a new database design that preserves the general
flexibility of how datum are stored but solves the design issues. We introduced the concept of a
**datum stream**, with these changes:

 * Assign a UUID to each _object ID_ and _source ID_ pair; call this a _stream ID_.
 * Store the _stream ID_ and associated _object ID_ and _source ID_ in a new table.
 * Store the _stream ID_ with each datum.
 * For each stream maintain an ordered list of _property names_ for each property classification.
 * For each datum store ordered lists of _property values_ where the order matches the property
   names list of the associated stream.
{.uk-list .uk-list-disc}

A diagram makes this easier to take in:

![Table redesign diagram](/img/news/datum-table-redesign.svg)

The new `da_datm` table has a primary key defined by a _stream ID_ and _timestamp_. The datum
property _values_ are stored as `numeric[]` and `text[]` array columns.

The new `da_datm_meta` and `da_loc_datm_meta` tables associate stream IDs to node/location ID and
source ID pairs. These tables hold the datum property _names_ for each property classification in
`text[]` array columns (the `names_*` columns). They also hold user-defined JSON metadata for each
stream in the `jdata` column, formerly stored in the `da_meta` and `da_loc_meta` tables.

Using the same example datum as shown earlier, in the new database design there would be one row
in the `da_datm_meta` table like this:

{{<table>}}
| Column      | Datatype  | Value |
|:------------|:----------|:------|
| `stream_id` | UUID      | `a4840264-2b5b-4673-83f7-66a404d6faf0` |
| `node_id`   | bigint    | `123` |
| `source_id` | text      | `/meter/1` |
| `names_i`   | text[]    | `[current,voltage,watts]` |
| `names_a`   | text[]    | `[wattHours]` |
| `names_s`   | text[]    | `[status]` |
{{</table>}}

Then there would be one row in the `da_datm` table like this:

{{<table>}}
| Column      | Datatype  | Value |
|:------------|:----------|:------|
| `stream_id` | UUID      | `a4840264-2b5b-4673-83f7-66a404d6faf0` |
| `ts`        | timestamp | `2021-01-01 12:00:00+13` |
| `data_i`    | numeric[] | `[9.733,239.5,2331]` |
| `data_a`    | numeric[] | `[340983098]` |
| `data_s`    | text[]    | `[OK]` |
{{</table>}}

## Problems solved

The new design solves the first problem of renaming source IDs quite nicely. Now a source ID is
just a bit of metadata for a datum stream: updating a single row in the `da_datm_meta` table is all
it takes to update the source ID for an entire stream. In fact, _object_ IDs are now essentially
another bit of metadata for a datum stream, and could be easily updated if needed.

The new design solves the second problem of duplicate property names by turning the property names
into metadata on a datum stream as well. As more and more datum are collected for a given stream,
there will still be only **one** row in the `da_datm_meta` table. SolarNetwork is also flexible
enough that property names can be _added_ over time to a given stream, and `NULL` (empty) values
are allowed (and stored efficiently) if a datum doesn't always contain values for all properties.
