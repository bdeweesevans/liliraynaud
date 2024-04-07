---
layout: index_layout.html
---
# Portfolio

## Poems
{% assign sortedPoems = collections.poems | sort: 'date' | reverse %}
{% for poem in sortedPoems %}
- <h3><a href="{{ poem.url }}" class="work-title">{{ poem.data.title }}</a>, {{ poem.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ poem.data.description }}</p>
{% endfor %}

## Creative Writing
{% assign sortedCreatives = collections.creatives | sort: 'date' | reverse %}
{% for creative in sortedCreatives %}
- <h3><a href="{{ creative.url }}" class="work-title">{{ creative.data.title }}</a>, {{ creative.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ creative.data.description }}</p>
{% endfor %}

## Essays
{% assign sortedEssays = collections.essays | sort: 'date' | reverse %}
{% for essay in sortedEssays %}
- <h3><a href="{{ essay.url }}" class="work-title">{{ essay.data.title }}</a>, {{ essay.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ essay.data.description }}</p>
{% endfor %}
