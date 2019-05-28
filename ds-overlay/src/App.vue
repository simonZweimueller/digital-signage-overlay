<template>
  <div id="app">
    <CreateImage />
    <UploadImage />
  </div>
</template>

<script>
import CreateImage from "./components/CreateImage.vue";
import UploadImage from "./components/UploadImage.vue";

export default {
  name: "app",
  components: {
    CreateImage,
    UploadImage
  }
};
</script>

<style>
#app {
}
</style>
