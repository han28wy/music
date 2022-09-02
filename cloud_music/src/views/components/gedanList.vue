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
      <div v-for="(item, index) in songList" :key="index">
        <row />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, reactive } from "vue";
import row from "./rowBlock.vue";
import { gedanDetail } from "../../request/service";

const list: Number[] = [1, 2, 3, 4, 5];

interface song {
  id: 126080288;
  name: "Bodega";
  picUrl: "http://p4.music.126.net/Et-77f0E7BQAlCJlrmwtdw==/1...";
  pic_str: "109951165894631234";
  pic: 109951165894631230;
}
interface trank {
  id: String;
  tracks: [{}];
}
interface gedan {
  id: 24381616;
  name: "binaryify喜欢的音乐";
  coverImgId: 109951165899595120;
  coverImgUrl: "https://p1.music.126.net/uJXp5G8X3Ku55DuYJSJHZg==/...";
  coverImgId_str: "109951165899595122";
  adType: 0;
  userId: 32953014;
  createTime: 1407747901072;
  status: 0;
  opRecommend: false;
  highQuality: false;
  newImported: false;
  updateTime: 1660306939571;
  trackCount: 1028;
  tracks: [{}]
}

var songList = ref<song[]>([]);
var gedanObj = ref<gedan>();
const getDetail = async () => {
  let res = await gedanDetail();
  res.playlist.tracks.forEach(i =>{
    songList.push(i.ar)
  });
  gedanObj = res.playList;
  console.log('555555     ',songList)
};
getDetail();

// export default defineComponent({
//   components: { row },
//   setup() {
//     return {
//       list,
//     };
//   },
// });
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
