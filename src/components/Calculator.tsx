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

const CalculatorLabel = styled.label`
  font-family: "Slabo 27px", serif;
  font-weight: 400;
  font-style: normal;
  font-size: calc(1px + 1vw);
  width: 13%;
  margin: 1vh 0;
  display: flex; 
  align-items: center; 
  text-align: center;
  justify-content: center;
`;

const CalculatorFirstNumber = styled.input`
  font-family: "Slabo 27px", serif;
  font-weight: 400;
  font-style: normal;
  width: 12%;
  margin: 1vh 1vw;
`;

const CalculatorSecondNumber = styled.input`
  font-family: "Slabo 27px", serif;
  font-weight: 400;
  font-style: normal;
  width: 15%;
  margin: 1vh 1vw;
`;
const CalculatorOutput = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalculatorButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1px + 1vw);
  width: 5%;
  margin: 1vh 1vw;
  font-family: "Slabo 27px", serif;
  font-weight: 400;
  font-style: normal;
`;

const CalculatorResult = styled.h3`
    font-size: calc(1px + 1vw);
  height: 1vh;
  width: 5%;
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
          <CalculatorLabel>First Number</CalculatorLabel>
          <CalculatorFirstNumber
            ref={firstNumberRef}
          />
          <CalculatorLabel>Second Number</CalculatorLabel>
          <CalculatorSecondNumber
            ref={secondNumberRef}
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