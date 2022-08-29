import service from './index'

// https://netease-cloud-music-api-crete722p-hannah-bingo.vercel.app/comment/music?id=186016&limit=1


// 首页-发现-圆形图标入口列表 /homepage/dragon/ball
export const home_icon = ()=>service.get('/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})