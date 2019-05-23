<template>
  <div id="uploadFile">
    <h1>2. Mitteilung hochladen</h1>
    <div id="chooseMessage" class="uploadPart">
      <input  type="file" id="sendMessage" accept="image/png" @change="showImage" >
    </div>
  <img v-if="url" :src="url" width="25%" class="uploadPart"/>
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
    return {
      url: null
    };
  },
  methods: {
    showImage: function(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);

      console.log(this.url);
    },
    sendAllToXibo: function() {
      let message = this.url;
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

#screens {
  margin-left: 10%;
}
</style>
