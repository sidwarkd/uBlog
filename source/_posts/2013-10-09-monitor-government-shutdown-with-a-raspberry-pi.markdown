---
layout: post
title: "Monitor Government Shutdown With A Raspberry Pi"
date: 2013-10-09 13:45
comments: true
categories: [RaspberryPi]
author: K-SID
---

Last week I came across a tweet from <a href="https://twitter.com/eduardk" target="_blank">Eduard Koller</a>.

{% blockquote @eduardk https://twitter.com/eduardk/statuses/385139079219671040 %}
Want to be notified when the Government is back up? Here's a little script for you: http://bit.ly/16eAoDT 
{% endblockquote %}

He wrote a simple python script to check the status of the government shutdown. I couldn't resist the urge to apply a little hardware to the situation.<!-- more -->

###Polarity Matters
My first idea was to hook up a simple two line LCD display I had lying around and connect it to the Pi via SPI. Before I connected the display to the Pi I wanted to make sure I had powered it correctly so I plugged in my home made power supply (made from a wall supply) and nothing happened. Not having used this particular display in over a year I thought "Oh, it must be blank until I send some data down the wire." So I left it plugged in, shut down my Pi, hooked up all the SPI connections and booted the Pi back up. I sent a few test messages via SPI but nothing was happening.

{% blockquote %}
That's when I started to smell something cooking
{% endblockquote %}

It wasn't the classic ozone smell but that scent you get when a stove burner is on. I put my hand over the display and could feel the heat coming off. I quickly unplugged it and felt the chip on the back. It was smoldering. 

When I make simple wall supplies I ALWAYS attach a green lead to ground and a black lead to the positive rail. So when I went into my shop I grabbed one of those homemade guys and hooked him up. I later realized that I had hooked those leads up wrong and that green was +5V and black was ground. Ugh. So I switched them around and the display turned back on but was all black. After some searching in the datasheet I found a note saying that if you hook up the power to the display wrong it will immediately ruin the unit.

###Use an LED Instead
Oh well. I paused project work for a moment to order <a href="https://www.crystalfontz.com/product/CFA634TFHKS" target="_blank">a new display</a> and then decided to settle for a simple LED approach. I modified Eduard's script so that it would still work as he had written it but also would accept a command line argument of "pi" that would forego the console output in favor of turning LEDs on and off. So after just a little modification and the use of the <a href="https://pypi.python.org/pypi/RPi.GPIO" target="_blank">RPi.GPIO</a> library I was up and running.

{% img https://pbs.twimg.com/media/BVrJUnvCcAExjE4.jpg:small %}

Here's the code if you are interested in giving it a try or modifying it.

{% gist sidwarkd/6814331 %}
