---
title: SolarQuery improved day-of-week and hour-of-day aggregation support
date: 2020-05-26
tags: dev, solarquery
---
The SolarQuery [/datum/list][list-api] and [/location/datum/list][loc-list-api] endpoints no longer
require the `dataPath` parameter when using the [`DayOfWeek`/`SeasonalDayOfWeek`][agg-dow] or
[`HourOfDay`/`SeasonalHourOfDay`][agg-hod] aggregation types.

<!--more-->

Previously the `dataPath` argument
was required by these aggregation types, which limited the results to a single datum property. Now
if you omit the `dataPath` parameter, _all_ datum properties will be aggregated and returned in
the results.

[agg-dow]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API-enumerated-types#day-of-week
[agg-hod]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API-enumerated-types#hour-of-day
[list-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#datum-list
[loc-list-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#location-datum-list
