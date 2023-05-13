---
title: SolarNetwork - How it works
date: 2023-05-01
publishdate: 2023-05-01
audience: main
---
{{<section/column class="sn-alt" title="How it works">}}
SolarNetwork is an open source energy management platform that enables our users to monitor,
control, and optimise their energy ecosystem in real-time.
{{</section/column>}}

{{<section/basic class="sn-info-card sn-how" title="The SolarNetwork Ecosystem">}}
<p class="sn-todo">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</p>

<div class="uk-visible@l">
  <ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Daytime</a></li>
    <li><a href="#">Changing weather</a></li>
    <li><a href="#">Night-time</a></li>
  </ul>

  <ul class="uk-switcher">
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>SolarNode devices are deployed with distributed energy assets.</li>
          <li>The ndoes collect data from the assets, and send it to SolarNet.</li>
          <li>Solar panels generate energy for the electrical grid.</li>
          <li>An electric bus travels along its route, depleting its battery.</li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Desktop_FullSun_1440x1148.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>Solar panels generate less energy for the electrical grid.</li>
          <li>
            SolarNet applications, monitoring the data collected by SolarNode devices, issue
            instructions to the nodes to redistribute the load on the grid.
          </li>
          <li>
            Grid-scale batteries are asked to supply power to the grid, to make up for the
            decrease in solar panel generation.
          </li>
          <li>
            Factories are asked to reduce their energy consumption temporarily, to reduce
            demand on the grid.
          </li>
          <li>
            Electric vehical chargers at homes are asked to delay charging vehicles, to reduce
            the demand on the grid.
          </li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Desktop_PartialSun_1440x1148.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>Solar panels stop generating energy for the electrical grid.</li>
          <li>
            The demand on the grid is reduced as factories are shut and people are sleeping.
          </li>
          <li>
            Grid-scale batteries are asked to supply power to the grid as needed, to make up
            for loss of solar panel generation. Otherwise they are recharged.
          </li>
          <li>Electric vehicles are recharged while demand on the grid is low.</li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Desktop_Night_1440x1148.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
  </ul>
</div>

<div class="uk-hidden@l">
  <ul class="uk-subnav uk-subnav-pill" uk-switcher>
    <li><a href="#">Daytime</a></li>
    <li><a href="#">Changing weather</a></li>
    <li><a href="#">Night-time</a></li>
  </ul>

  <ul class="uk-switcher">
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>SolarNode devices are deployed with distributed energy assets.</li>
          <li>The ndoes collect data from the assets, and send it to SolarNet.</li>
          <li>Solar panels generate energy for the electrical grid.</li>
          <li>An electric bus travels along its route, depleting its battery.</li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Mobile_FullSun_320x684.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>Solar panels generate less energy for the electrical grid.</li>
          <li>
            SolarNet applications, monitoring the data collected by SolarNode devices, issue
            instructions to the nodes to redistribute the load on the grid.
          </li>
          <li>
            Grid-scale batteries are asked to supply power to the grid, to make up for the
            decrease in solar panel generation.
          </li>
          <li>
            Factories are asked to reduce their energy consumption temporarily, to reduce
            demand on the grid.
          </li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Mobile_PartialSun_320x684.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
    <li class="sn-row">
      <div class="sn-notes">
        <ul class="uk-list">
          <li>Solar panels stop generating energy for the electrical grid.</li>
          <li>
            The demand on the grid is reduced as factories are shut and people are sleeping.
          </li>
          <li>
            Grid-scale batteries are asked to supply power to the grid as needed, to make up
            for loss of solar panel generation. Otherwise they are recharged.
          </li>
          <li>Electric vehicles are recharged while demand on the grid is low.</li>
        </ul>
      </div>
      <lottie-player
        src="/img/lotties/Mobile_Night_320x684.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </li>
  </ul>
</div>
{{</section/basic>}}
