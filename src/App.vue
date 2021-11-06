<template>
  <Toast
    :is-toast-active="isToastActive"
    :position="'bottomRight'"
    :animation-type="'right'"
    :style="style"
  >
    <button @click="handleClose">Close</button>
    <h2>Sample Heading</h2>
    <p>TestTestTest</p>
  </Toast>
  <button @click="handleClick">handle Toast</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toast from './component/Toast.vue';
import { useToast } from './lib/use-toast';

export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    const { isToastActive, toastConfig, customToastCss, handleClick, handleClose } = useToast();

    toastConfig({
      duration: 3000,
      isAutoClose: false,
    });

    const style = customToastCss({
      background: 'red',
      padding: '20px',
    });

    return {
      isToastActive,
      handleClick,
      handleClose,
      style,
    };
  },
});
</script>
  
<style>
html, body {
  padding: 0;
}

*, ::after, ::before {
  box-sizing: border-box;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
