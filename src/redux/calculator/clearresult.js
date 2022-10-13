export const CLEAR = "CLEAR";
export const SET = "SET";

export const clear = (bool) => {
  return {
    type: CLEAR,
    payload: bool,
  };
};

export const clearReducer = (state = { clear: false }, action) => {
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        clear: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
