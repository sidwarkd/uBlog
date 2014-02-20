---
layout: post
title: "Tracking Olympic Medals with the Raspberry Pi"
date: 2014-02-20 00:07
comments: true
categories: [RaspberryPi]
---

I'm not sure why I waited so long to do this now that the Olympics are coming to an end. The thought came to me today, "I wonder how long it would take me to hack together a script to track and display medal counts." Well, I had to find out and below is the result. **Disclaimer:** I was not going for neat, well-organized code here.  I was going for speed so please be gentle.

##The Platform
I cheated a little bit in that I already had the Pi configured and some hardware ready to go from my [Skillshare Class][class] (which is now free if you want to check it out) so I figured I'd just use what I already had. The project from the Skillshare class includes an LED, temperature sensor, and other things but all I really needed for this project was the [seven segment display from Sparkfun][display]. I was ready to immediately start coding in Python.

##The Data Feed
My first step was to find a suitable data source for the medal count. It really came down to two sources and how easily it would be to parse the data.  The first was [NBC][nbc_medals] and the second was the official [Sochi Olympics site][sochi_site]. I liked the official site a little better because the html for the medals had specific css classes that would make extracting the data very straighforward. The problem I ran into though was when I ran my initial version of the script I got a **Forbidden** response.

<h1 style="text-align:center">{% img /images/sochi_forbidden.jpg 'Forbidden Response' 'Forbidden Response' %}</h1>

I assume this has something to do with the Agent header and them trying to prevent people like me from mooching off their site. Well played sochi.ru, well played.  Fortunately for us the good folks at NBC do not have the same concern so that's where I ended up getting the data.  Here is what part of the page looks like and has a url of [http://www.nbcolympics.com/medals][nbc_medals].

<h1 style="text-align:center">{% img /images/medal_count_display.jpg 'Medal Count Display' 'Medal Count Display' %}</h1>

So how do we fetch just the medal counts that we want to display?  Well, in Chrome all we have to do is right-click on the text "United States of America" and do **Inspect Element** to expose the page HTML which looks like this.

<h1 style="text-align:center">{% img /images/medal_count_html.jpg 'Medal Count HTML' 'Medal Count HTML' %}</h1>

This was my first time parsing HTML in Python so there are probably much better ways to do this. If so please tell me about it in the comments so I can learn something new. I chose to use some simple XPATH to locate the anchor element with the country name and then navigate to the neighboring elements with the medal counts in them.  The result was this.

{% codeblock lang:py %}
  page = urllib.urlopen("http://www.nbcolympics.com/medals").read()
  html = lxml.html.fromstring(page)
  result = html.xpath('//a[text()=" United States of America"]/@href')
  nameNode = result[0].getparent().getparent()

  goldNode = nameNode.getnext()
  silverNode = goldNode.getnext()
  bronzeNode = silverNode.getnext()
{% endcodeblock %}

Getting the actual integer value of the medal counts was then trivial. Remember, parsing out of the HTML will give you the values in strings.

{% codeblock lang:py %}
  gold_count = int(goldNode.text_content().strip())
  silver_count = int(silverNode.text_content().strip())
  bronze_count = int(bronzeNode.text_content().strip())
{% endcodeblock %}

##Displaying the Data
With the data in hand it was just a matter of getting it onto the 7 segment display. In my Skillshare class I show how to configure and use SPI on the Pi to display stuff on a simple seven segment display so I already had all of the code for that. I just needed to format the display string appropriately. As my real estate was limited I decided to just use simple strings like "to:23" for the total count, "go:14" for gold, etc. I display each count 3 times and then query NBC again for an updated count. The interval could be much greater I suppose as medals don't change every 10 seconds.

{% codeblock lang:py %}
  def display_medal_counts(bus, gold, silver, bronze):
    total = gold + silver + bronze
    totalstr = "to" + str(total)
    goldstr = "go" + str(gold)
    silverstr = "si" + str(silver)
    bronzestr = "br" + str(bronze)

    for i in range(3):
        clear_display(bus)
        spi_send(bus, totalstr)
        spi_send(bus, [0x77, 0x10])
        sleep(4)

        clear_display(bus)
        spi_send(bus, goldstr)
        spi_send(bus, [0x77, 0x10])
        sleep(4)

        clear_display(bus)
        spi_send(bus, silverstr)
        spi_send(bus, [0x77, 0x10])
        sleep(4)

        clear_display(bus)
        spi_send(bus, bronzestr)
        spi_send(bus, [0x77, 0x10])
        sleep(4)
{% endcodeblock %}

##Wrap Up
Throwing this together took me a little over an hour, much of which was spent learning how to parse HTML in Python. Here's a Vine to show it working. Not sure why the 'G' doesn't use the middle hyphen segment. 

<iframe class="vine-embed" src="https://vine.co/v/MZTDJTxIKBp/embed/simple" width="480" height="480" frameborder="0"></iframe><script async src="//platform.vine.co/static/scripts/embed.js" charset="utf-8"></script>
<br/>
<br/>

It's a great example of how the Raspberry Pi is great for rapid prototyping of an idea. The full code can be found [in this gist][gist]. 

What Olympic-themed hardware projects can you think of?

<a href="http://www.codeproject.com" rel="tag" style="display:none">CodeProject</a>

[gist]:https://gist.github.com/sidwarkd/9108668
[nbc_medals]:http://www.nbcolympics.com/medals
[sochi_site]:http://www.sochi2014.com/en/medal-standings
[display]:https://www.sparkfun.com/products/11442
