<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="imgCreation" class="creationPart">
          <label>Background Color: </label>
          <input id="bgColor" type="color" />
          <br />
          <button v-on:click="createCanvas">Create Canvas</button>
    </div>

     <div id="textCreation" class="creationPart">
          <label>Text:</label>
          <input type="text" id="msg" />
          <br />
          <label>Font:</label>
          <select name="font" size="1" id="font">
            <option>Arial</option>
            <option>Calibri</option>
          </select>
          <br />
          <label>Font Color: </label>
          <input id="fontColor" type="color" />
          <br />
          <label>Font Size (in px): </label>
          <input id="fontSize" type="number" />
          <br />
          <label>Font Position width (in px): </label>
          <input id="fontPWidth" type="number" />
          <br />
          <label>Font Position height (in px): </label>
          <input id="fontPHeight" type="number" />
          <br />
          <button v-on:click="addText">Add text</button>
      </div>

      <div id="imgDownload" class="creationPart">
        <button v-on:click="saveImg" id="downloadButton">Save Image</button>
      </div>

     <canvas
          ref="canvas"
          v-bind:width=imgWidth
          v-bind:height=imgHeight
          id="myCanvas"
        />


    <div id="downloadLink" />

  </div>
</template>

<script>
export default {
  name: "CreateImage",
  data() {
    return {
      msg: "Welcome to Your Vue",
      imgWidth: 1920,
      imgHeight: 1080
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
      let fontPWidth = document.getElementById("fontPWidth").value;
      let fontPHeight = document.getElementById("fontPHeight").value;

      ctx.font = fontSize + "px " + font;
      ctx.fillStyle = fontColor;
      ctx.textAlign = "center";
      ctx.fillText(msg, fontPWidth, fontPHeight);
    },
    saveImg: function() {
      let canvasSave = document.getElementById("myCanvas");
      const d = canvasSave.toDataURL("image/png");
      document.getElementById("downloadLink").innerHTML =
        "<a href='" +
        d +
        "' id='downloadButton' download='imageDownload.png'></a>";
      document.getElementById("downloadButton").click();
      console.log("Saved!");
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

label {
  margin: 10px;
  margin-right: 15px;
  margin-left: 0px;
}

input {
  margin-top: 10px;
  margin-bottom: 10px;
}

#myCanvas {
  width: 25%;
  margin: 20px;
  margin-left: 40px;
}

#saveImg {
  float: left;
  margin: 30px;
  margin-top: 15.5%;
}

.creationPart {
  float: left;
  margin: 30px;
  height: 30%;
}

.button {
  margin: 10px;
  margin-right: 10px;
  width: 100px;
}

#downloadButton {
  margin-top: 230px;
}

#downloadLink {
  visibility: unset;
}
</style>
