<template>
  <view>
    <view class="item" v-for="address in addresses" :key="address.id">
      <view class="top">
        <view class="name">{{ address.contactName }}</view>
        <view class="phone">{{ address.phoneNumber }}</view>
        <!-- <view class="tag">
          <text
            v-for="(item, index) in res.tag"
            :key="index"
            :class="{ red: item.tagText == '默认' }"
            >{{ item.tagText }}</text
          >
        </view> -->
      </view>
      <view class="bottom">
        {{ address.street }}{{ address.unit }}
        <u-icon
          name="edit-pen"
          :size="40"
          color="#999999"
          @click="onClickEditAddress(address)"
        ></u-icon>
      </view>
    </view>
    <view class="addSite" @tap="onClickAddAddress">
      <view class="add">
        <u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon
        >新建收貨地址
      </view>
    </view>
  </view>
</template>

<script>
import ComponentUtil, {
  APP_STATE_VUEX_SHIPPING_ADDRESSES,
  NAVIGATION_ADD_ADDRESS_PAGE,
} from "@/common/componentUtil";
export default {
  computed: {
    addresses() {
      return this.componentUtil.getAppStateValue(
        APP_STATE_VUEX_SHIPPING_ADDRESSES
      );
    },
  },
  data() {
    return {
      componentUtil: undefined,
      siteList: [],
    };
  },
  onLoad() {
    this.componentUtil = new ComponentUtil(this);
  },
  methods: {
    onClickAddAddress() {
      this.componentUtil.goTo(NAVIGATION_ADD_ADDRESS_PAGE);
    },
    onClickEditAddress(address) {
      this.componentUtil.goTo(NAVIGATION_ADD_ADDRESS_PAGE, {
        addressJson: JSON.stringify(address),
        isEdit: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  padding: 40rpx 20rpx;
  .top {
    display: flex;
    font-weight: bold;
    font-size: 34rpx;
    .phone {
      margin-left: 60rpx;
    }
    .tag {
      display: flex;
      font-weight: normal;
      align-items: center;
      text {
        display: block;
        width: 60rpx;
        height: 34rpx;
        line-height: 34rpx;
        color: #ffffff;
        font-size: 20rpx;
        border-radius: 6rpx;
        text-align: center;
        margin-left: 30rpx;
        background-color: rgb(49, 145, 253);
      }
      .red {
        background-color: red;
      }
    }
  }
  .bottom {
    display: flex;
    margin-top: 20rpx;
    font-size: 28rpx;
    justify-content: space-between;
    color: #999999;
  }
}
.addSite {
  display: flex;
  justify-content: space-around;
  width: 600rpx;
  line-height: 100rpx;
  position: absolute;
  bottom: 30rpx;
  left: 80rpx;
  background-color: red;
  border-radius: 60rpx;
  font-size: 30rpx;
  .add {
    display: flex;
    align-items: center;
    color: #ffffff;
    .icon {
      margin-right: 10rpx;
    }
  }
}
</style>
