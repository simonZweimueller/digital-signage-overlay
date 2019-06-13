## How to connect to xibo with putty

### Windows

In "Session" fill in the destination(Hostname/IP address and Port)

Then fill in "Saved Session" to set a name for the save.

After that go into "Connection > SSH > Tunnels" 
and add a forwarded port with the desired source port(forwarded port) and fill in your destination(Hostname/IP address and Port).

The last step is to go back to "Session" and to save the setting. Click "Open" to connect to xibo.


### Unix / Mac OS

	ssh <<USER>>@<<destination>> -L <<source port>>:<<IP address>>:<<forwarded port>>

Now you have access to xibo under localhost:<<forwarded port>>.
