<template>
  <div class="comment">
    <h3>{{ name }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    name: String,
    message: String
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  height: 75px;
  padding: 10px;
}

h3 {
  margin-bottom: 7px;
}
</style>
