import { validateHeaderName } from 'http';
import InputMask from 'react-input-mask';

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


  const handleNameChange = (value: string):void => {
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setCardName(value);
  }

  const handleNumber = (value:string):void => {
    setCardNum(value.replace(/[^0-9]+/g, ""));
  }

  const handleMonth = (value:string):void => {
    setExpMonth(value.replace(/1[3-9]|[2-9][0-9]/, "12").substring(0, 2));
  };

  const handleYear = (value: string):void => {
    const currentYear = new Date().getFullYear().toString().substring(2);
    if(parseInt(value[0]) < parseInt(currentYear[0])) return;
    else if(parseInt(value) < parseInt(currentYear)) return;
    setExpYear(value.substring(0,2));
  }


  return(
    <div>
      <label>{nameData.cardName.name}</label>
      <input
        maxLength={25}
        name={nameData.cardName.name}
        placeholder={nameData.cardName.placeholder}
        type={'text'}
        value={cardName}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleNameChange(e.target.value)}}
      />

      <label>{nameData.cardNum.name}</label>

      <InputMask
        mask="9999 9999 9999 9999" 
        type={'text'}
        maskChar={''}
        name={nameData.cardNum.name}
        placeholder={nameData.cardNum.placeholder}
        value={cardNum}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleNumber(e.target.value)}}
      />
      <div>
        <label>{nameData.expDate.name}</label>
        <InputMask 
          mask="99"
          maskChar={''}
          value={expMonth}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleMonth(e.target.value)}
          id='month'
          placeholder={nameData.expDate.placeholder1}
        />
        <InputMask 
          mask="99"
          maskChar={''}
          value={expYear}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleYear(e.target.value)}
          id="year"
          placeholder={nameData.expDate.placeholder2}
        />
      </div>
    </div>
  )
}