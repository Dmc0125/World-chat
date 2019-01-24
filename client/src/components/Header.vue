<template>
  <header v-bind:class="{ 'dark-mode': darkMode }">
    <h1>{{ title }}</h1>
    <div class="switch-modes">
      <h4>Dark mode</h4>
      <div class="btn-container" @click="$emit('switch-modes')"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    darkMode: Boolean
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  padding: 0 15%;
  background-color: $primary;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.switch-modes {
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
  }
}
</style>
