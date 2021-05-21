<template>
  <view class="wrap">
    <ComponentWrapper :modal="modal" />
    <view class="key-input">
      <view class="title">輸入驗證碼</view>
      <view class="tips">驗證碼已發送至 +{{ countryCode }}{{ smsNumber }}</view>
      <u-message-input
        :focus="true"
        :value="value"
        @change="change"
        @finish="finish"
        mode="bottomLine"
        :maxlength="maxlength"
      ></u-message-input>
      <text :class="{ error: error }">驗證碼錯誤，請重新輸入</text>
      <view class="captcha">
        <text :class="{ noCaptcha: show }" @tap="noCaptcha"
          >收不到驗證碼點這裡</text
        >
        <text :class="{ regain: !show }">{{ second }}秒後重新獲取驗證碼</text>
      </view>
    </view>
  </view>
</template>

<script>
import ComponentWrapper from "@/common/componentWrapper";
import ComponentUtil, {
  APP_STATE_VUEX_USER_PROFILE,
} from "@/common/componentUtil";
import { GET_USER_PROFILE, SMS_VERIFY } from "@/common/service";
export default {
  components: { ComponentWrapper },
  data() {
    return {
      componentUtil: undefined,
      countryCode: undefined,
      error: false,
      maxlength: 6,
      modal: {
        show: false,
        showCancelButton: false,
        title: "錯誤",
      },
      onSucessRedirectPage: undefined,
      second: 80,
      show: false,
      smsNumber: undefined,
      value: "",
    };
  },
  computed: {},
  methods: {
    // 收不到验证码选择时的选择
    noCaptcha() {
      uni.showActionSheet({
        itemList: ["重新獲取驗證碼"],
        success: function (res) {},
        fail: function (res) {},
      });
    },
    // change事件侦听
    change(value) {
      // console.log('change', value);
    },
    // 输入完验证码最后一位执行
    async finish(value) {
      const { countryCode, onSucessRedirectPage, smsNumber } = this;
      await this.componentUtil
        .serviceExecute(
          SMS_VERIFY({ countryCode, smsNumber, oneTimePassword: value })
        )
        .catch((exception) => {
          this.modal = {
            ...this.modal,
            show: true,
            title: "錯誤",
          };
        });
      const userProfile = await this.componentUtil.serviceExecute(
        GET_USER_PROFILE()
      );
      this.componentUtil.setAppStateValue(
        APP_STATE_VUEX_USER_PROFILE,
        userProfile
      );
      this.componentUtil.goTo(onSucessRedirectPage);
    },
  },
  onLoad(option) {
    const { countryCode, onSucessRedirectPage, smsNumber } = option;
    this.countryCode = countryCode;
    this.smsNumber = smsNumber;
    this.onSucessRedirectPage = onSucessRedirectPage;
    // this.getCaptcha()
    this.componentUtil = new ComponentUtil(this);
    let interval = setInterval(() => {
      this.second--;
      if (this.second <= 0) {
        this.show = true;
        if (this.value.lenth != 6) {
          this.error = true;
        }
        clearInterval(interval);
      }
    }, 1000);
  },
  props: {
    countryCode: Number,
    smsNumber: Number,
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 80rpx;
}

.box {
  margin: 30rpx 0;
  font-size: 30rpx;
  color: 555;
}

.key-input {
  padding: 30rpx 0;
  text {
    display: none;
  }
  .error {
    display: block;
    color: red;
    font-size: 30rpx;
    margin: 20rpx 0;
  }
}

.title {
  font-size: 50rpx;
  color: #333;
}

.key-input .tips {
  font-size: 30rpx;
  color: #333;
  margin-top: 20rpx;
  margin-bottom: 60rpx;
}
.captcha {
  color: $u-type-warning;
  font-size: 30rpx;
  margin-top: 40rpx;
  .noCaptcha {
    display: block;
  }
  .regain {
    display: block;
  }
}
</style>
