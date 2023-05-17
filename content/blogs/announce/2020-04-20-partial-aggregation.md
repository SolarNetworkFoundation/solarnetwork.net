---
title: SolarQuery partial aggregation support
date: 2020-04-20
tags: dev, solarquery
---
The SolarQuery [/datum/list][list-api] endpoint now supports a new `partialAggregation` parameter
that can provide aggregated results for partial aggregate time periods when the overall query
date range does not perfectly align on aggregate period dates.

<!--more-->

That's quite a mouthful! An example can make this much easier to understand when this can be used.
Imagine you are interested in query results broken down by calendar months, but your start and end
dates are on mid-month dates, for example **15 Jan 2020 - 15 Mar 2020**. To visualize, you expect
3 results like this, with their associated date ranges:

| # | Month   | First date | Last date  |
|:--|:--------|:-----------|:-----------|
| 1 | 2020-01 | 2020-01-**15** | 2020-01-31 |
| 2 | 2020-02 | 2020-02-01 | 2020-02-29 |
| 3 | 2020-03 | 2020-03-01 | 2020-03-**14** |

This can be accomplished by providing the `aggregation=Month&partialAggregation=Day` query
parameters. If this is **not** provided, then the returned results would include only full calendar
months, like this:

| # | Month   | First date | Last date  |
|:--|:--------|:-----------|:-----------|
| 1 | 2020-02 | 2020-02-01 | 2020-02-29 |
| 2 | 2020-03 | 2020-03-01 | 2020-03-**31** |

More information about this new feature is available [in the API documentation][part-agg].

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}

[list-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#datum-list
[part-agg]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-aggregation#list-partial-aggregation
