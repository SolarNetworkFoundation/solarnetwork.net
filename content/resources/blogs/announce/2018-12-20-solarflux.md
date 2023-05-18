---
title: SolarFlux — real-time SolarNode data via MQTT
date: 2018-12-20
tags: dev, data, mqtt
---
SolarNetwork has a new feature that provides access to SolarNode data in real-time, which we are
calling SolarFlux. The system allows applications to access the real-time data via the [MQTT][mqtt]
publish/subscribe protocol.

<!--more-->

This is an opt-in feature on SolarNode, provided by a new [SolarFlux
Upload Service][solarflux-upload] plugin. Once this plugin is deployed on a node, the node will
publish real-time data to the SolarFlux system. At that point, any application can connect to
SolarFlux using MQTT over a [WebSocket][websocket] (so it works from a browser) and subscribe to
data topics to receive real-time updates.

See the [SolarFlux wiki docs][api-docs] for more information.

## Demo

We've put together a simple [demo application][solarflux-demo] to show how it works. This is a web
application that shows how you can use JavaScript to connect to SolarFlux and show real-time data
published by any nodes you have authorization to.

![SolarFlux demo application screen shot](/img/news/solarflux-demo-ui.png)

[api-docs]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarFlux-API
[mqtt]: http://mqtt.org/
[solarflux-demo]: https://go.solarnetwork.net/dev/flux/
[solarflux-upload]: https://github.com/SolarNetwork/solarnetwork-node/tree/master/net.solarnetwork.node.upload.flux
[websocket]: https://en.wikipedia.org/wiki/WebSocket
