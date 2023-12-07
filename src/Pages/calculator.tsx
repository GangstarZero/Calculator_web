import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "./calculator.style";
import { Display } from "./calculator.style";
import { History } from "./calculator.style";
import { DisplayCalc } from "./calculator.style";
import { CalcBox } from "./calculator.style";
import { CalcButton } from "./calculator.style";

const history = ["0"];
let i = 1;
let equalTap = 0;
let opCount = 0;

export const Calc = () => {
  let [calculate, setCalc] = useState("");

  const nav1 = useNavigate();
  const navToSupport = () => {
    nav1("/support");
  };

  const operator = ["/", "*", "+", "-"];

  const reset = () => {
    setCalc("");
    equalTap = 0;
    opCount = 0;
  };

  const calculating = (value: string) => {
    if (
      (operator.includes(value) && calculate === "") ||
      (operator.includes(value) && operator.includes(calculate.slice(-1)))
    ) {
      return;
    }

    if (equalTap != 0 && !operator.includes(value) && opCount === 0) {
      return;
    }

    if (operator.includes(value)) {
      opCount++;
    }

    if (opCount > 1) {
      hasil();
      return;
    }

    setCalc(calculate + value);
  };

  const hasil = () => {
    let opOrNot = calculate.charAt(calculate.length - 1);
    if (operator.includes(opOrNot)) {
      return;
    }
    try {
      setCalc(eval(calculate).toString());
      opCount = 0;
      equalTap++;
      history[i] = eval(calculate).toString();
      i++;
    } catch (err) {
      setCalc("Error");
    }
  };

  const deleteSeq = () => {
    if (calculate == "") {
      return;
    }
    let opOrNot = calculate.charAt(calculate.length - 1);
    if (operator.includes(opOrNot)) {
      opCount = 0;
    }
    const value = calculate.slice(0, -1);

    setCalc(value);
  };

  const historyPrint = history.map((histo, index) => (
    <p key={index}>{histo}</p>
  ));

  return (
    <Box>
      <Display>
        <History id="history">{historyPrint}</History>
        <DisplayCalc>{calculate ? calculate : "0"}</DisplayCalc>
      </Display>

      <CalcBox>
        <CalcButton onClick={reset}>C</CalcButton>
        <CalcButton onClick={deleteSeq}>DEL</CalcButton>
        <CalcButton
          style={{ backgroundColor: "#866242" }}
          onClick={navToSupport}
        >
          ?
        </CalcButton>
        <CalcButton
          style={{ backgroundColor: "" }}
          onClick={() => calculating("/")}
        >
          /
        </CalcButton>
        <CalcButton onClick={() => calculating("1")}>1</CalcButton>
        <CalcButton onClick={() => calculating("2")}>2</CalcButton>
        <CalcButton onClick={() => calculating("3")}>3</CalcButton>
        <CalcButton
          style={{ backgroundColor: "" }}
          onClick={() => calculating("*")}
        >
          x
        </CalcButton>
        <CalcButton onClick={() => calculating("4")}>4</CalcButton>
        <CalcButton onClick={() => calculating("5")}>5</CalcButton>
        <CalcButton onClick={() => calculating("6")}>6</CalcButton>
        <CalcButton
          style={{ backgroundColor: "" }}
          onClick={() => calculating("-")}
        >
          -
        </CalcButton>
        <CalcButton onClick={() => calculating("7")}>7</CalcButton>
        <CalcButton onClick={() => calculating("8")}>8</CalcButton>
        <CalcButton onClick={() => calculating("9")}>9</CalcButton>
        <CalcButton
          style={{ backgroundColor: "" }}
          onClick={() => calculating("+")}
        >
          +
        </CalcButton>
        <CalcButton
          style={{ gridColumn: "1/3", borderRadius: "3vw" }}
          onClick={() => calculating("0")}
        >
          0
        </CalcButton>
        <CalcButton
          style={{
            backgroundColor: "orange",
            gridColumn: "3/5",
            borderRadius: "3vw",
          }}
          onClick={hasil}
        >
          =
        </CalcButton>
      </CalcBox>
    </Box>
  );
};
