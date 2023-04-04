import { useState } from "react";
import CardContainerComponent from "./components/card/CardContainerComponent";
import FormComponent from "./components/form/FormComponent";
import FinalScreen from "./components/finalscreen/FinalScreen";
import "./App.css";
function App() {
  
  const[expMonth, setExpMonth] = useState<string>('');
  const[expYear, setExpYear] = useState<string>('');
  const[cardNum, setCardNum] = useState<string>('');
  const[cardName, setCardName] = useState<string>('');
  const[cvc, setCvc] = useState<string>('');
  const[showError, setShowError] = useState<boolean>(false);
  const[submitted, setSubmitted] = useState<boolean>(false);

  const formData = {
    expMonth,
    expYear,
    cardNum,
    cardName,
    cvc,
    showError,
    submitted,
    setExpMonth,
    setExpYear,
    setCardName,
    setCardNum,
    setCvc,
    setShowError,
    setSubmitted
  };
  const displayData = {
    expMonth,
    expYear,
    cardNum,
    cardName,
    cvc,
    showError,
  }
  const reset = ():void => {
    setExpMonth('');
    setExpYear('');
    setCardNum('');
    setCardName('');
    setCvc('');
    setShowError(false);
    setSubmitted(false);
  }

  // console.log("SUBMITTED:", submitted);
  return (
    <div className='App'>
      <div className='container'>
        <CardContainerComponent {...displayData}/> 
        {submitted ? 
          (<FinalScreen reset={reset}/>)
          :
          (<FormComponent {...formData}/>)
        }
      </div>
    </div>
  )
}

export default App;