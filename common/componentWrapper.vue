<template>
  <view>
    <u-modal
      ref="uModal"
      v-model="modal.show"
      :content="modal.content"
      :show-cancel-button="modal.showCancelButton"
      :show-title="true"
      :title="modal.title"
    />
  </view>
</template>

<script>
export default {
  props: {
    modal: {
      default: {
        show: false,
        showCancelButton: false,
        title: "提示",
        content: "內容",
      },
      type: Object,
    },
  },
  name: "ComponentWrapper",
};
</script>

<style></style>
