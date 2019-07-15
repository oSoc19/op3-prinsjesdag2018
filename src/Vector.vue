<template>
  <div v-once v-html="src">
  </div>
</template>

<script>
export default {
  name: "Vector",
  props: ["src"]
};
</script>
