import { constructArray } from '../utils/array-utils';
import { getRandNum } from '../utils/number-utils';

const defaultSquares = constructArray(() => ({
  position: constructArray(() => getRandNum(-20, 20), 3),
  life: 1
}), () => getRandNum(0, 300));

export const squaresReducer = (lastState = defaultSquares, action) => {
  switch (action.type) {

    default:
      return lastState;

  }
};
