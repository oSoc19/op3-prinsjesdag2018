<template>
  <section class="colofon-wrapper">
    <div class="colofon">
      <vector src="../assets/img/bye.svg" class="svg"></vector>
      <colofon-social></colofon-social>
      <div class="text">
        <p><strong>Redactie:</strong> <br> Erika de Joode, Leen Kraniotis</p>
        <p><strong>Design en code:</strong> <br> Lars Boogaard, Mike van Boxtel en Nienke Dekker</p>
    </div>
    </div>
  </section>
</template>
<script>
import ColofonSocial from "./social/ColofonSocial";

export default {
  components: {
    ColofonSocial
  }
};
</script>
<style lang="scss" scoped>
.colofon-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 350px 0 50px 0;
  background: white;
  background-size: 100%;
  flex-direction: column;

  @include tablet {
    padding: 250px 0 50px 0;
  }

  @include desktop {
    padding: 220px 0 50px 0;
  }

  h1 {
    font-weight: 500;
    text-align: center;
  }
}

.text {
  font-size: 1em;
  line-height: 1.5em;
  padding: 20px;
  @include tablet {
    width: 600px;
  }
}

.svg {
  width: 150px;
  margin: 0 auto 50px auto;

  @include tablet {
    width: 200px;
  }
}
</style>
