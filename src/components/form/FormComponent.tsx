import Input from "./input/Input";
import { useRef } from "react";

export default function FormComponent(props:any){
  const nameData = {
    cardName:{
      name: 'CARDHOLDER NAME',
      placeholder: 'e.g. Jane Appleseed'
    },
    cardNum:{
      name: 'CARD NUMBER',
      placeholder: 'e.g. 1234 5678 9123 0000'
    },
    expDate:{
      name: 'Exp. Date (MM/YY)',
      placeholder1: 'MM',
      placeholder2: 'YY'
    },
    cvc:{
      name: 'CVC',
      placeholder: 'e.g. 123'
    }
  }
  const {
    expMonth,
    expYear,
    cardNum,
    cardName,
    cvc,
    billingAddress,
    numberValid,
    cvcValid,
    nameValid,
    setExpMonth,
    setExpYear,
    setCardName,
    setCardNum,
    setCvc,
    setBillingAddress,
    setNumberValid,
    setCvcValid,
    setNameValid
  } = props;


  const handleTextChange = (value:string):boolean=>{
    setCardName(value);
    if( value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)){
      return true;
    }else{
      return false;
    }
  }
  const handleNumChange = (value: string)=>{
    if(value === ''){
      setCardNum('')
    }else{
      if(value.match(/^\d+$/)){
        setCardNum(value);
      }
      if(value.length  == 15) console.log('valid number')
    }
  }

  return(
    <div>
      <Input 
        name={nameData.cardName.name}
        placeholder={nameData.cardName.placeholder}
        type={'text'}
        value={cardName}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleTextChange(e.target.value)}}
      />
      <Input 
        type={'number'}
        name={nameData.cardNum.name}
        placeholder={nameData.cardNum.placeholder}
        value={cardNum}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleNumChange(e.target.value)}}
      />
    </div>
  )
}