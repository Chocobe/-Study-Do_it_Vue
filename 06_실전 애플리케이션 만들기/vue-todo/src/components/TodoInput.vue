<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" placeholder="Type what you have to do" v-on:keyup.enter="addToDo">
    <span class="addContainer" v-on:click="addToDo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>  
</template>


<script>
export default {
  data: () => {
    return {
      newToDoItem: ""
    };
  },

  methods: {
    addToDo() {
      if(this.newToDoItem !== "") {
        let value = this.newToDoItem && this.newToDoItem.trim();
        this.$emit("addToDo", value);
  
        this.clearInput();
      }
    },

    clearInput: function() {
      this.newToDoItem = "";
    }
  }
}
</script>


<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;

    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>