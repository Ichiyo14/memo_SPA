import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    memos: [],
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
