<template>
  <div id="app">
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <Chart></Chart>
  </div>
</template>


<script>
import Chart from "./Chart.vue";

export default {
  name: "app",
  
  date() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  components: {
    Chart
  }
}
</script>