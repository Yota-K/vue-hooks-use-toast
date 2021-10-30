import { reactive, toRefs, CSSProperties } from 'vue';
import { PositionType } from '../type/position-type';

type State = {
  isToastActive: boolean;
  duration: number;
  position: PositionType;
};

export const useToast = () => {
  const state = reactive<State>({
    isToastActive: false,
    duration: 500,
    position: 'top',
  });

  const customToastCss = (css: CSSProperties) => {
    return css;
  }

  const handleClick = () => {
    state.isToastActive = !state.isToastActive;
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
