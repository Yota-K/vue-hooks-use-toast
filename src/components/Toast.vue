<template>
  <div class="toast-wrapper" :class="positionClassName">
    <transition :name="animationName">
      <div v-if="isToastActive" class="toast" :style="style" :class="className">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, CSSProperties, computed } from 'vue';
import { PositionType } from '../type/position-type';
import { AnimationMovingType } from '../type/animation-moving-type';

export default defineComponent({
  name: 'Toast',
  props: {
    isToastActive: {
      type: Boolean,
      required: true,
    },
    style: {
      type: Object as PropType<CSSProperties>,
      required: false,
      default: null,
    },
    className: {
      type: String,
      required: false,
      default: null,
    },
    position: {
      type: String as PropType<PositionType>,
      required: false,
      default: 'top',
    },
    animationType: {
      type: String as PropType<AnimationMovingType>,
      required: false,
      default: 'bottom',
    },
    duration: {
      type: Number,
      required: false,
      default: 3000,
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const { position, animationType } = toRefs(props);

    const positionClassName = computed(() => {
      switch (position.value) {
        case 'top': 
          return 'toast--top'

        case 'topLeft': 
          return 'toast--top-left'

        case 'topRight': 
          return 'toast--top-right'

        case 'bottom': 
          return 'toast--bottom'

        case 'bottomLeft': 
          return 'toast--bottom-left'

        case 'bottomRight': 
          return 'toast--bottom-right'

        default:
          throw new Error('invalid value')
      }
    });

    const animationName = computed(() => {
      switch (animationType.value) {
        case 'top':
          return 'top'

        case 'bottom':
          return 'bottom'

        case 'left':
          return 'left'

        case 'right':
          return 'right'

        default:
          throw new Error('invalid value')
      }
    });

    return {
      positionClassName,
      animationName,
    }
  },
});
</script>

<style scoped>
/* toast default style */
.toast-wrapper {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2em;
  pointer-events: none;
}

.toast {
  position: absolute;
  pointer-events: auto;
}

.toast--top {
  align-items: baseline;
  justify-content: center;
}

.toast--top-left {
  align-items: baseline;
  justify-content: flex-start;
}

.toast--top-right {
  align-items: baseline;
  justify-content: flex-end;
}

.toast--bottom {
  align-items: end;
  justify-content: center;
}

.toast--bottom-left {
  align-items: end;
  justify-content: flex-start;
}

.toast--bottom-right {
  align-items: end;
  justify-content: flex-end;
}

/* toast animation */

/* top slide */
.top-enter-active, .top-leave-active {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.top-enter-from {
  transform: translateY(-100vh);
}

.top-enter-from, .top-leave-to {
  opacity: 0;
}

.top-leave-active {
  /* transitionを可変にしたい */
  transition: all 0.4s;
  transform: translateY(-300px);
}

/* bottom slide */
.bottom-enter-active, .bottom-leave-active {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.bottom-enter-from {
  transform: translateY(100vh);
}

.bottom-enter-from, .bottom-leave-to {
  opacity: 0;
}

.bottom-leave-active {
  /* transitionを可変にしたい */
  transition: all 0.4s;
  transform: translateY(300px);
}

/* left slide */
.left-enter-active, .left-leave-active {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.left-enter-from {
  transform: translateX(-100vh);
}

.left-enter-from, .left-leave-to {
  opacity: 0;
}

.left-leave-active {
  /* transitionを可変にしたい */
  transition: all 0.4s;
  transform: translateX(-300px);
}

/* right slide */
.right-enter-active, .right-leave-active {
  transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
}

.right-enter-from {
  transform: translateX(100vh);
}

.right-enter-from, .right-leave-to {
  opacity: 0;
}

.right-leave-active {
  /* transitionを可変にしたい */
  transition: all 0.4s;
  transform: translateX(300px);
}
</style>
