<template>
  <u-tag :text="displayInfo.label" :type="displayInfo.color" />
</template>

<script>
export default {
  computed: {
    displayInfo() {
      switch (this.condition) {
        case "ACCEPTABLE":
          return { color: "success", label: "可接受" };
        case "DEFECT":
          return { color: "warning", label: "明顯使用㾗迹" };
        case "GOOD":
          return { color: "primary", label: "輕微使用㾗迹" };
        case "LIKE_NEW":
          return { color: "primary", label: "幾乎全新" };
        case "NEW":
          return { color: "error", label: "全新" };
        default:
          return { color: "info", label: "可接受" };
      }
    },
  },
  name: "ConditionTag",
  props: {
    condition: {
      default: "NEW",
      type: String,
    },
  },
};
</script>
