<template>
  <div class="comments">
    <Comment
      v-for="{ _id, name, message, createdAt } in comments"
      v-bind:key="_id"
      v-bind:name="name"
      v-bind:message="message"
      v-bind:created="createdAt"
      v-bind:darkMode="darkMode"
    />
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: "AllComments",
  components: {
    Comment
  },
  props: {
    comments: Array,
    darkMode: Boolean
  }
};
</script>

<style lang="scss" scoped>
.comments {
  max-width: 50%;
  margin: 0 auto;
}

// RESPONSIVE

@include small() {
  .comments {
    max-width: 90%;
  }
}

@include medium-small() {
  .comments {
    max-width: 80%;
  }
}
</style>
