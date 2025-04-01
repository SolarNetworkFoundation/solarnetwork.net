---
title: "SolarNetwork"
weight: 100
audience: main
buttons:
  hero:
    - type: default
      link: contact
    - type: primary
      link: how-works
  deck:
    - type: primary
      url:  "/resources.html"
      text: Learn more
  features_todo:
    - type: primary
      url:  "#todo"
      text: Explore all features
  pricing:
    - type: primary
      url: /pricing.html
      text: See our pricing
  resources:
    - type: primary
      url: /resources/blogs/general.html
      text: See more
  work-with:
    - type: primary
      url: /services.html
      text: See our services
    - type: default
      url: /partners.html
      text: See our partners
---
{{<section/grid
  class="sn-hero"
  title="Energy data at your fingertips."
  subtitle="Put your data to work with our powerful platform."
  buttons="hero"
  img="/img/SN-Business-Icon.svg"
  alt="Sun shining over a factory with solar panels, connected to a grid-scale battery, connected to an electric bus." />}}

{{<section/grid
  class="sn-alt sn-lead"
  img="/img/stock/thomas-coker-Jt5Pk0V65wc-unsplash@0.5x.jpg"
  alt="Field filled with solar panels." >}}

  <p>
    SolarNetwork is an open-source platform providing stable, neutral data-wrangling infrastructure
    so you can build modern energy apps, report on energy use and generation, and manage your energy assets.
  </p>

{{</section/grid>}}

{{<section/deck class="sn-alt sn-dark" title="How SolarNetwork helps you put your data to work">}}

  {{<deck-card title="Collects"
    img="/img/SN-CTO-Simple-Start.svg"
    alt="Diagram of a circle flying into an open box." >}}

    Before you can do anything, you need data. SolarNetwork already knows how to collect data
    from a large variety of devices and systems, and it is easy to add support for new integrations.

  {{</deck-card>}}

  {{<deck-card title="Collates"
    img="/img/SN-CTO-Single-Solution.svg"
    alt="Diagram of light bulb with branching paths underneath." >}}

    Data from different sources can present in different ways. SolarNetwork pulls your data
    together and puts it into a simple and cohesive form.

  {{</deck-card>}}

  {{<deck-card title="Empowers"
    img="/img/SN-CTO-Simple-Low-High.svg"
    alt="Diagram of a hollow cylinder under a downward-pointing arrow." >}}

    Useful data is accessible data. SolarNetwork makes your data easily available for your
    apps, reports, and operations, whether you need the fine details or a high-level overview.

  {{</deck-card>}}

{{</section/deck>}}

{{<section/deck class="sn-alt sn-light" title="Powerful energy data for your organisation" buttons="features">}}

  {{<deck-card title="Build"
    img="/img/SN-CTO-Scale.svg"
    alt="Diagram of concentric circles with 4 arrows pointing outwards." >}}

    You’ve got a great idea for an Energy 2.0 application, but to make it work you need data from
    lots of different sources. SolarNetwork is a cloud-based platform that can take care of the data-wrangling for you,
    so you can get back to working on your great idea, not the details of data infrastructure.

  {{</deck-card>}}

  {{<deck-card title="Report"
    img="/img/SN-CTO-Simplify.svg"
    alt="Diagram of concentric circles split into quadrants." >}}

    You need to report on your organisation's energy use and generation. SolarNetwork makes it easy
    to pull the data you need into your reporting system, regardless of the number of
    data sources or complexity of information involved.

  {{</deck-card>}}

  {{<deck-card title="Manage"
    img="/img/SN-CTO-Data-Security.svg"
    alt="Diagram of padlock surrounded by orbiting arrows." >}}

    You manage energy assets distributed across many sites. SolarNetwork makes monitoring data
    from your assets readily available and provides you with the means to control their operation.

  {{</deck-card>}}

{{</section/deck>}}

{{<section/column class="sn-alt sn-dark" title="How we can work with you" buttons="work-with">}}

  The SolarNetwork platform is supported and hosted by the SolarNetwork Foundation.
  We are a partnership-based organisation, with collaboration at our core. Our goal
  is to act as a neutral broker in the renewable energy ecosystem by building core data infrastructure.

<div style="text-align: start">

  We can:
  * advise you on how and where SolarNetwork can work for you
  * help you find SolarNetwork solutions through our existing partners
  * partner with you to develop your own solutions using SolarNetwork

</div>

{{</section/column>}}

{{<section/topic title="Case Study" subtitle="Camp Glenorchy"
  class="sn-alt"
  img="/img/stock/camp-glenorchy.jpg"
  alt="Photograph of eco-cabin at Camp Glenorchy." >}}

  <p>New Zealand's first net-negative energy accommodation, which means the site will on average use
  less energy than it generates.</p>

  <p>{{<button type="link" url="/resources/case-studies/camp-glenorchy.html">}}Learn more{{</button>}}</p>
{{</section/topic>}}

{{<section/logos>}}

{{<section/column class="sn-alt sn-dark" title="Flexible pricing to fit your business needs" buttons="pricing">}}

  Our goal is to support free use of SolarNetwork for those who only generate small amounts of data.
  We offer SolarNetwork support services for organisations that can be tailored to your specific
  needs, and offer SolarNetwork platform subscription plans based on your platform usage. We also
  accept tax-deductible donations to bolster our services. All of our profits support helping people
  transform their energy ecosystem for a more sustainable future.

{{</section/column>}}

{{<section/deck class="sn-alt sn-light" deck-class="sn-learn sn-pair">}}

  {{<deck-link-card class="sn-home" title="Partners" subtitle="Explore our service and solution partners."
      logo="/img/SN-Home-Icon.svg"
      alt="Sun shining over a factory with solar panels, connected to a grid-scale battery, connected to an electric bus."
      url="/partners.html"
      link="Learn more" >}}

    Our partners use SolarNetwork to offer a range of services and solutions to help you on your energy transformation journey.

  {{</deck-link-card>}}

  {{<deck-link-card class="sn-dev" title="For Developers" subtitle="Build your own products using our powerful and easy-to-use APIs."
      logo="/img/SN-Developers-Icon.svg"
      alt="Diagram a grid of dots connected to a cloud floating with computer windows."
      url="/developers.html"
      link="Learn more" >}}

    Integrate SolarNetwork's open-source API into your existing applications for seamless energy
    management and monitoring.

  {{</deck-link-card>}}

{{</section/deck>}}

{{<section/deck class="sn-alt sn-light" deck-class="sn-learn sn-pair sn-compact" title="Latest news & insights" buttons="resources">}}

  {{<latest-posts topic="resources/blogs/general">}}

{{</section/deck>}}
