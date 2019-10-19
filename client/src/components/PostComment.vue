<template>
  <div class="container" :class="{ 'inactive': isInactive, 'dark-mode': darkMode }">
    <h2>Post a comment</h2>

    <form @submit.prevent="formSubmitted">
      <label class="i-line-chars">{{ 50 - name.length }}</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Write your name..."
        maxlength="50"
        v-model="name"
      >
      
      <label class="t-line-chars">{{ 200 - message.length }}</label>
      <textarea
        name="message"
        id="message"
        placeholder="Message..."
        maxlength="200"
        v-model="message"
      ></textarea>
      
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
    isInactive: Boolean,
    darkMode: Boolean
  },
  data() {
    return {
      name: "",
      message: ""
    };
  },
  methods: {
    formSubmitted(e) {
      this.postComment(e);

      this.name = "";
      this.message = "";
    }
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
  position: relative;
}

input {
  width: 100%;
  height: 50px;
  border: 2px solid $grey;
  border-radius: 10px;
  padding-left: 20px;
  margin-bottom: 15px;
  font-size: 16px;
}

textarea {
  resize: none;
  width: 100%;
  height: 200px;
  border: 2px solid $grey;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 16px;
}

button {
  width: 180px;
  height: 40px;
  border-radius: 10px;
  background-color: inherit;
  border: 2px solid $call-to-action;
  color: $call-to-action;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: $call-to-action;
    border: 0;
    color: #fff;
  }
}

label {
  position: absolute;
  font-size: 12px;
  font-weight: 300;
  transform: translate(-50%, -50%);
  color: $grey;
}

.i-line-chars {
  right: 2px;
  top: 38px;
}

.t-line-chars {
  right: 2px;
  top: 252px;
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
    border: $lighter-light 2px solid;
    color: $lighter-light;
  }

  ::placeholder {
    color: $lighter-grey;
  }
}

// DARK MODE

.dark-mode {
  h2 {
    color: #fff;
  }

  input,
  textarea {
    background-color: $secondary-dark;
    border: 0;
    color: #fff;
  }

  button {
    border-color: $primary-light;
    color: $primary-light;

    &:hover {
      background-color: $primary-light;
      border: 0;
      color: $primary-dark;
    }
  }

  .line {
    background-color: $secondary-dark;
  }

  .inactive {
    input,
    textarea {
      border: 0;
      background-color: $darker-dark;
    }

    button {
      border: $lighter-dark 2px solid;
      color: $lighter-dark;
    }

    ::placeholder {
      color: $darker-grey;
    }
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

  .i-line-chars {
    right: 2px;
    top: 28px;
  }

  .t-line-chars {
    right: 2px;
    top: 242px;
  }
}

@include medium-small() {
  .container {
    width: 80%;
  }
}
</style>
