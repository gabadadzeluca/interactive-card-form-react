import Input from "./input/Input";

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


  const handleTextChange = (value:string)=>{
    setCardName(value);
    if( value.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)){
      return true;
    }else{
      return false;
    }
  }

  const handleNumber = (value:string) =>{
    // value = value.replace(/\s/g, "");
    value = (value.replace(/[^0-9]+/g, ""));
    if(value.length > 16){
      return;
    } else if (value.length > 4 && value.length < 8) {
      value = value.replace(/(.{4})/g, "$1 ");
    } else if (value.length > 8 && value.length < 12) {
      value = value.replace(/(.{4})(.{4})/g, "$1 $2 ");
    } else if (value.length > 12 && value.length < 16) {
      value = value.replace(/(.{4})(.{4})(.{4})/g, "$1 $2 $3 ");
    } else if (value.length == 16) {
      value = value.replace(/(.{4})(.{4})(.{4})(.{4})/g, "$1 $2 $3 $4");
    }
    setCardNum(value);
  }



  return(
    <div>
      <Input 
        name={nameData.cardName.name}
        placeholder={nameData.cardName.placeholder}
        type={'text'}
        // value={cardName}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleTextChange(e.target.value)}}
      />
      <Input 
        type={'text'}
        name={nameData.cardNum.name}
        placeholder={nameData.cardNum.placeholder}
        value={cardNum}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleNumber(e.target.value)}}
      />
    </div>
  )
}