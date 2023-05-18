---
title: OCPP 1.6j Central System
date: 2020-04-06
tags: dev, EV, OCPP
---
We've deployed beta support for OCPP 1.6j compliant charging stations to connect with SolarNetwork,
turning the energy data they generate while charging electric vehicles into datum streams that can
be used like any other datum stream within SolarNetwork.

<!--more-->

See the [OCPP wiki page][ocpp-guide] for
more information. SolarNetwork provides an [OCPP specific API][solaruser-ocpp-api] for managing
entities required for the OCPP integration to work, such as the credentials chargers must connect
with and the charger identities allowed to connect.

Besides turning the charging station data into datum streams, SolarNetwork provides a way to send
[OCPP commands to connected chargers][ocpp-instructions], leveraging the existing
[/instr/add][instruction-add] endpoint in the SolarUser API.

If you are interested in testing out this new OCPP support, reach out us at info@solarnetwork.net.

[ocpp-guide]: https://github.com/SolarNetwork/solarnetwork/wiki/OCPP
[solaruser-ocpp-api]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OCPP-API
[ocpp-instructions]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-OCPP-API-instructions
[instruction-add]: https://github.com/SolarNetwork/solarnetwork/wiki/SolarUser-API#queue-instruction
