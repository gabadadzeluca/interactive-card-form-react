import DateInput from "./input/DateInput"
import Input from "./input/Input"

interface FormData{
  month: number|null;
  year: number|null;
  cardNum: number|null;
  cardName: string|null;
  setMonth: (month:number|null) => void;
  setYear: (year:number|null) => void;
  setCardNum: (cardNum: number|null) => void;
  setCardName: (cardName: string|null) => void;
}

export default function FormComponent(props:FormData){
  const{setMonth, setYear, setCardName, setCardNum, month, year, cardName, cardNum} = props;

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

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    type: "text" | "number"
  ) => {
    const input = event.currentTarget;
    const value = input.value;
    let regex: RegExp = /^$/;
  
    if (type === "text") {
      // Filter out non-text characters
      regex = /^[a-zA-Z\s]*$/;
    } else if (type === "number") {
      // Filter out non-number characters
      regex = /^[0-9]*$/;
    }
  
    const isValidInput = regex.test(value);
  
    if (!isValidInput) {
      event.preventDefault();
    }
  };
  

  return(
    <div>
      <div>
        <Input 
          type={'text'}
          placeholder={nameData.cardName.placeholder}
          name={nameData.cardName.name}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCardName(e.target.value)}}
          value={cardName}
          onKeyPress={handleKeyPress}
        />
        <Input 
          type={'number'}
          placeholder={nameData.cardNum.placeholder}
          name={nameData.cardNum.name}
          onKeyPress={handleKeyPress}
        />
      
      </div>

      <div>
          {/* for exp dates */}
          <DateInput 
            type={'number'}
            name={nameData.expDate.name}
            placeholder1={nameData.expDate.placeholder1}
            placeholder2={nameData.expDate.placeholder2}
            onKeyPress={handleKeyPress}
          />
        <Input 
          type={'number'}
          placeholder={nameData.cvc.placeholder}
          name={nameData.cvc.name}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  )
}