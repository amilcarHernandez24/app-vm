import Home from '../home/index';
import styles from './layout.module.css';

function Layout () {
  return (
    <>
      <main className={styles.layout}>
        <Home />
      </main>
    </>
  )
}

export default Layout