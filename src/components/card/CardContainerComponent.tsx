import CardOne from "./cards/CardOne";
import CardTwo from "./cards/CardTwo";
import styles from "./cards/Cards.module.css";

interface displayData{
	expMonth:string;
  expYear: string;
  cardNum:string;
  cardName:string;
  cvc:string;
}

export default function CardContainerComponent(props: displayData){
	return(
		<div className={styles.cardContainer}>
			<CardTwo cvc={props.cvc}/>
			<CardOne 
				{...props}
			/>
		</div>	
	)
}