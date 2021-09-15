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
  },
  mutations: {
    addMemo(state, content) {
      state.uid = state.uid + 1;
      state.memos.push({
        id: state.uid,
        content: content["content"],
      });
    },
    editMemo(state, memo) {
      const editMemoArrayIndex = state.memos.findIndex(
        (memoData) => memoData.id == memo["id"]
      );
      state.memos[editMemoArrayIndex].content = memo["content"];
    },
  },
  actions: {},
  modules: {},
});
