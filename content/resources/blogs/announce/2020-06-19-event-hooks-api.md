---
title: Node event hooks API added
date: 2020-06-19
tags: dev, solaruser
---
SolarUser has a new set of REST endpoints under
[/user/event/node](https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Event-Hook-API#endpoints)
that are designed to support configuring "hooks" into external applications based on node-related
events happening in SolarNetwork.

<!--more-->

This feature is essentially "push notifications" for SolarNetwork.

![SolarUser node event hook UI]({{site.baseurl}}/img/news/solaruser-node-event-hook-ui.png)

## Events

To start there is one event that can be hooked into: aggregate processing. When SolarNetwork
computes an aggregate datum an event is generated that you can configure a hook for. This can be
useful when you have an application that wants to derive some data out of the aggregate data in
SolarNetwork and keep it synchronized and up-to-date with what's in SolarNetwork.

For example, you might have an application that calculates the hourly cost associated with an energy
datum source. Using this new hook API, your application can be called each time SolarNetwork
computes the hourly energy value for that source. Your application could even store its result back
in SolarNetwork, making a new datum source derived out of the original one!

## Services

To start there is one supported hook service: publishing the event to
[AWS Simple Queue Service (SQS)][sqs]. See the [SQS service documentation][sqs-service] for details
on how it can be configured.

## More to come!

We've laid the groundwork so we can easily add more event types and more hook services in the
future. Got an idea for your own hook? Reach out to us at
<a href="mailto:info@solarnetwork.net">info@solarnetwork.net</a> to see how we could help make it
happen!

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}

[sqs]: https://aws.amazon.com/sqs/
[sqs-service]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-Event-Hook-API#sqs-hook-service
