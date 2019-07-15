<template>
  <ul class="menu" :class="activeSectionId">
    <li v-for="(section, key) in sections" :key="key">
      <a v-scroll-to="'#' + section.id" :class="{ active: section.id === activeSectionId }">
        <div class="dot"/>
        <div class="title" v-html="section.title"/>
      </a>
    </li>
  </ul>
</template>

<script>
import VueScrollTo from "vue-scrollto";
import data from "@/data.json";

export default {
  directives: {
    "scroll-to": VueScrollTo
  },
  props: {
    activeSectionId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      sections: data.sections
    };
  }
};
</script>

<style lang="scss" scoped>
// Hide menu in intro
ul.menu.summary,
ul.menu.intro {
  display: none;
}

.menu {
  position: fixed;
  z-index: $index-side-menu;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  margin: 0;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 500px;
  padding: 5px;
  @include tablet {
    left: 15px;
    display: block;
  }

  li {
    position: relative;
    list-style-type: none;
    margin: 10px 0;
    padding: 0;

    a {
      &:hover {
        .title {
          opacity: 0;
          @include desktop {
            opacity: 1;
          }
        }
      }

      &.active {
        .dot {
          background-color: transparent;
        }
      }

      .dot {
        width: 10px;
        height: 10px;
        background-color: #ff6666;
        border: 2px solid #ff6666;
        border-radius: 100%;
        cursor: pointer;
      }

      .title {
        position: absolute;
        top: -10px;
        left: 20px;
        width: auto;
        height: 30px;
        padding: 5px 10px;
        background-color: #fff;
        color: #333;
        box-shadow: 0px 0px 5px 2px rgba(#333, 0.2);
        opacity: 0;
        pointer-events: none;
        white-space: nowrap;
      }
    }
  }
}
</style>
