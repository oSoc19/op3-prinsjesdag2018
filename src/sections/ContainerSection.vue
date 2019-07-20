<template>
  <section :style="containerStyle" class="container">
    <div class="money-left">
      <p :style="{backgroundColor: backgroundTitleColor, color: textTitleColor}"> Geld over:</p>
      <div class="money-sum">
        € <span class="money-sum__float">{{ blockSum }}</span>
      </div>
    </div>
    <div class="container__wrapper">
      <slot name="insideWrapperBefore"/>
      <slot/>
      <slot name="insideWrapperAfter"/>
    </div>
    <slot name="outsideWrapper"/>
  </section>
</template>
<script>
// IE does not support .find (ノ⁠ಠ ∩ಠ)⁠ノ⁠彡⁠(｡⁠ㅁ ｡ )
import 'jspolyfill-array.prototype.find';

export default {
  props: {
    sections: {
      type: Array
    },
    activeSection: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    height: {
      type: String,
      default: "auto"
    },
    sectionId: {
      type: String,
      default: ""
    },
    blockAmount: {
      type: Number
    },
    barChartPercentage: {
      type: Number
    },
    amountInBillions: {
      type: Number
    },
    backgroundTitleColor: {
      type: String
    },
    textTitleColor: {
      type: String
    }
  },
  computed: {
    containerStyle() {
      return `background-color: ${this.bgColor};`;
    },
    amountOfBlocksPerSection() {
      const activeSection = this.sections.find(
        section => section.id === this.sectionId
      );
      const activeSectionIndex = this.sections.indexOf(activeSection);
      const sectionsToShow = this.sections.slice(0, activeSectionIndex + 1);

      const blocks = [];
      sectionsToShow.forEach(section => {
        for (let i = 0; i < section.blockAmount; i++) {
          blocks.push(section.id);
        }
      });

      return blocks.length;
    },
    blockSum() {
      let sum = 1000 - this.amountOfBlocksPerSection;
      if (sum < 0) {
        sum = 0;
      }
      return sum;
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  min-height: 100%;
  z-index: $index-container-section;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: $container-width;
    margin: 0 auto;
    scroll-snap-align: start;
  }

  h2 {
    margin: 0 0 20px 0;
    font-size: 40px;
    line-height: 1;
  }

  p {
    margin: 0 0 15px 0;
  }

  .money-left {
    z-index: $index-money-left;
    position: fixed;
    top: 20px;
    right: 20px;
    display: block;

    @include desktop {
      top: 50px;
      right: 50%;
      transform: translate(50%, 0);
      z-index: 0;
    }

    p {
      text-transform: lowercase;
      margin: 5px 0;
      padding: 5px 10px;
      text-align: right;
      border-radius: 500px;
      font-size: 0.8em;

      @include desktop {
        font-size: 1em;
        padding: 10px;
        width: 200px;
        text-align: center;
      }
    }

    .money-sum {
      background-color: #717171;
      border-radius: 500px;
      padding: 5px 10px;
      text-align: justify;
      color: white;
      font-weight: 600 !important;

      @include desktop {
        width: 100%;
        text-align: center;
        background-color: #8b8b8b;
      }
    }

    .money-sum__float {
      float: right;

      @include desktop {
        float: none;
      }
    }
  }
}

.container.fully-in-viewport.in-viewport {
  .money-left {
    position: fixed;
    display: block;
  }
}
.container.below-viewport {
  .money-left {
    display: none;
  }
}
</style>
