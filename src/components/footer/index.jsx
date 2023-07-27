import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.css'
import { faClockRotateLeft, faHouse, faLock, faStore } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className={styles.footer}>
        <div className={styles.options}>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faHouse} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faClockRotateLeft} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faStore} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faLock} /></NavLink>
        </div>
        <NavLink to='/vm'><div className={styles.add}>+</div></NavLink>
        </div>
      </footer>
    </>
  )
}

export default Footer