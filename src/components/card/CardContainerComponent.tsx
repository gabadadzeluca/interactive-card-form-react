import CardOne from "./cards/CardOne";
import CardTwo from "./cards/CardTwo";

interface displayData{
	expMonth:string;
  expYear: string;
  cardNum:string;
  cardName:string;
  cvc:string;
}

export default function CardContainerComponent(props: displayData){
	return(
		<div>
			<CardOne 
				{...props}
			/>
			<CardTwo cvc={props.cvc}/>
		</div>	
	)
}