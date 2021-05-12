<template>
  <view class="container">
    <view class="option-container"
      ><text class="header">優質特選</text
      ><text class="advertise-text advertise-text-buy">成色優選 品質三包</text>
      <view class="content-container">
        <view class="text-container">
          <text>9.9買LV</text>
          <text>9成新iPhone</text>
        </view>
        <img src="https://cdn.emojidex.com/emoji/seal/Nutella.png?1590864170" />
      </view>
    </view>
    <VerticalDivider color="#FFFFFF" />
    <view class="option-container">
      <text class="header">聚易賣</text>
      <text class="advertise-text advertise-text-sell">高價回收寄賣</text>
      <view class="content-container">
        <view class="text-container">
          <text>免費上門</text>
          <text>48H必賣</text>
        </view>
        <img src="https://cdn.emojidex.com/emoji/seal/Nutella.png?1590864170" />
      </view>
    </view>
  </view>
</template>

<script>
import VerticalDivider from "../common/verticalDivider";
export default {
  components: { VerticalDivider },
  name: "PlatformSelection",
};
</script>

<style scoped lang="scss">
img {
  width: 85px;
}
.container {
  background: $u-component-background-color;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
}

.option-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
  width: 100%;
  .advertise-text {
    font-weight: 400;
  }
  .advertise-text-buy {
    color: #c8af7b;
  }
  .advertise-text-sell {
    color: #f4652e;
  }
  .content-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .text-container {
      display: flex;
      flex-direction: column;
      text {
        color: $u-secondary-color;
        font-size: 14px;
        font-weight: 480;
        line-height: 1.8;
      }
    }
  }
  .header {
    font-size: 33rpx;
    font-weight: 600;
  }
}
</style>
