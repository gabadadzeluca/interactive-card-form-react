import CardOne from "./cards/CardOne";
import CardTwo from "./cards/CardTwo";

export default function CardContainerComponent(){
	return(
		<div>
			{/* This is the container */}
			<CardOne />
			<CardTwo />
		</div>	
	)
}