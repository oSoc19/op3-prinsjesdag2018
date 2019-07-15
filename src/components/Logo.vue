<template>
  <a href="https://nos.nl/op3/" target="_blank" rel="noopener" class="logo">
    <vector src="../assets/img/logo.svg" class="svg" alt="Klik hier om de homepage van NOS Op 3 in een nieuw tabblad te openen"></vector>
  </a>
</template>
<style lang="scss" scoped>
.logo {
  position: absolute;
  align-self: center;
  top: 10px;

  @include desktop {
    top: 20px;
  }

  .svg {
    width: 80px;
    height: 30px;

    @include desktop {
      width: 100px;
    }
  }
}
</style>
