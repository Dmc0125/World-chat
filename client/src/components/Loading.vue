<template>
  <div id="spinner"></div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
#spinner {
  height: 200px;
  opacity: 1;
  position: relative;
  transition: opacity linear 0.1s;
  background-color: inherit;

  &::before {
    animation: 1s linear infinite spinner;
    border: solid 5px $grey;
    border-bottom-color: $call-to-action;
    border-radius: 50%;
    content: "";
    height: 80px;
    left: 50%;
    opacity: inherit;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transform-origin: center;
    width: 80px;
    will-change: transform;
  }
}

// ANIMATIONS

@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
</style>
