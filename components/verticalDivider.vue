<template>
  <view
    :style="`border: solid; border-color: ${color}; border-width: ${width}px;`"
  ></view>
</template>

<script>
export default {
  name: "VerticalDivider",
  props: {
    color: {
      default: "#f4652e",
      type: String,
    },
    width: {
      default: 1,
      type: Number,
    },
  },
};
</script>
