---
layout: index_layout.html
---
# Home

## Recently Published
{% assign laMadrague = collections.poems | where: "data.slug", "la-madrague" | first %}
{% if laMadrague %}
- <h3><a href="{{ laMadrague.url }}" class="work-title">{{ laMadrague.data.title }}</a>, {{ laMadrague.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ laMadrague.data.description }}</p>
{% endif %}

## Featured Work
{% assign allWorks = collections.poems | concat: collections.creatives | concat: collections.essays %}
{% assign featuredWorkSlugs = "the-light,edelweiss,ghazal" | split: "," %}

{% for slug in featuredWorkSlugs %}
  {% assign featuredWork = allWorks | where: "data.slug", slug | first %}
  {% if featuredWork %}
- <h3><a href="{{ featuredWork.url }}" class="work-title">{{ featuredWork.data.title }}</a>, {{ featuredWork.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ featuredWork.data.description }}</p>
  {% endif %}
{% endfor %}