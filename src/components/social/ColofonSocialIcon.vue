<template>
  <a :href="href" :target="target ? '_blank' : '_self'" rel="noreferrer noopener" class="colofon-social-icon">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    target: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.colofon-social-icon {
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

  img {
    max-width: 40%;
  }
}
</style>
