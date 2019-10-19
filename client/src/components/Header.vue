<template>
  <header :class="{ 'dark-mode': darkMode, 'menu-opened': isOpened }">
    <h1>{{ title }}</h1>
    <div class="switch-modes">
      <h4>Dark mode</h4>
      <div class="btn-container" @click="$emit('switch-modes')"></div>
    </div>

    <div class="arrow" @click="toggleMenu">
      <img src="./../img/arrow.svg" alt="arrow">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    darkMode: Boolean
  },
  data() {
    return {
      isOpened: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpened = !this.isOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  padding: 0 15%;
  background-color: $call-to-action;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 {
  grid-area: logo;
}

.arrow {
  display: none;
  cursor: pointer;
}

.switch-modes {
  grid-area: dark-mode;
  display: flex;
  align-items: center;
}

.btn-container {
  width: 25px;
  height: 14px;
  border-radius: 7px;
  background-color: $grey;
  position: relative;
  margin-left: 10px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: darken($color: $grey, $amount: 30%);
    transition: all 200ms ease-in-out;
  }
}

// DARK MODE

.dark-mode {
  background-color: inherit;

  .btn-container {
    &::before {
      left: 70%;
      background-color: $primary-light;
    }
  }
}

// RESPONSIVE

@include small() {
  .dark-mode {
    header {
      background-color: $header-dark;
    }
  }

  header {
    height: 70px;
    padding: 10px 0 0;
    align-items: space-around;
    flex-direction: column;
    display: inherit;
    position: relative;
  }

  h1 {
    text-align: center;
  }

  .switch-modes {
    display: none;
  }

  .arrow {
    display: inherit;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 0;
  }

  // MENU OPENED

  .menu-opened {
    height: 120px;

    .arrow {
      transform: rotate(180deg) translate(50%, 50%);
    }

    .switch-modes {
      display: flex;
      transform: translate(-50%, -50%);
      animation: slidein 1s;
      position: absolute;
      left: 50%;
      bottom: 30px;
    }
  }
}

@include medium-small() {
  .dark-mode {
    header {
      background-color: $header-dark;
    }
  }

  header {
    height: 70px;
    padding: 10px 0 0;
    align-items: space-around;
    flex-direction: column;
    display: inherit;
    position: relative;
  }

  h1 {
    text-align: center;
  }

  .switch-modes {
    display: none;
  }

  .arrow {
    display: inherit;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: 0;
  }

  // MENU OPENED

  .menu-opened {
    height: 120px;

    .arrow {
      transform: rotate(180deg) translate(50%, 50%);
    }

    .switch-modes {
      display: flex;
      transform: translate(-50%, -50%);
      animation: slidein 1s;
      position: absolute;
      left: 50%;
      bottom: 30px;
    }
  }
}

@include large() {
  header {
    padding: 0 10%;
  }
}

// ANIMATIONS

@keyframes slidein{
  0% {
    left: 0;
    opacity: 0;
  }

  20% {
    left: 0;
    opacity: 0;
  }

  100% {
    left: 50%;
    opacity: 1;
  }
}
</style>
