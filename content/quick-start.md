---
title: SolarNetwork - Quick Start
date: 2023-05-01
publishdate: 2023-05-01
audience: main
buttons:
  equip:
    - text: View supported hardware
      type: primary
      link: integrations
    - text: and don't hesitate to
    - text: Ask for help
      link: contact
  download:
    - text: Download SolarNodeOS
      type: primary
      url: https://sourceforge.net/projects/solarnetwork/files/solarnode/pi/solarnodeos-deb11-raspi-2GB-20231219.img.xz/download
  associate:
    - text: For detailed instructions
    - text: See the SolarNode Handbook
      type: primary
      url: https://solarnetwork.github.io/solarnode-handbook/users/getting-started/#associate-your-solarnode-with-solarnetwork
  next:
    - text: SolarNode Handbook
      type: primary
      url: https://solarnetwork.github.io/solarnode-handbook/
    - text: SolarNetwork Wiki
      link: dev-docs
    - link: contact
---
{{<section/column class="sn-alt" title="How to set up your first SolarNode">}}
Use our simple set up guide to start using SolarNetwork.
{{</section/column>}}

{{<section/deck class="sn-alt sn-light" deck-class="sn-flash" grid-class="sn-single">}}

  {{<flash-card title="Step 1" subtitle="Purchase a Raspberry Pi">}}
    SolarNode can run on a variety of small computer devices, but we recommend getting started with
    a [Raspberry Pi](https://www.raspberrypi.com/) model 3B+ or 4B. These are reasonably inexpensive,
    can be purchased from a variety of computer retailers, and are well supported.

    You'll also need a 2 GB or larger SD card. This may come with the Raspberry Pi, but if not they
    can usually be purchased from the same retailer.
  {{</flash-card>}}

  {{<flash-card title="Step 2" subtitle="Purchase equipment to monitor" buttons="equip">}}
    SolarNode supports a variety of sensors, meters, and other equipment. You may need to purchase
    additional hardware depending on what you would like to monitor.
  {{</flash-card>}}

  {{<flash-card title="Step 3" subtitle="Install the SolarNode software on your Raspberry Pi" buttons="download">}}
    SolarNodeOS is a complete operating system tailor-made for SolarNode. To use your Raspberry Pi
    as as SolarNode you'll need to download
    SolarNodeOS and copy it to your SD card. Use a tool like [Etcher](https://www.balena.io/etcher)
    or [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to copy the image to your SD card.
  {{</flash-card>}}

  {{<flash-card title="Step 4" subtitle="Connect sensors and hardware">}}
    Connect the sensors and hardware to your Raspberry Pi, following the manufacturer's
    instructions. Depending on the sensors you've selected, this may involve wiring and other
    installation steps. You may need help from an electrician.
  {{</flash-card>}}

  {{<flash-card title="Step 5" subtitle="Register your SolarNode with your SolarNetwork account" buttons="associate">}}
   Every SolarNode must be registered (associated) with a SolarNetwork account. Insert your SD card
   into the Raspberry Pi, power it on, and SolarNode will start up in a few minutes. While that is
   happening you can start the registration process in [SolarNetwork](https://data.solarnetwork.net/solaruser/).
  {{</flash-card>}}

  {{<flash-card title="Finish" subtitle="Well done getting your first SolarNode up and running!" buttons="next">}}
   While the SolarNode web interface provides comprehensive monitoring features, you may prefer to
   develop a custom app that presents the data in a different format or integrates with other
   systems. Check out these resources for help and inspiration:
  {{</flash-card>}}

{{</section/deck>}}
