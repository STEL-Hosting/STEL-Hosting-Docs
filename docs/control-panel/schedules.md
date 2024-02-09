---
id: schedules
title: Creating Schedules
hide_table_of_contents: true
slug: /schedules
sidebar_label: Creating Schedules
---
## Creating and Understanding Schedules with Cron Expressions
With our schedules feature, you are able to run a server command, power action, or backup at any set time. Using cron expressions, you can set the schedules to be executed at a certain time of day or every hour/minute/second. This tool is useful for automating backups or executing commands at set times without the use of plugins or mods.

We recommend checking out the [Crontab Guru](https://crontab.guru/examples.html) website for a list of cron expression examples.

### Daily Backup Schedule Example with Announcements
A commonly set up schedule is one that creates a backup of the server every day. In this example, we will be creating a schedule that creates a backup at midnight every day.

First, log in to the [control panel](https://panel.stelhosting.com/) and click on your server to manage it

Next, click on the `Configuration` tab and then on `Schedules`. In the top right corner, click on `Create`

You will now see a pop up that looks like this:

![Schedule1](/img/schedule.png)

:::info
It is important to note the differences between the two times shown in the above picture. By default, schedules are run in UTC while the "Next run" time is in your local timezone. You may need to convert UTC to your local time to accurately set it as midnight. For example, Eastern Standard Time is UTC-5. So, to change it to midnight EST, you will need to add 5 to the hour section of the cron expression: `0 5 * *`. The "Time run" will dynamically change as you enter in values making it easier to see the correct time.
:::

After setting up the correct cron expression for midnight in your local timezone (or however you desire), click on `Submit`. You have now created a schedule.

The next step is to create tasks for the schedule to run. To do so, click on `Create Task` in the top right corner

![Schedule2](/img/schedule2.png)

A new menu will pop up asking for the task arguments. In this example, we will be creating an announcement 60 seconds before the server restarts to take a backup.

![Schedule3](/img/schedule3.png)

In the menu, make sure the action is set to `Send command`. The payload is the command that the schedule sends. In this case, we want the schedule to send a message to the server that the server will be restarting in 60 seconds. In the payload section, enter `say Server restarting in 60 seconds...`. The time offset for this task is 0 since it should be called as soon as the schedule is run.

![Schedule4](/img/schedule4.png)

Next, create another task with the same action and with a new payload: `say Server restarting in 30 seconds...`. The time offset should now be `30` since the schedule is sending this command 30 seconds later.

![Schedule5](/img/schedule5.png)

The next task is to announce that the server restarts in 10 seconds. The new payload command will be `say Server restarting in 10 seconds` with a time offset of 20 seconds. The time offset is 20 seconds since we must wait 20 seconds after the 30 second message is sent since we will now be counting down from 10 seconds.

![Schedule6](/img/schedule6.png)

And now, the next task is at the 5 second mark. Payload: `say Server restarting in 5 seconds`; Time offset: `5`

![Schedule7](/img/schedule7.png)

The task will now begin counting down from 5 to 1. Payload: `say Server restarting in 4 seconds`; Time offset: `1`

Repeat this step 3 more times for `3`, `2`, and `1`. The time offset is still `1`.

![Schedule8](/img/schedule8.png)

The last message that the server sends should be the restart announcement. Here, the payload is `say Server restarting...`

After that task, create a task with the action as `Create a backup`. This will tell the schedule to create a backup after all the messages have been sent.

:::info
When the backup action is called, the server will automatically save all the files, stop the server, create the backup, and then restore the server's original power state. The server must be taken offline to perform a backup to ensure no files are being overwritten at the time of backup to avoid corruption. This greatly prevents the chance of a corrupt world file since no region file will be overwritten while the backup is in progress.
:::

Once the schedule is complete, it should look like this:
![Schedule8](/img/schedule8.png)
![Schedule9](/img/schedule9.png)

You are welcome to change the schedule however you'd like. If you need any additional help with schedules or have any questions, feel free to contact our support team!
