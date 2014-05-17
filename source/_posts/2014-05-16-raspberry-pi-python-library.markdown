---
layout: post
title: "Raspberry Pi Python Library"
date: 2014-05-16 00:15
comments: true
categories: [RaspberryPi, Python]
---
### TLDR
I created a python module that makes interacting with specific hardware easy. You can find it here:
[&micro;Casts Raspberry Pi Library][github]

<hr/>

I've found myself writing quite a bit of code lately to interface with different pieces of hardware on the Raspberry Pi. I finally realized that for every new project I was copying the same code from the previous project to do things like turn on an LED or read the state of a switch. I decided that it was time to take all of that work and put it into a library that I could easily reuse with each project.

## Simple Example
The python and node modules I've used to create projects in the past are very simple and generally easy to use. What they don't provide, and aren't meant to provide, is a higher level of abstraction around certain pieces of hardware. For example, let's look at the [TMP102 Sensor][tempsensor].

<h1 style="text-align:center;">{% img /images/tmp102.jpg 300 300 %}</h1>
<p style="text-align:center;"><small><em>TMP102 image provided by Sparkfun as <a style="color:red;" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a></em></small></p>

<!-- more -->

It's an I²C temperature sensor that will return a reading of the current temperature. But like any I²C module you need to know things like what registers to set and read to get that reading and how the reading is returned by the sensor. For this sensor the current reading is accessed via register 0x00 of the module and is returned as a 12-bit value which requires a two byte read. Then you have to know that the value you get back is an integer that needs to be multiplied by .0625 to get a reading in degrees Celsius. Here's what the code looks like.

{% codeblock lang:python %}
import smbus
bus = smbus.SMBus(1)
temp = bus.read_word_data(0x48, 0)
byte1_mask = 0b0000000011111111
byte2_mask = 0b1111111100000000
byte1 = (temp & byte1_mask) << 4
byte2 = (temp & byte2_mask) >> 12
temp_c = byte2 | byte1
temp_c *= .0625
{% endcodeblock %}

Not overly complicated but it took some work and time reading through the datasheet. Now apply this to everything in your project; display, buttons, switches, etc.

## Gimme the Abstraction
What I wanted was to drop a module into my project that had all of this code I previously figured out wrapped up nicely and ready to use. So here is how I get a temperature reading from the TMP102 with the ucasts Raspberry Pi python module.

{% codeblock lang:python %}
from ucasts import TMP102
temp_sensor = TMP102()
tempF = temp_sensor.get_temp_in_f()
{% endcodeblock %}

The library handles the I²C bus and all other sensor-specific details. I've added a handful of components already and intend to expand it as I experiment with more modules for &micro;Cast episodes. I've tried to thoroughly document it so it's easy to pick up and use.

[&micro;Casts Raspberry Pi Library][github]

If you do use the library I'd love to hear about it and I'm always happy to answer any questions.


[tempsensor]:https://www.sparkfun.com/products/11931
[github]:https://github.com/sidwarkd/ucasts_pi
[imglicense]:http://creativecommons.org/licenses/by-nc-sa/3.0/