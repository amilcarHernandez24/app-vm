import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import logo from '../../assets/img/vmlogo.svg'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header () {
  return (
    <>
      <header className={styles.header_wrapper}>
        <div className={styles.header}>
        <NavLink to='/'><img src={logo} className={styles.logo} alt='logo'/></NavLink>
          <div className={styles.header_content}>
            <div>
              <h2 className={styles.header_user}>Sofía Esquire</h2>
              <p className={styles.header_store}>Tres Cruces</p>
            </div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header