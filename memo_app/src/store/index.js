import { createStore } from "vuex";

export default createStore({
  state: {
    memos: [
      {
        id: 1,
        content: `hogehug
    na`,
      },
      { id: 2, content: "foobar" },
    ],
    uid: 0,
    editMemoArrayIndex: null,
  },
  mutations: {
    addMemo(state, content) {
      state.uid = state.uid + 1;
      state.memos.push({
        id: state.uid,
        content: content["content"],
      });
    },
    getEditMemoArrayIndex(state, memo) {
      state.editMemoArrayIndex = state.memos.findIndex(
        (memoData) => memoData.id == memo["editId"]
      );
    },
    editMemo(state, memo) {
      state.memos[state.editMemoArrayIndex].content = memo["content"];
    },
    removeMemo(state) {
      state.memos.splice(state.editMemoArrayIndex, 1);
    },
  },
  actions: {},
  modules: {},
});
