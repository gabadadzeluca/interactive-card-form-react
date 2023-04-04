import InputMask from 'react-input-mask';
import Error from './error/Error';
import styles from './FormComponent.module.css'

interface formData{
  expMonth:string;
  expYear: string;
  cardNum:string;
  cardName:string;
  cvc:string;
  showError:boolean;
  submitted: boolean;
  setExpMonth: (value: string)=>void;
  setExpYear: (value: string)=>void;
  setCardName: (value: string)=>void;
  setCardNum: (value: string)=>void;
  setCvc: (value: string)=>void;
  setShowError: (value: boolean)=>void;
  setSubmitted: (value: boolean)=>void;
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
    submitted,
    setExpMonth,
    setExpYear,
    setCardName,
    setCardNum,
    setCvc,
    setShowError,
    setSubmitted
  } = props;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, '');
    setCardName(value.toUpperCase());
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
  
  const handleSubmit = ():void =>{
    if(cardNum.length == 16 && cardName && expMonth.length == 2 && expYear.length == 2 && cvc.length == 3){
      setSubmitted(true);
      console.log("FORM WAS SUBMITTED");
    }else{
      setShowError(true);
      setSubmitted(false);
    }
  }
  
  const messageOne = "Wrong Format";
  const messageTwo = "Can't be blank"

  return(
    <div className={styles.formContainer}>
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

        <div className={styles.dateDiv}>
          <label className={styles.label}>{nameData.expDate.name}</label>
          <div className={styles.dateInputsDiv}>
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
        
        <div className={styles.cvcDiv}>
          <label className={styles.label}>{nameData.cvc.name}</label>
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
        onClick={handleSubmit}
        className={styles.submitBtn}
      >
        Confirm
      </button>
    </div>
  )
}