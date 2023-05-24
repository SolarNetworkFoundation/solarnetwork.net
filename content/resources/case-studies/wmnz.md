---
title: "Waste Management"
subtitle: Direct vehicle integration
date: 2021-09-30T10:00:00+13:00
draft: false
weight: 100
brief: "SolarNetwork Foundation partnered with EVisi to integrate SolarNode-based monitoring and control in a fleet of electric rubbish trucks."
toc: true
key: "wmnz"
audience: main
images:
  logo: /img/case-studies/wmnz-logo-368x86.svg
---
Waste Management New Zealand is working to electrify its entire fleet of rubbish and recycling
trucks over the next 10 years. They needed deep integration with its electric trucks to be able to
monitor their performance, health, and operating statistics over time.

Having worked with SolarNetwork Foundation on other projects, [EVisi](https://www.evisi.co/) again
recognized that the SolarNetwork platform would provide a solid foundation on which to address Waste
Management's needs, now and into the future. They asked SolarNetwork Foundation to help develop new
or enhanced features to meet the needs of the direct vehicle integration needed by the Waste
Management project.

## The challenge

 * integrate with the vehicle CAN network for detailed telemetry data collection
 * collect GPS telemetry data for real-time vehicle location tracking
 * reliably collect telemetry data even when going in/out of mobile network coverage areas
 * derive accurate energy values out of sensors that only provide power data
 * flexibly manage the amount of data collected based on different vehicle operating states, to
   minimize the amount of mobile bandwidth required

## The result

Waste Management deployed SolarNode devices wired directly to the electric truck's CAN Bus network,
other sensors, and a GPS receiver. The SolarNode devices use mobile network connectivity to publish
the collected telemetry to the SolarNetwork cloud and EVisi cloud services in real time.

<div class="uk-margin-large-left">
{{<quote url="https://www.evisi.co/" cite="Chris Olson, EVisi Founder">}}
EVisi provides electric vehicle telemetry and EV charger management software solutions. By
partnering with SolarNetwork Foundation from the initial stages of forming our business, we were
able to leverage the SolarNetwork platform to provide the energy data acquisition backbone that
powers our business. SNF has been outstanding to work with and has developed EV charger integration
modules, electric vehicle data processing modules, and other functions that have enabled EVisi to
deliver solutions to its customers that are technically advanced, robust and flexible.
{{</quote>}}
</div>

[EVisi](https://www.evisi.co/) funded the development of a SolarNode plugin to capture data from a
CAN Bus network, released as [open source](https://github.com/SolarNetwork/solarnetwork-node/tree/develop/net.solarnetwork.node.datum.canbus).
To help make configuring SolarNode to collect data from CAN Bus, SolarNetwork Foundation developed
an [extension to the open source KCD XML document format](https://github.com/SolarNetwork/solarnetwork-node/tree/develop/net.solarnetwork.node.io.canbus#solarnetwork-kcd-support)
that allows EVisi to define what telemetry should be collected from the vehicle. A SolarNode plugin
allows uploading the KCD document and completely configures the necessary CAN Bus data source
components.

![SolarNetwork KCD XML example](/img/case-studies/solarnetwork-kcd-xml-example-1694x1436.png)

To help manage the amount of data collected by each vehicle, EVisi realised that the data
sources being collected had different data collection frequency needs based on the operational state
of the vehicle. For example, when the truck is parked at night, charging, detailed information
about GPS location or motor speed are not very important while information about the state of the
battery is. When the truck is driving then detailed information about its GPS location and motor
characteristics and battery state are all important.

SolarNetwork Foundation helped EVisi make use of the sophisticated _filter_ system available in
SolarNode. The resulting filter configuration performs the following functions:

 * Detect the operational mode of the vehicle, e.g. _driving_ vs. _idle_
 * Derive _virtual meter_ accumulating energy properties out of instantaneous power properties
 * Discard unneeded properties
 * Throttle individual data sources based on the operational mode of the vehicle, e.g. slow down
   GPS location collection when not driving
 * Derive _delta energy_ properties out of accumulating energy properties to make integration with
   the EVisi cloud easier, i.e. report the amount of energy seen since the previous data posting

![EVisi filter visualization](/img/case-studies/evisi-wmnz-solarnode-filters-4175x2446.png)

Because of the rich set of real-time data collected by each vehicle, Waste Management has access to
highly informative visualisations that help them monitor the performance of each vehicle and detect
faults quickly and easily.

![EVisi data visualization](/img/case-studies/evisi-wmnz-dashboard-1669x1021.png)
