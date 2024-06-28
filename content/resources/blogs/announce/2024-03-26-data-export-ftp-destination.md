---
title: FTP datum export feature added
date: 2024-03-26
tags: solarnet, api, dev, data
category: news
---
SolarNetwork has added a new FTP datum export destination service that allows you to [export datum]({{<ref
"2018-05-01-data-export">}}) to URLs using FTP. The exports can be scheduled to run automatically
(hourly, daily, weekly, or monthly) or they can be run on demand.

<!--more-->

The data export management user interface in [SolarNetwork][solaruser-export] now supports configuring
FTP destinations, including support for FTPS (TLS encrypted FTP).

<img alt="SolarUser UI form to configure an FTP export destination" src="/img/news/solaruser-datum-export-ftp-dest-ui@2x.png" width="592">

The updated SolarUser Datum Export API has been updated to include details on the new
[FTP destination configuration][ftp-dest] API.

## Get started with FTP datum export in SolarNetwork

This feature is available now to all SolarNetwork subscribers. If you are interested in using
SolarNetwork's FTP data export support, check out our [Datum Export
documentation][solaruser-export] and <a
href="mailto:info@solarnetwork.net?subject=Getting%20started%20with%20datum%20export">reach out to
us</a> -- we'll be happy to help you get started!


[solaruser-export]: https://data.solarnetwork.net/solaruser/u/sec/export
[datum-export]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Export-API
[ftp-dest]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Export-API#ftp-destination
