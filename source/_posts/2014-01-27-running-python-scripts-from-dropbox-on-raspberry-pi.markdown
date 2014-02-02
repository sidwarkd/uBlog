---
layout: post
title: "Running Python Scripts from Dropbox on the Raspberry Pi"
date: 2014-01-27 22:59
comments: true
categories: [RaspberryPi, Dropbox, Python]
author: K-SID
---

If you've ever tried writing code on your Raspberry Pi from just the plain terminal window then you've probably used Nano or Vim. If you're like me you wished you could have used your favorite IDE or text editor on another machine. When I develop for the Raspberry Pi my normal use case is to SSH in and write code via Nano. While this works just fine I'd prefer to have the bigger real estate afforded by my desktop monitors.

###What is ```preheat```
```preheat``` is my solution to this problem. It allows me to pull scripts down from my Dropbox account at execution time. When I finally decided I didn't want to code directly on the Pi anymore the very first thing that came to my mind was to install [Dropbox][dropbox] on the Pi and just have it sync with a folder on my dev machine. It only took a few searches to realize that a Dropbox client for the Pi doesn't exist. So I found a few other solutions like [rsync][rsync], [ownCloud][owncloud] and others but everything I found was either too much work or just plain overkill for what I needed. So ```preheat``` was born.

It's a simple Python script that will query your Dropbox account for the file you want to run and pull it down. So normally I'd use the following to run a script I'm working on:

{% codeblock lang:bash %}
sudo python myscript.py
{% endcodeblock %}

With ```preheat``` I would run it like this:

{% codeblock lang:bash %}
sudo python preheat myscript.py
{% endcodeblock %}

I don't need to have **myscript.py** on the Raspberry Pi. It's on my desktop machine in a dropbox folder being updated every time I change it. When I run it via ```preheat``` it will scan my Dropbox account, find it, and pull it down for me.

If you'd like to see how it works [check out the source code on Github][preheat]

[dropbox]: http://dropbox.com
[owncloud]: http://owncloud.org
[rsync]: http://en.wikipedia.org/wiki/Rsync
[preheat]: https://github.com/sidwarkd/preheat