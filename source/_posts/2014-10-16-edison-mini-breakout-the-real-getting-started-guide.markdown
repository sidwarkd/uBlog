---
layout: post
title: "Edison Mini Breakout: The Real Getting Started Guide"
date: 2014-10-16 13:45
comments: true
categories: [Edison, NodeJS]
---

<h1 style="text-align:center;">{% img /images/edison/wide_edison_breakout.jpg %}</h1>

So I sat down the other night to finally start playing with my [Intel Edison][edison] board and quickly found out that the documentation for this thing really sucks. There are forums and pages and PDFs spread all over the Intel site and most of the content centers around using the Arduino breakout board. For those of us using the [mini breakout board][mini_board] we are left to our own resourcefulness to get this thing up and running. There is even incorrect info in the [Quickstart][quickstart] that might leave beginners scratching their heads. If Intel wants this thing to get widespread community adoption it needs to spend significantly more time making the first experience a better one. 

Until then, here is my version of how to get started with the Edison mini breakout board. This is the guide I wish I had for my first experience.

<!-- more -->

##Unboxing and Setup
So Intel nailed the unboxing part. The Edison comes in a sweet box and opening it evokes a few oooohs and aaahs. That's about where it ends though. They have a getting started url right under the box lid which makes you think that they are really going to help you through the process but unfortunately you're mostly on your own at this point. The link has only partially relevant instructions to the mini breakout and even some of the relevant stuff has errors.

**STOP:** Installing a header is completely optional but if you intend to connect your Edison to external hardware at some point I recommend you solder one on now. You can always do it later but the tiny 70 pin Hirose connector makes me nervous so I'd rather not stress it with unnecessary insertions and removals.

### Install a Header (Optional)
If you intend to connect any external hardware to your Edison you're going to need access to the GPIO pins. These are located under the Edison itself on the breakout board. 

You can individually solder wires to this but I personally recommend breaking all of the pins out to a header for easy connection. This is really easy to do even for a beginner so don't be afraid. The pins are standard 0.1" spaced so any [generic male header strip][header] will do. Break the header strip into 14 pin segments and install them side by side on a breadboard as seen below. Make sure the long end of the header strip pins is in the breadboard so the short side is pointing up.

<h1 style="text-align:center;">{% img /images/edison/header_guide.jpg %}</h1>

This will be your jig for soldering. Place the breakout board onto the pins so that the USB connectors are on top. Solding the headers in upside down will definitely ruin your day. The breakout should sit on the pins and feel nice and level. If installed correctly the header pins will just barely protrude from the holes. This ensures that they won't interfere with seating the Edison later on. If the pins stick out too far then you've got your header installed upside down on the breadboard.

<h1 style="text-align:center;">{% img /images/edison/header_pre_solder.jpg %}</h1>

For soldering I highly recommend using a [flux pen][flux_pen]. It will help the solder flow into the joints. Take your time soldering and make sure you get a good solder flow on each joint and be careful not to over-apply solder as it will ball up on the pin and not create a good joint. Here is what mine looked like when I was done. You can see that there are a few joints that aren't as nice as the others but we should be okay. I used some rubbing alcohol and a clean t-shirt rag to clean the flux up after soldering.

<h1 style="text-align:center;">{% img /images/edison/header_post_solder.jpg %}</h1>

### Insert the Edison
Because of the mounting holes it's pretty much impossible to install the Edison the wrong way on the breakout board. Just be careful seating it as the 70 pin connector has very tiny contacts that can be damaged if you're not careful. Get the Edison nice and level over the connector and push straight down on it right about where the sticker is below the metal housing. You should hear a good sounding click.

<h1 style="text-align:center;">{% img /images/edison/push_here.jpg %}</h1>

Install the two nuts provided to hold the Edison in place.

## Install Software and Drivers
The Quickstart guide provided by Intel has you install the Arduino IDE next. Now even though this isn't the Arduino breakout you can still write sketches and run them. You just have to break out the appropriate pins yourself. I'm not interested in Arduino functionality so I opted to skip that part but if you want you can [install that now][edison_downloads].

The [driver installation step][step3] from the Quickstart is one of the few items they nailed in the guide and you can follow the instructions [there][step3]. Basically you're downloading and installing two sets of drivers: one for the FTDI interface and one for the Edison itself. Here are the links for both. Just click through the installations.

### FTDI Drivers
  * [FTDI Driver Setup][ftdi_drivers]

### Edison Drivers
  * [Edison Windows Driver Setup][edison_drivers]

### Terminal Emulator
  * [PuTTY][putty]

For your computer to talk to the Edison at first you will need to use a serial connection. This is acheived over USB with the FTDI drivers which essentially speak USB to the FTDI chip on your breakout board and then the FTDI chip translates USB to serial for the Edison to understand. A terminal emulator is the program that runs on your PC that manages that connection. The most popular one is [PuTTY][putty] but you can use any terminal emulator you feel comfortable with.

## Powering Your Edison
This one stumped me a little at first. There are two USB ports on the mini breakout and I assumed one was for power and communication and the other was for connecting devices to the Edison so it could act as a USB host. You probably didn't assume that but if you did you would be wrong...just like me. One of the USB ports is for communicating with your PC via the terminal emulator and the other is one of the ways you can power the Edison. As found in [this thread][power] there are actually 3 different ways to power your Edison via the breakout board.

  * 5V via the USB connector
  * 7-12V via J21
  * Single Cell LiPo battery via J2

<h1 style="text-align:center;">{% img /images/edison/power_options.jpg %}</h1>

## Configuring Your Edison
Once you've decided on a power strategy for your Edison it's time to power it up and play with it. By default your Edison comes with [Yocto Linux][yocto] installed but you'll need to configure it. 

  1. Connect the Edison to your PC with the USB cable.
  2. Apply power. The easiest way to do this is via the second USB port. I didn't have a free port on my PC so I used a USB battery pack and it worked great.
  3. Launch Device Manager (Go to Start and search "Device Manager" if you can't find it)
  4. In Device Manager expand the **Ports** section and find the entry named *USB Serial Port (COM...)*. In parenthesis is the COM port your Edison can talk on. On my machine it's COM4.
  	{% img /images/edison/com_port.jpg %}
  5. Launch your terminal emulator. These instructions assume you're using PuTTY.
  6. Set the following options for communication
    * Connection Type: **Serial**
    * Serial Line: **[The COM value you found in step 4]**
    * Speed: **115200**
    
    {% img /images/edison/putty_config.jpg %}
  7. Click **Open**
    * **NOTE: You are now about to start experiencing a super annoying defect in the Edison UART. This is what the datasheet says:**

	*When Edison goes into low power sleep, the UART internal FIFO and interface is powered down. Therefore, a two-wire UART (Rx/Tx) will lose the first received character whenever Edison is in sleep mode.*
	
	**Basically if you don't type anything for about 20 seconds or so the next time you press a key in the terminal it will wake up the Edison but not register your key. You'll have to hit it again. It's very annoying and I will post info on how to disable sleep mode as soon as I figure it out**
  8. Wait for the blank terminal window to appear.
  9. Hit **Enter** twice. You may have to hit it 3 times if you waited too long. Told you it was annoying.
 10. At the login prompt type **root**
 11. At the next prompt type **configure_edison**

Follow the prompts through the configuration. If the Edison doesn't locate any WiFi networks at first just press **0** to have it rescan. Mine didn't find any the first time around for some reason.

## Start Poking Around
Once you've finished configuring your Edison you can essentially treat it like a Linux machine. I was surprised to find that it had NodeJS and NPM installed and was able to get an Express website up and running within a couple of minutes. 

A few things of note:

  * If you want to create/edit files the Edison comes with Vim which can be launched with **vi**
  * To shut down the Edison use **systemctl poweroff**
  * If you're coming from Raspberry Pi land most of the Linux commands you already know still apply

If you have any problems or questions feel free to [reach out on Twitter][twitter]. I'm always happy to help if I can.

<h1 style="text-align:center;">{% img /images/edison/finger_edison.jpg 611 400 %}</h1>


[edison]: http://www.intel.com/content/www/us/en/do-it-yourself/edison.html
[mini_board]: https://www.sparkfun.com/products/13025
[quickstart]: https://communities.intel.com/docs/DOC-23147
[header]: https://www.sparkfun.com/products/116
[flux_pen]: http://www.alliedelec.com/search/productdetail.aspx?SKU=70177953
[edison_downloads]: https://communities.intel.com/docs/DOC-23242
[step3]: https://communities.intel.com/docs/DOC-23147#jive_content_id_Step_3__Install_required_drivers
[ftdi_drivers]: http://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe
[edison_drivers]: http://downloadmirror.intel.com/24271/eng/IntelEdisonDriverSetup1.0.0.exe
[putty]: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html
[twitter]: https://twitter.com/kevinsidwar
[power]: https://communities.intel.com/thread/55455
[yocto]: https://www.yoctoproject.org/