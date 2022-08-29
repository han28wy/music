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
    <cardBlock />
    <!-- 个人推荐 -->
    <ListTree />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { home_icon } from "../request/service";
import ListTree from "./components/listTree.vue";
import cardBlock from "./components/cardBlock.vue";
export default defineComponent({
  components: { ListTree, cardBlock },
  setup() {
    const value = ref<string>("");
    const onChange = (current: number) => {};

    onMounted(() => {
      console.log("onMounted");
      icons();
    });
    async function icons(): Promise<void> {
      let iconRes = await home_icon();
      console.log("文件里   ", iconRes);
    }
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
