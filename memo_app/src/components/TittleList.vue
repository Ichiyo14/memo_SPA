<template>
  <div class="tittlelist">
    <ul id="array-rendering">
      <li v-for="memo in memos" :key="memo.id">
        <a @click="changeEditStatus(memo.content, memo.id)">{{
          memo.content.split(/\r\n|\r|\n/)[0]
        }}</a>
      </li>
    </ul>
  </div>
  <div class="edit" v-if="this.$store.state.editStatus">
    <h2>メモの詳細</h2>
    <textarea v-model="editContent"></textarea>
    <button class="update" @click="update">編集</button>
    <button class="remove" @click="remove">削除</button>
  </div>
</template>

<script>
export default {
  name: "TittleList",
  data() {
    return { editStatus: false, editContent: "" };
  },
  methods: {
    changeEditStatus(content, id) {
      this.$store.commit("toggleEditStatus");
      this.editContent = content;
      this.$store.commit("getEditMemoArrayIndex", {
        editId: id,
      });
    },
    update() {
      if (this.editContent.split(/\r\n|\r|\n/)[0].trim() === "") {
        alert("一行目が記述されていません。\nタイトルとして記入してください。");
        return;
      }
      this.$store.commit("editMemo", {
        content: this.editContent,
      });
      this.$store.commit("toggleEditStatus");
    },
    remove() {
      this.$store.commit("removeMemo");
      this.$store.commit("toggleEditStatus");
    },
  },
  computed: {
    memos() {
      return this.$store.state.memos;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
span {
  font-size: 1.2em;
}

.update,
.remove {
  background-color: #e8deb2;
  border: none;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 10px;
}
.update {
  padding: 10px 145px;
  margin-right: 30px;
  margin-left: 50px;
}
</style>
