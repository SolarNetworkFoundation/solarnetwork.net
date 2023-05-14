---
title: SolarNetwork - Subscriptions
date: 2023-05-01
publishdate: 2023-05-01
audience: main
buttons:
  donate:
    - text: "Want to sign up?"
    - type: primary
      url:  "#todo"
      text: Get in touch
  explorer:
    - type: primary
      url:  "https://go.solarnetwork.net/subscription-price-explorer/"
      text: Simulate costs
---
{{<section/column title="Subscriptions"/>}}

{{<section/content class="sn-light" buttons="donate">}}

SolarNetwork Foundation offers subscriptions to the SolarNetwork platform which are based on the
amount of data collected into and queried out of the platform.

By subscribing to SolarNetwork you gain access to the following SolarNetwork features:
{.uk-text-large}

| Feature | Description |
|:--------|:------------|
| Priority support | Support straight from the SolarNetwork experts. |
| Bulk import      | [Import CSV data](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Import-API) into SolarNetwork. |
| Bulk export      | [Export CSV data](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Export-API) out of SolarNetwork, on an automated schedule or as a one-off. |
| Event hooks      | Integrate with external applications based on events happening within SolarNetwork. |
| OCPP integration | Integrate electric vehicle charging stations with your SolarNetwork account via the Open Charge Point Protocol from the [Open Charge Alliance](https://www.openchargealliance.org/). SolarNetwork acts as an OCPP [Central Service](https://github.com/SolarNetwork/solarnetwork/wiki/OCPP) and offers a [robust API](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OCPP-API) to manage the integration. |
| OSCP integration | Receive load control signals from an [Open Smart Charging Protocol](https://www.openchargealliance.org/protocols/oscp-20/) Capacity Provider. SolarNetwork acts as an OSCP [Flexibility Provider](https://github.com/SolarNetwork/solarnetwork/wiki/OSCP) and offers a [robust API](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OSCP-API) to integrate your own Capacity Optimizer service. |
{.uk-table .uk-table-striped}

<sup>*</sup>Other subscriber-only features will be added over time.
{.uk-text-small}

{{</section/content>}}

{{<section/content class="sn-alt" title="SolarNetwork terminology">}}

To understand the SolarNetwork subscription costs, the following terms are used:
{.uk-text-large}

| Term         | Definition |
|--------------|------------|
| **Account**  | A means to access SolarNetwork services based on registering a unique email address. |
| **Node**     | A device that collects data for an account. Any number of nodes may be associated with an account. Each node is assigned a unique identifier by SolarNetwork. |
| **Source**   | A unique identifier for  a stream of data captured by a node. Often a source denotes a hardware device that a node is collecting data from. Sources are given short textual identifiers by node administrators, and can be organized using slashes into meaningful hierarchies. For example _/home/weather_ might be used for a weather station source.
| **Datum**    | A timestamped sample of data specific to a source and uploaded to SolarNetwork. |
| **Property** | A uniquely named measurement captured in a datum. Each datum can have any number of properties within it. For example _temperature: 20℃_ and _wind speed: 20 km/hr_ might be captured in a datum from a weather station source. |
{.uk-table .uk-table-striped}

{{</section/content>}}

{{<section/content class="sn-light" title="Subscription pricing" buttons="explorer">}}

Once you sign up for a SolarNetwork subscription, you will be billed _monthly_ based on your usage
across all nodes in your account, in the following categories:

 1. **Properties Posted** — the total number of properties uploaded to SolarNetwork across all
    datum for all sources for all nodes in your account.
 2. **Datum Queried** — the number of datum returned via queries to the SolarNetwork API.
 3. **Datum Days Stored** — number of datum stored in SolarNetwork, across all sources and nodes in
    your account, calculated _each day_ and summed for the month.

Each category has a tiered pricing structure, where the rate decreases as the usage volume increases.
Subscriptions are billed _per month per account_ so tiers are applied on the sum total of all nodes
in each account.

{{</section/content>}}

{{<section/content class="sn-light" title="Pricing details">}}

The following sections detail the pricing tiers for each subscription category.

## Properties Posted

This price is calculated from the number of properties posted into SolarNetwork over the billing period.

| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0           | $5 / million    | 500,000     | $ 2.50   |
| > 500,000     | $3 / million    | 9,500,000   | $ 28.50  |
| > 10,000,000  | $0.80 / million | 490,000,000 | $ 392.00 |
| > 500,000,000 | $0.20 / million | -           | -        |
{.uk-table .uk-table-striped}

## Datum Queried

This price is calculated from the number of datum returned from any SolarNetwork API query that
returns datum over the billing period. For API calls that return paged results (e.g. results 1 - 100
of 10,000, then results 101 - 200, and so on) only the number of datum returned in each page
response count towards the total. If a query requests aggregate values, only the number of aggregate
datum returned count towards the total. For example, requesting hourly aggregated datum given 1,000
raw datum that span 24 hours would return 24 datum that count towards the total.

| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0              | $1 / 10 million    | 10,000,000     | $ 1.00   |
| > 1,000,000      | $0.40 / 10 million | 990,000,000    | $ 39.60  |
| > 100,000,000    | $0.04 / 10 million | 99,000,000,000 | $ 396.00 |
| > 10,000,000,000 | $0.01 / 10 million | -              | -        |
{.uk-table .uk-table-striped}

## Datum Days Stored

This price is calculated from the total number of datum stored in SolarNetwork _on each day_ over the
billing period. As nodes post datum, this value grows. SolarNetwork also stores rolled-up aggregate
datum derived from the raw datum—at hourly, daily, and monthly aggregate levels. Each of these
aggregate datum are counted in this total as well.

| Tier Start  | Tier Rate       | Tier Maximum | Tier Maximum Cost |
|-------------|-----------------|--------------|-------------------|
| > 0               | $5 / 100 million    | 10,000,000     | $ 0.50   |
| > 10,000,000      | $1 / 100 million    | 990,000,000    | $ 9.90   |
| > 1,000,000,000   | $0.30 / 100 million | 99,000,000,000 | $ 297.00 |
| > 100,000,000,000 | $0.20 / 100 million | -              | -        |
{.uk-table .uk-table-striped}

{{</section/content>}}

{{<section/content class="sn-alt" title="Pricing example">}}

The following sections illustrate how the SolarNetwork subscription costs are calculated.

## Properties Posted

A node collects temperature and wind speed properties from a single weather station
source once per minute. Over one 30-day month that would equate to:

1 _source_ × 2 _properties_ × 60 _minutes_ × 24 _hours_ × 30 _days_ = **86,400** properties

| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 86,400 × $5 ÷ 1,000,000 | $0.43 |
| **Total** |  | **$0.43** |
{.uk-table .uk-table-striped}

## Datum Queried

The following example builds off the **Properties Posted** example above, in which 1 datum is posted
every minute. A script requests the following datum:

| Query | Result Count | Schedule |
|-------|--------------|----------|
| all datum for the past month, aggregated daily | 30 | every hour |
| all datum for the past 2 hours | 120 | 6 times per hour |
| all datum for the past 24 hours, aggregated hourly | 24 | every hour |
| most recently available datum | 1 | every minute |
{.uk-table .uk-table-striped}

Over the course of a 30 day month that would equate to:

(30 daily + (120 datum × 6) + 24 hourly + 60 most recent) × 24 hours × 30 days = **600,480** datum

| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 600,480 × $1 ÷ 10,000,000 | $0.06 |
| **Total** |  | **$0.06** |
{.uk-table .uk-table-striped}

## Datum Days Stored

The following example builds off the **Properties Posted** example above, in which 1 datum is posted
every minute. A node has been running for a year and has 525,600 raw, 8,760 hourly aggregate, 365
daily aggregate, and 12 monthly aggregate datum stored in SolarNetwork, for a total of 534,737. Each
day the number of new datum stored would equate to:

((60 datum per minute + 1 hourly aggregate datum) × 24 hours) + 1 daily aggregate datum = 1,465 datum

Over the course of the next 30 day month the datum storage cost would equate to:

for _d_ = 1..30: _d_ = _d<sub>prev</sub>_ + 534,737 + (_d_ × 1,465) = **16,723,335** datum

| Tier      | Calculation | Cost |
|-----------|-------------|------|
| 1         | 10,000,000 × $5 ÷ 100,000,000 | $0.50 |
| 2         | 6,723,335 × $1 ÷ 100,000,000  | $0.07 |
| **Total** |  | **$0.57** |
{.uk-table .uk-table-striped}

## Overall cost

The overall monthly subscription cost for properties posted, datum queried, and datum stored for the
previous examples would be:

| Subscription | Cost |
|--------------|------|
| Properties Posted | $0.43 |
| Datum Queried     | $0.06 |
| Datum Days Stored | $0.57 |
| **Total**         | **$1.06** |
{.uk-table .uk-table-striped}

{{</section/content>}}

{{<section/logos>}}
