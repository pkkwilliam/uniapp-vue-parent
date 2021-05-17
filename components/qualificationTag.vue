<template>
  <u-tag
    size="mini"
    shape="circle"
    :text="getType.label"
    :type="getType.type"
  />
</template>

<script>
export default {
  computed: {
    getType() {
      switch (this.qualification) {
        case "ID_VERIFIED":
          return { label: "已驗證", type: "success" };
        case "PHONE_NUMBER_VERIFIED":
          return {
            label: "號嗎已驗證",
            type: "warning",
          };
      }
    },
  },
  name: "QualificationTag",
  props: {
    qualification: "",
  },
};
</script>

<style></style>
