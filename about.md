---
layout: index_layout.html
---
# About Me!

## Bio
Current undergraduate student at NYU majoring in Journalism & Politics, with a minor in Creative Writing. When not in class, can be found at the Village East free member screenings, going for hot girl walks, and trying to read Proust. I owe my love for writing to all those writers who have continually filled my life with wonder, re : Frank O’Hara, Wendy Cope, Wislawa Szymborska, Joni Mitchell, William Carlos Williams, e.e. cummings, Ocean Vuong, Sylvia Plath, Patti Smith, & Richard Siken. (the list goes on).

## Education
- <h3>New York University (2023 - Present)</h3>
  <ul class="nested-list">
    <li>Bachelor of Arts; Journalism, Politics & Creative Writing.</li>
  </ul>

- <h3>Lycée Victor-Duruy (2020 - 2023)</h3>
  <ul class="nested-list">
    <li>Baccalauréat; Politics.</li>
  </ul>

## Work Experience
- <h3>Literary Editor: Partager Zine (2024 - Present)</h3>
- <h3>Student Intern: Courrier international (2019)</h3>

## Featured Publications
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

## Relevant Coursework
- Creative Writing : Intro to Prose and Poetry (CRWRI-UA 815)
- Intermediate Poetry Workshop (CRWRI-UA 817)
- Writing The Essay (EXPOS-UA 1)
