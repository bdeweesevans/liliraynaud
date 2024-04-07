---
layout: index_layout.html
---
# Featured Work

{% assign allWorks = collections.poems | concat: collections.creatives | concat: collections.essays %}
{% assign featuredWorkSlugs = "edelweiss,snowfall,ghazal" | split: "," %}

{% for slug in featuredWorkSlugs %}
  {% assign featuredWork = allWorks | where: "data.slug", slug | first %}
  {% if featuredWork %}
- <h3><a href="{{ featuredWork.url }}" class="work-title">{{ featuredWork.data.title }}</a>, {{ featuredWork.data.date | date: "%Y-%m-%d" }}</h3>
  <p>{{ featuredWork.data.description }}</p>
  {% endif %}
{% endfor %}