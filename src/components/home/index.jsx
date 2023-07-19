import styles from './home.module.css'
import Box from '../shared/box'

function Home () {
    return (
      <>
        <div className={styles.home}>
          <div className={styles.home_header}>
            <div className={styles.home_info}>
              <h3 className={styles.home_title}>
                1° 15na Agosto
              </h3>
              <div className={styles.home_date}>
                <small>01/08/2023 -</small>
                <small>15/08/2023</small>
              </div>
            </div>
            <div className={styles.home_completado}>
              <h4>100 %</h4>
            </div>
          </div>

          <div className={styles.home_status_bar}>
            <span>Completado</span>
          </div>

          <div className={styles.home_body}>
            <div className={styles.home_filters}>
              <div className={styles.home_filter_all}>
                  <span>All <small>10</small> | </span>
              </div>
              <div className={styles.home_filter_non_taken}>
                  <span>Untaken <small>0</small></span>
              </div>
              <div className={styles.home_filter_pending}>
                  <span>Pending <small>0</small></span>
              </div>
              <div className={styles.home_filter_rejected}>
                  <span>Rejected <small>0</small></span>
              </div>
              <div className={styles.home_filter_done}>
                  <span>Done <small>10</small></span>
              </div>
            </div>

            <div className={styles.home_content}>
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </div>
      </>
    )
}

  export default Home