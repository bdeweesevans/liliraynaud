---
layout: index_layout.html
---
# Portfolio

## Poems
{% for poem in collections.poems %}
- <h3><a href="{{ poem.url }}" class="work-title">{{ poem.data.title }}</a>, {{ poem.data.date }}</h3>
        <p>{{ poem.data.description }}</p>
{% endfor %}

## Creative Writing
{% for creative in collections.creatives %}
- <h3><a href="{{ creative.url }}" class="work-title">{{ creative.data.title }}</a>, {{ creative.data.date }}</h3>
        <p>{{ creative.data.description }}</p>
{% endfor %}

## Essays
{% for essay in collections.essays %}
- <h3><a href="{{ essay.url }}" class="work-title">{{ essay.data.title }}</a>, {{ essay.data.date }}</h3>
        <p>{{ essay.data.description }}</p>
{% endfor %}