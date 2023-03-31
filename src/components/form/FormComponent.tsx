import InputMask from 'react-input-mask';
import Error from './Error';

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
    showError,
    setExpMonth,
    setExpYear,
    setCardName,
    setCardNum,
    setCvc,
    setShowError
  } = props;


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setCardName(value);
  }

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setCardNum(e.target.value.replace(/[^0-9]+/g, ""));
  }

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setExpMonth(e.target.value.replace(/1[3-9]|[2-9][0-9]/, "12").substring(0, 2));
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    const currentYear = new Date().getFullYear().toString().substring(2);
    if(parseInt(value[0]) < parseInt(currentYear[0])) return;
    setExpYear(value);
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
        onChange={(e)=>{handleNameChange(e)}}
      />
      <Error 
        condition={cardName == '' || !cardName}
        message={"Can't be blank"}
        show={showError}
      />

      <label>{nameData.cardNum.name}</label>
      <InputMask
        mask="9999 9999 9999 9999" 
        type={'text'}
        maskChar={''}
        name={nameData.cardNum.name}
        placeholder={nameData.cardNum.placeholder}
        value={cardNum}
        onChange={(e)=>{handleNumber(e)}}
      />
      <Error 
        condition={cardNum == '' || !cardNum}
        message={"Can't be blank"}
        show={showError}
      />

      <div>
        <label>{nameData.expDate.name}</label>
        <div>
          <InputMask 
            mask="99"
            maskChar={''}
            value={expMonth}
            onChange={(e)=>handleMonth(e)}
            id='month'
            placeholder={nameData.expDate.placeholder1}
          />
          <InputMask 
            mask="99"
            maskChar={''}
            value={expYear}
            onChange={(e)=>handleYear(e)}
            id="year"
            placeholder={nameData.expDate.placeholder2}
          />
          <Error 
            condition={!expYear || !expMonth || expMonth=='' || expYear == ''}
            message={"Can't be blank"}
            show={showError}
          />
        </div>
      </div>

      <button 
        onClick={()=>setShowError(true)}
      >
        Submit
      </button>
    </div>
  )
}