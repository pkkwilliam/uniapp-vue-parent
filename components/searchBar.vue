<template>
  <u-search
    class="search-bar"
    v-model="value"
    input-align="left"
    placeholder="女士Tshirt"
    shape="round"
    :bgColor="backgroundColor"
    :clearabled="clearabled"
    @change="change"
    @clear="true"
    @custom="custom"
    @search="search"
    @show-action="true"
  ></u-search>
</template>

<script>
import styleSchema from "../uview-ui/theme.scss";
export default {
  data() {
    return {
      value: "",
      shape: "round",
      clearabled: true,
      showAction: true,
      inputAlign: "left",
      backgroundColor: styleSchema.backgroundColor,
    };
  },
  watch: {
    // 这里的演示为证明通过v-model绑定值，它是双向绑定的，意味着您无需监听change事件
    // 也能知道value值当前的内容
    value(val) {
      // console.log(val);
    },
  },
  methods: {
    valueChange(index) {
      this.value = index == 0 ? "" : "天山雪莲";
    },
    showActionChange(index) {
      this.showAction = index == 0 ? true : false;
    },
    change(value) {
      // 搜索框内容变化时，会触发此事件，value值为输入框的内容
      //console.log(value);
    },
    custom(value) {
      //console.log(value);
      this.$u.toast("输入值为：" + value);
    },
    search(value) {
      this.$refs.uToast.show({
        title: "搜索内容为：" + value,
        type: "success",
      });
    },
    clear() {
      // console.log(this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  background: $u-primary-color;
  border: solid;
  border-color: $u-primary-color;
  border-width: 2px;
  border-radius: 30px;
}
</style>
