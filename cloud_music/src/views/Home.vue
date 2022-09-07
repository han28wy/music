<template>
  <div class="tab_btm">
    <!-- 切换菜单栏 -->
    <!-- <van-button type="primary">按钮</van-button> -->
    <a-tabs
      v-model:activeKey="activeKey"
      tabPosition="bottom"
      tabBarStyle="tabstyle"
    >
      <a-tab-pane key="1" tab="发现"><discover /></a-tab-pane>
      <a-tab-pane key="2" tab="博客" force-render
        >Content of Tab Pane 2</a-tab-pane
      >
      <a-tab-pane key="3" tab="我的">Content of Tab Pane 3</a-tab-pane>
      <a-tab-pane key="4" tab="关注">Content of Tab Pane 4</a-tab-pane>
      <a-tab-pane key="5" tab="社区">Content of Tab Pane 5</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
// import 'vant/es/button/style/index';
import { defineComponent, ref, onMounted } from "vue";
import discover from "./discover.vue";
export default defineComponent({
  components: {
    discover 
    },
  setup() {
    const value = ref<string>("");

    onMounted(() => {
      console.log("onMounted");
    });
    return {
      value,
      activeKey: ref("1"),
    };
  },
});
</script>

<style scoped lang="less">
/* For demo */
.btm {
  /* position: fixed; */
}
.tabstyle {
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
}
.ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    position: fixed !important;
    bottom: 0 !important;
    background: white;
    width: 100%;
  }
</style>
