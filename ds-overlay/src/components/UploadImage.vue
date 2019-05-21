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
      <input type="datetime-local">
      <br><br>
      <label>End Tag und Zeit: </label>
      <input type="datetime-local">
    </div>
  <div id="chooseScreens" class="uploadPart">
    <label>Displays auswählen auf denen die Mitteilung angezeigt werden soll: </label>
    <br><br>
    <ul id="screensList">
            <li><input type="checkbox" />3AHITM </li>
            <li><input type="checkbox" />Aula</li>
            <li><input type="checkbox" />Keller </li>
    </ul>
  </div>
  <div id="sendItAll" class="uploadPart">
    
     <input type="button" v-on:click="sendAll" value="Mitteilung abschicken"/>
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
      console.log("test");
      console.log(document.getElementById("sendMessage").value);
      document.getElementById("imageToShow").innerHTML =
        "<img src=" + document.getElementById("sendMessage").value + ">";
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
