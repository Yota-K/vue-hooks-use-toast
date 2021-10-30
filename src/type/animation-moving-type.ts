import { PositionType } from './position-type';

export type AnimationMovingType =  Extract<PositionType, 'top' | 'bottom'> | 'left' | 'right';
