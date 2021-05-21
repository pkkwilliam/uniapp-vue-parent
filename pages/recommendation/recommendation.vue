<template>
  <view>
    <PlatformSelection class="section-container" />
    <Event class="section-container" />
    <u-sticky offset-top="0">
      <u-tabs
        activeColor="#000000"
        class="section-container"
        height="40"
        gutter="20"
        :current="currentCategoryIndex"
        :inactiveColor="styleSchema.secondaryColor"
        :list="categoryList"
        :showBar="false"
        @change="onChangeCategory"
    /></u-sticky>
    <WaterFallListing class="section-container" :flowList="itemList" />
  </view>
</template>

<script>
import Event from "../../components/event";
import PlatformSelection from "../../components/platformSelections";
import SearchBar from "../../components/searchBar";
import TextButton from "../../common/textButton";
import WaterFallListing from "../../components/waterFallListing";
import ComponentUtil from "../../common/componentUtil";
import { GET_CATEGORIES, GET_ITEMS } from "../../common/service";
import styleSchema from "../../uview-ui/theme.scss";
export default {
  components: {
    Event,
    PlatformSelection,
    SearchBar,
    TextButton,
    WaterFallListing,
  },
  data() {
    return {
      categoryList: [],
      componentUtil: undefined,
      currentCategoryIndex: 0,
      currentPage: 0,
      itemList: [],
      styleSchema,
    };
  },
  methods: {
    onChangeCategory(categoryIndex) {
      this.currentCategoryIndex = categoryIndex;
    },
    onClickAllCategories() {
      console.log("onClickAllCategories");
    },
  },
  mounted() {
    this.componentUtil = new ComponentUtil(this);
    // TODO category
    this.componentUtil
      .serviceExecute(GET_ITEMS(this.currentPage))
      .then((response) => {
        const { content, number } = response;
        this.currentPage = number;
        this.itemList = content;
      });
  },
  name: "Recommendation",
};
</script>

<style lang="scss"></style>
