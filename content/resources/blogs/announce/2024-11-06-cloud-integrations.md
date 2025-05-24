---
title: Cloud Datum Streams
date: 2024-11-06
tags: solarnet, api, data
category: news
---
SolarNetwork has added support for _Cloud Integrations_ — the ability to acquire data from external
systems, when you do not have a SolarNode edge device delpoyed to collect the data directly. Some
device manufacturers have deployed their own cloud services that their devices publish data to, so a
_Cloud Datum Stream_ can help to get that data into SolarNetwork.

<!--more-->

Once a Cloud Datum Stream is configured, SolarNetwork will automatically collect the data
into SolarNetwork, where you can access it with all the APIs SolarNetwork offers, no differently
than if a SolarNode had collected the data.

There are quite a lot of device clouds out in the wild. Right now we have added support for the
following services:

  * [eGauge](https://github.com/SolarNetwork/solarnetwork/wiki/eGauge-Cloud-Integrations)
  * [Locus Energy](https://github.com/SolarNetwork/solarnetwork/wiki/Locus-Energy-Cloud-Integrations) (AlsoEnergy)
  * [OpenWeatherMap](https://github.com/SolarNetwork/solarnetwork/wiki/OpenWeatherMap-Cloud-Integrations)
  * [SolarEdge](https://github.com/SolarNetwork/solarnetwork/wiki/SolarEdge-Cloud-Integrations)
  * [Solcast](https://github.com/SolarNetwork/solarnetwork/wiki/Solcast-Cloud-Integrations)
  * [SolrenView](https://github.com/SolarNetwork/solarnetwork/wiki/SolrenView-Cloud-Integrations) (Solectria)


  See the [Cloud Integrations guide][c2c] for more information. SolarNetwork provides a [Cloud
  Integrations API][solaruser-c2c-api] for managing the configuration required for the cloud
  integrations to work, such as the credentials used to connect with the cloud service.

<img alt="A table of the SolarUser Cloud Integrations API endpoints" src="/img/news/solaruser-cloud-integrations-api-table@2x.png" width="918">

## Get started now

This feature is available now to all SolarNetwork subscribers. If you do not see a cloud integration
for the service you would like to integrate with, [reach out to us](mailto:info@solarnetwork.net?subject=Cloud%20Integrations%20request) and we'll be happy to discuss what it would take to add
support for that service.

{{<shoutout img="/img/news/ecosuite-logo-icon-40.svg" name="Ecosuite" url="https://ecosuite.io/"/>}}

[c2c]: https://github.com/SolarNetwork/solarnetwork/wiki/Cloud-Integrations
[solaruser-c2c-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Cloud-Integrations-API
