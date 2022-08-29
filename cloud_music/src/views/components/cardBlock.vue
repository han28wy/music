<template>
  <div class="block" @click="handleClick">
    <a-image
      width="2rem"
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
    <span>这里写了一点点</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
setup(){
  const router = useRouter();
  async function handleClick(): Promise<void>{
    console.log('clicl')
    router.push('/gedanList')
  }
  return {
    handleClick
  }
}
});
</script>
<style scoped>
.block {
  display: flex;
  flex-direction: column;
  width: 2rem;
}
</style>
