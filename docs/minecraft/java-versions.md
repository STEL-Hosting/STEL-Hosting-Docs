## Introduction to Java Versions
Different versions of Minecraft may require different versions of Java to properly run. At STEL Hosting, our host systems automatically detect your server's startup Jar file and match it with the appropriate Java version to run. If our host system cannot detect the necessary Java version, it will default to Java 11. This can sometimes lead to startup errors as the Java 11 default may not be the correct Java version to start the server.

Generally, the following recommended Minecraft and Java versions are as follows:

Version 1.8 to 1.11: Java 8
<br>
Version 1.12 to 1.16.4: Java 11
<br>
Version 1.16.5: Java 16
<br>
Version 1.17.1 to latest: Java 17

## Why would I ever need to manually change Java versions?

There are some exceptions to the recommendations above.
For example, some 1.12.2 modpacks may only work with Java 8. Version 1.16.5 can work with Java 8 and Java 11. Some server software such as Forge may have different Java requirements for different versions of the game. Some plugins or mods may only work with certain Java versions so you would have to change your Java version for them to work.

In the console, you can see if there are any errors associated with a mismatched Java version for your server software or mods. From there, you can change the Java version your server is running on to fix those errors.

## Changing Java Versions

As previously mentioned, our host systems automatically detect the appropriate Java version to launch your server with. However, this can sometimes fail when out-of-the-ordinary Jar files are being used.

To change your server's Java version, 
1) First, stop your server.
2) Then, head to your server's "File Manager" under the "Management" tab
3) Look for a file named `disable_prompt_for_java_version` and delete it (this file is what tells the server what Java version to use)

By deleting this file, the server will ask you what Java version you would like to use in the console on the next startup. Once you've deleted the file, start your server and answer the prompt in the console to select your desired Java version. Once you've selected a Java version, it will not prompt you again unless you re-delete the file.

