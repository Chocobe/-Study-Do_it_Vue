<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addToDo="addToDo"></todo-input>
    <todo-list v-bind:propsData="todoItems"></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>


<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  data() {
    return {
      todoItems: []
    }
  },

  methods: {
    addToDo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    }
  },

  created() {
    if(localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  
  components: {
    "todo-header": TodoHeader,
    "todo-input": TodoInput,
    "todo-list": TodoList,
    "todo-footer": TodoFooter
  }
}
</script>


<style>
  body {
    text-align: center;
    background-color: #f6f6f8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>