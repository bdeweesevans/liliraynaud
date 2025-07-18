---
layout: index_layout.html
title: "Portfolio"
description: "Portfolio Page"
---
# Portfolio

<div class="mobile-message">
  <hr>
  For a better reading experience, view site on desktop.
  <hr>
</div>

## Poems
{% assign sortedPoems = collections.poems | sort: 'title' | reverse %}
{% assign sortedPoems = sortedPoems | sort: 'date' | reverse %}
{% for work in sortedPoems %}
- <h3><a href="{{ work.url }}" class="work-title">{{ work.data.title }}</a>, {{ work.data.date }}</h3>
  <p>{{ work.data.description }}</p>
{% endfor %}

## Short Fiction
{% assign sortedShortFiction = collections.shortfiction | sort: 'title' | reverse %}
{% assign sortedShortFiction = sortedShortFiction | sort: 'date' | reverse %}
{% for work in sortedShortFiction %}
- <h3><a href="{{ work.url }}" class="work-title">{{ work.data.title }}</a>, {{ work.data.date }}</h3>
  <p>{{ work.data.description }}</p>
{% endfor %}

## Essays
{% assign sortedEssays = collections.essays | sort: 'title' | reverse %}
{% assign sortedEssays = sortedEssays | sort: 'date' | reverse %}
{% for work in sortedEssays %}
- <h3><a href="{{ work.url }}" class="work-title">{{ work.data.title }}</a>, {{ work.data.date }}</h3>
  <p>{{ work.data.description }}</p>
{% endfor %}
