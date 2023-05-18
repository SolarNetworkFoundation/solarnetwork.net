---
title: SolarQuery meter reading API added
date: 2018-08-17
tags: dev, data
---
SolarQuery has a new REST endpoint
[/datum/reading](https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#datum-reading)
that is designed to provide easy-to-use "meter reading" values. This is used to determine how much a
measurement changed over a period of time.

<!--more-->

Often billing systems need this type of information, for
example the difference between an energy meter reading at the start and end of a month shows how
much energy was used and thus should be billed for.

A nice aspect of this new endpoint is that it accepts dates in "SolarNode local time". If you manage
SolarNodes across multiple time zones, this is a convenient way to say _"give me results for each
node in their own time zone"_ and allows you to make a single API request for all nodes, rather than
multiple requests for each different time zone as would otherwise be required. Even if you only
manage nodes within a single time zone, using local dates can be convenient, as otherwise all
dates must be specified in UTC.

An example API call that asks _"give me the meter reading difference for July 2018"_ looks like the
following (notice the `localStartDate` and `localEndDate` parameters):

```
/solarquery/api/v1/pub/datum/reading?readingType=NearestDifference&tolerance=P1D&nodeIds=18&sourceIds=/CON/1&localStartDate=2018-07-01&localEndDate=2018-08-01
```

Here's an example response, which shows that **10.32 kWh** of energy was consumed over the month:

```json
{
	"created": "2018-07-01 03:59:42.014Z",
	"nodeId": 18,
	"sourceId": "/CON/1",
	"localDate": "2018-06-30",
	"localTime": "23:59",
	"wattHours": 10320000,
	"wattHours_end": 805703000,
	"wattHours_start": 795383000,
	"endDate": "2018-08-01 03:58:42.014Z",
	"timeZone": "America/New_York",
	"localEndDate": "2018-07-31 23:58:42.014"
}
```

There are a couple of other queries that can be made by changing the `readingType` parameter, so
check out the documentation for more information.

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}
