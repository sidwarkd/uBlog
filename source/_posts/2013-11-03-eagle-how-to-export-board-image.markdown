---
layout: post
title: "Eagle How-To: Export Board Image"
date: 2013-11-03 00:30
comments: true
categories: [Eagle]
author: K-SID
---

Sometimes when you're working on a board design you don't want to wait to get a prototype board from a fab house. For simple or one off boards you can just make them at home. In order to do that we need a way to get our board design out of Eagle and onto a PCB. Most home-etch processes I've seen require, in some form, a to-scale printout of the board. Personally I use the [Pulsar PCB products][pulsar] which I've found to work very well. The following is my process for getting the board design printed out.

  1.  Launch Eagle and open the board view of your project.
  2.  Turn the grid off via the **View->Grid** menu or using the command: "grid off"
  3.  Turn off all layers except the the ones that you want to print. I like to see layers 1, 17, 18 and 20. That's top, pads, vias and dimension. If your board is two sided you only want to print one side at a time.
  4.  If the background is black we need to make it white. Do this via the **Options->User Interface** dialog or use the command: "set palette white;window;".
  5.  File->Export->Image
  6.  Select a destination file. I prefer to use the .png format.
  7.  Check the **Monochrome** checkbox
  8.  Change the resolution to a multiple of your screen dpi. The default screen resolution in Windows is 96 dpi so I normally use 384 which is 96 x 4.
  9.  Click **Ok** to export the image.

  You now have an image file of your board that should scale perfectly to size. I normally just drag it into a document in OpenOffice Writer. If it goes into your document full size you just need to scale it to 25% of original size and it will be perfectly to-scale. 


[pulsar]: http://www.pcbfx.com/