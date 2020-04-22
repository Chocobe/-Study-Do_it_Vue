<template>
  <div class="inputBox shadow" v-on:click="testFunc">
    <input class="inputTag" type="text" v-model="newToDoItem" v-on:keyup.enter="addToDo" placeholder="Type what you have to do">

    <span class="addContainer" v-on:click="addToDo">
      <i class="addBtn fas fa-plus"></i>
    </span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      newToDoItem: ""
    };
  },

  methods: {
    addToDo() {
      if(this.newToDoItem !== "") {
        let value = this.newToDoItem && this.newToDoItem.trim();
        this.$emit("addToDo", this.newToDoItem);
        this.clearInput();
      }
    },

    clearInput() {
      this.newToDoItem = "";
    },

    testFunc() {
      $(".inputTag").focus();
    }
  }
}
</script>


<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    width: 3rem;
    
    float: right;
    background: linear-gradient(to right, #6478fb, #8963fb);
    display: block;
    
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: #fff;
    vertical-align: middle;
  }
</style>