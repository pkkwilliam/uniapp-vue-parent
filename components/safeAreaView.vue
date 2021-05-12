<template>
  <view class="status"><slot></slot></view>
</template>

<script>
export default {
  name: "SafeAreaView",
};
</script>

<style>
.status {
  margin-top: var(--status-bar-height);
}
</style>
