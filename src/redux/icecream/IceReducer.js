import { BUY_ICECREAM } from "./iceType";

const initialState = {
  numOfIce: 20,
};

export const IceReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {...state,numOfIce: state.numOfIce - 1};

    default: 
    return state
     
  }
};
