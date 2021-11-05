import { reactive, toRefs, CSSProperties } from 'vue';
import { PositionType } from '../type/position-type';

type State = {
  isToastActive: boolean;
  duration: number;
  position: PositionType;
  isAutoClose: boolean;
};

export const useToast = () => {
  const state = reactive<State>({
    isToastActive: false,
    duration: 3000,
    position: 'top',
    isAutoClose: true,
  });

  const customToastCss = (css: CSSProperties) => {
    return css;
  };

  const handleClick = () => {
    const { isToastActive, duration, isAutoClose } = toRefs(state);
    isToastActive.value = !isToastActive.value;

    if (isToastActive.value && isAutoClose.value) {
      setTimeout(() => {
        handleClose();
      }, duration.value);
    }
  };

  const handleClose = () => {
    state.isToastActive = false;
  };

  return {
    ...toRefs(state),
    customToastCss,
    handleClick,
    handleClose,
  };
};
