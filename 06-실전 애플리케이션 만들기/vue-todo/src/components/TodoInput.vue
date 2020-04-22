<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newToDoItem" placeholder="Type what you have to do" v-on:keyup.enter="addToDo">
    <span class="addContainer" v-on:click="addToDo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" v-on:close="showModal=false">
      <h3 slot="header">경고</h3>

      <span slot="footer" v-on:click="showModal=false">
        할 일을 입력하세요.
        <i class="fas fa-times"></i>
      </span>
    </modal>
  </div>
</template>


<script>
import Modal from "./common/Modal.vue";

export default {
  data: () => {
    return {
      newToDoItem: "",
      showModal: false
    };
  },

  methods: {
    addToDo() {
      if(this.newToDoItem !== "") {
        let value = this.newToDoItem && this.newToDoItem.trim();
        this.$emit("addToDo", value);
  
        this.clearInput();

      } else {
        console.log("공백 입력함");
        this.showModal = !this.showModal;
      }
    },

    clearInput: function() {
      this.newToDoItem = "";
    }
  },

  components: {
    Modal: Modal
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