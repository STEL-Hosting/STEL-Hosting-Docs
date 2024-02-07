---
id: plugins
title: Installing Plugins
hide_table_of_contents: true
slug: /installing-plugins
sidebar_label: Installing Plugins
---
## What are Minecraft plugins?
Minecraft plugins are add-ons to Minecraft servers. There are many different types of plugins and each plugin is unique in its own way. One plugin, like EssentialsX, may provide you with a plethora of additional commands that you can execute (/home, /heal, /tpa, etc) while other plugins, like CoreProtect, allow you to track who broke or placed what block. Plugins are written by third-party developers and many are free to use!


:::info
Vanilla Minecraft does not have native support for plugins. To use plugins, you must install your server with the necessary server software. The server software must be based on the Bukkit server software (CraftBukkit, Spigot, Paper, Purpur, etc). We recommend using Paper for your server software. Visit our [Changing Server Versions](https://docs.stelhosting.com/changing-server-versions) article to learn how to change your Minecraft server software to Paper.
:::

## Installing Plugins via 1-Click Installer
Our control panel offers 1-click installations of various Minecraft plugins.

First, log in to the [control panel](https://panel.stelhosting.com/)

Once logged in, click on the `Tools` menu and then on the `Plugin Manager` tab

![Plugins](/img/plugins.png)

You will now be able to see a full list of plugins offered on our control panel. If you don't see a plugin on the list, you can use the search bar to help you with your search.

To install a plugin, simply click on the `Install` button next to your desired plugin.

### Some plugins may require you to download and install them manually.
To do this, click on the "Download Manually" button of the plugin you wish to install.

There are 2 things that should happen when you press this button:

1) You will immediately begin downloading a .jar file for that plugin

2) You will be redirected to the plugin's download page where you can download the .jar file from there

Once you have the .jar file for the plugin, head over to your server's File Manager and upload them to the `plugins` folder. If you don't have a `plugins` folder, make sure that you have properly installed and started up your Bukkit-based server.


Once your plugins are installed, make sure to restart your server so your plugin can be properly loaded!
