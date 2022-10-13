export const MULTIPLY = "MULTIPLY";
export const multiply = (num1, num2) => {
  return {
    type: MULTIPLY,
    payload: { num1, num2 },
  };
};

export const multiplyReducer = (state = { result: "" }, action) => {
  switch (action.type) {
    case MULTIPLY:
      return {
        ...state,
        result: Number(action.payload.num1) * Number(action.payload.num2),
      };
    default:
      return {
        ...state,
      };
  }
};
