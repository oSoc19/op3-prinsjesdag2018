<template>
  <div
    class="scroll-arrow"
    @click="$emit('click')">
    <span class="scroll-text">Scroll</span>
    <img src="../assets/img/scroll-arrows.svg?external" alt="">
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>

  .scroll-arrow {
    position: absolute;
    z-index: $index-scroll-arrow;
    right: 0;
    bottom: 80px;
    left: 0;
    margin: 0 auto;
    width: 20px;
    cursor: pointer;

    @include mobile-large {
      bottom: 120px;
    }

    img {
      position: relative;
      top: 25px;
      width: 100%;
      animation: downdown 1s infinite;
    }
  }

  .scroll-text {
    background-color: rgb(255, 102, 102);
    color: white;
    font-weight: 600;
    text-transform: lowercase;
    padding: 7px 15px;
    border-radius: 40px;
    margin-left: -25px;
    margin-bottom: 10px;
  }

  @keyframes downdown {
    0% { opacity: 0; transform: translateY(0px);}
    33%, 66% { opacity: 1; }
    100% { opacity: 0; transform: translateY(12px); }
  }
</style>

