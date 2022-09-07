<template>
  <div>
    <a-input v-model:value="phone" placeholder="Basic usage" />
    <a-input v-model:value="password" placeholder="Password" />
    <a-button @click="login" type="primary" shape="round">登录</a-button>
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
    var phone = ref("")
    var password = ref("")

    onMounted(() => {
      console.log("onMounted");
    });

    async function login() {
      let params = {
        phone:phone.value,
        password:password.value
      }
      service.get('/login/cellphone?', {params})
    }

    return {
      phone,
      password,
      login,
    };
  },
});
</script>
