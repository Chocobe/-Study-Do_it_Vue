<template>
  <transition-group name="list" tag="ul">
    <li v-for="(todoItem, index) in propsData" v-bind:key="todoItem">
      <i class="checkBtn fas fa-check"></i>
      {{ todoItem }}
      <span class="removeBtn" type="button" v-on:click="removeToDo(todoItem, index)">
        <i class="fas fa-trash"></i>
      </span>
    </li>
  </transition-group>
</template>


<script>
export default {
  props: [
    "propsData"
  ],

  methods: {
    removeToDo(todoItem, index) {
      this.$emit("removeToDo", todoItem, index);      
    }
  }
}
</script>


<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;

    margin: 0.5rem 0;
    padding: 0 0.9rem;

    background-color: #fff;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  /* <transition> */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550);
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
</style>