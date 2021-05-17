<template>
  <u-gap :bgColor="styleSchema.dividerColor" height="3" />
</template>

<script>
import styleSchema from "../uview-ui/theme.scss";
export default {
  computed: {
    styleSchema() {
      return styleSchema;
    },
  },
  name: "HorizontalDivider",
};
</script>
