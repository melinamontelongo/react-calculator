import "./App.css";
import { useState } from "react";
import { evaluate } from "mathjs";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import Alert from "./components/Alert";

function App() {
  //User input 
  const [input, setInput] = useState("");
  //Visibility of alert that notifies user of an invalid operation
  const [alertVisible, setAlertVisible] = useState(false);
  //Updates user input (passed to Screen component)
  const addInput = value => {
    setInput(input + value)
  }
  //Updates alert visibility (passed to Alert component)
  const showAlert = alertVisible => {
    setAlertVisible(!alertVisible)
  }
  //Shows operation result (passed to the equal Button component)
  const showResult = () => {
    //Regex for a valid operation
    const validOperation = /^\d+(\+|\.|-|\*|\/){1}\d+$/;
    //evaluate operation if truthy and valid
    if (input && validOperation.test(input)){
      setInput(evaluate(input))
    } else {
      //throw alert
      showAlert(alertVisible)
    };
  };
  return (
    <div className="App">
      <Alert isVisible={alertVisible} visibilityHandler={showAlert}/>
     <div className="calculator-container">
      <Screen input={input}/>
        <div className="calc-row">
        <Button clickHandler={addInput}>7</Button>
        <Button clickHandler={addInput}>8</Button>
        <Button clickHandler={addInput}>9</Button>
        <Button clickHandler={addInput}>/</Button>
      </div>
      <div className="calc-row">
        <Button clickHandler={addInput}>4</Button>
        <Button clickHandler={addInput}>5</Button>
        <Button clickHandler={addInput}>6</Button>
        <Button clickHandler={addInput}>*</Button>
      </div>
      <div className="calc-row">
        <Button clickHandler={addInput}>1</Button>
        <Button clickHandler={addInput}>2</Button>
        <Button clickHandler={addInput}>3</Button>
        <Button clickHandler={addInput}>-</Button>
      </div>
      <div className="calc-row">
        <Button clickHandler={addInput}>0</Button>
        <Button clickHandler={addInput}>.</Button>
        <Button clickHandler={showResult}>=</Button>
        <Button clickHandler={addInput}>+</Button>
      </div>
      <div className="calc-row">
      <ButtonClear clearHandler={() => setInput("")}>Clear</ButtonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
