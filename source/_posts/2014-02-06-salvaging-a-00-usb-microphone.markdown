---
layout: post
title: "Salvaging a $100 USB Microphone"
date: 2014-02-06 21:47
comments: true
categories: [USB]
---

##Back Story
A while back a good friend of mine gave me a [Blue Yeti microphone][yeti] from work that he said they were going to throw away because the mini USB port had ripped out of it. I told him I'd take it and see if I could fix it. It seemed like the only thing wrong with it was that the connector had literally been ripped out of the case. How they were able to accomplish that I don't know. So I did what any self-respecting DIYer would do: I called Blue and asked if they could give me the part number for the USB connector.
{% blockquote %}
"I'm sorry, I can't give you that information. It's proprietary"
{% endblockquote %}

Really? A standard mini USB connector is proprietary? Give me a break Blue. So I did what any self-respecting Twitter user would do.

 <blockquote class="twitter-tweet" lang="en"><p>Wow <a href="https://twitter.com/BlueMicrophones">@BlueMicrophones</a> won&#39;t give me the mini usb part number so I can fix a busted mic someone trashed. Not very <a href="https://twitter.com/search?q=%23DIY&amp;src=hash">#DIY</a> friendly. <a href="https://twitter.com/search?q=%23servicefail&amp;src=hash">#servicefail</a></p>&mdash; Kevin Sidwar (@KevinSidwar) <a href="https://twitter.com/KevinSidwar/statuses/336590188488826880">May 20, 2013</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

##The Repair
Having vented my rage on Twitter I logged on to [Mouser][mouser] to find a suitable replacement. I found one that I thought would work but never got around to ordering it. Fast forward almost a year and I decide I want to try to fix it but don't want to find the part again and wait for it to ship so I figured I might be able to just hack up a USB cable and solder it directly to the PCB where the connector ripped out. Here's how it looked when I took it apart.

<h1 style="text-align:center">{% img /images/broken_mini_usb.jpg 'Broken Mini USB Connector' 'Broken Mini USB Connector' %}</h1>

Again, how they managed to do this is beyond me. But it came off fairly clean so all I needed to do was remove the legs from the connector and solder in leads from a USB cable I cut. But which wires go to which holes? Well, if you take a closer look at the back side of the PCB you can get a pretty decent idea of which connections are which. We know that USB uses 4 connections: Supply, Ground, D+, and D-.

<h1 style="text-align:center">{% img /images/usb_connections.jpg 'Closeup of UBS connection traces' 'Closeup of UBS connection traces' %}</h1>

From this image we can guess that the thicker traces are the power lines and the thinner ones are the USB data lines. One of the connection holes isn't connected to anything. So figuring out which power line is ground was easy. Just set the meter to continuity mode, connect one probe to a known ground point (like an internal metal mount) and then see which of the thick traces gives you the continuity beep. That coupled with this diagram I found for a similar USB connector allowed me to identify D+ and D-.

<h1 style="text-align:center">{% img /images/usb_connector_pinout.jpg 'Pinout connections' 'Pinout connections' %}</h1>

##Soldering
The solder work on this job was a little challenging for me. I quickly gave up on trying to solder the USB cable directly to the connector holes as the tiny wires were hard to handle. Instead I soldered some 22AWG leads from the connector holes that could exit the mic case through the mini USB opening and then I soldered the USB cable wires to those leads. Here are some shots of that.

<h1 style="text-align:center">{% img /images/leads_soldered.jpg 'Leads soldered on' 'Leads soldered on' %}</h1>

<h1 style="text-align:center">{% img /images/leads_usb_opening.jpg 'Leads coming out of case' 'Leads coming out of case' %}</h1>

I made sure all of the USB wires were isolated from each other using shrink wrap and then finished the whole job up with a big piece of shrink wrap over everything to leave a nice clean look. When I plugged it in it worked first time.

##Moral
With just a little knowledge and some soldering skills there are lots of things that can be reclaimed from the junk pile.

In closing I'd like to thank corporate america for having so much money that they just trash $100 mics because connectors break off. More importantly though I'd like to send a big "Suck It" to Blue for hating on the DIY fix-it community. It's just a mini USB connector. I didn't need company secrets to fix it. 

<h1 style="text-align:center">{% img /images/repaired_mic.jpg 'Repaired Mic' 'Repaired Mic' %}</h1>

P.S. Blue, if you had simply given me the part number I would have sung your praises on social networks and to anybody in the tech space that would listen. I also would have gone to you first as soon as I needed a new mic. Instead I'll never recommend your microphones to anybody and will personally never pay you a cent for one.

[yeti]: http://www.amazon.com/Blue-Microphones-Yeti-USB-Microphone/dp/B002VA464S/ref=sr_1_1?ie=UTF8&qid=1391757018&sr=8-1&keywords=blue+microphone+yeti
[mouser]: http://www.mouser.com/Connectors/USB-Connectors/_/N-88hmf/