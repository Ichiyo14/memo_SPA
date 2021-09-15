<template>
  <h1>メモタイトル一覧</h1>
  <TittleList></TittleList>
  <CreateNewMemo v-show="!this.$store.state.editStatus"></CreateNewMemo>
</template>

<script>
import TittleList from "./components/TittleList.vue";
import CreateNewMemo from "./components/CreateNewMemo.vue";

export default {
  name: "App",
  components: {
    TittleList,
    CreateNewMemo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
  background-color: #fbf8ef;
  width: 500px;
}
textarea {
  resize: none;
  width: 450px;
  height: 250px;
  background-color: #f7f1e0;
  border-color: #e3d7a3;
  border-width: 2px;
}
h1,
h2 {
  border-bottom: double 5px #e3d7a3;
  margin-right: 42px;
}
</style>
