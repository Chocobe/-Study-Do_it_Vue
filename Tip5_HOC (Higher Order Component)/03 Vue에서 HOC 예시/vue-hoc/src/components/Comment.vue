<template>
  <div>
    <h1>Comment ID: {{ id }}</h1>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import { myMixin } from "@/mixins/myMixin";

export default {
  name: "YWComment",

  mixins: [myMixin],
};
</script>

<style></style>
