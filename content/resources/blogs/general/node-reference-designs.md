---
title: SolarNode reference designs
date: 2024-02-01
slug: node-reference-designs
audience: main
---
SolarNodes can take many different forms and designs based on field requirements and budgets. Here
are a few examples of what we see as common use cases to match requirements in the field for data
acquisition and persistence on SolarNetwork.

<!--more-->

{{<table>}}
|             | Cost (USD) | Connectivity | Additional Hardware | I/O |
|:------------|-----------:|:-------------|:--------------------|:----|
| [Mini](#solarnode-mini) | $80 | WiFi | Single phase energy meter | IP<sup>†</sup> |
| [Pro](#solarnode-pro) | $300 | WiFi, Ethernet | 3-phase energy meter | IP, RS-485 |
| [Industrial](#solarnode-industrial) | $1050 | WiFi, Ethernet, 4G | Revenue grade 3-phase energy meter, battery backup, surge protection, relay | IP, RS-485, GPIO |
{{</table>}}

<small>† Such as Modbus TCP, Bacnet/IP, and so on</small>

## SolarNode Mini

SolarNode Mini is your most basic SolarNode, able to capture energy data from a residential sized
load or solar array. The PZEM kWh meter has a split-core current transformer that can measure 100A
of current, voltage, powerFactor, frequency, but only in one direction. Using WiFi connectivity this
SolarNode implementation makes it easy to position anywhere in range of your WiFi access point.

<img alt="SolarNode Mini schematic" src="/img/news/solarnode-ref-design-mini@2x.png" width="550">

### SolarNode Mini applications

 * Residential energy consumption and power quality monitoring
 * Residential solar production and power quality monitoring
 * Check meter data collection

## SolarNode Pro

SolarNode Pro is a versatile 3-phase SolarNode, able to capture energy data from a commercial
building load and a bank of solar inverters. The Eastron SDM630-RC kWh meter has rogowski coil
current transformers that can measure 6000A of current along with phase voltages, power factor, and
frequency, with bidirectional accumulating energy totals.  Using the additional Modbus RTU
connection, the SolarNode can also collect data directly from solar inverters that support the
SunSpec Modbus specification.

Using Ethernet and WiFi connectivity this SolarNode implementation makes it easy to position
anywhere in range of your WiFi access point, or hardwire to your building’s ethernet network.

With 4 USB ports, additional RS-485 adapters and other devices can later be added to your SolarNode
such as USB cameras, thermistors, and more.

Due to the powerful quad-core CPU of the Raspberry Pi 4 unit, many more features can be added to
this SolarNode such as motion detection cameras and machine learning.

<img alt="SolarNode Pro schematic" src="/img/news/solarnode-ref-design-pro@2x.png" width="849">

### SolarNode Pro applications

 * Commercial energy consumption and power quality monitoring
 * Commercial solar production and power quality monitoring
 * Check meter data collection
 * Machine learning with SolarQuant framework

## SolarNode Industrial

SolarNode Industrial is a versatile 3-phase revenue grade SolarNode, able to capture energy data
from a commercial building load, individual sub-meter loads, and a bank of solar inverters. The
AccuEnergy 1310 Class 0.5 kWh meter has rogowski coil current transformers that can measure 3000A of
current along with phase voltages, powerFactor, frequency, with bidirectional accumulating energy
totals.  Using the additional Modbus RTU connection, the SolarNode can also collect data directly
from solar inverters that support the SunSpec Modbus specification. SolarNode Industrial can be
configured to monitor a single or multiple switchable loads. Battery backup and surge protection is
included to protect the SolarNode from intermittent power or power surges.

Supporting 4G, ethernet, and WiFi connectivity, this SolarNode implementation makes it easy to
position the unit anywhere in range of your WiFi access point, or hardwire to your building’s
ethernet.

With 2 USB ports, additional RS-485 adapters and other devices can later be added to your SolarNode
such as USB cameras, thermistors, pyranometers and more. SolarNode can toggle an AC load of up to 10
amps using software controls.

Due to the powerful quad-core CPU of the Raspberry Pi 4 unit, many more features can be added to
this SolarNode such as motion detection cameras and machine learning.

<img alt="SolarNode Industrial schematic" src="/img/news/solarnode-ref-design-industrial@2x.png" width="996">

### SolarNode Industrial applications

 * Revenue grade commercial energy consumption and power quality monitoring
 * Commercial solar production and power quality monitoring
 * Check meter data collection
 * Machine learning with SolarQuant framework
