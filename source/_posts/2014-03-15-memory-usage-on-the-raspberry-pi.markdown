---
layout: post
title: "µCast #14: Memory Usage on the Raspberry Pi"
date: 2014-03-15 23:37
comments: true
categories: RaspberryPi
---

In this µCast we cover the very basics of RAM usage on the Raspberry Pi and show you how to figure out how much memory your Pi is using at any given time and how to get some of it back.

<iframe width="560" height="315" src="//www.youtube.com/embed/EqyVlTP4R5M" frameborder="0" allowfullscreen></iframe>

<!-- more -->

## Sample Code
The following chunks of code are just quick examples of how you can query memory information using Python or NodeJS. **This code is not production ready as it does little to no error checking.**

### NodeJS Sample
{% gist sidwarkd/9578213 pi_mem.js %} 

### Python Sample
{% gist sidwarkd/9578213 pi_mem.py %} 
