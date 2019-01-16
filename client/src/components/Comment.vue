<template>
  <div class="comment">
    <h3>{{ name }}</h3>
    <p>{{ message }}</p>
    <p class="date">{{ created | moment("YYYY-MM-DD HH:mm") }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    name: String,
    message: String,
    created: String
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  height: fit-content;
  padding: 10px;
  margin-bottom: 10px;
}

.date {
  font-size: 14px;
  margin-top: 3px;
}
</style>
