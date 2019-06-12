<template>
  <div id="uploadFile">
    <h1 class="title">2. Change Layout</h1>

    <form action = "http://127.0.0.1:8081/imageUpload" method = "POST" enctype = "multipart/form-data">
    <div id="chooseMessage" class="uploadPart">
      <input  type="file" id="sendMessage" name="file" accept="image/png" @change="showImage" >
       <input type="submit" value="Change Layout" id="submitButton"/>
    </div>
    <img v-if="url" :src="url" id="imageLayout" />
   
    </form>
     <div class="helpDiv">h</div>
  </div>
</template>

<script>
export default {
  name: "ChangeLayout",
  data() {
    return {
      url: ""
    };
  },
  methods: {
    showImage: function(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      //console.log(this.url);
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
  height: 25vh;
  margin-top: 1%;
  text-align: left;
}

.uploadPart {
  float: left;
  margin: 30px;
  margin-top: 1.5vh;
  height: 30%;
}

#imageLayout {
  height: 20vh;
}

.title {
  border-top: 1px solid black;
  padding-top: 1vh;
}

#submitButton {
  margin-left: 2vw;
}
</style>
