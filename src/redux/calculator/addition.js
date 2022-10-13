export const ADD = "ADD";
export const add = (num1, num2) => {
  return {
    type: ADD,
    payload: { num1, num2 },
  };
};

const addReducer = (state = { result: "" }, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        result: Number(action.payload.num1) + Number(action.payload.num2),
      };
    default:
      return {
        ...state,
      };
  }
};
export default addReducer;
