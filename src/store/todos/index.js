import { getTodosServices } from "@/services/todosServices";

// initial state
const state = () => ({
  todos: [],
});

// actions
const actions = {
  async getTodos({}) {
    const res = await getTodosServices();
    commit("setTodos", res);
  },
};

// mutations
const mutations = {
  setTodos(state, res) {
    state.todos = res;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
