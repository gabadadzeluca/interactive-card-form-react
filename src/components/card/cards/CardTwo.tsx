import styles from './Cards.module.css';

export default function CardTwo(props:{
  cvc:string
}){
  return (
    <div className={styles.cardTwo}>
      <p className={styles.cvc}>{props.cvc ? props.cvc : '000'}</p>
    </div>
  )
}