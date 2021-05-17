<template>
  <view class="row-container">
    <text class="price" :style="signStyle">$</text>
    <text class="price" :style="priceStyle">{{ this.price }}</text>
  </view>
</template>

<script>
export default {
  computed: {
    priceStyle() {
      return { fontSize: `${this.size}px` };
    },
    signStyle() {
      return { fontSize: `${this.size - 6}px`, marginBottom: "3px" };
    },
  },
  name: "price",
  props: {
    price: Number,
    size: {
      default: 18,
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  color: $u-price-color;
  font-weight: 500;
}
</style>
