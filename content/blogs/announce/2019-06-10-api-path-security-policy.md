---
title: SolarNetwork token security policies add API path restrictions
date: 2019-06-10
tags: dev, security
---
SolarNetwork has a new feature designed to help you design token [security
policies][security-policy] that restrict which API endpoints are allowed to be used with an
associated security token.

<!--more-->

The [Security Tokens][solaruser-tokens] page allows you to configure _API Paths_ with tokens now:

![create-user-token-form](/img/news/solaruser-create-user-token.png)

The API paths are shown in the _Policy_ column of the token list:

![list-user-tokens](/img/news/solaruser-list-user-tokens.png)

In the example shown above, token `foo` is allowed access to all API paths, except the only
[node instruction][queue-instruction] that can be requested is for the `SetControlParameter` topic.

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}

[security-policy]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#security-policy
[solaruser-tokens]: https://data.solarnetwork.net/solaruser/u/sec/auth-tokens
[queue-instruction]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-API#queue-instruction
