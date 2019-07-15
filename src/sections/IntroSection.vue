<template>
  <section :style="containerStyle" class="container container-intro">
    <div class="container__wrapper">
      <slot name="beforeTitle"/>
      <slot/>
      <h1>
        Dit doet de overheid met jouw geld
      </h1>
      <p>Als het budget van de overheid 1000 euro zou zijn, hoe wordt dat geld dan verdeeld?</p>
      <slot name="insideWrapperBefore"/>
      <slot/>
      <slot name="insideWrapperAfter"/>
    </div>
    <slot name="outsideWrapper"/>
  </section>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "#fff"
    },
    height: {
      type: String,
      default: "auto"
    },
  },
  computed: {
    containerStyle() {
      return `background-color: ${this.bgColor}; min-height: ${this.height}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  display: flex;
  align-items: baseline;
  overflow: hidden;
  flex-direction: column;

  &-intro {
    margin-bottom: 50px; // for the arrow
  }

  &__wrapper {
    position: relative;
    z-index: $index-intro-section;
    width: 100%;
    max-width: $container-width;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 20px 0 20px 0;
    font-size: 2em;
    line-height: 1;
    text-align: center;

    @include tablet {
      font-size: 3em;
    }
  }

  p {
    margin: 0 0 15px 0;
    font-size: 18px;
    line-height: 1.5;
    text-align: center;
  }
}
</style>
