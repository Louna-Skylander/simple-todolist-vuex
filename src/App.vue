<template>
  <h1>Todos</h1>
  <h3>Completed: {{ completedTodos }}</h3>
  <h3>Pending: {{ pendingTodos }}</h3>
  <TodosList />
  <TodoForm />
</template>

<script>
import { mapGetters } from "vuex";
import TodosList from "./components/TodosList.vue";
import TodoForm from "./components/TodoForm.vue";
export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  },
  computed: {
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
