---
title: SolarQuery supports metadata search filters
date: 2019-08-09
tags: dev, solarquery
---
For a long time now SolarNetwork has supported APIs for managing a flexible [metadata][metadata]
object structure, which can be attached to various things like [accounts][user-metadata],
[nodes][node-metadata], and [node sources][source-metadata]. There hasn't been a good way to _query_
the metadata, however.

<!--more-->

For example, you might want to know which nodes in your account have a
metadata field `hardware` with a value `raspberry-pi`.

To help answer queries like that, we've added a new `metadataFilter` query parameter to various
endpoints like [`/nodes`][node-list] and [`/range/sources`][source-list]. The syntax of the
[metadata filter][metadata-filter] is similar to [LDAP search filters][ldap-filter]. Thus, to
answer the query of which nodes are based on Raspberry Pi hardware, you would use a query like this:

```
/nodes?metadataFilter=(/p/hardware=raspberry-pi)
```

Or for another example, a metadata filter to find nodes based on Raspberry Pi running the Debian
Buster OS or later:

```
(&(/p/hardware=raspberry-pi)(/p/os=debian)(/p/os-version>=10))
```

Given how flexible the SolarNetwork metadata structure is, the ability to perform queries like this
can be very useful when building SolarNetwork based applications.


[ldap-filter]: https://tools.ietf.org/search/rfc4515
[metadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#metadata
[metadata-filter]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarNet-API-global-objects#metadata-filter
[node-list]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#reportable-nodes
[node-metadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-API#node-metadata
[node-metadata-list]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#node-metadata-list
[source-list]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#reportable-sources
[source-metadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarQuery-API#node-datum-metadata
[user-metadata]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-API#user-metadata
