import { reactive, toRefs, CSSProperties } from 'vue';
import { PositionType } from '../type/position-type';

type State = {
  isToastActive: boolean;
  duration: number | undefined;
  position: PositionType;
  isAutoClose: boolean | undefined;
};

export const useToast = () => {
  const state = reactive<State>({
    isToastActive: false,
    duration: 3000,
    position: 'top',
    isAutoClose: true,
  });

  const toastConfig = (newState: Partial<State>) => {
    state.duration = newState.duration;
    state.isAutoClose = newState.isAutoClose;
  };

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
    toastConfig,
    customToastCss,
    handleClick,
    handleClose,
  };
};
