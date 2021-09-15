<template>
  <div class="tittlelist">
    <ul id="array-rendering">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.id }}
        <a @click="changeEditStatus(memo.content, memo.id)">{{
          memo.content.split(/\r\n|\r|\n/)[0]
        }}</a>
      </li>
    </ul>
  </div>
  <div class="edit" v-if="editStatus">
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
      this.editStatus = !this.editStatus;
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
      this.editStatus = !this.editStatus;
    },
    remove() {
      this.$store.commit("removeMemo");
      this.editStatus = !this.editStatus;
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
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
</style>
