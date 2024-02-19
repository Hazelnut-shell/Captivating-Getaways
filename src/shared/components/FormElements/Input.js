import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const formControlInvalid = !inputState.isValid && inputState.isTouched;

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={`${formControlInvalid && "border-red-500 bg-[#ffd1d1]"}`}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={`${formControlInvalid && "border-red-500 bg-[#ffd1d1]"}`}
      />
    );

  return (
    <div className={`my-4 mx-0`}>
      <label htmlFor={props.id} className={`block font-bold mb-2 ${formControlInvalid && "text-red-500"}`}>
        {props.label}
      </label>
      {element}
      {formControlInvalid && <p className="text-red-500">{props.errorText}</p>}
    </div>
  );
};

export default Input;
