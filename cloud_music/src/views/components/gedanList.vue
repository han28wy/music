<template>
  <div class="gedan">
    <!-- 上面背景 -->
    <div class="bg">
      <a-image
        width="2rem"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div class="detail">
        <div class="title">title</div>
        <div class="author">author</div>
        <a-tag color="pink">pink</a-tag>
        <a-tag color="red">red</a-tag>
      </div>
    </div>
    <!-- 列表 -->
    <div class="btn_group">
      <div v-for="(item, index) in list" :key="index">
        <row />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import row from "./rowBlock.vue";
const list: Number[] = [1, 2, 3, 4, 5];

export default defineComponent({
  components: { row },
  setup() {
    return {
      list,
    };
  },
});
</script>
<style scoped>
.bg {
  width: 100%;
  height: 4rem;
  background-color: aquamarine;
  display: flex;
  flex-direction: row;
}
.detail {
  display: flex;
  flex-direction: column;
}
</style>
