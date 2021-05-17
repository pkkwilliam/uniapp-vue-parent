<template>
  <page-meta>
    <navigation-bar
      :background-color="backgroundColor"
      front-color="#000000"
      subtitle-color="#000000"
      :subtitle-text="subtitleText"
      :title="title"
      title-align="center"
    />
  </page-meta>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      default: "#FFFFFF",
      type: String,
    },
    subTitle: {
      default: "sdfsdf",
      type: String,
    },
    title: String,
  },
  name: "TopNavigationBar",
};
</script>
