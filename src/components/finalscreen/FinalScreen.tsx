import checkmark from '../../images/icon-complete.svg';
import styles from './FinalSceen.module.css';

export default function finalScreen(props:any){
  return (
    <div className={styles.finalScreen}>
      <img src={checkmark} alt="Checkmark"/>
      <h3>Thank you!</h3>
      <p>We've added your card details</p>
      <button
        onClick={props.reset}
      >Continue 
      </button>
    </div>
  )
}