<template>
  <div>
    <a-input style="margin:0.2rem 0;border-radius:1rem;" placeholder="Basic usage" />
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
    <div style="background-color: white;">
      <div
        v-for="(block, index) in home_block"
        :key="index"
        style="background-color: white;margin: 0.3rem 0; border-top: 0.01rem solid"
      >
      <div style="display: flex;flex-direction: row;justify-content: space-between; padding-top:0.1rem">
        <div v-if="block.uiElement" style="font-size: 0.4rem;font-weight:bold">{{ block.uiElement.subTitle.title }}</div>
        <div v-if="block.uiElement && block.uiElement.button" style="font-size: 8px;border-width:0.02rem;border-radius:30%">{{ block.uiElement.button.text }}</div>
      </div>
        <div style="display: flex; flex-direction: row; overflow: auto;">
          <div v-for="(single, index) in block.creatives" :key="index" @click="goToGedan(single)" style="display: flex;flex-direction: column">
            <img v-if="single.uiElement && single.uiElement.image"
              style="width: 2rem; margin: 0.1rem;border-radius: 20%;"
              :src="single.uiElement.image.imageUrl"
            />
            <img v-else src="../assets/default.png" style="width: 2rem; margin: 0.1rem;border-radius: 20%;"/>
            <span v-if="single.uiElement && single.mainTitle" style="font-size:6px">{{single.uiElement.mainTitle.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { home_icon, homePage, banner } from "../request/service";
import { blockList } from "./discoverApi"
import { useRouter } from 'vue-router';

  const router = useRouter();

function goToGedan(val){
  console.log('点击ddddd    ',val)
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
  blockCode: String;
  showType: String;
  dislikeShowType: 0;
  action: String;
  actionType: String;
  uiElement: {
    subTitle: {
      title: String;
    };
    button: {
      action: String;
      actionType: String;
      text: String;
    };
  };
  creatives: [{}];
}
// var home_block = ref<block[]>([]);
var home_block = ref<block[]>([]);
const geBlockList = async () => {
  // let res = blockList()
  // console.log('结果接受打发打发   ', res)
  let res = await homePage();
  res.data.blocks.forEach((item)=>{
    if(item.uiElement){
      home_block.value.push(item)
    }
  })
  console.log(666,home_block.value)
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

function getImage(val){
  console.log('   77     ', val)
 if(val && val.imageUrl){
  return val.imageUrl
 }else{
  return ''
 }
}

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
