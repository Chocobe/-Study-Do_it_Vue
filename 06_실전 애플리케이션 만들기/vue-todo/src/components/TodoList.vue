<template>
  <section>
    <ul>
      <li v-for="(todoItem, index) in propsData" v-bind:key="todoItem">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        
        {{ todoItem }}
        
        <span class="removeBtn" type="button" v-on:click="removeToDo(todoItem, index)">
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>


<script>
export default {
  props: [
    "props-data"
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

    background: white;
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
</style>