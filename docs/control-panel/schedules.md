---
id: schedules
title: Creating Schedules
hide_table_of_contents: true
slug: /schedules
sidebar_label: Creating Schedules
---
## Creating and Understanding Schedules with Cron Expressions
With our schedules feature, you can run a server command, power action, or backup at any set time. Using cron expressions, you can set the schedules to be executed at a certain time of day or every hour/minute/second. This tool is useful for automating backups or executing commands at set times without the use of plugins or mods.

We recommend checking out the [Crontab Guru](https://crontab.guru/examples.html) website for a list of cron expression examples.

### Daily Backup Schedule Example
A commonly set up schedule creates a backup of the server every day. In this example, we will be creating a schedule that creates a backup at midnight every day.

First, log in to the [control panel](https://control.stelhosting.com/) and click on your server to manage it.

Next, click on the `Schedules` tab. In the top right corner, click on `Create schedule`.

You will now see a pop-up that looks like this:

<center>![Schedule1](/img/schedule.png)</center>

:::tip[TIPS]
You can use the `Show Cheatsheet` toggle to see a few other examples of cron expressions you can use, and what each special character does.
<details>
  <summary>Cheatsheet</summary>
  ![Schedule15](/img/schedule15.png)
</details>

You can also toggle `Only When Server Is Online` to decide whether backups will be taken even when the server is offline.
:::

:::info
Schedules use the timezone set in `Settings`.
:::

After setting up the correct cron expression for midnight (or however you desire), click on `Create schedule`. You have now created a schedule.

The next step is to create a task for the schedule to run. To do so, click on `New Task` in the top right corner

<center>![Schedule2](/img/schedule2.png)</center>

A new menu will pop up asking for the task arguments. 

<center>![Schedule13](/img/schedule13.png)</center>

Create a task with the action `Create backup`. This will tell the schedule to create a backup.

Once the schedule is complete, it should look like this:

<center>![Schedule14](/img/schedule14.png)</center>

:::info
When the backup action is called, your server will **not** be automatically stopped. This is because our panel's backup system uses a method that is very unlikely to corrupt your files when the server is running. Still, you may wish to add `Send power action` actions before (recommended at least 30s before) and after (recommended at least 60s after) the backup action, to stop and start the server, to completely prevent the possibility of file corruption, and because frequent restarting may be beneficial for your server's performance. We also recommend adding announcements that the server is being restarted using `Send command` actions that send the `say` command (or something else like the `tellraw` command or the `broadcast` command from EssentialsX, if you have it).

<details>
<summary>Example</summary>

In this example, we will be creating an announcement 60 seconds before the backup is taken.

<center>![Schedule3](/img/schedule3.png)</center>

In the menu, make sure the action is set to `Send command`. The payload is the command that the schedule sends. In this case, we want the schedule to send a message to the server that the server will be restarting in 60 seconds. In the payload section, enter `say Server restarting in 60 seconds...`. The time offset for this task is `0` since it should be called as soon as the schedule is run.

<center>![Schedule4](/img/schedule4.png)</center>

Next, create another task with the same action and with a new payload: `say Server restarting in 30 seconds...`. The time offset should now be `30` since the schedule is sending this command 30 seconds later.

<center>![Schedule5](/img/schedule5.png)</center>

The next task is to announce that the server restarts in 10 seconds. The new payload command will be `say Server restarting in 10 seconds` with a time offset of `20` seconds. The time offset is 20 seconds since we must wait 20 seconds after the 30-second message is sent since we will now be counting down from 10 seconds.

<center>![Schedule6](/img/schedule6.png)</center>

And now, the next task is at the 5-second mark. Payload: `say Server restarting in 5 seconds`; Time offset: `5`

<center>![Schedule7](/img/schedule7.png)</center>

The task will now begin counting down from 5 to 1. Payload: `say Server restarting in 4 seconds`; Time offset: `1`

Repeat this step 3 more times for `3`, `2`, and `1`. The time offset is still `1`.

<center>![Schedule8](/img/schedule8.png)</center>

The last message that the server sends should be the restart announcement. Here, the payload is `say Server restarting...`

<center>![Schedule10](/img/schedule10.png)</center>

To stop the server before the backup, add a task with the `Send power action` action, with the payload: `Stop the server`. Time offset: `1`

<center>![Schedule11](/img/schedule11.png)</center>

After that task, create a task with the action `Create backup`. This will tell the schedule to create a backup after all the messages have been sent. The time offset should be at least `30` seconds.

<center>![Schedule12](/img/schedule12.png)</center>

To start the server after the backup, add a task with the `Send power action` action, with the payload: `Start the server`. The time offset should be at least `60` seconds.

Once the schedule is complete, it should look like this:

<center>![Schedule9](/img/schedule9.png)</center>
</details>
:::

:::note
You can have a maximum of 25 actions in one schedule.
:::

You are welcome to change the schedule however you'd like. If you need any additional help with schedules or have any questions, feel free to contact our support team!
