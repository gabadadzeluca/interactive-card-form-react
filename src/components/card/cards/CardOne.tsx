import styles from './Cards.module.css';

export default function CardOne(){
  return (
    <div className={styles.cardOne}>
      <div>
        {/* div for some circles */}
      </div>
      <div>
        <p>
          0000 0000 0000 0000
        </p>
        <div>
          <p>Name Surname</p>
          <p>00/00</p>
        </div>
      </div>
    </div>
  )
}