import { defineStore } from 'pinia'
import service from "../request/index"

export const useStore = defineStore({
    id: 'user',
    state: () => {
        return {
            token: '',
            userInfo: {
                accountStatus: 0,
                authStatus: 0,
                authority: 0,
                avatarDetail: null,
                avatarImgId: 109951162957445250,
                avatarImgIdStr: "109951162957445247",
                avatarImgId_str: "109951162957445247",
                avatarUrl: "https://p3.music.126.net/_N-0tuFyvd-dGiK5QY7sCg==/109951162957445247.jpg",
                backgroundImgId: 109951162957442800,
                backgroundImgIdStr: "109951162957442799",
                backgroundUrl: "https://p3.music.126.net/WmVpBopBzm77wbr-CjJNVw==/109951162957442799.jpg",
                birthday: 740764800000,
                city: 330100,
                defaultAvatar: false,
                description: "",
                detailDescription: "",
                djStatus: 0,
                eventCount: 0,
                expertTags: null,
                experts: {},
                followed: false,
                followeds: 10,
                follows: 22,
                gender: 2,
                mutual: false,
                nickname: "豆豆袜",
                playlistBeSubscribedCount: 3,
                playlistCount: 34,
                province: 330000,
                remarkName: null,
                signature: "音乐重度依赖者",
                userId: 92800918,
                userType: 0,
                vipType: 11,
            }

        }
    },
    // 也可以定义为
    getters: {},  //相当于全局的computed
    actions: {
        logout() {
            this.$patch({
                token: '',
                userInfo: {}
            })
        },

        login(phone: string, password: string, captcha: string) {
            const params = {
                phone: phone,
                password: password,
                captcha: captcha,
            };
            const res = service.get("/login/cellphone?", { params });
            this.$patch
        }
    },
})