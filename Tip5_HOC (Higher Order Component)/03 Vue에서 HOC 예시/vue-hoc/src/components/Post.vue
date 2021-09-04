<template>
  <div>
    <h2>ID: {{ id }}</h2>
    <div>데이터: {{ data }}</div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "YWPost",

  props: {
    id: {
      type: Number,
      default: -999,
    },

    data: null,
  },

  // data: () => ({
  //   data: null,
  // }),

  // async created() {
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts/1"
  //   );
  //   this.data = data;
  // },
};
</script>

<style></style>
