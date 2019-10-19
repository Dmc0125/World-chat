<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <Header
      :darkMode="darkMode"
      :title="title"
      @switch-modes="darkMode = !darkMode"
    />
    <PostComment
      :darkMode="darkMode"
      :isInactive="isInactive"
      :postComment="postComment"
    />
    <Loading v-if="isLoading"/>
    <AllComments v-if="!isLoading" :comments="comments" :darkMode="darkMode"/>
    <Alert v-if="showAlert"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostComment from "./components/PostComment.vue";
import AllComments from "./components/AllComments.vue";
import Alert from "./components/Alert.vue";
import Loading from "./components/Loading.vue";

import { get, post } from "./API";

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
      darkMode: true,
      isInactive: false,
      showAlert: false,
      isLoading: true,
      comments: [],
    };
  },
  methods: {
    async postComment(e) {
      const data = new FormData(e.target);
      const name = data.get("name");
      const message = data.get("message");

      if (name.trim().length < 3 || message.trim().length < 3) {
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 3000);

        return;
      }

      this.isLoading = true;

      const comment = {
        name,
        message
      };

      await post(comment);

      console.log(this.comments);
      this.comments = await this.getComments();

      this.isLoading = false;
      this.isInactive = true;

      setTimeout(() => {
        this.isInactive = false;
      }, 15000);
    },
    async getComments() {
      const response = await get();

      return response;
    }
  },
  async mounted() {
    this.comments = await this.getComments();
    this.isLoading = false;
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
  min-height: 100%;
}

h3 {
  margin-bottom: 7px;
  font-weight: 500;
}

#app {
  min-height: 100vh;
}

// DARKMODE

.dark-mode {
  background-color: $primary-dark;
}
</style>
