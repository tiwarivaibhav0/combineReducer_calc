export const DIVIDE = "DIVIDE";
export const divide = (num1, num2) => {
  return {
    type: DIVIDE,
    payload: { num1, num2 },
  };
};

export const divideReducer = (state = { result: "" }, action) => {
  switch (action.type) {
    case DIVIDE:
      return {
        ...state,
        result: Number(action.payload.num1) / Number(action.payload.num2),
      };
    default:
      return {
        ...state,
      };
  }
};
