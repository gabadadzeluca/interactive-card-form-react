import styles from './Cards.module.css';

export default function CardOne(props:{
  expMonth:string;
  expYear: string;
  cardNum:string;
  cardName:string;
}){
	const{expMonth,expYear, cardName, cardNum} = props;
  const formattedCardNum = cardNum.replace(/(\d{4})/g, '$1 ').trim();
  return (
    <div className={styles.cardOne}>
      <div>
        {/* div for some circles */}
      </div>
      <div>
        <p>
          {cardNum ? formattedCardNum : '0000 0000 0000 0000'}
        </p>
        <div>
          <p>{cardName ? cardName.toUpperCase() : 'Name Surname'}</p>
          <p>
            <span>
              {expMonth ? expMonth : '00'}
            </span>
            /
            <span>
              {expYear ? expYear : '00'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}