<template>
  <view class="wrap">
    <u-waterfall v-model="flowList" ref="uWaterfall">
      <template v-slot:left="{ leftList }">
        <view
          class="demo-warter demo-water-left"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <!-- 微信小程序需要hx2.8.11版本才支持在template中引入其他组件，比如下方的u-lazy-load组件 -->
          <u-lazy-load
            threshold="-450"
            border-radius="10"
            :image="item.image"
            :index="index"
          ></u-lazy-load>
          <view class="demo-title">{{ item.title }}</view>
          <view class="demo-price">{{ item.price }}元</view>
          <view class="demo-tag">
            <view class="demo-tag-owner">自营</view>
            <view class="demo-tag-text">放心购</view>
          </view>
          <view class="demo-shop">{{ item.shop }}</view>
        </view>
      </template>
      <template v-slot:right="{ rightList }">
        <view
          class="demo-warter demo-water-right"
          v-for="(item, index) in rightList"
          :key="index"
        >
          <u-lazy-load
            threshold="-450"
            border-radius="10"
            :image="item.image"
            :index="index"
          ></u-lazy-load>
          <view class="demo-title">{{ item.title }}</view>
          <view class="demo-price">{{ item.price }}元</view>
          <view class="demo-tag">
            <view class="demo-tag-owner">自营</view>
            <view class="demo-tag-text">放心购</view>
          </view>
          <view class="demo-shop">{{ item.shop }}</view>
        </view>
      </template>
    </u-waterfall>
    <u-loadmore
      bg-color="rgb(240, 240, 240)"
      :status="loadStatus"
      @loadmore="addRandomData"
    ></u-loadmore>
  </view>
</template>

<script>
export default {
  data() {
    return {
      loadStatus: "loadmore",
    };
  },
  onLoad() {},
  onReachBottom() {
    this.loadStatus = "loading";
    // 模拟数据加载
    setTimeout(() => {
      this.addRandomData();
      this.loadStatus = "loadmore";
    }, 1000);
  },
  methods: {
    addRandomData() {
      for (let i = 0; i < 10; i++) {
        let index = this.$u.random(0, this.list.length - 1);
        // 先转成字符串再转成对象，避免数组对象引用导致数据混乱
        let item = JSON.parse(JSON.stringify(this.list[index]));
        item.id = this.$u.guid();
        this.flowList.push(item);
      }
    },
    clear() {
      this.$refs.uWaterfall.clear();
    },
  },
  props: {
    flowList: Array,
  },
};
</script>

<style>
/* page不能写带scope的style标签中，否则无效 */
page {
  background-color: rgb(240, 240, 240);
}
</style>

<style lang="scss" scoped>
.demo-warter {
  border-radius: 8px;
  background-color: #ffffff;
  margin-bottom: 5px;
  position: relative;
}

.demo-water-left {
  margin-right: 5px;
}

.demo-water-right {
  margin-left: 5px;
}

.demo-img-wrap {
}

.demo-image {
  width: 100%;
  border-radius: 4px;
}

.demo-title {
  font-size: 30rpx;
  margin-top: 5px;
  color: $u-main-color;
  word-break: break-all;
}

.demo-tag {
  display: flex;
  margin-top: 5px;
}

.demo-tag-owner {
  background-color: $u-type-error;
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 4rpx 14rpx;
  border-radius: 50rpx;
  font-size: 20rpx;
  line-height: 1;
}

.demo-tag-text {
  border: 1px solid $u-type-primary;
  color: $u-type-primary;
  margin-left: 10px;
  border-radius: 50rpx;
  line-height: 1;
  padding: 4rpx 14rpx;
  display: flex;
  align-items: center;
  border-radius: 50rpx;
  font-size: 20rpx;
}

.demo-price {
  font-size: 30rpx;
  color: $u-type-error;
  margin-top: 5px;
}

.demo-shop {
  font-size: 22rpx;
  color: $u-tips-color;
  margin-top: 5px;
}
</style>
