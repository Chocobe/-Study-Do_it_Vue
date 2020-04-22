<template>
  <div id="app">  
    <todo-header></todo-header>
    <todo-input v-on:addToDo="addToDo"></todo-input>
    <todo-list v-bind:propsData="todoItems" v-on:removeToDo="removeToDo"></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
  </div>
</template>


<script>
import ToDoHeader from "./components/ToDoHeader.vue";
import ToDoInput from "./components/ToDoInput.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoFooter from "./components/ToDoFooter.vue";

export default {
  data() {
    return {
      todoItems: []
    };
  },

  methods: {
    addToDo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },

    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },

    removeToDo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
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
    "todo-header": ToDoHeader,
    "todo-input": ToDoInput,
    "todo-list": ToDoList,
    "todo-footer": ToDoFooter
  }
}
</script>


<style>
  body {
    text-align: center;
    font-family: 'Ubuntu', sans-serif;
    background-color: #f6f6f8;
  }

  input {
    width: 200px;
    border-style: groove;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>