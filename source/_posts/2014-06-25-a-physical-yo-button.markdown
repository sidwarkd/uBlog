---
layout: post
title: "A Physical Yo Button"
date: 2014-06-25 15:03
comments: true
categories: [RaspberryPi, Yo, SPI]
---

I think we're all still trying to figure out what Yo's place is in the internet family but as of right now it's basically a viral app. As soon as I found out there was an API for it I just knew I had to attach some hardware to it. Here's a demo of what I put together.


The whole thing took me about 4 hours once I resolved my API issue (I originally gave them the wrong URL for the callback and had to email them to fix it). I want to share the process in case other people want to integrate Yo with hardware.

<h1 style="text-align:center;">{% img /images/yo_post.jpg 640 400 %}</h1>

<!-- more -->

## How it Works
You send a Yo to UCASTS to subscribe ---> My live yo counter increments ---> Anytime I push the magic button all of my subscribers get a Yo!.

In terms of hardware you can customize this process to be very customizable.

  1. User subscribes to your Yo feed
  2. A callback allows you to execute some action when someone subscribes
  3. You now have the ability to easily send a Yo to all of your subscribers based on any trigger you can think of.

## Understanding the API
To sign up for the API just head over to [http://yoapi.justyo.co/][yoapi]. You'll be walked through a few simple steps to get things set up. If you want notifications when people subscribe you'll need to specify a callback url that the api can call. Once you've finished filling out the form you'll have to wait for Yo to email you your api token. Mine took overnight but I didn't register until later in the afternoon.

Once you have your api token all you have to do to send a Yo to all of your subscribers is POST your api token to **api.justyo.co/yoall/**

{% codeblock lang:bash %}
curl --data “api_token=[your_api_token]” http://api.justyo.co/yoall/
{% endcodeblock %}

That's all there is to it.

## The Server
So there are really two parts to this. We need a backend to handle the callback requests from the Yo api and a client running on the Pi to handle our hardware interaction. Let's start with the server. This is really quite simple. I created an [Express][express] website that I pushed to [Heroku][heroku] and then pointed one of my domains to it. In [&micro;Cast #17][episode_17] I showed how to set up [Socket.IO][socket_io] with Express and that's all I did here with one change. Because the socket.io server reuses the regular express server I had to define a route in the **www** file which also meant I had to move the 404 and error handler there. Here's what I ended up with in **www**.

{% codeblock lang:javascript %}
#!/usr/bin/env node
var debug = require('debug')('microcasts-tv');
var app = require('../app');
var io = null;

app.set('port', process.env.PORT || 3000);

app.get('/new', function(req, res){
  io.emit('yoReceived', req.query.username);
  res.json(req.query);
});

app.post('/new', function(req, res){
  io.emit('yoReceived', req.query.username);
  res.json(req.query);
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

io = require('socket.io').listen(server);
{% endcodeblock %}

So when a request to my callback url happens I simply emit a message to the client running on the Raspberry Pi.

## The Pi Client
The client piece of this project was fairly simple given the fact that I already had a display and button wired up on a breadboard and connected to a Pi. The first piece to the client is listening for websocket messages from the server to detect new subscribers. That's as easy as:

{% codeblock lang:javascript %}
var socket = require("socket.io-client")('http://yo.microcasts.tv');

var yoCount = 0;

socket.on('connect', function(){
  console.log("Connected to server");
  socket.on('yoReceived', function(username){
    // Increment the yo count and update display
    yoCount++;
    updateDisplay(yoCount + "");
  });
});
{% endcodeblock %}

I'm using the [spi][node_spi] package to connect to [my display][display]. I don't store the count anywhere locally at this point. I just count the Yos I've gotten since launching the program but it would be trivial to store that info and track your Yo total. Every time I get a new websocket message I just update the display.

{% codeblock lang:javascript %}
var spi = new SPI.Spi('/dev/spidev0.0');
spi.open();

function updateDisplay(text){
  var t = new Buffer(text);
  var r = new Buffer(text);
  var clearMsg = new Buffer([0x76]);
  var clearRx = new Buffer([0x00]);
  spi.transfer(clearMsg, clearRx, function(dev, buf){});
  spi.transfer(t, r, function(dev, buf){});
}
{% endcodeblock %}

The final piece to the client is sending a Yo to all of my followers when I push a button. Since the API is so simple we can accomplish that with just 12 lines of code if we use [Requestify][requestify]:

{% codeblock lang:javascript %}
var gpio18 = gpio.export(24, {direction: 'in', ready: function(){}});

// Listen for button presses
gpio18.on('change', function(value){
  if (value === 1){
    console.log("You pressed the button");
    requestify.post('http://api.justyo.co/yoall/', {
      api_token: "1fa9ba862f5887e3637bc71267560701"
    })
    .then(function(response){
      console.log("Yo sent to subscribers!");
    });
  }
});
{% endcodeblock %}

## Conclusion
My one regret with this project was that I didn't have one of these from Sparkfun on hand:

<h1 style="text-align:center;">{% img /images/blue_dome_button.jpg 300 300 %}</h1>
<p style="text-align:center;"><small><em>Image provided by Sparkfun as <a style="color:red;" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY-NC-SA 3.0</a></em></small></p>

I create [a Gist that has the meat of the code][code] if you're interested.

Got any ideas on how to integrate hardware with the Yo API? I'd love to here about it.

**If this article brought you any value at all I'd really appreciate it if you would share it using the buttons below**

[episode_17]: http://blog.microcasts.tv/2014/06/21/using-socket-io-to-control-the-raspberry-pi-remotely/
[socket_io]: http://socket.io/download/
[heroku]: https://heroku.com
[yoapi]: http://yoapi.justyo.co/
[express]: http://expressjs.com
[node_spi]: https://www.npmjs.org/package/spi
[display]: https://www.sparkfun.com/products/11442
[requestify]: https://www.npmjs.org/package/requestify
[code]: https://gist.github.com/sidwarkd/355de4e13f624825a838
