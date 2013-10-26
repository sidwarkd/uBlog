---
layout: post
title: "Query Temperature on Raspberry Pi"
date: 2013-10-25 23:33
comments: true
categories: [RaspberryPi]
author: K-SID
---

I recently installed a Raspberry Pi in a server closet at home. I have it connected to an older laser printer so it acts as a print server. Since it is in a small space I want to be able to monitor the temperature from time to time. After some searching online I found two ways to do this from the command line that work quite well.

{% codeblock lang:bash %}
pi@raspberrypi ~ $ /opt/vc/bin/vcgencmd measure_temp
{% endcodeblock %}

The output of this command looks like this:

{% codeblock lang:bash %}
pi@raspberrypi ~ $ /opt/vc/bin/vcgencmd measure_temp
temp=43.3'C
{% endcodeblock %}

The other way to display this information is to **cat** the contents of a file:

{% codeblock lang:bash %}
pi@raspberrypi ~ $ cat /sys/class/thermal/thermal_zone0/temp
{% endcodeblock %}

This time you will need to divide by 1000 to get the temp in degrees Celsius.

Output:
{% codeblock lang:bash %}
43312
{% endcodeblock %}

I've notice that the two results can differ slightly but not by more than a few tenths of a degree Celsius.