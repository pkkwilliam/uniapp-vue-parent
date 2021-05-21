<template>
  <view>
    <view class="page-container">
      <UserAbstract mode="square" :user="item.user" />
      <view class="section-container">
        <HorizontalDivider />
      </view>
      <view class="price-container section-container">
        <text class="price price-text">{{ getCost(item.price) }}</text>
        <text class="original-price">{{ getCost(item.originalPrice) }}</text>
      </view>
      <view class="section-container center-row-container">
        <Condition :condition="item.condition" />
        <text class="title-text">{{ item.name }}</text>
      </view>
      <view class="section-container">
        {{ item.description }}
      </view>
      <view
        class="section-container"
        v-for="(image, index) in item.images"
        :key="index"
      >
        <img :src="image" />
      </view>
    </view>
    <view class="navigation section-container center-row-container">
      <view class="left">
        <view class="item">
          <u-icon
            name="thumb-up"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">點贊</view>
        </view>
        <view class="item">
          <u-icon
            name="chat"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">留言</view>
        </view>
        <view class="item car">
          <u-icon
            name="star"
            :size="40"
            :color="$u.color['contentColor']"
          ></u-icon>
          <view class="text u-line-1">收藏</view>
        </view>
      </view>
      <view class="right">
        <button class="gradient-button" @click="onClickPrePurchase">
          我想要
        </button>
        <!-- <view class="buy btn u-line-1"></view> -->
      </view>
    </view>
  </view>
</template>

<script>
import Condition from "../../components/conditionTag";
import styleSchema from "../../uview-ui/theme.scss";
import UserAbstract from "../../components/userAbstract";
import HorizontalDivider from "../../components/horizontalDivider";
import ComponentUtil, {
  APP_STATE_VUEX_SELECTED_ITEM,
  APP_STATE_VUEX_USER_PROFILE,
  NAVIGATION_LOGIN_PAGE,
  NAVIGATION_PRE_PURCHASE_PAGE,
} from "../../common/componentUtil";

export default {
  components: { Condition, HorizontalDivider, UserAbstract },
  data() {
    return {
      componentUtil: undefined,
      item: {},
      styleSchema,
    };
  },
  methods: {
    getCost(cost) {
      return `MOP ${cost}`;
    },
    onClickPrePurchase() {
      const userProfile = this.componentUtil.getAppStateValue(
        APP_STATE_VUEX_USER_PROFILE
      );
      if (!userProfile.username) {
        this.componentUtil.goTo(NAVIGATION_LOGIN_PAGE, {
          onSucessRedirectPage: NAVIGATION_PRE_PURCHASE_PAGE,
        });
      } else {
        this.componentUtil.goTo(NAVIGATION_PRE_PURCHASE_PAGE);
      }
    },
  },
  name: "ItemDetail",
  onLoad(option) {
    this.componentUtil = new ComponentUtil(this);
    // taking itemId from vuex
    const item = this.componentUtil.getAppStateValue(
      APP_STATE_VUEX_SELECTED_ITEM
    );
    this.item = item;
  },
};
</script>

<style lang="scss" scoped>
img {
  border-radius: 5px;
  width: 100%;
}

.title-text {
  margin-left: 5px;
  font-size: 18px;
}

.price-container {
  align-items: flex-end !important;
  display: flex;
  flex-direction: row;
  .original-price {
    color: $u-secondary-color;
    margin-left: 8px;
    text-decoration: line-through;
  }
  .price {
    color: red;
  }

  .price-text {
    font-size: 18px;
    font-weight: 600;
  }

  .price-sign {
  }
}

.navigation {
  background-color: #ffffff;
  border: solid 2rpx #f2f2f2;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  position: sticky;
  .left {
    display: flex;
    font-size: 20rpx;
    .item {
      margin-right: 30px;
    }
  }
}
</style>
