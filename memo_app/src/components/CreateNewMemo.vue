<template>
  <div class="create-new-memo">
    <button class="memo-plus" @click="changeCreateStatus">＋</button>
    <div v-show="createStatus">
      <h2>新規メモ</h2>
      <button class="add" @click="doAdd">追加</button>
      <textarea v-model="editContent"></textarea>
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
<style scoped>
.memo-plus {
  border: none;
  font-size: 20px;
  font-weight: 600;
  background-color: #e8deb2;
}
.add {
  background-color: #e8deb2;
  border: none;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
