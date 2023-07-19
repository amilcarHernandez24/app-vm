import styles from './footer.module.css'

function Footer() {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className={styles.footer}>
        <div className={styles.options}>
            <div className={styles.option}><span>-</span></div>
            <div className={styles.option}><span>-</span></div>
            <div className={styles.option}><span>-</span></div>
            <div className={styles.option}><span>-</span></div>
            <div className={styles.option}><span>-</span></div>
        </div>
        <div className={styles.add}>+</div>
        </div>
      </footer>
    </>
  )
}

export default Footer