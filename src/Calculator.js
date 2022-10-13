import React, { useState } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./map";
import { add } from "./redux/calculator/addition";
import { clear } from "./redux/calculator/clearresult";
import { divide } from "./redux/calculator/division";
import { multiply } from "./redux/calculator/multiply";
import { substract } from "./redux/calculator/substraction";

function Calculator(props) {
  console.log(props);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [selectedReducer, setselectedReducer] = useState("");

  return (
    <div>
      <input
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter num1"
        type="number"
      />
      <br />
      <input
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter num2"
        type="number"
      />
      <div className="btns">
        <button
          onClick={() => {
            props.dispatch(add(num1, num2));
            setselectedReducer("ADD");
            props.dispatch(clear(0));
          }}
        >
          ADD
        </button>
        <button
          onClick={() => {
            props.dispatch(substract(num1, num2));
            setselectedReducer("SUBSTRACT");
            props.dispatch(clear(0));
          }}
        >
          Substract
        </button>

        <button
          onClick={() => {
            props.dispatch(multiply(num1, num2));
            setselectedReducer("MULTIPLY");
            props.dispatch(clear(0));
          }}
        >
          Multiply
        </button>

        <button
          onClick={() => {
            props.dispatch(divide(num1, num2));
            setselectedReducer("DIVIDE");
            props.dispatch(clear(0));
          }}
        >
          Divide
        </button>
      </div>

      {!props.clearReducer.clear && (
        <>
          {selectedReducer === "ADD" && (
            <p>Sum is : {props.addReducer.result}</p>
          )}
          {selectedReducer === "SUBSTRACT" && (
            <p>Difference is : {props.substractReducer.result}</p>
          )}
          {selectedReducer === "MULTIPLY" && (
            <p>Product is : {props.multiplyReducer.result}</p>
          )}
          {selectedReducer === "DIVIDE" && (
            <p>Quotient is : {props.divideReducer.result}</p>
          )}
        </>
      )}
      <button onClick={() => props.dispatch(clear(1))}>ClearResult</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
