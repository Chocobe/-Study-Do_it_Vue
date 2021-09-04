<template>
  <div class="home">
    <h1>Home 페이지</h1>
  </div>
</template>

<script>
import { myMixin } from "@/mixins/myMixin.js";

export default {
  name: "Home",

  mixins: [myMixin],

  created() {
    alert("이것은 Home컴포넌트의 created()에 작성된 코드");
    console.log("Home에서 this.myName 호출: ", this.myName);
  },
};
</script>
