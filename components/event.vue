<template>
  <view class="container">
    <text class="header">熱門活動</text>
    <scroll-view class="scroll-view" scroll-x="scroll-left">
      <view class="events-container">
        <Card v-for="event in events" :key="event.id">
          <img :src="event.imageUrl" />
          <view class="text-container">
            <text>{{ event.name }}</text>
            <text>{{ event.description }}</text>
            <view class="on-click-text-container">
              <text>{{ event.onClickText }}</text>
              <u-icon name="arrow-right" color="#969799" size="28"></u-icon>
            </view>
          </view>
        </Card>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import Card from "../common/card";
import { execute } from "../common/serviceExecutor";
import { GET_EVENTS } from "../common/service";
export default {
  components: { Card },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    execute(GET_EVENTS()).then((response) => (this.events = response));
  },
  name: "Event",
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
}
text {
  font-weight: 600;
  font-size: 16px;
}
.card-container {
  margin-right: 15px;
}

.container {
  display: flex;
  flex-direction: column;
}

.events-container {
  height: 150rpx;
  display: flex;
}

.event-container {
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  padding: 3px 15px;
}

.header {
  color: $u-secondary-color;
  font-size: 16px;
  font-weight: 350;
}

.on-click-text-container {
  display: flex;
  align-items: center;
  text {
    color: $u-primary-color;
    font-size: 12px;
  }
}

.scroll-view {
  white-space: nowrap;
}

.text-container {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}
</style>
