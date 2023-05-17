---
title: MQTT stream datum
date: 2021-06-10
tags: dev
---
The [previous post]({{<ref "2021-05-04-mqtt5">}}) talked about some efficiency gains
SolarNetwork enjoys by supporting MQTT 5. We've achieved even more efficiency gains now by
supporting a new datum format in SolarIn/MQTT that can significantly reduce the size of datum
messages.

<!--more-->

We call the datum format [stream datum][StreamDatum] because of how it utilises the same
format used internally by SolarNetwork to store [datum streams][DatumStreams], as outlined in an
[earlier blog post]({{<ref "2021-02-01-datum-table-redesign">}}).

## General datum format

The way SolarNodes have posted [datum][Datum] to SolarNetwork up to now has been to use JSON (or
CBOR) to encoded all the datum properties. SolarNetwork does not have a fixed schema so this format
includes all the property _names_ as well as their associated _values_. Here's an example of a
datum, expressed in JSON:

```json
{
  "sourceId": "OS Stats",
  "created": 1623110379000,
  "i": {
    "cpu_user":0,
    "cpu_system":0,
    "cpu_idle":100,
    "fs_size_/":3651829760,
    "fs_used_/":855937024,
    "fs_used_percent_/":24,
    "fs_size_/run":484552704,
    "fs_used_/run":11993088,
    "fs_used_percent_/run":3,
    "ram_total":969105408,
    "ram_avail":615411712,
    "ram_used_percent":36.5,
    "sys_load_1min":0.19,
    "sys_load_5min":0.70,
    "sys_load_15min":0.48
  },
  "a":{
    "net_bytes_in_eth0":0,
    "net_bytes_out_eth0":0,
    "net_packets_in_eth0":0,
    "net_packets_out_eth0":0,
    "sys_up":679245.22
  }
}
```

## Stream datum format

Since SolarNetwork actually separates the property _names_ out of each datum into [datum stream
metadata][DatumStreamMetadata] before storing just the property _values_ in the datum stream, we've
added an [API to SolarIn][SolarIn-StreamMetadata] so SolarNode can use the stream metadata to upload
stream datum objects, which omit datum property _names_, shaving off a sometimes significant number
of bytes from each datum message.

Here's an example of a stream datum version of the same general datum from the previous section,
expressed in JSON:

```json
[
  1623110379000,
  11992579225817268499,
  12681893233508468787,
  [0,0,100,3651829760,855937024,24,484552704,11993088,3,969105408,615411712,36.5,0.19,0.70,0.48],
  [0,0,0,0,679245.22],
  null,
  null
]
```

A property-heavy datum message like this can easily reduce the encoded message size by **80%**. Over
the life of a typical datum stream this can quickly add up to significant savings.

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}


[Datum]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#datum
[DatumStreamMetadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#datum-stream-metadata
[DatumStreams]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#datum-stream
[NET-281]: https://dev.solarnetwork.net/jira/browse/NET-281
[StreamDatum]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#stream-datum
[SolarIn-StreamMetadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarIn-API#datum-stream-metadata-view
