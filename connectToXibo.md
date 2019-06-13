## How to connect to xibo with putty

### Windows

In "Session" fill in the same data as followed:

![putty1](/img/putty1.PNG)

Then fill in "Saved Session" to set a name for the save.

After that go into "Connection > SSH > Tunnels" 
and add a forwarded port with source port: 80 and destination: 172.18.199.159:80.
Now it should like the picture shown below.
![putty2](/img/putty2.PNG)

The last step is to go back to "Session" and to save the setting. Click "Open" to connect to xibo. You can login with your school user (itxxxxxx).


### Unix / Mac OS

	ssh <<USER>><<destination>> -L <<source port>>:<<destination>>:<<forwarded port>>

Now you have access to xibo under localhost.
