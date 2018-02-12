import Vue from 'vue';
import VueX from 'vuex';
import api from '../api';

Vue.use(VueX);

export default new VueX.Store({
  state: {
      todos: [
      {
        id: 1,
        label: `Ce que je veux`,
      },
      {
        id: 2
        label: `Ce que je veux de mieux`,
      },
      ],
    },
  getters: {
    count(state) {
      return state.todos.length;
    },
  todos(state) {
    return state.todos;
    }
  },
  mutations: {
    POPULATE_TODOS(state, todos){
      state.todos = todos;
    },
  },
  actions: {
    getTodos(context) {
      api.get(`/todos`)
        .then((response) => {
            context.commit(`POPULATE_TODOS`, response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
});
