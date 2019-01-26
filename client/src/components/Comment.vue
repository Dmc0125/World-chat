<template>
  <div class="comment" v-bind:class="{ 'dark-mode': darkMode }">
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
    created: String,
    darkMode: Boolean
  }
};
</script>

<style lang="scss" scoped>
.comment {
  max-width: 100%;
  height: fit-content;
  padding: 10px;
  margin-bottom: 10px;
  text-align: left;
}

.date {
  font-size: 14px;
  margin-top: 3px;
}

p,
h3 {
  word-wrap: break-word;
}

// DARK MODE

.dark-mode {
  h3 {
    color: #fff;
  }

  p {
    color: $lighter-grey;
  }
}
</style>
