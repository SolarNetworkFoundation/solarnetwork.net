---
title: SolarFlux aggregate datum publish settings added
date: 2024-06-28
tags: solarnet, api, dev, data, solarflux
category: news
---
SolarNetwork has added the ability to control how aggregate datum streams are published to SolarFlux.

<!--more-->

SolarNetwork automatically calculates hourly, daily, and monthly aggregate datum for all datum
streams. SolarNode devices have always had the ability to publish their raw datum streams to
[SolarFlux][solarflux], our real-time MQTT-based message service. Now you have the ability to
configure SolarNetwork to publish the aggregate datum streams to SolarFlux as well, so you can
subscribe to real-time updates to those streams as SolarNetwork computes them.

## Simple management UI

We have added an easy-to-use management user interface to [SolarNetwork][solaruser] to support this
feature. With point-and-click simplicity you can configure default publish settings along with datum
stream-specific rules for fine-grained control.

<img alt="Screen shot of the SolarFlux settings UI" src="/img/news/solaruser-solarflux-settings@2x.png" width="960">

## Robust management API

The new [SolarUser SolarFlux API][solaruser-flux-api] provides a complete API for managing DIN
endpoints within your SolarNetwork account. Each endpoint is independently configured with
authorization and transform settings.

<img alt="A table of the SolarUser SolarFlux API endpoints" src="/img/news/solaruser-solarflux-api-table@2x.png" width="858">

## Get started now

This feature is [available now][solaruser] to all SolarNetwork users.


[solarflux]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarFlux-API
[solaruser]: https://data.solarnetwork.net/solaruser/u/sec/flux
[solaruser-flux-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-SolarFlux-API
