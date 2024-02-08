---
id: modpacks
title: Installing Modpacks
hide_table_of_contents: true
slug: /installing-modpacks
sidebar_label: Installing Modpacks
---
## Installing Modpacks with 1-click Installer
At STEL Hosting, our control panel offers 1-click installations of various modpacks. 

To install them, first, log in to our [control panel](https://panel.stelhosting.com/)

Once logged in, click on the `Tools` menu and then on the `Modpack Manager` tab
![Modpacks Image 1](/img/modpacks1.png)

You will now be able to see a full list of modpacks offered on our control panel. If you don't see your modpack in the list, you can use the search bar to help you with your search.

To install a modpack, simply click on the `Install` button next to your desired modpack. Some modpacks will take a few minutes to install due to their large size.

Once installed, you are ready to start your server and start your adventure!

## Installing Modpacks Manually
If the modpack is not available on our 1-click installer, you can easily install it manually by using SFTP. Be sure to read our guide on [accessing your server via SFTP](https://docs.stelhosting.com/sftp).

First, obtain the modpack you wish to install on your local desktop. The most important file is the folder containing all the mods you wish to install.

Connect to your server via SFTP and upload the folder containing all the mods. Be sure that this folder is called "mods".

Note: Make sure that the server directory is empty before uploading all the files.

If your modpack has other folders such as config, libraries, or defaultconfig, upload them all as well.

Other files such as but not limited to startserver.bat, startserver.sh, and forge-x.x-installer.jar are not required to be uploaded. 

:::note
Make note of the Forge version in the name of the .jar file.
:::

Once your files are uploaded, you can close the SFTP program and head back over to the console.

In the console, you will be changing the server type to the appropriate server Forge version for your modpack.

For example, if your modpack is for 1.20.1, install the recommended Forge version for 1.20.1. However, if your modpack contains a Forge jar with a version number in its name, install the version number as indicated.

Once everything has been uploaded and configured, you can start your server. If you run into any errors or have trouble with any of this, reach out to our support team!

## Step-by-Step Walkthrough on Installing Modpacks Obtained from CurseForge
This section is dedicated to solving the issue of our modpack installer missing certain mods in the installation process.

The following modpacks are known to have this issue:
- All the Mods 9

Additionally, some modpacks are unavailable on our installer.

In the CurseForge app, search for your desired modpack. In this example, we will be using All The Mods 9.

![Modpacks Image 2](/img/modpacks2.png)

Right next to the install button is the server pack download button. Click this button to download the server pack as we will need this for the installation process.

Once the .zip file has been downloaded, right-click on the file and extract all. You should now have a folder called "Server-Files-x.x.x". Go into that folder by double-clicking.

Inside the folder, you will see many other folders and files. You will only need to upload some of these files, not all. The following highlighted red are not needed.

![Modpacks Image 3](/img/modpacks3.png)

Next, connect to the server's file directory remotely via SFTP. Check this guide on [accessing your server via SFTP](https://docs.stelhosting.com/sftp).

This guide will be using FileZilla as the SFTP client.

Once you are connected to your server's file directory remotely, make sure that it is completely empty. Now, upload all the files from the server pack (except for the ones in red) into the empty directory

![Modpacks Image 4](/img/modpacks4.png)

After everything has been uploaded, you can safely close the SFTP program.

Now, head over to the control panel. We will need to install the right Forge version for the modded server.

In your server's control panel, click on `Configuration` and then `Advanced`. 

Now, under `Install Different Edition`, change the edition to `Forge`. 

The version you want to install is the recommended Forge version of the Minecraft version you're playing on. For example, All The Mods 9 is Minecraft version 1.20.1. Therefore, install `Forge-1.20.1-x.x.x (Recommended)`.

That's it! You can now start your server.

# Updating Your Modded Server Manually
The steps to update your already installed modded server are very similar to installing your modded server.
Repeat the steps taken from "Step-by-Step Walkthrough on Installing Modpacks Obtained from CurseForge" **BUT DO NOT DELETE ALL THE FILES IN THE SERVER DIRECTORY.**

Updating your modded server only requires you to override all the files obtained from the new server pack.

In the case of All The Mods 9, delete the following folders in the File Manager found in the control panel: config, defaultconfigs, kubejs, mods, and packmenu.

Now, obtain the updated server pack from the CurseForge app and re-upload those same folders via SFTP. That's it!
