import service from './index'

// export const searchList = ()=>service.get('/m1/1533003-0-default/search').catch(err=>{console.log('service.ts 错误 ',err)})

// export const commentList= ()=>service.get('/m1/1533003-0-default/comment/music').catch(err=>{console.log('service.ts 错误 ',err)})

// export const djList= ()=>service.get('/m1/1533003-0-default/dj/program').catch(err=>{console.log('service.ts 错误 ',err)})

// export const discoverPage= ()=>service.get('/m1/1533003-0-default/user/playlist').catch(err=>{console.log('service.ts 错误 ',err)})

// //首页
// export const homePage = ()=>service.get('/m1/1533003-0-default/homepage/block/page').catch(err=>{console.log('service.ts 错误 ',err)})

// // 首页 banner
// export const banner = () => service.get('/m1/1533003-0-default/banner?type=1')

// // 歌单详情
// export const gedanDetail = ()=>service.get('/m1/1533003-0-default/playlist/detail')

// // 首页-发现-圆形图标入口列表 /homepage/dragon/ball
// export const home_icon = ()=>service.get('/m1/1533003-0-default/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})





// export const searchList = ()=>service.get('http://localhost:3000/search').catch(err=>{console.log('service.ts 错误 ',err)})

// export const commentList= ()=>service.get('http://localhost:3000/comment/music').catch(err=>{console.log('service.ts 错误 ',err)})

// export const djList= ()=>service.get('http://localhost:3000/dj/program').catch(err=>{console.log('service.ts 错误 ',err)})

// export const discoverPage= ()=>service.get('http://localhost:3000/user/playlist').catch(err=>{console.log('service.ts 错误 ',err)})

// //首页
// export const homePage = ()=>service.get('http://localhost:3000/homepage/block/page').catch(err=>{console.log('service.ts 错误 ',err)})

// // 首页 banner
// export const banner = () => service.get('http://localhost:3000/banner?type=1')

// // 歌单详情
// export const gedanDetail = ()=>service.get('http://localhost:3000/playlist/detail')

// // 首页-发现-圆形图标入口列表 /homepage/dragon/ball
// export const home_icon = ()=>service.get('http://localhost:3000/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})


export const searchList = ()=>service.get('/search').catch(err=>{console.log('service.ts 错误 ',err)})

export const commentList= ()=>service.get('/comment/music').catch(err=>{console.log('service.ts 错误 ',err)})

export const djList= ()=>service.get('/dj/program').catch(err=>{console.log('service.ts 错误 ',err)})

export const discoverPage= ()=>service.get('/user/playlist').catch(err=>{console.log('service.ts 错误 ',err)})

//首页
export const homePage = ()=>service.get('/homepage/block/page').catch(err=>{console.log('service.ts 错误 ',err)})

// 首页 banner
export const banner = () => service.get('/banner?type=1')

// 歌单详情
export const gedanDetail = ()=>service.get('/playlist/detail')

// 首页-发现-圆形图标入口列表 /homepage/dragon/ball
export const home_icon = ()=>service.get('/homepage/dragon/ball').catch(err=>{console.log('service.ts 错误 ',err)})