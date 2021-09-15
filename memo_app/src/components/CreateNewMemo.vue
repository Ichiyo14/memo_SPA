<template>
  <div class="create-new-memo">
    <button @click="changeCreateStatus">＋</button>
    <div v-show="createStatus">
      <textarea v-model="content"></textarea>
      <p>{{ content }}</p>
      <button @click="doAdd">追加</button>
      <p>{{ savedContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNewMemo",
  data() {
    return {
      createStatus: false,
      content: "",
      savedContent: "",
    };
  },
  methods: {
    changeCreateStatus() {
      this.createStatus = !this.createStatus;
    },
    doAdd() {
      this.savedContent = this.content;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
