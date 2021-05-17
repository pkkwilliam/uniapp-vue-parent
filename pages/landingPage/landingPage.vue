<template>
  <SafeAreaView>
    <view class="page-container wrap" style="background: white">
      <view class="u-tabs-box tab-container">
        <u-tabs-swiper
          activeColor="#000000"
          ref="tabs"
          swiperWidth="750"
          :barStyle="barStyle"
          :current="current"
          :inactiveColor="styleSchema.secondaryColor"
          :is-scroll="false"
          :list="list"
          @change="change"
        >
        </u-tabs-swiper>
      </view>
      <view class="search-bar-container">
        <SearchBar />
        <TextButton label="所有分類" @onClick="onClickAllCategories" />
      </view>
      <swiper
        class="swiper-box"
        :current="swiperCurrent"
        @transition="transition"
        @animationfinish="animationfinish"
      >
        <swiper-item class="swiper-item">
          <scroll-view
            scroll-y
            style="height: 100%; width: 100%"
            @scrolltolower="reachBottom"
          >
            <view class="page-box"></view>
          </scroll-view>
        </swiper-item>
        <swiper-item class="swiper-item">
          <scroll-view scroll-y style="height: 100%; width: 100%">
            <view class="page-box"><Recommendation /></view>
          </scroll-view>
        </swiper-item>
        <swiper-item class="swiper-item">
          <scroll-view
            scroll-y
            style="height: 100%; width: 100%"
            @scrolltolower="reachBottom"
          >
            <view class="page-box"> </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view>
  </SafeAreaView>
</template>
<script>
import Recommendation from "../recommendation/recommendation";
import SafeAreaView from "../../components/safeAreaView";
import SearchBar from "../../components/searchBar";
import styleSchema from "../../uview-ui/theme.scss";
export default {
  components: { Recommendation, SafeAreaView, SearchBar },
  computed: {},
  data() {
    return {
      barStyle: {
        backgroundColor: styleSchema.primaryColor,
        height: "5px",
      },
      list: [
        {
          name: "關注",
        },
        {
          name: "推荐",
        },
        {
          name: "澳門",
        },
      ],
      current: 1,
      swiperCurrent: 1,
      tabsHeight: 0,
      dx: 0,
      loadStatus: ["loadmore", "loadmore", "loadmore", "loadmore"],
      styleSchema,
    };
  },
  onLoad() {},
  computed: {},
  methods: {
    reachBottom() {
      // 此tab为空数据
      if (this.current != 2) {
        this.loadStatus.splice(this.current, 1, "loading");
        setTimeout(() => {
          this.getOrderList(this.current);
        }, 1200);
      }
    },
    // tab栏切换
    change(index) {
      this.swiperCurrent = index;
      this.getOrderList(index);
    },
    transition({ detail: { dx } }) {
      this.$refs.tabs.setDx(dx);
    },
    animationfinish({ detail: { current } }) {
      this.$refs.tabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
  },
};
</script>

<style>
/* #ifndef H5 */
page {
  height: 100%;
  background-color: #f2f2f2;
}
/* #endif */
</style>

<style lang="scss" scoped>
.search-bar-container {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 10px;
}
.wrap {
  display: flex;
  flex-direction: column;
  height: calc(100vh - var(--window-top));
}
.swiper-box {
  flex: 1;
}
.swiper-item {
  height: 100%;
}
.tab-container {
  display: flex;
  flex-direction: row;
}
</style>
