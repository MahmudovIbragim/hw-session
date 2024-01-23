import React, { useEffect, useState } from "react";
import Style from "../forms/StyleForm.css";

const Forms = () => {
  const [inputLenght, setInputLenght] = useState("");
  const [inputValue, setInputValue] = useState(
    localStorage.getItem("inputValue")
  );

  useEffect(() => {
    console.log(inputLenght.length);
  }, [inputLenght]);

  useEffect(() => {
    console.log(inputValue);
    localStorage.setItem(
      "inputValue",
      inputValue ? JSON.stringify(inputValue) : ""
    );
  }, [inputValue]);

  return (
    <>
      <div className={Style.form}>
        <input
          type="text"
          value={inputValue}
          placeholder="localStoreg"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lenght"
          value={inputLenght}
          onChange={(e) => {
            setInputLenght(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Forms;
