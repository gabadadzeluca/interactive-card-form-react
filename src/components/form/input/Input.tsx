interface InputData{
  type: string;
  name: string;
  value: string|number;
  placeholder: string;
  onChange:  React.ChangeEventHandler<HTMLInputElement>;
  onKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
}


export default function Input(props:any){
  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input 
        type={props.type} 
        id={props.name} 
        name={props.name} 
        value={props.value} 
        onChange={props.onChange} 
        placeholder={props.placeholder}
        onKeyPress={(e)=>props.onKeyPress(e, props.type)}
      />
    </div>
  )
}