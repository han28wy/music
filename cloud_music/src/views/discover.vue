<template>
  <div>
    <a-input style="margin:0.2rem 0;border-radius: 30%;" placeholder="Basic usage" />
    <a-carousel autoplay style="height:3rem;">
    <div v-for="ban in bannerList" :key="ban.bannerId">
    <img style="height:3rem;width: 100%;" :src="ban.pic" />
    </div>
    </a-carousel>
    <!-- 圆形icon -->
    <div style="display: flex; flex-direction: row">
      <div
        v-for="icon in iconList"
        :key="icon.id"
        style="display: flex; width: 20%; flex-direction: column"
      >
        <img
          :src="icon.iconUrl"
          style="height: 1rem; width: 1rem; border-radius: 50%; margin: 0.2rem"
        />
        <span
          style="
            font-size: 6px;
            line-height: 9px;
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
          "
          >{{ icon.name }}</span
        >
      </div>
    </div>
    <!-- 推荐歌单 -->
    <div style="background-color: lightblue;">
      <div
        v-for="(block, index) in home_block"
        :key="index"
        style="background-color: white;padding: 0.2rem 0; border-bottom: 0.01rem solid"
      >
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <div style="font-size: 8px;font-weight:bold">{{ block.uiElement.subTitle.title }}</div>
        <div style="font-size: 8px;border-style:solid;border-width:0.02rem;border-radius:30%">{{ block.uiElement.button.text }}</div>
      </div>
        <div style="display: flex; flex-direction: row">
          <div v-for="(single, index) in block.creatives" :key="index" @click="goToGedan()" style="display: flex;flex-direction: column;">
            <img
              style="width: 2rem; margin: 0.1rem;border-radius: 20%;"
              :src="single.uiElement.image.imageUrl"
            />
            <span style="font-size:6px">{{single.uiElement.mainTitle.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { home_icon, homePage, banner } from "../request/service";
import { useRouter } from 'vue-router';

  const router = useRouter();

function goToGedan(){
  router.push('/gedanList')
}

interface icon {
  id: String;
  name: String;
  iconUrl: String;
}
var iconList = ref<icon[]>([]);
const getIconList = async () => {
  let iconRes = await home_icon();
  iconList.value = iconRes.data;
};
getIconList();

interface block_single {
  creativeType: String;
  creativeId: String;
  action: String;
  actionType: String;
  uiElement: {
    mainTitle: {
      title: String;
    };
    image: {
      imageUrl: String;
    };
  };
  resources: [
    {
      uiElement: {
        mainTitle: {
          title: String;
        };
        image: {
          imageUrl: String;
        };
      };
    }
  ];
}

interface block {
  blockCode: "HOMEPAGE_BLOCK_PLAYLIST_RCMD";
  showType: "HOMEPAGE_SLIDE_PLAYLIST";
  dislikeShowType: 0;
  action: "orpheus://playlistCollection?referLog=HOMEPAGE_BLO...";
  actionType: "orpheus";
  uiElement: {
    subTitle: {
      title: "推荐歌单";
    };
    button: {
      action: "orpheus://playlistCollection?referLog=HOMEPAGE_BLO...";
      actionType: "orpheus";
      text: "更多";
    };
  };
  creatives: [{}];
}
var home_block = ref<block[]>([]);
const geBlockList = async () => {
  let res = await homePage();
  home_block.value = res.data.blocks;
};
geBlockList();

interface banner {
  pic:String,
  bannerId: String
}
var bannerList = ref<banner[]>([])

const getBanner = async ()=>{
  let res = await banner()
  bannerList.value = res.banners
}
getBanner()

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
