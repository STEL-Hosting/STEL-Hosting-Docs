---
id: whitelist
title: Whitelist
hide_table_of_contents: true
slug: /using-the-whitelist
sidebar_label: Using the Whitelist
---
## Introduction to the Whitelist

The whitelist can be used to restrict access to a Minecraft server. For example, you might be running a small survival multiplayer (SMP) server and want to limit access to people you know. Or you might run a large community and only want staff members online while you configure a new plugin.

When the whitelist is enabled, only the specified players will be able to connect to the server. Anyone not whitelisted will be unable to join. The only exception is server operators: players with operator permissions will successfully connect, even if they are not on the whitelist.

## Using the Whitelist

The whitelist can be managed with in-game commands (if you have sufficient permissions) or through the server console.

### Toggling the Whitelist

The whitelist is disabled by default.

- `whitelist on` - enables the whitelist;
- `whitelist off` - disables the whitelist.

### Add or Remove Players

- `whitelist add <player>` - adds the player to the whitelist;
- `whitelist remove <player>` - removes the player from the whitelist.

You can also edit the `whitelist.json` file, found in your server directory. If you make changes while the server is running, use the following command to apply them:

- `whitelist reload`

### See the Whitelist

- `whitelist list` - list the players on the whitelist.
