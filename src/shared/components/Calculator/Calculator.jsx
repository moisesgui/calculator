import React, { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import "./Style.scss";

export const Calculator = () => {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState(0);

  function clearCalcutator() {
    setNumber(0);
  }

  function inputNumber(num) {
    const input = num.target.value;
    if (number === 0) {
      setNumber(input);
    } else {
      setNumber(number + input);
    }
  }

  function porcentage() {
    setNumber(number / 100);
  }

  function changeSignOperator() {
    if (number > 0) {
      setNumber(-number);
    } else {
      setNumber(Math.abs(number));
    }
  }

  function operatorHandler(element) {
    const currentOperator = element.target.value;
    setOperator(currentOperator);
    setOldNumber(number);
    setNumber(0);
  }

  function calculate() {
    const oldNum = parseFloat(oldNumber);
    const num = parseFloat(number);

    if (isNaN(oldNum) || isNaN(num)) {
      return;
    }

    switch (operator) {
      case "/":
        if (num === 0) {
          return;
        } else {
          setNumber(oldNum / num);
        }
        break;
      case "X":
        setNumber(oldNum * num);
        break;
      case "-":
        setNumber(oldNum - num);
        break;
      case "+":
        setNumber(oldNum + num);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Box m={10} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">{number}</h1>
          <button className="whites" onClick={clearCalcutator}>
            AC
          </button>
          <button className="whites" onClick={changeSignOperator}>
            +/-
          </button>
          <button className="whites" onClick={porcentage}>
            %
          </button>
          <button className="oranges" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="grays" onClick={inputNumber} value={7}>
            7
          </button>
          <button className="grays" onClick={inputNumber} value={8}>
            8
          </button>
          <button className="grays" onClick={inputNumber} value={9}>
            9
          </button>
          <button className="oranges" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="grays" onClick={inputNumber} value={4}>
            4
          </button>
          <button className="grays" onClick={inputNumber} value={5}>
            5
          </button>
          <button className="grays" onClick={inputNumber} value={6}>
            6
          </button>
          <button className="oranges" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="grays" onClick={inputNumber} value={1}>
            1
          </button>
          <button className="grays" onClick={inputNumber} value={2}>
            2
          </button>
          <button className="grays" onClick={inputNumber} value={3}>
            3
          </button>
          <button className="oranges" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="zero" onClick={inputNumber} value={0}>
            0
          </button>
          <button className="grays" onClick={inputNumber} value=".">
            ,
          </button>
          <button className="oranges" onClick={calculate}>
            =
          </button>
        </div>
      </Container>
    </>
  );
};
