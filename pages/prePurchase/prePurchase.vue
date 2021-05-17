<template>
  <view class="page-container-secondary">
    <TopNavigationBar
      :backgroundColor="styleSchema.backgroundColorSecondary"
      :subTitle="username"
      :title="userNickname"
    />
    <view class="item-container">
      <view class="center-row-container">
        <u-avatar mode="square" size="large" :src="thumbnail" />
        <view class="detail-container">
          <text class="header-small">{{ price }}</text>
          <text class="caption-small">含運費18.00元</text>
          <text class="caption-small">交易前聊一聊</text>
        </view>
      </view>
      <view class="button-container"
        ><button class="secondary-button" @click="onClickPurchase">
          立即購買
        </button></view
      >
    </view>
    <view class="section-container">
      <HorizontalDivider />
    </view>
    <view class="chat-container">
      <scroll-view scroll-y="true" style="height: 400px">
        <Card class="purchase-security-card" type="primary"
          ><text class="header-small">限量領取！安心購買保障計劃</text>
          <text class="caption section-container"
            >交易全程在AppName，你敢買，我敢賠！若遇欺詐造成錢貨兩失，可獲賠最高5000元</text
          >
          <view class="section-container">
            <HorizontalDivider />
          </view>
          <button class="text-button">點擊領取，先到先得</button>
        </Card>
      </scroll-view>
    </view>
  </view>
</template>

<script>
import Card from "../../common/card";
import HorizontalDivider from "../../components/horizontalDivider";
import TopNavigationBar from "@/components/topNavigationBar";
import styleSchema from "../../uview-ui/theme.scss";
import { CONFIRM_PURCHASE_PAGE } from "@/navigation/page";
import { VUEX_SELECTED_ITEM } from "@/store/appStateKey";
import { getAppStateValue, goTo } from "@/common/componentUtil";

export default {
  components: {
    Card,
    HorizontalDivider,
    TopNavigationBar,
  },
  computed: {
    price() {
      return "MOP" + this.item.price;
    },
    styleSchema() {
      return styleSchema;
    },
    userNickname() {
      return this.item.user.name;
    },
    username() {
      return this.item.user.username;
    },
    thumbnail() {
      return this.item.images[0];
    },
  },
  data() {
    return {
      item: {},
    };
  },
  methods: {
    onClickPurchase() {
      goTo(this, CONFIRM_PURCHASE_PAGE);
    },
  },
  name: "PrePurchase",
  onLoad() {
    this.item = getAppStateValue(this, VUEX_SELECTED_ITEM);
  },
};
</script>

<style lang="scss" scoped>
.chat-container {
  flex-direction: column;
  padding-top: 15px;
  .message-container {
    height: 300px;
  }
  .purchase-security-card {
    flex-direction: column;
  }
}
.item-container {
  display: flex;
  justify-content: space-between;
  .button-container {
    align-self: flex-end;
  }
  .detail-container {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
}
</style>
