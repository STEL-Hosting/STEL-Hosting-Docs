---
id: java-versions
title: Java Versions
hide_table_of_contents: true
slug: /changing-java-versions
sidebar_label: Changing Java Versions
---
## Introduction to Java Versions
Different versions of Minecraft may require different versions of Java to properly run. At STEL Hosting, our control panel will attempt to automatically detect the correct Java version for your server. In some cases, you will need to manually change your Java version.

Generally, the following recommended Minecraft and Java versions are as follows:

Version 1.8 to 1.11: Java 8

Version 1.12 to 1.16.4: Java 11

Version 1.16.5: Java 16

Version 1.17.1 to 1.20.4: Java 17

Version 1.20.5 to latest: Java 21

## Why would I ever need to manually change Java versions?

There are some exceptions to the recommendations above.
For example, some 1.12.2 modpacks may only work with Java 8. Version 1.16.5 can work with Java 8 and Java 11. Some server software such as Forge may have different Java requirements for different versions of the game. Some plugins or mods may only work with certain Java versions so you would have to change your Java version for them to work.

In the console, you can see if there are any errors associated with a mismatched Java version for your server software or mods. From there, you can change the Java version your server is running on to fix those errors.

## Changing Java Versions

As previously mentioned, our host systems automatically detect the appropriate Java version to launch your server with. However, this can sometimes fail when out-of-the-ordinary Jar files are being used.

To change your server's Java version, 
1) First, stop your server.
2) Then, head to your server's "Startup" tab.
3) In the top right corner, a dropdown menu labeled "Docker Image" will present multiple Java versions to choose from.

By selecting a Docker Image from the dropdown, you will change the Java version that runs your server.

If you have any questions about changing your server's Java version, please contact our support team.
