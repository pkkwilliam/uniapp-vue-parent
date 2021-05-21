<template>
  <view class="wrap">
    <ComponentWrapper />
    <view class="top">
      <view class="item">
        <view class="left">收貨人</view>
        <input
          type="text"
          placeholder-class="line"
          placeholder="請填寫收貨人姓名"
          v-model="address.contactName"
        />
      </view>
      <view class="item">
        <view class="left">手機號碼</view>
        <input
          type="text"
          placeholder-class="line"
          placeholder="請填寫收貨人手機號"
          v-model="address.phoneNumber"
        />
      </view>
      <view class="item">
        <view class="left">街道</view>
        <input
          type="text"
          placeholder-class="line"
          placeholder="請填寫街道"
          v-model="address.street"
        />
      </view>

      <view class="item address">
        <view class="left">詳細地址</view>
        <textarea
          type="text"
          placeholder-class="line"
          placeholder="街道，樓牌等"
          v-model="address.unit"
        />
      </view>
      <!-- <view class="site-clipboard">
				<textarea placeholder-class="line" value="" placeholder="粘贴文本,可自动识别姓名和地址等" />
				<view class="clipboard">
					地址粘贴板
					<u-icon name="arrow-down" class="icon" :size="20"></u-icon>
				</view>
			</view> -->
    </view>
    <view class="bottom">
      <view class="default">
        <view class="left">
          <view class="set">設置預設地址</view>
          <view class="tips">提醒：每次下單會默認推薦該地址</view>
        </view>
        <view class="right"
          ><switch :color="styleSchema.primaryColor" @change="setDefault"
        /></view>
      </view>
    </view>
    <button class="primary-button" @click="onClickSubmit">
      {{ primaryButtonText }}
    </button>
    <button class="text-button" v-if="isEdit" @click="onClickDelete">
      删除地址
    </button>
  </view>
</template>

<script>
import {
  ADD_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS_ALL,
  UPDATE_ADDRESS,
} from "@/common/service";
import ComponentUtil, {
  APP_STATE_VUEX_SHIPPING_ADDRESSES,
  NAVIGATION_BACK,
} from "@/common/componentUtil";
import styleSchema from "../../uview-ui/theme.scss";
import ComponentWrapper from "@/common/componentWrapper";
export default {
  components: { ComponentWrapper },
  computed: {
    styleSchema() {
      return styleSchema;
    },
    primaryButtonText() {
      return this.isEdit ? "修改地址" : "添加地址";
    },
  },
  data() {
    return {
      address: {
        contactName: "",
        defaultShipping: false,
        id: 0,
        phoneNumber: "",
        street: "",
        unit: "",
      },
      componentUtil: undefined,
      isEdit: false,
      show: false,
      toast: {
        show: true,
      },
    };
  },
  methods: {
    setDefault() {},
    showRegionPicker() {
      this.show = true;
    },
    async getAddressAll() {
      const { componentUtil, isEdit } = this;
      const shippingAddresses = await componentUtil.serviceExecute(
        GET_ADDRESS_ALL()
      );
      componentUtil.setAppStateValue(
        APP_STATE_VUEX_SHIPPING_ADDRESSES,
        shippingAddresses
      );
      componentUtil.showToast(isEdit ? "修改成功" : "新建成功", () =>
        componentUtil.goTo(NAVIGATION_BACK)
      );
    },
    async onClickDelete() {
      await this.componentUtil.serviceExecute(DELETE_ADDRESS(this.address));
      this.getAddressAll();
    },
    async onClickSubmit() {
      const { address, componentUtil, isEdit } = this;
      if (isEdit) {
        await componentUtil.serviceExecute(UPDATE_ADDRESS(address));
      } else {
        await componentUtil.serviceExecute(ADD_ADDRESS(address));
      }
      this.getAddressAll();
    },
  },
  onLoad(option) {
    const { addressJson, isEdit } = option;
    if (isEdit) {
      const address = JSON.parse(addressJson);
      this.address = address;
    }
    this.isEdit = isEdit;
    this.componentUtil = new ComponentUtil(this);
  },
};
</script>

<style lang="scss" scoped>
/deep/ .line {
  color: $u-light-color;
  font-size: 28rpx;
}
.wrap {
  background-color: #f2f2f2;
  .top {
    background-color: #ffffff;
    border-top: solid 2rpx $u-border-color;
    padding: 22rpx;
    .item {
      display: flex;
      font-size: 32rpx;
      line-height: 100rpx;
      align-items: center;
      border-bottom: solid 2rpx $u-border-color;
      .left {
        width: 180rpx;
      }
      input {
        text-align: left;
      }
    }

    .address {
      padding: 20rpx 0;
      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
    }
    .site-clipboard {
      padding-right: 40rpx;
      textarea {
        // width: 100%;
        height: 150rpx;
        background-color: #f7f7f7;
        line-height: 60rpx;
        margin: 40rpx auto;
        padding: 20rpx;
      }
      .clipboard {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26rpx;
        color: $u-tips-color;
        height: 80rpx;
        .icon {
          margin-top: 6rpx;
          margin-left: 10rpx;
        }
      }
    }
  }
  .bottom {
    margin-top: 20rpx;
    padding: 40rpx;
    padding-right: 0;
    background-color: #ffffff;
    font-size: 28rpx;
    .tag {
      display: flex;
      .left {
        width: 160rpx;
      }
      .right {
        display: flex;
        flex-wrap: wrap;
        .tags {
          width: 140rpx;
          padding: 16rpx 8rpx;
          border: solid 2rpx $u-border-color;
          text-align: center;
          border-radius: 50rpx;
          margin: 0 10rpx 20rpx;
          display: flex;
          font-size: 28rpx;
          align-items: center;
          justify-content: center;
          color: $u-content-color;
          line-height: 1;
        }
        .plus {
          //padding: 10rpx 0;
        }
      }
    }
    .default {
      margin-top: 50rpx;
      display: flex;
      justify-content: space-between;
      border-bottom: solid 2rpx $u-border-color;
      line-height: 64rpx;
      .tips {
        font-size: 24rpx;
      }
      .right {
      }
    }
  }
}
</style>
