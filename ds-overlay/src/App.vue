<template>
  <div id="app">
    <CreateImage />
    <ChangeLayout />
    <SetSchedule />
  </div>
</template>

<script>
import CreateImage from "./components/CreateImage.vue";
import ChangeLayout from "./components/ChangeLayout.vue";
import SetSchedule from "./components/SetSchedule.vue";

export default {
  name: "app",
  components: {
    CreateImage,
    ChangeLayout,
    SetSchedule
  }
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  font-size: 130%;
  color: black;
}

.helpDiv {
  opacity: 0;
}

.title {
  font-size: 125%;
}

input {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 7px;
  font-size: 100%;
  border-radius: 5px;
}

button,
input[type="submit"] {
  display: inline-block;
  padding: 10px !important;
  color: black;
  border: 2px solid black;
  background-color: white;
  font-size: 110%;
  border-radius: 5px;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
}

button:hover,
button:active,
input[type="submit"]:hover,
input[type="submit"]:active {
  background-color: black;
  color: white;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;
}

/*
.ghost-button-transition {
  display: inline-block;
  width: 200px;
  padding: 8px;
  color: #fff;
  border: 2px solid #fff;
  text-align: center;
  outline: none;
  text-decoration: none;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;
}*/
</style>
