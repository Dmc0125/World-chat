<template>
  <div class="container" v-bind:class="{ inactive: isInactive }">
    <h2>Post a comment</h2>

    <form @submit.prevent="postComment">
      <input type="text" name="name" id="name" placeholder="Write your name...">
      <textarea name="message" id="message" placeholder="Message..."></textarea>
      <button type="submit">Post</button>
    </form>

    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "PostComment",
  props: {
    postComment: Function,
    isInactive: Boolean
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 50%;
  height: fit-content;
  margin: 50px auto 25px;
}

h2 {
  margin: 0 0 15px 15px;
}

form {
  width: 100%;
  height: fit-content;
}

input {
  width: 100%;
  height: 50px;
  border: 2px solid $grey;
  border-radius: 25px;
  padding-left: 20px;
  margin-bottom: 15px;
  font-size: 16px;
}

textarea {
  resize: none;
  width: 100%;
  height: 200px;
  border: 2px solid $grey;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 16px;
}

button {
  width: 180px;
  height: 40px;
  border-radius: 20px;
  background-color: inherit;
  border: 2px solid $primary;
  color: $primary;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: $primary;
    border: 0;
    color: #fff;
  }
}

.line {
  height: 2px;
  width: 100%;
  background-color: $grey;
  margin-top: 25px;
}

// INACTIVE FORM

.inactive {
  input,
  textarea {
    pointer-events: none;
    border: $lighter-grey 2px solid;
  }

  button {
    pointer-events: none;
    border: $lighter-prim 2px solid;
    color: $lighter-prim;
  }

  ::placeholder {
    color: $lighter-grey;
  }
}

// RESPONSIVE

@include small() {
  .container {
    width: 90%;
  }

  h2 {
    text-align: center;
  }

  input {
    height: 40px;
    font-size: 14px;
  }

  textarea {
    font-size: 14px;
  }

  button {
    width: 100px;
    font-size: 14px;
  }
}

@include medium-small() {
  .container {
    width: 80%;
  }
}
</style>
