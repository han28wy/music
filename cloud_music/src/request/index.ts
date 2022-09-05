import axios from 'axios'
// import { storeToRefs } from 'pinia';
// import {useStore} from '../store/index'

// const user = useStore();
// const {sessionId}=storeToRefs(user)

// 创建axios实例
const service = axios.create({
    baseURL: '/music',
    timeout: 20000,
    withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		// 'token': `${sessionId}`,
		'X-Requested-With': 'XMLHttpRequest',
	},
})
// 添加请求拦截器
service.interceptors.request.use(config=>{
  return config
},
error=>{
    return Promise.reject(error)
})

// 添加响应拦截
service.interceptors.response.use(response =>{
    // if(response.data.recode !== 200) {
    //     return Promise.reject('接口返回非200')
    // }else{
    //     return response.data
    // }
    return response.data
},
error=>{
    return Promise.reject(error)
})

export default service
