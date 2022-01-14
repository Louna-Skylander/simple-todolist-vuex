<template>
  <div>
    <!-- fetch todos state from main.js in the TodosList-component  -->
    <!-- <Todo v-for="(todo, index) in $store.state.todos" :key="index" /> -->
    <!-- "in..", use todos instead of $store.state.todos because it's in computed: ... -->

    <Todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "./Todo.vue";

export default {
  components: {
    Todo,
  },
  computed: {
    ...mapState({
      todos: "todos",
    }),
  },
};
</script>

<style>
</style>