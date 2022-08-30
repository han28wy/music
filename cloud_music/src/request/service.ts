import service from './index'

// https://netease-cloud-music-api-crete722p-hannah-bingo.vercel.app/comment/music?id=186016&limit=1
export const searchList = ()=>service.get('/m1/1533003-0-default/search')

export const commentList= ()=>service.get('/m1/1533003-0-default/comment/music')

export const djList= ()=>service.get('/m1/1533003-0-default/dj/program')

export const discoverPage= ()=>service.get('/m1/1533003-0-default/user/playlist')

export const gedanList = ()=>service.get('/m1/1533003-0-default/homepage/block/page')

// 首页-发现-圆形图标入口列表 /homepage/dragon/ball
export const home_icon = ()=>service.get('/m1/1533003-0-default/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})