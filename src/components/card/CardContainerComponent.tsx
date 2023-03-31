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
	const{expMonth,expYear, cardName, cardNum, cvc} = props;
	return(
		<div>
			<CardOne 
				{...props}
			/>
			<CardTwo cvc={cvc}/>
		</div>	
	)
}