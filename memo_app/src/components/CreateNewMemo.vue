<template>
  <div class="create-new-memo">
    <button @click="changeCreateStatus">＋</button>
    <div v-show="createStatus">
      <h2>新規メモ</h2>
      <textarea v-model="editContent"></textarea>
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
      editContent: "",
    };
  },
  methods: {
    changeCreateStatus() {
      this.createStatus = !this.createStatus;
    },
    doAdd() {
      const savedContent = this.editContent;
      if (savedContent.split(/\r\n|\r|\n/)[0].trim() === "") {
        alert("一行目が記述されていません。\nタイトルとして記入してください。");
        return;
      }
      this.$store.commit("addMemo", {
        content: savedContent,
      });
      this.changeCreateStatus();
      this.editContent = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
