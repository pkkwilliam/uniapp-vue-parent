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
        <view class="row-container" @click="onClickSelectShippingAddress">
          <text class="caption-small">{{ addressText }}</text>
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
import ComponentUtil, {
  NAVIGATION_SELECT_SHIPPING_ADDRESS_PAGE,
} from "@/common/componentUtil";
import { GET_ADDRESS_ALL } from "@/common/service";
import {
  APP_STATE_VUEX_SELECTED_ITEM,
  APP_STATE_VUEX_SHIPPING_ADDRESSES,
} from "../../common/componentUtil";

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
      addressText: "未有收貨地址",
      componentUtil: undefined,
      item: {},
      selectedAddress: {},
    };
  },
  methods: {
    onClickSelectShippingAddress() {
      this.componentUtil.goTo(NAVIGATION_SELECT_SHIPPING_ADDRESS_PAGE);
    },
    onSelectedAddress(address) {
      this.selectedAddress = address;
    },
  },
  name: "ConfirmPurchase",
  async onLoad(option) {
    this.componentUtil = new ComponentUtil(this);
    this.item = this.componentUtil.getAppStateValue(
      APP_STATE_VUEX_SELECTED_ITEM
    );
    const shippingAddresses = await this.componentUtil.serviceExecute(
      GET_ADDRESS_ALL()
    );
    this.componentUtil.setAppStateValue(
      APP_STATE_VUEX_SHIPPING_ADDRESSES,
      shippingAddresses
    );

    // set default selected address
    for (let index = 0; index < shippingAddresses.length; index++) {
      if (shippingAddresses[index].defaultShipping) {
        const selectedAddress = shippingAddresses[index];
        this.selectedAddress = selectedAddress;
        this.addressText = selectedAddress.street + selectedAddress.unit;
        break;
      }
    }
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
