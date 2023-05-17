---
title: SolarFlux aggregate datum available
date: 2019-11-07
tags: dev, data, mqtt
---
Almost [one year ago]({{<ref "2018-12-20-solarflux">}}) SolarNetwork launched SolarFlux,
a real-time publish/subscribe system for SolarNode data. We've now expanded SolarFlux's reach by
adding automatically-calculated aggregate data topics, so applications have real-time access
to hour, day, and month aggregated data in addition to the raw data published by SolarNode.

<!--more-->

This real-time aggregate data can be very handy for applications that want to show what is happening
"this hour" or "today" or "this month" without having to use the SolarQuery REST API to poll for
that information. With SolarFlux, your application can subscribe to the aggregate data topic(s)
you are interested in and display the updates calculated by SolarNetwork _as they occur_.

For example, subscribing to a SolarFlux topic like `node/123/datum/d/Solar` would receive messages
showing the current day's average and accumulated properties for node 123's `Solar` source,
which might look like this on 6 Nov 2019:

```json
{
  "created": 1573023600000,
  "nodeId": 123,
  "sourceId": "Solar",
  "localDate": "2019-11-06",
  "localTime": "00:00",
  "watts": 2097.409,
  "watts_max": 3776,
  "watts_min": 1118,
  "wattHours": 6405.855
}
```

That shows that so far the `Solar` source produced about 6.4 kWh of energy at an average power of
2 kW.

See the [wiki docs][api-docs] for more information.

[api-docs]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarFlux-API#publishing-solarnet-aggregate-datum
