<template>
  <a :class="{ disabled: success }" :data-clipboard-text="href" class="colofon-social-link">
    <slot/>
    <span :class="{ active: success }" class="colofon-social-link__succes">De link is gekopieerd naar het klembord</span>
  </a>
</template>

<script>
import ClipboardJS from "clipboard";

export default {
  props: {
    href: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      success: false
    };
  },
  mounted() {
    const clipboard = new ClipboardJS(".colofon-social-link");

    clipboard.on("success", () => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 1000);
    });
  }
};
</script>

<style lang="scss" scoped>
.colofon-social-link {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: #fff;
  border-radius: 100%;
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.8;
  }

  img {
    max-width: 40%;
  }

  &__succes {
    position: fixed;
    right: 0;
    bottom: 20px;
    left: 0;
    width: 300px;
    margin: 0 auto;
    padding: 5px;
    background-color: #333;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    pointer-events: none;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s;

    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
