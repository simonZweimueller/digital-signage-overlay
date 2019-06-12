# digital-signage-overlay
an external Website to upload images to xibo
			
by Leon Tea and Simon Zweimüller
			
## Description:

A website to create and display notifications on a digital signage.

![Usecase Diagramm](/img/usecase_diagramm.png)
			
![Systemarchitektur](/img/Systemarchitektur.PNG)
			
## Usage:


#### 1)
download nodejs

<https://nodejs.org/en/>


#### 2)
connect to xibo

	ssh <<USER>>@leotux.htl-leonding.ac.at -L 80:172.18.199.159:80
	
for windows: <connectToXibo.md>


#### 3)
download Github-repo


#### 4)
change into the completeApp/server directory

	cd completeApp/server


#### 5)
download required node-modules

	npm update


#### 6)
start server

	node server.js


#### 7)
open index.html under localhost:8081



### How to change the vue files and build the new app:					

#### 1)
download nodejs

<https://nodejs.org/en/>


#### 2)	
change into the ds-overlay directory
	
	cd ds-overlay


#### 3)
download required node-modules and serve
	
	npm update
	npm add serve -g

<https://www.npmjs.com/package/serve>


#### 4)
build after editing the vue-app 

	npm run serve
	npm run build


#### 5)
preview build
			
	serve -s dist

open preview under localhost:5000


#### 6)
copy the files in the dist directory into the completeApp/public directory so that the new build runs on the nodejs server

