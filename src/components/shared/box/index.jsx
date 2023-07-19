import styles from './box.module.css'

function Box () {
    return (
        <>
            <div className={styles.home_task}>
                <div className={styles.home_task_img}>
                  <div className={styles.home_task_img_item}>img</div>
                </div>
                <div className={styles.home_task_content}>
                <div className={styles.home_task_header}>
                  <div className={styles.home_task_title}>
                    <h4>Blue Steal <small>MJ_Outdoor</small></h4> 
                  </div>                
                  <div className={styles.home_task_subtitle}>
                    
                  </div>
                  <div className={styles.home_task_status}>

                  </div>
                </div>
                <div className={styles.home_task_footer}>
                  <div className={styles.home_task_date_created}>
                    <small>02/08/2023 by Amilcar Hernández</small>
                  </div>
                </div>
                </div>
              </div>
        </>
    )
}

export default Box