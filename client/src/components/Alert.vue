<template>
  <div class="alert">
    <h3>Name and message are required!</h3>
  </div>
</template>

<script>
export default {
  name: "Alert"
};
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  background-color: rgb(226, 83, 83);
  width: 30%;
  padding: 15px 0;
  transform: translate(-50%, -50%);
  left: 50%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  animation: shake 3s ease-in-out;
}

// ANIMATIONS

@keyframes shake {
  0% {
    top: -150px;
  }

  40% {
    top: 200px;
  }

  60% {
    top: 200px;
  }

  100% {
    top: -150px;
  }
}

// RESPONSIVE

@include small() {
  .alert {
    width: 90%;
    padding: 5px 0;
  }

  h3 {
    font-size: 16px;
  }
}

@include medium-small() {
  .alert {
    width: 80%;
    padding: 10px 0;
  }

  h3 {
    font-size: 17px;
  }
}

@include large() {
  .alert {
    width: 50%;
  }
}
</style>
