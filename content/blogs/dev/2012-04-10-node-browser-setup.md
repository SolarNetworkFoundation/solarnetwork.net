---
title: SolarNode browser-based settings app
date: 2012-04-10
tags: dev
---
The SolarNode framework now supports a [browser-based settings
app](http://www.youtube.com/watch?v=gUFFXc1TzdU) which makes it possible for the first time to
configure a node without modifying a lot of configuration files.

<!--more-->

The UI needs (more than) a little love, but it's a great first step to making it easy to deploy
nodes.

For developers, the settings web app makes use of a new [Setting Provider
API][SettingSpecifierProvider] which makes it easy for SolarNode bundles to publish configurable
settings that automatically appear in the app.

[SettingSpecifierProvider]: https://github.com/SolarNetwork/solarnetwork-node/blob/master/net.solarnetwork.node/src/net/solarnetwork/node/settings/SettingSpecifierProvider.java
