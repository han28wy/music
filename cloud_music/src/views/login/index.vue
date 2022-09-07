<template>
  <div style="padding: 0.2rem">
    <a-input
      style="border-radius: 1rem; margin: 0.1rem"
      v-model:value="phone"
      placeholder="Basic usage"
    />
    <a-button
      style="margin: 2rem auto; display: flex; width: 2rem; text-align: center"
      @click="sendMsg"
      type="primary"
      shape="round"
      >发送验证码</a-button
    >
    <a-input
      style="border-radius: 1rem; margin: 0.1rem"
      v-model:value="password"
      placeholder="Password"
    />
    <a-input
      style="border-radius: 1rem; margin: 0.1rem"
      v-model:value="captcha"
      placeholder="captcha"
    />
    <a-button
      style="margin: 2rem auto; display: flex; width: 2rem; text-align: center"
      @click="login"
      type="primary"
      shape="round"
      >登录</a-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from "vue";
import { login } from "../../request/service";
import service from "../../request/index";
export default defineComponent({
  components: {},
  setup() {
    const { proxy }: any = getCurrentInstance();
    var phone = ref("18867121972");
    var password = ref("");
    var captcha = ref("");

    onMounted(() => {
      console.log("onMounted");
    });
    // 发送验证码
    function sendMsg() {
      let params: any = {
        phone: phone.value || "18867121972",
      };
      service.get("/captcha/sent", { params });
    }

    interface userInfo {
      accountStatus: 0;
      authStatus: 0;
      authority: 0;
      avatarDetail: null;
      avatarImgId: 109951162957445250;
      avatarImgIdStr: "109951162957445247";
      avatarImgId_str: "109951162957445247";
      avatarUrl: "https://p3.music.126.net/_N-0tuFyvd-dGiK5QY7sCg==/109951162957445247.jpg";
      backgroundImgId: 109951162957442800;
      backgroundImgIdStr: "109951162957442799";
      backgroundUrl: "https://p3.music.126.net/WmVpBopBzm77wbr-CjJNVw==/109951162957442799.jpg";
      birthday: 740764800000;
      city: 330100;
      defaultAvatar: false;
      description: "";
      detailDescription: "";
      djStatus: 0;
      eventCount: 0;
      expertTags: null;
      experts: {};
      followed: false;
      followeds: 10;
      follows: 22;
      gender: 2;
      mutual: false;
      nickname: "豆豆袜";
      playlistBeSubscribedCount: 3;
      playlistCount: 34;
      province: 330000;
      remarkName: null;
      signature: "音乐重度依赖者";
      userId: 92800918;
      userType: 0;
      vipType: 11;
    }

    var userRes = ref<userInfo>()
    async function login() {
      let params = {
        phone: phone.value,
        password: password.value,
        captcha: captcha.value,
      };
      const res = service.get("/login/cellphone?", { params });
      userRes.value = res.profile;
      console.log(res.token);
      console.log(userRes.value)
    }

    return {
      phone,
      password,
      captcha,
      login,
      sendMsg,
    };
  },
});
</script>
