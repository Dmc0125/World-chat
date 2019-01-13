<template>
  <div id="app">
    <Header v-bind:title="title"/>
    <PostComment v-bind:isInactive="isInactive" v-bind:postComment="postComment"/>
    <AllComments v-bind:comments="comments"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostComment from "./components/PostComment.vue";
import AllComments from "./components/AllComments.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
    PostComment,
    AllComments
  },
  data() {
    return {
      title: "WorldChat",
      API_URL:
        window.location.hostname === "localhost"
          ? "http://localhost:5000/comments"
          : "",
      isInactive: false,
      comments: []
    };
  },
  methods: {
    postComment(e) {
      const data = new FormData(e.target);
      const name = data.get("name");
      const message = data.get("message");

      if (name.trim().length < 3 || message.trim().length < 3) {
        // console.log("You must import message and name");
      } else {
        const comment = {
          name,
          message
        };

        fetch(this.API_URL, {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "content-type": "application/json"
          }
        })
          .then(res => res.json())
          .catch(err => console.log(err))
          .then(() => {
            this.getComments();
            this.isInactive = true;
          });

        setTimeout(() => {
          this.isInactive = false;
        }, 15000);

        e.target.reset();
      }
    },
    async getComments() {
      try {
        const { data } = await axios.get(this.API_URL);
        const allComments = data.map(comment => comment);
        this.comments = [...allComments.reverse()];
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.getComments();
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
