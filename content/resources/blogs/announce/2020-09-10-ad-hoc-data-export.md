---
title: Ad hoc data export UI in SolarUser
date: 2020-09-10
tags: dev, solaruser
---
SolarUser has a supported scheduled data exports [for a couple of years now]({{<ref "2018-05-01-data-export">}}), and the SolarUser API has supported [ad hoc data
exports][ad-hoc-export-submit] for more than a year. Now we've added an easy-to-use UI in the
[SolarUser Data Export][solaruser-data-export] page for submitting ad hoc data exports.

<!--more-->

Just fill in
a simple form to pick the date range, nodes, sources, and aggregate level you want to export:

<img alt="SolarUser ad hoc export form" src="/img/news/solaruser-adhoc-datum-export-create.png" width="815">

Once submitted, the export jobs show up with status information:

<img alt="SolarUser ad hoc exports" src="/img/news/solaruser-adhoc-datum-exports.png" width="800">

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}

[solaruser-data-export]: https://data.solarnetwork.net/solaruser/u/sec/export
[ad-hoc-export-submit]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Export-API#submit-ad-hoc-export-task
