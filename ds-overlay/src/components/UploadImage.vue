<template>
  <div id="uploadFile">
    <input  type="file" id="sendMessage" accept="image/png" >
    <input type="button" v-on:click="showImage" value="Anzeigen"/>
    <div id="imageToShow"></div>
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
        "<img src=" + document.getElementById("sendMessage").value + "";
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

#uploadFile {
  margin-top: 3%;
}
</style>
