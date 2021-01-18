---
layout: archive
title: "CV - Highlights"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

* 2010-2014: MSci, Imperial College London & University of California Berkeley
* 2014-2018: PhD, Imperial College London

## Experience

* This is an unindented bulletpoint
  * This is an open, indented bullet point
  * Make paper link available [here](https://doi.org/10.5281/zenodo.4337258).
  
Download Full CV [here](/files/VMF_academic_cv.pdf).

## Publications

  <ul>{% for post in site.publications %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
## Presentations

  <ul>{% for post in site.talks %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
  
## Teaching

  <ul>{% for post in site.teaching %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
