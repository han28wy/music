<template>
  <div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-carousel :after-change="onChange" autoplay>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </a-carousel>
    <!-- 圆形icon -->
    <div></div>
    <!-- 推荐歌单 -->

    <!-- 个人推荐 -->
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render
        >Content of Tab Pane 2</a-tab-pane
      >
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref<string>("");
    const onChange = (current: number) => {};
    return {
      value,
      activeKey: ref("1"),
      onChange,
    };
  },
});
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 30%;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
