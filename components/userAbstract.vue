<template>
  <view class="container">
    <u-avatar :mode="mode" :src="user.imageUrl" />
    <view class="text-container">
      <view class="name-and-qualification-container">
        <text class="name">{{ user.name }}</text>
        <QualificationTag
          class="qualification"
          qualification="PHONE_NUMBER_VERIFIED"
          v-if="user.qualifications.includes('PHONE_NUMBER_VERIFIED')"
        />
      </view>
      <text class="description">{{ user.description }}</text>
    </view>
  </view>
</template>

<script>
import QualificationTag from "../components/qualificationTag";
export default {
  components: {
    QualificationTag,
  },
  name: "UserAbstract",
  props: {
    mode: {
      default: "circle",
      type: String,
    },
    user: {
      default: {},
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 98rpx;
}
.container {
  display: flex;
  flex-direction: row;
}
.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  .description {
    color: $u-secondary-color;
    font-size: 12px;
    margin-top: 3px;
  }
  .name-and-qualification-container {
    display: flex;
    align-items: center;
    .name {
      font-weight: 600;
    }
    .qualification {
      margin-left: 8px;
    }
  }
}
</style>
