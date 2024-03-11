---
id: server-icon
title: Server Icon
hide_table_of_contents: true
slug: /server-icon
sidebar_label: Adding a Server Icon
---
## Adding a Server Icon

You can add an icon to your server to make it recognizable and stand out in the server list.

![A server with an icon](/img/server-icon.png)

### Image Requirements

Your image must meet the following criteria to appear in the server list:

- It must have a resolution of `64px x 64px`
- It must be saved as a `.png` file
- It must be named `server-icon.png`
- It must be saved in the server's root directory

Most photo editing software will allow you to resize an image to `64px x 64px` and save it as a `.png` file.

### Uploading the Image

The `server-icon.png` file needs to be placed in the server's root directory. That is, in the same folder as the `server.jar` file. You can either:

- Upload the image using the STEL Hosting server panel — in the sidebar, navigate to `Management` then `File Manager`.
- Or, upload the image using SFTP — read our guide on [accessing your server files via SFTP](https://docs.stelhosting.com/sftp).

Both methods achieve the same outcome. After restarting the server, you will find your icon in the server list.
