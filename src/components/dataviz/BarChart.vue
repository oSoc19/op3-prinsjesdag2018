<template>
  <section class="chart-wrapper">

      <div :key="section.id"
           :style="{ backgroundColor: section.blockColor, height: section.barChartPercentage + '%' }"
           v-for="section in sections"
           v-if="section.barChartPercentage"
           :class="section.title"
           class="chart">
          <div
             v-if="(section.barChartPercentage > 2)"
             class="chart-text">
            <span class="chart-title">
              <span class="chart-title__department">{{ section.title }}</span>
              <span class="chart-title__amount">{{ section.amountInBillions }} miljard</span>
            </span>
        </div>

        <div
          v-else
          class="chart-text__invisible"
          @click="toggleTitle(section.title)">
            <div
               v-if="(section.title === activeTitle)"
               :style="{ backgroundColor: section.blockColor, opacity: .8 }"
               class="chart-text__invisible--content"
               v-click-outside="outside">
             <span class="chart-title">
              <span class="chart-title__department">{{ section.title }}</span>
              <span class="chart-title__amount">{{ section.amountInBillions }} miljard</span>
             </span>
          </div>
        </div>
    </div>
  </section>
</template>
<script>
export default {
  directives: {
    "click-outside": {
      bind: function(el, binding, vNode) {
        if (typeof binding.value !== "function") {
          const compName = vNode.context.name;
          let warn = `[Vue-click-outside:] provided expression '${
            binding.expression
          }' is not a function, but has to be`;
          if (compName) {
            warn += `Found in component '${compName}'`;
          }
          // console.warn(warn);
        }
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener("click", handler);
        document.addEventListener("touchstart", handler);
      },

      unbind: function(el, binding) {
        document.removeEventListener("click", el.__vueClickOutside__);
        document.removeEventListener("touchstart", el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
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
    trackerId: {
      type: String,
      default: ""
    },
    blockAmount: {
      type: Number
    },
    textColor: {
      type: String,
      default: "#000"
    }
  },
  data() {
    return {
      tracked: false,
      activeTitle: ""
    };
  },
  methods: {
    outside: function(title) {
      this.toggleTitle(title);
    },
    toggleTitle(title) {
      if (title === this.activeTitle) {
        this.activeTitle = "";
      } else {
        this.activeTitle = title;
      }
    }
  },
  computed: {
    containerStyle() {
      return `background-color: ${this.bgColor}; color: ${this.textColor};`;
    }
  }
};
</script>
<style lang="scss">
.chart-wrapper {
  height: 100vh;
}

.chart-text {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .chart-title {
    padding: 2px 16px;
    border-radius: 50px;
    text-align: left;
    margin: 0 5px;
    width: 100%;
    display: flex;
    align-content: flex-start;

    @include tablet {
      margin: 0 25px;
      background: rgba(255, 255, 255, 0.5);
    }

    // Name of department
    &__department {
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      width: 80%;
      font-size: 0.8em;
    }

    // Amount department gets
    &__amount {
      width: 30%;
      font-size: 0.8em;
      text-align: right;
    }
  }

  &__invisible {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: zoom-in;
    font-size: 0.8em;

    @include desktop {
      font-size: 1em;
    }

    &--content {
      width: 100%;
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .chart-title {
      width: auto;
      padding: 2px 5px;
      border-radius: 50px;
      color: black;
      display: flex;
      justify-content: center;
      align-items: center;

      &__department {
        font-weight: 600;
        margin-right: 5px;
      }
    }
  }
}
</style>
