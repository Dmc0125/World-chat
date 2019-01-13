<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: $primary;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
