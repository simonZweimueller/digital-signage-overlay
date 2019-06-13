# digital-signage-overlay
an external Website to upload images to xibo
			
by Leon Tea and Simon Zweimüller
			
## Description:

A website to create and display notifications on a digital signage.

![Usecase Diagramm](/img/usecase_diagramm.png)
			
![Systemarchitektur](/img/Systemarchitektur.PNG)
		
## How to use:

![app](/img/app.png)

#### 1) create notification
Choose a background color and create a canvas. Then fill in text,text size and choose a text color. Add the text and download the image. The text is always centered.

#### 2) change layout
Choose your image that you want to display and click on change layout.

#### 3) Schedule Current Layout
Choose a start date and an end date and select the display on which your image should be displayed on. After that click on schedule to schedule your image. If you didn't do step 2) the last image that the Layout was changed to will be scheduled.

All steps can work independently from each other.
		
## How to run:


#### 1) download nodejs

<https://nodejs.org/en/>


#### 2) connect to xibo

	ssh <<USER>><<destination>> -L <<source port>>:<<destination>>:<<forwarded port>>
	
for windows: [How to connect to xibo](connectToXibo.md)


#### 3) download Github-repo


#### 4) change into the completeApp directory

	cd completeApp


#### 5) download required node-modules

	npm update


#### 6) start server

	node server.js


#### 7) open index.html under localhost:8081


## How to change the vue files and build the new app:					


#### 1) download nodejs

<https://nodejs.org/en/>


#### 2)	change into the ds-overlay directory
	
	cd ds-overlay


#### 3) download required node-modules and serve
	
	npm update
	npm add serve -g

<https://www.npmjs.com/package/serve>


#### 4) build after editing the vue-app 

	npm run serve
	npm run build


#### 5) preview build
			
	serve -s dist

open preview under localhost:5000


#### 6) copy the files in the dist directory into the completeApp/public directory so that the new build runs on the nodejs server

