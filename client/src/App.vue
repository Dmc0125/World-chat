<template>
  <div id="app">
    <Header v-bind:title="title"/>
    <PostComment v-on:post="postComment"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostComment from "./components/PostComment.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
    PostComment
  },
  data() {
    return {
      title: "WorldChat",
      comments: []
    };
  },
  methods: {
    postComment(e) {
      console.log(123);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
}

body,
html {
  width: 100%;
  height: 100%;
}
</style>
