---
layout: post
title: "Let's Build an Audio Mixer"
date: 2013-10-10 21:12
comments: true
categories: [projects, mixer]
author: K-SID
published: false
---

I recently made the switch to working from home full time. In doing so I've encountered a few chanllenges with my setup.  I now have 3 systems (home, work, Raspberry Pi) that I need to get audio from. <!-- more -->

I want to hear IM notifications on my work machine, be able to listen to an occassional song from my home PC and listen to the streaming Pandora that I have running through [pianobar][pianobar] on the Pi. What messes all of this up is that my work machine is VPN'd in 100% of the time so it doesn't even see the other two systems and blocks things like Pandora. Otherwise I'd just use it as my central sound source. The other problem is that on the weekends that machine is shut down so I'd need to switch over to another machine anyway. You get the picture.

I quickly realized that hooking up 3 machines to a single set of speakers is not very easy. The obvious answer is that I need a mixer of some sort. Surprisingly, most of the results I found online were for serious audio equipement and would require me to buy adapters since most have the large .25" plugs and not the 3.5mm that all of my devices use. There were a few options that looked pretty cool, specifically [The Dream Mixer from PRICOM][dreammixer]. But, in the interest of home projects and saving money (even the most basic mixers were $60+) I decided to build a simple passive mixer based on the design of [this Instructables project][instructable].

###Project Series
As I started looking into this simple project I decided I wanted to do a few things not covered in the Instructables version of the project. Specifically I want to do a home-etched PCB with SMD resistors. Why? Because it sounds fun. Anyway, I realized that there are a lot of things that go into even a very simple project like this that may be of educational value for others. So, I plan to do a series of blog posts on this in the hopes that somebody out there will find it useful.

[Part 1: Selecting the Parts][part1]<br/>
Part 2: [Creating the Eagle Project][part2]<br/>
Part 3: [Creating Custom Parts in Eagle][part3]<br/>
Part 4: [Board Design in Eagle][part4]<br/>
Part 5: [Board Fab at Home][part5]<br/>
Part 6: [Board Assembly][part6]<br/>
Part 7: [Enclosure Construction][part7]<br/>
Part 8: [Test and Enjoy][part8]

[pianobar]: http://6xq.net/projects/pianobar/
[dreammixer]: http://www.pricom.com/Trains/ActiveMixer.shtml
[instructable]: http://www.instructables.com/id/Altoids-Tin-18-Stereo-Mixer/?ALLSTEPS
[part1]: blog/2013/10/23/audio-mixer-part-1-selecting-the-parts/
[part2]: blog/2013/10/24/audio-mixer-part-2-creating-the-eagle-project/
[part3]: 
[part4]: 
[part5]: 
[part6]: 
[part7]: 
[part8]: 
