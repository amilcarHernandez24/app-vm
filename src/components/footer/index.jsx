import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.css'
import { faCirclePlus, faClockRotateLeft, faHouse, faLock, faPlus, faStore } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className={styles.footer}>
        <div className={styles.options}>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faHouse} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faClockRotateLeft} /></NavLink>
            <NavLink to='/vm' className={styles.add}><FontAwesomeIcon icon={faPlus} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faStore} /></NavLink>
            <NavLink to='/' className={styles.option}><FontAwesomeIcon icon={faLock} /></NavLink>
        </div>        
        </div>
      </footer>
    </>
  )
}

export default Footer