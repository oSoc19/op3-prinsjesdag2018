<template>
  <div class="blocks" ref="moneyblocks">
    <div class="block" :key="block.id" :style="{ backgroundColor: block, width: blockSize + 'px', height: blockSize + 'px' }" v-for="block in amountOfBlocksPerSection"> </div>
  </div>
</template>
<script>
// IE does not support .find (ノ⁠ಠ ∩ಠ)⁠ノ⁠彡⁠(｡⁠ㅁ ｡ )
import 'jspolyfill-array.prototype.find';

  export default {
  props: {
    sections: {
      type: Array,
      default: () => []
    },
    activeSectionId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      blockSize: 0,
      windowWidth: 0,
      windowHeight: 0
    };
  },
  mounted() {
    window.addEventListener("resize", this.getWindowWidth);
    window.addEventListener("resize", this.getWindowHeight);
    this.getWindowWidth();
    this.getWindowHeight();
  },
  methods: {
    getBlockSize() {
      this.windowWidth = document.documentElement.clientWidth;
      this.windowHeight = document.documentElement.clientHeight;
      const sum = this.windowWidth * this.windowHeight;
      const total = Math.sqrt(sum / 1000);
      this.blockSize = total - 1;
    },
    getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      this.getBlockSize();
    },
    getWindowHeight() {
      this.windowHeight = document.documentElement.clientHeight;
      this.getBlockSize();
    }
  },
  computed: {
    amountOfBlocksPerSection() {
      const activeSection = this.sections.find(
        section => section.id === this.activeSectionId
      );
      const activeSectionIndex = this.sections.indexOf(activeSection);
      const sectionsToShow = this.sections.slice(0, activeSectionIndex + 1);

      let blocks = [];
      sectionsToShow.forEach(section => {
        for (let i = 0; i < section.blockAmount; i++) {
          blocks.push(section.blockColor);
        }
      });

      return blocks;
    }
  }
};
</script>

<style lang="scss" scoped>
.blocks {
  position: fixed;
  z-index: $index-money-blocks;
  width: 100%;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  pointer-events: none;
  transform: rotateX(180deg);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  transition: top 1s ease 1s;

  .block {
    height: 16.45px;
    width: 16.45px;
    border: 1px solid white;
    transform: rotateX(180deg);
    animation: bounce-in-top 1.5s forwards;

    // Animate last 3 blocks for Tetris-like effect
    &:last-child {
      animation: bounce-in-top 1.6s forwards;
    }

    &:nth-last-child(2) {
      animation: bounce-in-top 1.7s forwards;
    }

    &:nth-last-child(3) {
      animation: bounce-in-top 1.8s forwards;
    }
  }

  @keyframes bounce-in-top {
    0% {
      transform: translateY(500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(25px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(4px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(4px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
}
</style>
