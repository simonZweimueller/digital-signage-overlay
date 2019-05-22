<template>
  <div id="uploadFile">
    <div id="chooseMessage" class="uploadPart">
      <input  type="file" id="sendMessage" accept="image/png" >
      <input type="button" v-on:click="showImage" value="Anzeigen"/>
      <br>
      <div id="imageToShow"></div>
    </div>
    <div id="chooseTime" class="uploadPart">
      <label>Start Tag und Zeit: </label>
      <input type="datetime-local" id="start">
      <br><br>
      <label>End Tag und Zeit: </label>
      <input type="datetime-local" id="end">
    </div>
  <div id="chooseScreens" class="uploadPart">
    <label>Displays auswählen auf denen die Mitteilung angezeigt werden soll: </label>
    <br><br>
   <!-- <ul id="screensList">
            <li><input type="checkbox" class="screen" value="3AHITM"/>3AHITM </li>
            <li><input type="checkbox" class="screen" value="Aula"/>Aula</li>
            <li><input type="checkbox" class="screen" value="Keller"/>Keller </li>
    </ul> -->
  <select name="screens" id="screens" multiple>
    <option value="3AHITM" class="screen">3AHITM</option>
    <option value="Aula" class="screen">Aula</option>
    <option value="Keller" class="screen">Keller</option>
  </select>
  </div>
  <div id="sendItAll" class="uploadPart">
    
     <input type="button" v-on:click="sendAllToXibo" value="Mitteilung abschicken"/>
  </div>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  data() {
    return {};
  },
  methods: {
    showImage: function() {
      let message = document.getElementById("sendMessage").value;
      console.log(message);
      document.getElementById("imageToShow").innerHTML =
        "<img src=" + document.getElementById("sendMessage").value + ">";
    },
    sendAllToXibo: function() {
      let message = document.getElementById("sendMessage").value;
      let startTime = document.getElementById("start").value;
      let endTime = document.getElementById("end").value;
      //let screens = document.getElementById("screens").selectedOptions.value;
      let screens = new Array();

      var x = document.getElementById("screens");
      for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected == true) {
          screens[i] = x.options[i].value;
        }
      }

      console.log(
        message + " | " + startTime + " | " + endTime + " | " + screens
      );
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

.uploadPart {
  float: left;
  margin: 30px;
  height: 30%;
}

#uploadFile {
  margin-top: 3%;
}

#screensList {
  margin-left: 10%;
}
</style>
