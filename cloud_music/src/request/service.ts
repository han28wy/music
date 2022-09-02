import service from './index'

// https://netease-cloud-music-api-crete722p-hannah-bingo.vercel.app/comment/music?id=186016&limit=1
export const searchList = ()=>service.get('/m1/1533003-0-default/search').catch(err=>{console.log('service.ts 错误 ',err)})

export const commentList= ()=>service.get('/m1/1533003-0-default/comment/music').catch(err=>{console.log('service.ts 错误 ',err)})

export const djList= ()=>service.get('/m1/1533003-0-default/dj/program').catch(err=>{console.log('service.ts 错误 ',err)})

export const discoverPage= ()=>service.get('/m1/1533003-0-default/user/playlist').catch(err=>{console.log('service.ts 错误 ',err)})

//首页
export const homePage = ()=>service.get('/m1/1533003-0-default/homepage/block/page').catch(err=>{console.log('service.ts 错误 ',err)})

// 首页 banner
export const banner = () => service.get('/m1/1533003-0-default/banner?type=1')

// 歌单详情
export const gedanDetail = ()=>service.get('/m1/1533003-0-default/playlist/detail')

// 首页-发现-圆形图标入口列表 /homepage/dragon/ball
export const home_icon = ()=>service.get('/m1/1533003-0-default/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})