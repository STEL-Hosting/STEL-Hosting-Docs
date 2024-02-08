---
id: sftp
title: Accessing Your Server Files via SFTP
hide_table_of_contents: true
slug: /sftp
sidebar_label: SFTP Access
---
## What is SFTP?
SFTP, which stands for Secure File Transfer Protocol, is a network protocol that allows you to access, manage, and transfer your files over a secure network. All servers at STEL Hosting have access to SFTP with unique credentials for each server.

## What is the use case for SFTP?
In some cases, you will need to access your server's files to upload entire folders, upload multiple files at once, or manually install a modpack.

## Getting Started
To start, you will first need to obtain your SFTP credentials. 

First, head over to our [control panel](https://panel.stelhosting.com/) and click on your server

Then, click on the `System` tab and then `SFTP Details`. You will need to copy the `Connection Address` and `Username`

![SFTP Credentials](/img/sftp.png)

## Connecting via WinSCP (easiest)
We recommend using WinSCP since it is easily accessible with our control panel.

First, download [WinSCP](https://winscp.net/eng/index.php) and launch the program

Next, head over to the `SFTP Details` page in our control panel

Click on `Launch SFTP` and click `OK` for the prompts that follow

Once connected, enter your username (found in SFTP details) and your control panel password

## Connecting via FileZilla
If you don't already have FileZilla, you can download it [here](https://filezilla-project.org/)

To access via FileZilla, first launch the program.

Then, paste in the `Connection Address` in the `Host` section at the very top

Next, paste in the `Username` and enter your `control panel password`

You can leave the `Port section empty` as the connection address will automatically fill it in

Finally, click on `Quickconnect`

## Conclusion
You are now accessing your server's files via SFTP!

Note: The right side of the window is your server's directory while the left side is your computer's local directory.
