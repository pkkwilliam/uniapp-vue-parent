<template>
  <view class="card-container" :style="[cardStyle]"><slot></slot></view>
</template>

<script>
import styleSchema from "../uview-ui/theme.scss";

const { backgroundColor, backgroundColorSecondary, cardBackgroundColor } =
  styleSchema;

export default {
  computed: {
    cardStyle() {
      let color = cardBackgroundColor;
      if (this.type === "primary") {
        color = backgroundColor;
      } else if (this.type === "secondary") {
        color = backgroundColorSecondary;
      }
      return { background: color };
    },
  },
  name: "Card",
  props: {
    type: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
.card-container {
  border-radius: 10px;
  display: flex;
  padding: 15px;
  width: 100%;
}
</style>
