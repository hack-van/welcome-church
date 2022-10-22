import * as React from "react";
import "./InputField.scss";

const InputField = ({ title, placeholder = "" }) => {
  return (
    <div className="input-wrapper">
      <label>{title}</label>
      <input type="text" name="username" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
