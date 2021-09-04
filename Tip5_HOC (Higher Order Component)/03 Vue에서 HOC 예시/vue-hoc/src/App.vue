<template>
  <div id="app">
    <br />
    <hr />
    <br />

    <Post />

    <br />
    <hr />
    <br />

    <Comment />

    <br />
    <hr />
    <br />
  </div>
</template>

<script>
import { withRequest } from "@/components/withRequest";
import Post from "@/components/Post.vue";
import Comment from "@/components/Comment.vue";

const postURL = "https://jsonplaceholder.typicode.com/posts/1";
const commentURL = "https://jsonplaceholder.typicode.com/comments?postId=1";

export default {
  name: "YWApp",

  data: () => ({
    myName: "기본값",
  }),

  components: {
    Post: withRequest(postURL)(Post),
    Comment: withRequest(commentURL)(Comment),
  },

  render: h => {
    return h("h1", {
      data: () => ({
        myName: "Hello World",
      }),
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
