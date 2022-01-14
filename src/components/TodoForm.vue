<template>
  <div>
      <input type="text" v-model="newTodoItem"/>
      <button @click="addNewTodoItem()">Submit</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ""
        };
    },
    methods: {
        addNewTodoItem() {
            this.$store.dispatch('addNewTodo', this.newTodoItem);
            this.newTodoItem = ""; // clear the input-text after you clicked "submit"-button
        }
    }
}
</script>

<style>

</style>