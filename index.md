---
layout: index_layout.html
title: "Home"
description: "Home Page"
---
# Home

## Recently Published
{% assign totheFuture = collections.poems | where: "data.slug", "totheFuture" | first %}
{% if totheFuture %}
- <h3><a href="https://issuu.com/briojournal/docs/brio_fall_2024_bildungsroman_issue"><i>Brio, Fall 2024 // Bildungsroman Issue</i></a>: <a href="{{ totheFuture.url }}" class="work-title">{{ totheFuture.data.title }}</a>, {{ totheFuture.data.date }}</li></h3>
  <p>{{ totheFuture.data.description }}</p>
{% endif %}
{% assign theLight = collections.poems | where: "data.slug", "the-light" | first %}
{% if theLight %}
- <h3><a href="https://www.samefacescollective.com/post/the-light"><i>Same Faces Collective, Issue 15: Solar Flare</i></a>: <a href="{{ theLight.url }}" class="work-title">{{ theLight.data.title }}</a>, {{ theLight.data.date }}</li></h3>
  <p>{{ theLight.data.description }}</p>
{% endif %}
{% assign laMadrague = collections.poems | where: "data.slug", "la-madrague" | first %}
{% if laMadrague %}
- <h3><a href="https://docs.google.com/viewerng/viewer?url=https://files.cargocollective.com/c2088190/SPRING2024_final_digital.pdf"><i>The Weasel, Spring 2024 Edition</i></a>: <a href="{{ laMadrague.url }}" class="work-title">{{ laMadrague.data.title }}</a>, {{ laMadrague.data.date }}</li></h3>
  <p>{{ laMadrague.data.description }}</p>
{% endif %}

## Featured Work
{% assign allWorks = collections.poems | concat: collections.shortfiction | concat: collections.essays %}
{% assign featuredWorkSlugs = "snowfall,edelweiss" | split: "," %}

{% for slug in featuredWorkSlugs %}
  {% assign featuredWork = allWorks | where: "data.slug", slug | first %}
  {% if featuredWork %}
- <h3><a href="{{ featuredWork.url }}" class="work-title">{{ featuredWork.data.title }}</a>, {{ featuredWork.data.date }}</h3>
  <p>{{ featuredWork.data.description }}</p>
  {% endif %}
{% endfor %}
