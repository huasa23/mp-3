import styled from "styled-components";
import { useRef } from "react";

const CalculatorMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1vh 0;
  border: 1px solid black;
`;
const CalculatorInput = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalculatorFirstNumber = styled.input`
  width: 25%;
  margin: 1vh 1vw;
`;

const CalculatorSecondNumber = styled.input`
  width: 25%;
  margin: 1vh 1vw;
`;
const CalculatorOutput = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalculatorButton = styled.button`
  width: 5%;
  margin: 1vh 1vw;
`;

const CalculatorResult = styled.h3`
    margin: 1vh 1vw;
`;

function useCalculatorRefs() {
    const firstNumberRef = useRef<HTMLInputElement>(null);
    const secondNumberRef = useRef<HTMLInputElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);
    
    function useCalculateButtonClick(operator: string) {
        const num1 = parseFloat(firstNumberRef.current?.value || "0");
        const num2 = parseFloat(secondNumberRef.current?.value || "0");
        let result;
        console.log(num1, num2, operator);
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            if (num2 === 0) {
              alert("Division by zero is not allowed.");
              return;
            }
            result = num1 / num2;
            break;
          case "**":
            result = 1;
            for (let i = 0; i < num2; i++) {
              result *= num1;
            }
            break;
          default:
            return;
        }
        console.log(result);
        console.log(resultRef.current);
        console.log(1);
        if (resultRef.current) {
          console.log(2);
          resultRef.current.textContent = String(result);
          if (result < 0) {
            console.log(3);
            resultRef.current.style.color = "red";
          } else {
            resultRef.current.style.color = "black";
          }
        }
      };
    
      function useClearButtonClick() {
        if (firstNumberRef.current) {
          firstNumberRef.current.value = "";
        }
        if (secondNumberRef.current) {
          secondNumberRef.current.value = "";
        }
        if (resultRef.current) {
          resultRef.current.textContent = "";
          resultRef.current.className = "CalculatorResult";
        }
      };
    
    return { firstNumberRef, secondNumberRef, resultRef, useCalculateButtonClick, useClearButtonClick };
  }


  
export default function Calculator() {
  const { firstNumberRef, secondNumberRef, resultRef, useCalculateButtonClick, useClearButtonClick } = useCalculatorRefs();
  return (
    <CalculatorMain>
        <CalculatorInput>
          <CalculatorFirstNumber
            ref={firstNumberRef}
            placeholder="Enter first number"
          />
          <CalculatorSecondNumber
            ref={secondNumberRef}
            placeholder="Enter second number"
          />
          <CalculatorButton onClick={() => useCalculateButtonClick("+")}>
            +
          </CalculatorButton>
          <CalculatorButton onClick={() => useCalculateButtonClick("-")}>
            -
          </CalculatorButton>
          <CalculatorButton onClick={() => useCalculateButtonClick("*")}>
            *
          </CalculatorButton>
          <CalculatorButton onClick={() => useCalculateButtonClick("/")}>
            /
          </CalculatorButton>
          <CalculatorButton onClick={() => useCalculateButtonClick("**")}>
            **
          </CalculatorButton>
          <CalculatorButton onClick={useClearButtonClick}>Clear</CalculatorButton>
        </CalculatorInput>
        <CalculatorOutput>
          <CalculatorResult ref={resultRef}></CalculatorResult>
        </CalculatorOutput>
      </CalculatorMain>
  );
}