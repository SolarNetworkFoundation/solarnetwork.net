---
title: SolarNetwork - Platform Usage Costs
date: 2023-05-01
publishdate: 2023-05-01
audience: main
buttons:
  signup:
    - text: "Want to sign up?"
    - type: primary
      text: See subscriptions
      url: /pricing.html
    - type: default
      url:  "https://go.solarnetwork.net/subscription-price-explorer/"
      text: Simulate usage costs
  explorer:
    - type: primary
      url:  "https://go.solarnetwork.net/subscription-price-explorer/"
      text: Simulate usage costs
---
{{<section/column title="Platform usage costs"/>}}

{{<section/content class="sn-light" buttons="signup">}}

SolarNetwork Foundation offers a usage-based pricing model for the SolarNetwork platform which is
based on how much you utilise the platform. For example you pay for the amount of data collected into
and queried out of the platform.

{{</section/content>}}

{{<section/content class="sn-alt" title="SolarNetwork terminology">}}

To understand the SolarNetwork platform costs, the following terms are used:
{.uk-text-large}

{{<table>}}
| Term         | Definition |
|--------------|------------|
| **Account**  | A means to access SolarNetwork services based on registering a unique email address. |
| **Node**     | A device that collects data for an account. Any number of nodes may be associated with an account. Each node is assigned a unique identifier by SolarNetwork. |
| **Source**   | A unique identifier for  a stream of data captured by a node. Often a source denotes a hardware device that a node is collecting data from. Sources are given short textual identifiers by node administrators, and can be organized using slashes into meaningful hierarchies. For example _/home/weather_ might be used for a weather station source.
| **Datum**    | A timestamped sample of data specific to a source and uploaded to SolarNetwork. |
| **Property** | A uniquely named measurement captured in a datum. Each datum can have any number of properties within it. For example _temperature: 20℃_ and _wind speed: 20 km/hr_ might be captured in a datum from a weather station source. |
{{</table>}}

{{</section/content>}}

{{<section/content class="sn-light" title="Usage pricing" buttons="explorer">}}

Once you sign up for a SolarNetwork subscription, you will be billed _monthly_ based on your
platform usage across all nodes in your account in several categories of use. The **core** usage
categories are:

 1. **Properties Posted** — the total number of properties uploaded to SolarNetwork across all
    datum for all sources for all nodes in your account.
 2. **Datum Queried** — the number of datum returned via queries to the SolarNetwork API.
 3. **Datum Days Stored** — number of datum stored in SolarNetwork, across all sources and nodes in
    your account, calculated _each day_ and summed for the month.

Each category has a tiered pricing structure, where the rate decreases as the usage volume
increases. Subscriptions are billed _per month per account_ so tiers are applied on the sum total of
all nodes in each account. Use the **Simulate usage costs** button below to view all usage categories and
their associated price schedules.

{{</section/content>}}

{{<section/content class="sn-light" title="Core usage pricing overview">}}

The following sections detail the pricing tiers for the core usage categories.

## Properties Posted

This price is calculated from the number of properties posted into SolarNetwork over the billing period.

{{<table>}}
| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0           | $5.75 / million | 500,000     | $ 2.88   |
| > 500,000     | $3.45 / million | 9,500,000   | $ 32.78  |
| > 10,000,000  | $0.92 / million | 490,000,000 | $ 450.80 |
| > 500,000,000 | $0.23 / million | -           | -        |
{{</table>}}

## Datum Queried

This price is calculated from the number of datum returned from any SolarNetwork API query that
returns datum over the billing period. For API calls that return paged results (e.g. results 1 - 100
of 10,000, then results 101 - 200, and so on) only the number of datum returned in each page
response count towards the total. If a query requests aggregate values, only the number of aggregate
datum returned count towards the total. For example, requesting hourly aggregated datum given 1,000
raw datum that span 24 hours would return 24 datum that count towards the total.

{{<table>}}
| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0              | $1.15 / 10 million | 10,000,000     | $ 1.15   |
| > 1,000,000      | $0.46 / 10 million | 990,000,000    | $ 45.54  |
| > 100,000,000    | $0.05 / 10 million | 99,000,000,000 | $ 495.00 |
| > 10,000,000,000 | $0.02 / 10 million | -              | -        |
{{</table>}}

## Datum Days Stored

This price is calculated from the total number of datum stored in SolarNetwork _on each day_ over the
billing period. As nodes post datum, this value grows. SolarNetwork also stores rolled-up aggregate
datum derived from the raw datum—at hourly, daily, and monthly aggregate levels. Each of these
aggregate datum are counted in this total as well.

{{<table>}}
| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0               | $5.75 / 100 million | 10,000,000     | $ 0.58   |
| > 10,000,000      | $1.15 / 100 million | 990,000,000    | $ 11.39  |
| > 1,000,000,000   | $0.35 / 100 million | 99,000,000,000 | $ 341.55 |
| > 100,000,000,000 | $0.23 / 100 million | -              | -        |
{{</table>}}

{{</section/content>}}

{{<section/content class="sn-alt" title="Usage pricing example">}}

The following sections illustrate how the SolarNetwork platform costs are calculated.

## Properties Posted

A node collects temperature and wind speed properties from a single weather station
source once per minute. Over one 30-day month that would equate to:

1 _source_ × 2 _properties_ × 60 _minutes_ × 24 _hours_ × 30 _days_ = **86,400** properties

{{<table>}}
| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 86,400 × $5.75 ÷ 1,000,000 | $0.50 |
| **Total** |  | **$0.50** |
{{</table>}}

## Datum Queried

The following example builds off the **Properties Posted** example above, in which 1 datum is posted
every minute. A script requests the following datum:

{{<table>}}
| Query | Result Count | Schedule |
|-------|--------------|----------|
| all datum for the past month, aggregated daily | 30 | every hour |
| all datum for the past 2 hours | 120 | 6 times per hour |
| all datum for the past 24 hours, aggregated hourly | 24 | every hour |
| most recently available datum | 1 | every minute |
{{</table>}}

Over the course of a 30 day month that would equate to:

(30 daily + (120 datum × 6) + 24 hourly + 60 most recent) × 24 hours × 30 days = **600,480** datum

{{<table>}}
| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 600,480 × $1.15 ÷ 10,000,000 | $0.07 |
| **Total** |  | **$0.07** |
{{</table>}}

## Datum Days Stored

The following example builds off the **Properties Posted** example above, in which 1 datum is posted
every minute. A node has been running for a year and has 525,600 raw, 8,760 hourly aggregate, 365
daily aggregate, and 12 monthly aggregate datum stored in SolarNetwork, for a total of 534,737. Each
day the number of new datum stored would equate to:

((60 datum per minute + 1 hourly aggregate datum) × 24 hours) + 1 daily aggregate datum = 1,465 datum

Over the course of the next 30 day month the datum storage cost would equate to:

for _d_ = 1..30: _d_ = _d<sub>prev</sub>_ + 534,737 + (_d_ × 1,465) = **16,723,335** datum

{{<table>}}
| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 10,000,000 × $5.75 ÷ 100,000,000 | $0.58 |
| 2         | 6,723,335 × $1.15 ÷ 100,000,000  | $0.08 |
| **Total** |  | **$0.66** |
{{</table>}}

## Overall cost

The overall monthly platform cost for properties posted, datum queried, and datum stored for the
previous examples would be:

{{<table>}}
| Subscription | Cost |
|--------------|------|
| Properties Posted | $0.50 |
| Datum Queried     | $0.07 |
| Datum Days Stored | $0.66 |
| **Total**         | **$1.23** |
{{</table>}}

{{</section/content>}}

{{<section/logos>}}
