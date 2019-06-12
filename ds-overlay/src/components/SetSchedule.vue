<template>
  <div id="setSchedule">
    <h1 class="title">3. Schedule Current Layout</h1>

     <form action = "http://127.0.0.1:8081/schedule" method = "POST">
    <div id="chooseTime" class="uploadPart">
      <label>Start Day and Time: </label>
      <input type="datetime-local" id="start" name="start">
      <br><br>
      <label>End Day and Time: </label>
      <input type="datetime-local" id="end" name="end">
    </div>
  <div id="chooseScreens" class="uploadPart">
    <label id="displayLabel">Choose your Displays: <br> (keep STRG pressed to choose multiple Displays) </label>
  <select name="screens" id="screens" multiple>
    <option value=2 class="screen" name="3AHITM">3AHITM</option>
  </select>
  </div>
  <div id="sendItAll" class="uploadPart">
     <input type="submit" value="Schedule"/>
  </div>
  </form>
  </div>
</template>

<script>
export default {
  name: "SetSchedule",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
}

#setSchedule {
  height: 25vh;
  margin-top: 1.5%;
}

.uploadPart {
  float: left;
  margin: 30px;
  margin-top: 1.5vh;
  height: 30%;
}

#screens {
  float: right;
  margin-left: 20px;
  padding: 5px;
  font-size: 105%;
  max-height: 15vh;
  min-height: 6vh;
}

#displayLabel {
  float: left;
}

label {
  margin: 5px;
  margin-right: 15px;
  margin-left: 0px;
}

.title {
  border-top: 1px solid black;
  padding-top: 1vh;
}

#start {
  margin-left: 1.5vw;
}

#end {
  margin-left: 2vw;
}
</style>
