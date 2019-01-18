<template>
  <div id="app">
    <Header v-bind:title="title"/>
    <PostComment v-bind:isInactive="isInactive" v-bind:postComment="postComment"/>
    <Loading v-if="isLoading"/>
    <AllComments v-if="!isLoading" v-bind:comments="comments"/>
    <Alert v-if="showAlert"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostComment from "./components/PostComment.vue";
import AllComments from "./components/AllComments.vue";
import Alert from "./components/Alert.vue";
import Loading from "./components/Loading.vue";

import axios from "axios";

export default {
  name: "app",
  components: {
    Header,
    PostComment,
    AllComments,
    Alert,
    Loading
  },
  data() {
    return {
      title: "WorldChat",
      API_URL:
        window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "https://api-world-chat.now.sh",
      isInactive: false,
      showAlert: false,
      isLoading: true,
      comments: []
    };
  },
  methods: {
    postComment(e) {
      const data = new FormData(e.target);
      const name = data.get("name");
      const message = data.get("message");

      if (name.trim().length < 3 || message.trim().length < 3) {
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      } else {
        this.isLoading = true;

        const comment = {
          name,
          message
        };

        fetch(`${this.API_URL}/comments`, {
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
        const { data } = await axios.get(`${this.API_URL}/comments`);
        const allComments = data.map(comment => comment);
        this.comments = [...allComments.reverse()];
        this.isLoading = false;
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

h3 {
  margin-bottom: 7px;
  font-weight: 500;
}
</style>
