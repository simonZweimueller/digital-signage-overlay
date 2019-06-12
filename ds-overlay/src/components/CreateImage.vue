<template>
  <div  id="createNotification">

    <h1 class="title">1. Create Notification</h1>

    <div id="imgCreation" class="creationPart">
          <label>Background Color: </label>
          <input id="bgColor" type="color"/>
          <br />
          <button v-on:click="createCanvas" id="bgButton">Create Canvas</button>
    </div>

     <div id="textCreation" class="creationPart">
          <label>Text:</label>
          <input type="text" id="msg"/>
          <br />
          <label>Font:</label>
          <select name="font" size="1" id="font">
            <option>Arial</option>
            <option>Calibri</option>
          </select>
          <br />
          <label >Text Color: </label>
          <input id="fontColor" type="color" />
          <br />
          <label>Text Size (px): </label>
          <input id="fontSize" type="number" value=150/>
          <br />
       <!--   <label>Text Position width (in px): </label>
          <input id="fontPWidth" type="number" />
          <br />
          <label>Tex Position height (in px): </label>
          <input id="fontPHeight" type="number" />
          <br /> -->
          <button v-on:click="addText" id="textButton">Add text</button>
      </div>
   
      <div id="imgDownload" class="creationPart">
       <a v-bind:href=image class='downloadButton' download='imageDownload.png'>Download</a>
      </div>

     <canvas
          ref="canvas"
          v-bind:width=imgWidth
          v-bind:height=imgHeight
          id="myCanvas"
      />  

      <div class="helpDiv">h</div>  

  </div>
</template>

<script>
export default {
  name: "CreateImage",
  data() {
    return {
      imgWidth: 1920,
      imgHeight: 1080,
      image: ""
    };
  },
  methods: {
    createCanvas: function() {
      const ctx = document.getElementById("myCanvas").getContext("2d");
      let bgColor = document.getElementById("bgColor").value;
      ctx.clearRect(0, 0, this.imgWidth, this.imgHeight);
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, this.imgWidth, this.imgHeight);
    },
    addText: function() {
      const ctx = document.getElementById("myCanvas").getContext("2d");

      let msg = document.getElementById("msg").value;
      let font = document.getElementById("font").value;
      let fontColor = document.getElementById("fontColor").value;
      let fontSize = document.getElementById("fontSize").value;
      /*  let fontPWidth = document.getElementById("fontPWidth").value;
      let fontPHeight = document.getElementById("fontPHeight").value; */

      ctx.font = fontSize + "px " + font;
      ctx.fillStyle = fontColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(msg, this.imgWidth / 2, this.imgHeight / 2);

      let canvasSave = document.getElementById("myCanvas");
      const d = canvasSave.toDataURL("image/png");
      this.image = d;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

#createNotification {
  height: 40vh;
}

label {
  margin: 5px;
  margin-right: 15px;
  margin-left: 0px;
}

#msg {
  margin-left: 6.5vw;
}

#font {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 80%;
  margin-left: 6.5vw;
}

#fontColor,
#bgColor {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 100%;
}

#fontColor {
  margin-left: 2.7vw;
}

#fontSize {
  margin-left: 1vw;
}

#myCanvas {
  height: 30vh;
  margin: 20px;
  margin-left: 40px;
}

#bgButton {
  margin-top: 19vh;
}

#textButton {
  margin-top: 4vh;
  width: 40%;
}

.creationPart {
  float: left;
  margin: 30px;
  margin-top: 1.5vh;
  height: 30%;
  padding: 0;
}

#imgDownload {
  margin-top: 20vh;
}

.downloadButton {
  font-size: 140%;
  padding: 10px;
  height: 5vh;
  border: 2px solid black;
  text-align: center;
  outline: none;
  text-decoration: none;
  color: black;
  border-radius: 5px;
}

.downloadButton:hover,
.downloadButton:active {
  background-color: black;
  color: white;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}
</style>
