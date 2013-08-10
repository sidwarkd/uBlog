---
layout: post
title: "XC8: Problem Running Post-Install Step"
date: 2013-08-09 23:59
comments: true
categories: [XC8, Microchip, Windows 8]
author: K-SID
---

While installing the Microchip XC8 compiler today on my Windows 8 machine I ran into an issue at the end of the install and got the following message box.

{% img /images/xc8_install_error.png %}

I assume this is because the regsvr32.exe wasn't run with elevated privileges. If you get this error at the end of your install the fix is quite simple. We just need to run the failed command from an elevated privilege command prompt.  To do this right click on your Command Prompt icon (from your start page or do a search to find it) and select *"Run As Administrator"*.  This should open your command prompt window and default you to the **System32** folder. Without changing directories you simply run the failed command as it was listed in your error message.  In my case I ran:

```
regsvr32.exe /s "C:\Program Files\Microchip\xc8\v1.12\bin\MPLABXC8.dll"
```

**NOTE:** Your path may be different so make sure you see what the error message says before closing it.