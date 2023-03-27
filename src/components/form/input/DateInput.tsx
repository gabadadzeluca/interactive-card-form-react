import Input from "./Input"

interface DataInput{
  type: string;
  name: string;
  placeholder1: string;
  placeholder2: string;
  // onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress: any;
}

export default function DateInput(props:DataInput){
  return (
    <div>
      <label>{props.name}</label>
      <Input 
        type={'number'}
        placeholder={props.placeholder1}
        onKeyPress={props.onKeyPress}
      />
      <Input
        type={'number'}
        placeholder={props.placeholder2}
        onKeyPress={props.onKeyPress}
    />
    </div>
  )
}