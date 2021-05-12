<template>
  <text
    class="text-button"
    @click="onClick"
    :style="`color: ${styleSchema.color.primary}`"
    >{{ label }}</text
  >
</template>

<script>
import { styleSchema } from "../style/styleSchema";
export default {
  data() {
    return {
      styleSchema,
    };
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
  name: "TextButton",
  props: {
    label: {
      default: "按鈕",
      type: String,
    },
  },
};
</script>

<style>
.text-button {
  color: #220ed6;
}
</style>
