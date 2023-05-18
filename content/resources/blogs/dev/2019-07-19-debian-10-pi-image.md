---
title: Debian 10 based Raspberry Pi SolarNodeOS image available
date: 2019-07-19
tags: dev, solarnode
---
A new SolarNodeOS image based on the newly released Debian 10 "buster" upstream Raspbian image is
now available.

<!--more-->

This image includes two major changes worth noting:

 * OpenJDK 11 replaces Oracle 8 JRE
 * `nftables` replaces `iptables` for firewall support

Updated packages have been published to the Debian [package repository][repo]. The image is
available in [SolarNode Image Maker][nim] and for [download][download]. Check out the
[README][readme] and [change log][changelog] for more details.

We expect there could be some rough edges to work out with this new OS, so please test the image out
and [report any issues][jira] you find.

[changelog]: https://github.com/SolarNetwork/solarnode-os-images/blob/master/debian/pi/CHANGELOG.md
[download]: https://sourceforge.net/projects/solarnetwork/files/solarnode/pi/
[jira]: https://dev.solarnetwork.net/jira/
[nim]: https://data.solarnetwork.net/nim/
[readme]: https://github.com/SolarNetwork/solarnode-os-images/tree/master/debian/pi#solarnode-raspberry-pi-images
[repo]: https://debian.repo.solarnetwork.org.nz
