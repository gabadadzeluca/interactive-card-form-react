import InputMask from 'react-input-mask';
import Error from './Error';
import styles from './FormComponent.module.css'

interface formData{
  expMonth:string;
  expYear: string;
  cardNum:string;
  cardName:string;
  cvc:string;
  showError:boolean;
  setExpMonth: (value: string)=>void;
  setExpYear: (value: string)=>void;
  setCardName: (value: string)=>void;
  setCardNum: (value: string)=>void;
  setCvc: (value: string)=>void;
  setShowError: (value: boolean)=>void;
}

export default function FormComponent(props:formData){
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

  const handleCvc = (e: React.ChangeEvent<HTMLInputElement>):void =>{
    setCvc(e.target.value);
  }
  
  const messageOne = "Wrong Format";
  const messageTwo = "Can't be blank"

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
        className={cardName.length < 4 && showError ? styles.invalid : ''}
      />
      <Error 
        condition={!cardName || cardName.length < 2}
        message={cardName.length > 0 ? messageOne : messageTwo}
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
        className={cardNum.length < 16 && showError ? styles.invalid : ''}
      />
      <Error 
        condition={!cardNum || cardNum.length < 16}
        message={cardNum.length > 0 ? messageOne : messageTwo}
        show={showError}
      />
       <div className={styles.dateAndCvc}>

        <div>
          <label>{nameData.expDate.name}</label>
          <div>
            {/* month input */}
            <div>
              <InputMask 
                mask="99"
                maskChar={''}
                value={expMonth}
                onChange={(e)=>handleMonth(e)}
                id='month'
                placeholder={nameData.expDate.placeholder1}
                className={expMonth.length < 2 && showError ? styles.invalid : ''}
              />
              <Error 
                condition={!expMonth || expMonth.length < 2}
                message={expMonth.length > 0 ? messageOne : messageTwo}
                show={showError}
              />
            </div>
            {/* year input */}
            <div>
              <InputMask 
                mask="99"
                maskChar={''}
                value={expYear}
                onChange={(e)=>handleYear(e)}
                id="year"
                placeholder={nameData.expDate.placeholder2}
                className={expYear.length < 2 && showError ? styles.invalid : ''}
              />
              <Error 
                condition={!expYear || expYear.length < 2}
                message={expYear.length > 0 ? messageOne : messageTwo}
                show={showError}
              />
            </div>

          </div>
        </div>
        
        <div>
          {/* cvc div */}
          <label>{nameData.cvc.name}</label>
          <InputMask 
            mask="999"
            maskChar={''}
            placeholder={nameData.cvc.placeholder}
            value={cvc}
            onChange={e=>handleCvc(e)}
            className={cvc.length < 3 && showError ? styles.invalid : ''}
            minLength={3}
          />
          <Error 
            condition={!cvc || cvc.length < 3}
            message={cvc.length > 0 ? messageOne : messageTwo}
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