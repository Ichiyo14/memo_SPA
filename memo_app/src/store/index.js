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
  },
  mutations: {},
  actions: {},
  modules: {},
});
