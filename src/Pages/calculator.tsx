import { useState } from "react";
import { Textfit } from 'react-textfit';
import { useNavigate } from "react-router-dom";
import './calculator.css'

let equalTap = 0;
let opCount = 0;
const history = ["0"];
let i = 1;

export const Calc = () => {
    let[calculate, setCalc] = useState("");
    const[result, setResult] = useState("");

    const nav1 = useNavigate();
    const navToSupport = () => {
        nav1("/support");
    }
    
  
    const operator = ['/', '*', '+', '-'];
  
    const reset = () =>{
      setCalc("");
      equalTap = 0;
      opCount = 0;
    }

    const calculating = (value: string) => {
      if(operator.includes(value) && calculate === ''
        || operator.includes(value) && operator.includes(calculate.slice(-1)))
        {
          return;
        }
  
      if(equalTap != 0 && !operator.includes(value) && opCount === 0)
      {
        return;
      }
  
      if(operator.includes(value))
      {
        opCount++;
      }
  
      if(opCount > 1)
      {
        hasil();
        return;
      }
  
      setCalc(calculate + value);
    }
  
    const hasil = () => {
      
      try{
        setCalc(eval(calculate).toString());
        opCount = 0;
        equalTap++;
        history[i] = eval(calculate).toString();
        i++;
      } catch(err)
      {
        setCalc("Error");
      }
      
    }
  
    const deleteSeq = () => {
      if(calculate == '')
      {
        return;
      }
  
      const value = calculate.slice(0, -1);
  
      setCalc(value);
    }
  
    const historyPrint = history.map((histo,index) => (
      <p key = {index}>{histo}</p>
    ));
  
    return (
      <div className="box">
        <div className="display">
          <div className ="history" id="history">{historyPrint}</div>
          <Textfit className="displayCalc">{calculate? calculate : "0"}</Textfit>
        </div>
        
        <div className="calcbox">
          <button className="calcbutton" onClick={reset}>C</button>
          <button className="calcbutton" onClick={deleteSeq}>Del</button>
          <button className="calcbutton" onClick={navToSupport}>?</button>
          <button className="operator calcbutton" onClick={() => calculating('/')}>/</button>
          <button className="calcbutton" onClick={() => calculating('1')}>1</button>
          <button className="calcbutton" onClick={() => calculating('2')}>2</button>
          <button className="calcbutton" onClick={() => calculating('3')}>3</button>
          <button className="operator calcbutton" onClick={() => calculating('*')}>x</button>
          <button className="calcbutton" onClick={() => calculating('4')}>4</button>
          <button className="calcbutton" onClick={() => calculating('5')}>5</button>
          <button className="calcbutton" onClick={() => calculating('6')}>6</button>
          <button className="operator calcbutton" onClick={() => calculating('-')}>-</button>
          <button className="calcbutton" onClick={() => calculating('7')}>7</button>
          <button className="calcbutton" onClick={() => calculating('8')}>8</button>
          <button className="calcbutton" onClick={() => calculating('9')}>9</button>
          <button className="operator calcbutton" onClick={() => calculating('+')}>+</button>
          <button className="nol calcbutton" onClick={() => calculating('0')}>0</button>
          <button className="hasil calcbutton" onClick={hasil}>=</button>
        </div>
      </div>
    )
  }
