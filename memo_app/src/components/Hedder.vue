<template>
  <div class="hedder">
    <h1 v-show="editStatus">{{ tittle[0] }}</h1>
    <h1 v-show="!editStatus">{{ tittle[1] }}</h1>
  </div>
</template>

<script>
export default {
  name: "Hedder",
  data() {
    return {
      tittle: ["一覧", "編集"],
      editStatus: true,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: black;
  font-size: 2em;
}
</style>
