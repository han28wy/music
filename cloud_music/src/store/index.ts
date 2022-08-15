import { defineStore } from 'pinia'

export const useStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
            sessionId: ''
        }
    },
    // 也可以定义为
    getters: {},  //相当于全局的computed
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
    },
})