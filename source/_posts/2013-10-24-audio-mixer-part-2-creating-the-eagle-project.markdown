---
layout: post
title: "Audio Mixer Part 2: Creating the Eagle Project"
date: 2013-10-24 20:27
comments: true
categories: [projects, mixer]
author: K-SID
published: false
---

Because we've elected to build a custom home-etched board for this project we need a utility that will allow us to print out the board design. There are lots of tools available for this but the most common free resource is [Eagle by Cadsoft][eagle]. Eagle allows us to take our napkin design, formalize it, and create a board for it. The basic flow in Eagle is to first draw a schematic of your design and then use the built-in tools to create a board from the schematic.

##Download and Install Eagle
One of the great things about Eagle is that it can run on multiple platforms. The steps for installing it will depend on your platform but there is nothing fancy.

  *  [Eagle Download Page][download_page]

The good people over at Sparkfun have done some good tutorials on setting up and using Eagle. I've configured my environment using their setup tutorial.

  *  [Installing and Configuring Eagle (sparkfun.com)][install_eagle]

##Create a New Project
Once everything is installed and configured it's time to create a new project.
  1. Launch Eagle
  2. File->New->Project if you want to create a new directory. If you already have a directory for your project just do File->New->Schematic. Make sure to save it in your project directory.


[eagle]: http://www.cadsoftusa.com/
[download_page]: http://www.cadsoftusa.com/download-eagle
[install_eagle]: https://learn.sparkfun.com/tutorials/how-to-install-and-setup-eagle/all
