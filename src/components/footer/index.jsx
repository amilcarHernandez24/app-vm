import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.css'
import { faClockRotateLeft, faHouse, faLock, faShoppingBag, faStore } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className={styles.footer}>
        <div className={styles.options}>
            <div className={styles.option}><FontAwesomeIcon icon={faHouse} /></div>
            <div className={styles.option}><FontAwesomeIcon icon={faClockRotateLeft} /></div>
            <div className={styles.option}><FontAwesomeIcon icon={faStore} /></div>
            <div className={styles.option}><FontAwesomeIcon icon={faLock} /></div>
        </div>
        <div className={styles.add}>+</div>
        </div>
      </footer>
    </>
  )
}

export default Footer