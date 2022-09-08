<template>
  <div style="height:100%;background-color: white;">
    <div class="bg" :style="{'background-image':'url('+userInfo.backgroundUrl+')'}">
    </div>
    <div class="info">
        <img class="avatar" :src="userInfo.avatarUrl">
        <div style="font-size: 0.5rem;font-weight: bold;">{{userInfo.nickname}}</div>
        <div>
            <span>{{userInfo.follows}}关注 {{userInfo.followeds}}粉丝</span>
        </div>
        <div style="margin:0.1rem">
            <span>IP属地{{userInfo.city}}  关注 {{userInfo.followeds}}粉丝</span>
        </div>
        <span>完善主页，发现更多音乐好品味</span>
    </div>
    <div class="basic"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from "vue";
import service from "../../request/index";
import { useStore } from "../../store/index";
import { storeToRefs } from "pinia";
export default defineComponent({
  components: {},
  setup() {
    // const { proxy }: any = getCurrentInstance();
    const storeInfo = useStore();
    const { token, userInfo } = storeToRefs(storeInfo);

    onMounted(() => {
      console.log("onMounted");
      console.log(userInfo.value.backgroundUrl);
    });

    return {
      userInfo,
      token,
    };
  },
});
</script>

<style>
.bg {
  width: 100%;
  height: 7rem;
  overflow: hidden;
  background-size: cover
}
.info{
    width:90%;
    height: 3.2rem;
    background: white;
    margin: -1rem auto;
    z-index: 9999 !important;
    border-radius: 0.2rem;
    text-align: center;
    border: solid lightpink;
}
.avatar{
        width: 1.5rem;
    border-radius: 50%;
    margin-top: -0.75rem;
}
</style>
