---
layout: post
title: "µCast #16: Pi + Express + Bootstrap + Angular FTW!"
date: 2014-04-14 23:19
comments: true
categories: [Raspberry Pi, NodeJS, Angular]
---

**[UPDATE]:** I've had requests to post the finished code on Github for those that want to just play with the completed app. It's now available at [https://github.com/sidwarkd/pimonitor][repo].

About a month ago I came across the [CommandPi][CommandPi] iOS app. It looked interesting so I paid the 99 cents and downloaded it to my iPad. The problem was, it didn't work. I would provide my SSH credentials and after logging in the program would crash. So like any curious developer, instead of waiting for a fix I set out to write my own.

To be fair to the creator of [CommandPi][app], what you are about to see is not meant to take anything away from that app. The app creator has put together a very nice UI and the crashing issue has been fixed. I just wanted to see how easy or hard it would be to create a knock off using [ExpressJS][express], [Angular][angular] and [Bootstrap][bootstrap].


<br/>
<iframe width="560" height="315" src="//www.youtube.com/embed/zprWNhB0NeU" frameborder="0" allowfullscreen></iframe>


<!-- more -->

<br/>
<br/>
In [µCast #14][14] and [µCast #15][15] we created the plumbing necessary to grab most of the information necessary to create our app. We also expose the [temperature reading given by the Pi][temperature]. This episode was shot in a single take (with light editing for time) showing how to pull various technologies together to create a web application for monitoring our Raspberry Pi.

This is the pinode_stats.gist used in the video.

{% gist sidwarkd/10226198 pinode_stats.js %} 

[repo]:https://github.com/sidwarkd/pimonitor
[CommandPi]:http://lifehacker.com/command-pi-monitors-your-raspberry-pi-from-your-phone-1561340630
[app]:https://itunes.apple.com/us/app/command-pi/id830462681?mt=8
[express]:http://expressjs.com/
[angular]:http://angularjs.org/
[bootstrap]:http://getbootstrap.com/
[14]:http://blog.microcasts.tv/2014/03/15/memory-usage-on-the-raspberry-pi/
[15]:http://blog.microcasts.tv/2014/03/20/cpu-usage-on-the-raspberry-pi/
[temperature]:http://blog.microcasts.tv/2013/10/25/query-temperature-on-raspberry-pi/