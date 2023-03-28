import {RefObject} from "react";


export default function Input(props: {
  name:string;
  type: string;
  value: string;
  placeholder: string;
  onChange: any;
}){
  return (
    <div>
      <label>{props.name}</label>
      <input 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  )
}