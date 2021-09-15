<template>
  <div class="tittlelist">
    <ul id="array-rendering">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.id }}
        {{ memo.content.split(/\r\n|\r|\n/)[0] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TittleList",
  data() {
    return {
      memos: this.$store.state.memos,
    };
  },
  methods: {},
  computed: {},
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
