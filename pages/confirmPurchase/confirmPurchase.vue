<template>
  <view class="page-container-secondary container">
    <Card type="primary"
      ><view class="item-container">
        <u-avatar mode="square" size="large" :src="thumbnail" />
        <view class="text-container">
          <text>{{ item.name }}</text>
          <Price class="price" size="14" :price="item.price" />
        </view>
      </view>
    </Card>
    <Card class="shipping-container column-container" type="primary">
      <view class="row-container">
        <text class="body-text">收貨地址</text>
        <view class="row-container">
          <text class="caption-small">未有收貨地址</text>
          <u-icon color="#ABABAB" name="arrow-right" :size="29"></u-icon>
        </view>
      </view>
      <view class="section-container">
        <HorizontalDivider />
      </view>
      <view class="row-container section container">
        <view>
          <text class="body-text">運費</text>
        </view>
        <view class="row-container">
          <text class="caption-small">運費</text>
          <Price class="price" size="14" :price="0.0" />
        </view>
      </view>
    </Card>
  </view>
</template>

<script>
import Card from "../../common/card";
import HorizontalDivider from "../../components/horizontalDivider";
import Price from "../../common/price";
import { getAppStateValue, goTo } from "@/common/componentUtil";
import { VUEX_SELECTED_ITEM } from "@/store/appStateKey";

export default {
  components: {
    Card,
    HorizontalDivider,
    Price,
  },
  computed: {
    thumbnail() {
      return this.item.images[0];
    },
  },
  data() {
    return {
      item: {},
    };
  },
  name: "ConfirmPurchase",
  onLoad(option) {
    this.item = getAppStateValue(this, VUEX_SELECTED_ITEM);
  },
};
</script>

<style lang="scss" scoped>
.address-container {
  display: flex;
}
.container {
  padding-top: 15px;
}
.item-container {
  display: flex;
  flex-direction: row;
  width: inherit;
  .text-container {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    width: inherit;
  }
}

.price {
  align-items: flex-end;
  align-self: flex-end;
  font-size: 13px;
  height: 100%;
  margin-left: 8px;
}

.shipping-container {
  margin-top: 15px;
  .row-container {
    justify-content: space-between;
  }
}
</style>
