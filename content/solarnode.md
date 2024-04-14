---
title: SolarNode - IoT Edge Platform
date: 2024-04-10
publishdate: 2024-04-10
audience: main
buttons:
  custom-plugin:
    - text: Don't see something you need?
    - text: We can help add support for it.
      type: primary
      link: contact
  start:
    - type: primary
      url:  "/quick-start.html"
      text: Get started now
---
{{<section/grid
  class="sn-hero"
  title="SolarNode"
  subtitle="The infinitely flexible IoT swiss army knife of monitoring and control."
  buttons="hero"
  img="/img/solarnode/solarnode-ecosystem.svg"
  alt="Sun shining over a factory with solar panels, connected to a grid-scale battery, connected to an electric bus." />}}

{{<section/column class="sn-alt" title="Ready to go, easy to adapt" buttons="start">}}
  SolarNode is software deployed on inexpensive computers in homes, buildings, vehicles, and even EV
  chargers, connected to any number of sensors, meters, building automation systems, and more. It
  connects to SolarNetwork to get make all your data available, as well as accepting control signals
  to take action.

  It has an extremely flexible, plugin-based architecture that can help solve your
  immediate system monitoring and control needs, while growing and adapting easily to your evolving
  systems over time.
{{</section/column>}}

{{<section/deck class="sn-alt sn-light" deck-class="sn-cards" grid-class="sn-dark"
  title="SolarNode talks to a huge number of devices and systems."
  buttons="custom-plugin" >}}

  {{<column class="sn-info-card" title="Modbus" >}}
    SolarNode supports the widely used Modbus protocol, enabling you to talk to many
    devices with complete flexibility.

    <img alt="Modbus logo" src="/img/solarnode/modbus-logo.svg">
  {{</column>}}

  {{<column class="sn-info-card" title="M-Bus" >}}
    SolarNode can connect to a variety of M-Bus meters, providing users with real-time data on their
    energy and water usage.

    <img alt="M-Bus logo" src="/img/solarnode/mbus-logo.svg">
  {{</column>}}

  {{<column class="sn-info-card" title="DNP3" >}}
    SolarNode supports DNP3, allowing you to integrate SolarNode with utilities.

    <img alt="DNP3 logo" src="/img/solarnode/dnp-logo.svg">
  {{</column>}}

  {{<column class="sn-info-card" title="Weather Stations and Services" >}}
    SolarNode can integrate with weather stations or online services, allowing users to monitor
    environmental conditions and optimise their energy usage accordingly.

    <img alt="OpenWeatherMap logo" src="/img/solarnode/openweathermap-logo.svg">

  {{</column>}}

  {{<column class="sn-info-card" title="Vehicles" >}}
    SolarNode can connect to vehicle systems, enabling users to manage and monitor
    their operational usage.

    <img alt="CANbus logo" src="/img/solarnode/canbus-logo.svg">

  {{</column>}}

  {{<column class="sn-info-card" title="Building Automation Systems" >}}

    SolarNetwork supports integration with popular commercial building automation systems, such as
    Loxone and BACnet, allowing users to control a wide variety of appliances and building services
    remotely like lighting and temperature.

    <img alt="BACnet logo" src="/img/solarnode/bacnet-logo.svg">
    <img alt="Loxone logo" src="/img/solarnode/loxone-logo.svg">

  {{</column>}}

  {{<column class="sn-info-card" title="GPIO" >}}
    SolarNode can read and write to GPIO, so you can connect sensors or control switches.

    <img alt="GPIO logo" src="/img/solarnode/gpio.png">

  {{</column>}}

{{</section/deck>}}

{{<section/column class="sn-alt sn-dark" title="Hello, I'm SolarNode.">}}
SolarNode sports an intuitive browser-based management interface to configure everything you need.

![SolarNode components list UI](/img/solarnode/solarnode-ui-components@2x.png)

Collect data from as many devices as you want.

![SolarNode component settings UI](/img/solarnode/solarnode-ui-device@2x.png)

A powerful filter system makes it possible to shape and augment the data as it is collected,
for example implement virtual meters or calculate time-of-use metrics based on tariff schedules.

![SolarNode filters list UI](/img/solarnode/solarnode-ui-filters@2x.png)

{{</section/column>}}
