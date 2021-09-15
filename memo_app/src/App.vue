<template>
  <Hedder></Hedder>
  <TittleList></TittleList>
  <CreateNewMemo></CreateNewMemo>
</template>

<script>
import Hedder from "./components/Hedder.vue";
import TittleList from "./components/TittleList.vue";
import CreateNewMemo from "./components/CreateNewMemo.vue";

export default {
  name: "App",
  components: {
    TittleList,
    Hedder,
    CreateNewMemo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}
</style>
