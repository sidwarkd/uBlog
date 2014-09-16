---
layout: post
title: "Specs Aren't Everything"
date: 2014-09-15 15:18
comments: true
categories: [beginner, tips]
---

In the last week I've seen several articles pop up comparing the new Intel Edison to the Raspberry Pi to the Arduino to the [enter some other development platform here]. The problem with every single one of these is that they are missing the boat when it comes to choosing a development platform for your next project.

##Specs Don't Matter...(Mostly)
The easy thing to do when you want to create a new piece of tech content is just compare the specs of the different platforms. This table was part of a recent ReadWrite article.

<h1 style="text-align:center"><a href="/images/compare_table.png"><img src="/images/compare_table.png" alt="Comparison Table"/></a></h1>
<br/>

At a glance you can compare the CPU speed, memory and GPIO count. What it doesn't show, or even help with, is how to pick one for your next DIY project.

##What Really Matters
So what really matters when picking a platform for your next project? Normally it has nothing to do with performance specs because almost any platform will be have plenty of performance to read your sensor and display the results or push it to the web. For me the most important questions aren't how much flash memory a platform has or what the input voltage is. It's a balancing act between a few key metrics.

###Battery or Plugged In?
What do I mean by that? Well, first and foremost you need to ask yourself "Is my project going to be battery powered or can it always be plugged in?" Right away this is going to limit my choices. While I love the Raspberry Pi and know that it can be battery powered I'm probably not going to choose it because it it such a power hog when compared to something like an Arduino Uno or Sparkcore. 

###Compute Intensive? How Intense?
After thining about the power constraints, the next thing I ask is what kind of compute power do I need. What I think most newcomers miss is that a massive share of beginner projects don't need an ARM processor running at 700MHz. But when you compare that to the 16MHz of the Arduino Uno you may think "Well, that's not going to be powerful enough." Remember the Apollo missions that flew rockets into outerspace (whether you believe we landed on the moon or not...we did...it's certain that we did launch things into orbit)? The guidance computers on those spacecraft had approximately 64K, that's K not M or G, of memory and ran at an astonishingly fast, at the time, 2.048MHz. You can accomplish a LOT with very little in embedded systems.

###Untangibles
The 3rd item I focus on is how much time I want to spend on the project. A lot of this relates to what language I can program in and what the community looks like for a certain platform. Is there a lot of shared code out there I can use or do I have to write it myself? The new Intel Edison may seem like a good fit for your project because of it's size and specs but the community is very young still so you probably can't count on a lot of examples to help you along if you get stuck. Maybe a spark core would be a better fit. This final category has a lot of sub categories. What if I just really want to develop in Javascript. Well then I have to look at something like a Tessel or Raspberry Pi.

Sometimes you may have conflicting requirements like a device that needs to be battery powered but outputs 1080p video to a built in monitor. Just remember that there are other factors that, in my opinion, are more important than base specs. After all, if your project only needs 3 I/O pins it doesn't really matter if your platform has 10, 30, or 50.