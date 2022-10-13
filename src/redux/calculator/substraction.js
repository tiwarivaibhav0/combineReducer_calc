export const SUBSTRACT = "SUBSTRACT";
export const substract = (num1, num2) => {
  return {
    type: SUBSTRACT,
    payload: { num1, num2 },
  };
};

export const substractReducer = (state = { result: "" }, action) => {
  switch (action.type) {
    case SUBSTRACT:
      return {
        ...state,
        result: Number(action.payload.num1) - Number(action.payload.num2),
      };
    default:
      return {
        ...state,
      };
  }
};
