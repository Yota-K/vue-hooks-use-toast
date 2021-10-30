import { reactive, toRefs } from 'vue';
import { PositionType } from '../type/position-type';

type State = {
  isToastActive: boolean;
  duration: number;
  position: PositionType;
}

export const useToast = () => {
  const state = reactive<State>({
    isToastActive: false,
    duration: 500,
    position: 'top',
  });

  const handleClick = () => {
    state.isToastActive = !state.isToastActive;
  };

  return {
    ...toRefs(state),
    handleClick,
  };
};
