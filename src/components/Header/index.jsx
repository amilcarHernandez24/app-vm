import styles from './header.module.css'
import logo from '../../assets/img/logo-header.svg'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header () {
  return (
    <>
      <header className={styles.header_wrapper}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt='logo'/>
          <div className={styles.header_content}>
            {/* <h2 className={styles.header_title}>Portfolio Radar N2</h2>
            <p className={styles.header_user}>Nombre del colaborador</p> */}
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header