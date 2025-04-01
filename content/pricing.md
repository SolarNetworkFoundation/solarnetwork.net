---
title: SolarNetwork - Pricing
date: 2025-04-01
publishdate: 2025-04-01
audience: main
buttons:
  services:
    - type: text
      text: Looking for consulting services?
    - type: primary
      url:  /services.html
      text: See services
  signup:
    - text: "Ready to sign up?"
    - type: primary
      link:  contact
    - type: default
      text: See platform costs
      url: /platform-pricing.html
---
{{<section/column title="Pricing" buttons="services">}}
{{</section/column>}}

{{<section/content class="sn-light">}}

SolarNetwork Foundation offers a usage-based pricing model for the SolarNetwork platform which is
based on how much you utilise the platform. For example you pay for the amount of data collected into
and queried out of the platform.

The following **basic** SolarNetwork features are available to all users, including the
[∅Energy](#on-demand-monthly-packages) free tier:

{{<table>}}
| Feature | Description |
|:--------|:------------|
| SolarNode | Deploy any number of SolarNode edge compute devices to collect data from any number of components (solar inverters, meters, and so on). |
| SolarQuery | Query all the data collected by SolarNode devices. |
| SolarFlux | Real-time access to data collected by SolarNode devices. |
| Instructions     | [Send commands](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-API#queue-instruction) to SolarNode devices, for example to toggle a switch or adjust a setpoint on a component. |
{{</table>}}

By signing up to the [milliWatt](#on-demand-monthly-packages) or higher package you gain access to the following **core** SolarNetwork features:

{{<table>}}
| Feature | Description |
|:--------|:------------|
| Priority support | Support straight from the SolarNetwork experts. |
| Bulk import      | [Import CSV data](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Import-API) into SolarNetwork. |
| Bulk export      | [Export CSV data](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Datum-Export-API) out of SolarNetwork, on an automated schedule or as a one-off. |
{{</table>}}

By signing up to the [kiloWatt](#on-demand-monthly-packages) or higher package you gain access to the following additional SolarNetwork features:

{{<table>}}
| Feature | Description |
|:--------|:------------|
| Cloud integration | Acquire data from [external device cloud services]({{<ref "2024-11-06-cloud-integrations">}}), without using a SolarNode device to collect the data. |
| Custom HTTP integration | Deploy [custom HTTP data integration URLs]({{<ref "2024-03-05-din">}}) that can convert and import arbitrary data formats into SolarNetwork, without using a SolarNode device to collect the data. |
| Custom HTTP instruction integration | Deploy [custom instruction integration URLs]({{<ref "2024-04-21-inin">}}) that can convert arbitrary messages into SolarNode instructions. |
| DNP3 integration | Integrate with [Distributed Network Protocol](https://en.wikipedia.org/wiki/DNP3) Control Center applications by way of a fully managed [DNP3 Remote Substation (Outstation)]({{<ref "2023-08-20-dnp3">}}) instance. A single Outstation can expose data and control points across any node associated with your SolarNetwork account. SolarNetwork provides a [robust API](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-DNP3-API) for managing DNP3 configuration. |
| Event hooks      | Integrate with external applications based on [events]({{<ref "2020-06-19-event-hooks-api">}}) happening within SolarNetwork. |
| OCPP integration | Integrate electric vehicle charging stations with your SolarNetwork account via the Open Charge Point Protocol from the [Open Charge Alliance](https://www.openchargealliance.org/). SolarNetwork acts as an OCPP [Central Service]({{<ref "2022-05-16-ocpp-ui">}}) and offers a [robust API](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OCPP-API) to manage the integration. |
| OSCP integration | Receive load control signals from an [Open Smart Charging Protocol](https://www.openchargealliance.org/protocols/oscp-20/) Capacity Provider. SolarNetwork acts as an OSCP [Flexibility Provider]({{<ref "2023-02-14-oscp-ui">}}) and offers a [robust API](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OSCP-API) to integrate your own Capacity Optimizer service. |
{{</table>}}

<sup>*</sup>Other features will be added over time.
{.uk-text-small}

{{</section/content>}}

{{<section/deck class="sn-alt sn-light" deck-class="sn-learn sn-pair sn-extra" buttons="signup"
  title="On demand monthly packages"
  subtitle="The following pacakges are available for month-by-month support, with no long-term contract.">}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-0energy.svg"
      alt="Zero Energy" >}}

  Free tier for getting started or personal hobby use. Comes with:

    * **Platform access:** basic features
    * **Data retention:** 1 year
    * **Support:** Community (Slack, GitHub)

  <span class="uk-text-large">**Free**</span>
  {.uk-text-center}

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-milliwatt.svg"
      alt="millwatt" >}}

  Starter tier for small projects or personal hobby use. Comes with:

    * **Platform access:** basic + core features
    * **Data retention:** unlimited
    * **Support:** Community (Slack, GitHub)

  <span class="uk-text-large">[Platform usage](/platform-pricing.html) costs</span>
  {.uk-text-center}

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-kilowatt.svg"
      alt="Kilowatt" >}}

  Essential package for small teams just getting started. Comes with:

    * **Platform access:** all features; pay only for what you use
    * **Data retention:** unlimited
    * **Email/Slack consulting:** 2h
    * **Issue response time:** 1 business day

  <span class="uk-text-large">[Platform usage](/platform-pricing.html) + **$350** <span class="uk-text-muted">/ month</span></span>
  {.uk-text-center}

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-megawatt.svg"
      alt="Megawatt" >}}

  Booster package for small projects. Comes with:

    * **Platform access:** all features; pay only for what you use
    * **Data retention:** unlimited
    * **Email/Slack consulting:** 4h
    * **Issue response time:** 1 business day
    * **Expert training:** 2h

  <span class="uk-text-large">[Platform usage](/platform-pricing.html) + **$900** <span class="uk-text-muted">/ month</span></span>
  {.uk-text-center}

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-gigawatt.svg"
      alt="Gigawatt" >}}

  Premium package for medium teams. Comes with:

    * **Platform access:** all features; pay only for what you use
    * **Data retention:** unlimited
    * **Email/Slack consulting:** 8h
    * **Issue response time:** 12 business hours
    * **Expert training:** 4h

  <span class="uk-text-large">[Platform usage](/platform-pricing.html) + **$1600** <span class="uk-text-muted">/ month</span></span>
  {.uk-text-center}

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-main"
      logo="/img/support/support-flexiwatt.svg"
      alt="Flexiwatt">}}

  Looking for even more support, or something tailored to your needs? Contact us to
  design a customised FlexiWatt package that works for you.

  {{</deck-link-card>}}

{{</section/deck>}}

{{<section/content class="sn-alt sn-light" title="Support terms and conditions">}}

 * A support term starts upon receipt of payment and runs until the same day on the following month.
 * Support renewals can be purchased prior to the end of an active support term, and will start
   at the conclusion of the active term.
 * Any consulting and training hours included in the support package reset at the end of the term,
   even if you puchase a support renewal.

{{</section/content>}}


{{<section/deck class="sn-alt" deck-class="sn-learn sn-pair sn-compact" buttons="contact"
  title="Long-term support packages"
  subtitle="Pay up front for longer-term support for a discounted price. All consulting and training hours apply to the whole term. Choose one of the monthly support packages and then add on one of these long-term options:">}}

  {{<deck-card class="sn-main" title="Quarterly" subtitle="3 month term">}}

    * **Email/Slack consulting:** 3x monthly package
    * **Expert training:** 3x monthly package
    * 5% discount

  {{</deck-card>}}

  {{<deck-card class="sn-main" title="Semi-annually" subtitle="6 month term">}}

    * **Email/Slack consulting:** 6x monthly package
    * **Expert training:** 6x monthly package
    * 7% discount

  {{</deck-card>}}

  {{<deck-card class="sn-main" title="Annually" subtitle="12 month term">}}

    * **Email/Slack consulting:** 12x monthly package
    * **Expert training:** 12x monthly package
    * 10% discount

  {{</deck-card>}}

{{</section/deck>}}

{{<section/logos>}}
