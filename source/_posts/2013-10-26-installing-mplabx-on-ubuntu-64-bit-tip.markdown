---
layout: post
title: "Installing MPLABX on Ubuntu: 64-bit Tip"
date: 2013-10-26 00:16
comments: true
categories: [MPLABX, Ubuntu]
author: K-SID
published: false
---

While trying to install MPLABX on my Ubuntu machine I was having issues running the installer. Nothing would happen. After some searching I found that the installer cannot be run in a 64-bit environment without installing some 32-bit dependencies first. To fix simply run:

{% codeblock lang:bash %}
sudo apt-get install libc6:i386
{% endcodeblock %}

This will install the minimal 32-bit libraries. If you are still having issues you can install the full 32-bit library set with:

{% codeblock lang:bash %}
sudo apt-get install ia32-libs
{% endcodeblock %}

Here is the original forum question that led me to the solution.

  *  [Cannot install MPLAB IDE X from the terminal - silently exits][article_link]

[article_link]: http://askubuntu.com/questions/145716/cannot-install-mplab-ide-x-from-the-terminal-silently-exits