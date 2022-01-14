import { createApp } from "vue";
import { createStore } from "vuex"; // Vuex-plugin from Vue
import App from "./App.vue";

const store = createStore({
  state: {
    todos: [
      {
        title: "todo item a",
        completed: false,
      },
      {
        title: "todo item b",
        completed: false,
      },
    ],
  },
  getters: {
    // see data in manipulate state
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },
  mutations: {
    // can change the state
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false,
      });
    },
    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },
    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
  },
  actions: {
    // "dispatch", can do async function
    addNewTodo({ commit }, todoItem) {
      commit("NEW_TODO", todoItem);
    },

    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },

    toggleTodoStatus({ commit }, todoItem) {
      commit("TOGGLE_TODO_STATUS", todoItem);
    },
  },
});

const app = createApp(App); // vue app
app.use(store).mount("#app"); // app.use() === middleware
