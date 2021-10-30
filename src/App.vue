<template>
  <Toast
    :is-toast-active="isToastActive"
    :position="'topRight'"
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
import Toast from './components/Toast.vue';
import { useToast } from './lib/use-toast';

export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    const { isToastActive, position, customToastCss, handleClick, handleClose } = useToast();

    const style = customToastCss({
      background: 'red',
      padding: '20px',
    });

    return {
      isToastActive,
      position,
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
