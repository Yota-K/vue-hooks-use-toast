<template>
  <Toast
    :is-toast-active="isToastActive"
    :position="'topRight'"
    :animation-type="'right'"
    :style="style"
  >
    <h2>Sample Heading</h2>
    <p>TestTestTest</p>
  </Toast>
  <button @click="handleClick">handle Toast</button>
</template>

<script lang="ts">
import { defineComponent, CSSProperties } from 'vue';
import Toast from './components/Toast.vue';
import { useToast } from './lib/use-toast';

export default defineComponent({
  components: {
    Toast,
  },
  setup() {
    const { isToastActive, handleClick, position } = useToast();

    const style: CSSProperties = {
      background: 'red',
      padding: '20px',
    };

    return {
      isToastActive,
      handleClick,
      position,
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
