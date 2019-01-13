<template>
  <div class="comments">
    <Comment
      v-for="{ _id, name, message, createdAt } in comments"
      v-bind:key="_id"
      v-bind:name="name"
      v-bind:message="message"
      v-bind:created="createdAt"
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
    comments: Array
  }
};
</script>

<style lang="scss" scoped>
.comments {
  width: 50%;
  margin: 0 auto;
}

// RESPONSIVE

@include small() {
  .comments {
    width: 90%;
  }
}

@include medium-small() {
  .comments {
    width: 80%;
  }
}
</style>
