---
title: "NZ Bus"
heading: New Zealand's first electric bus depot
subtitle: OSCP-based load control for EV chargers
date: 2023-01-30T10:00:00+13:00
draft: false
weight: 100
brief: "SolarNetwork Foundation partnered with EVisi to add OSCP-based load control capabilities to the chargers at New Zealand's first electric bus depot."
toc: true
key: "nzbus"
audience: main
images:
  logo: /img/case-studies/nzbus-logo-222x103.png
---
[NZ Bus](https://www.nzbus.co.nz/) is New Zealand’s largest urban public transport business and
operator of metropolitan bus services, and operates [New Zealand's first electric bus
depot](https://www.1news.co.nz/2022/11/14/aucklands-eastern-bays-welcome-35-new-electric-buses/), in
Panmure, Auckland. The depot houses 35 electric buses with 18 chargers. As the depot was being
developed, the local electric grid operator, [Vector](https://www.vector.co.nz/), was in the process
of deploying a dynamic load-control system based on the
[OSCP](https://www.openchargealliance.org/protocols/oscp-20/) protocol, and needed NZ Bus to
integrate the bus depot's chargers with this system in order to manage the overall health of the
electrical grid.

At a high level Vector's OSCP-based system would work like this:

 1. Vector sends grid constraint forecasts to NZ Bus every few minutes, informing NZ Bus the maximum
    amount of power it should use at the depot over the coming hours
 2. NZ Bus adapts the schedule of the depot's chargers to stay within the grid constraints, such as
    reducing the power drawn by individual chargers
 3. NZ Bus reports back to Vector actual metered
    energy usage details to confirm the depot is meeting the grid constraints
{.uk-list .uk-list-decimal}

Having worked with SolarNetwork Foundation on other projects, [EVisi](https://www.evisi.co/) again
recognised that the SolarNetwork platform would provide a solid foundation on which to address NZ
Bus's needs. They approached SolarNetwork Foundation to help develop new and enhanced features to
meet the needs of the OSCP integration in the NZ Bus project.

## The challenge

 * facilitate communication between Vector's OSCP-based load control system and EVisi's charge
   optimisation platform
 * coordinate with the engineering team at [WSP](https://www.wsp.com/en-nz) to
   integrate the depot's physical infrastructure with the SolarNetwork platform
 * integrate [OCPP v1.6](https://www.openchargealliance.org/protocols/ocpp-16/)-based chargers with
   proprietary extensions to monitor and control energy use
{.uk-list .uk-list-disc}

## The result

<!--
{{<quote-bar>}}
{{< quote url="https://www.evisi.co/" cite="Chris Olson, EVisi Founder" >}}
  <p>Quote here...</p>
{{< /quote >}}
{{</quote-bar>}}
-->

SolarNetwork Foundation developed an OSCP "Flexibility Provider" feature for the SolarNetwork
platform that provides the integration with Vector's load control system. The OSCP messages are
passed to EVisi, and EVisi uses already existing SolarNetwork API methods to control with the
depot's chargers as needed. A SolarNode deployed at the depot collects metered energy usage from
on-site meters and then SolarNetwork automatically reports that usage back to Vector via the OSCP
protocol.
