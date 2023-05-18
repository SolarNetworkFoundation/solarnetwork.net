---
title: SolarNetwork data import feature added
date: 2018-11-20
tags: dev, data
---
SolarNetwork has a new feature designed to help you migrate data collected from other systems into
SolarNetwork. The new **Data Import** page allows you to upload a CSV file with the data you want to
import.

<!--more-->

![import-job-form](/img/news/solaruser-import-job-form.png)

Once the data is uploaded, you can preview how SolarNetwork will interpret the data, and verify
everything looks correct:

![import-job-form](/img/news/solaruser-import-job-preview.png)

When you finally confirm that the data should be imported, SolarNetwork will schedule the
data to be imported, and provide feedback during the import process:

![import-job-form](/img/news/solaruser-import-job-feedback.png)

When the import completes, SolarNetwork will show you how many datum were imported:

![export-ui](/img/news/solaruser-import-job-success.png)

In the future we hope to expand the number of data formats SolarNetwork can accept, and make it as
easy as possible to import data from a variety of common monitoring systems.

{{<shoutout img="/img/news/ecogy-logo-248.png" name="Ecogy Energy" url="https://www.ecogyenergy.com/"/>}}
