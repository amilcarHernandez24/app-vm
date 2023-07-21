import styles from './box.module.css'

function Box ({ item }) {
  return (
    <>
      <section className={styles.home_task}>
        <div className={styles.home_task_img}>
          <div className={styles.home_task_img_item}>
            <img src={item.img} alt="img" className={styles.home_task_img_img}/>
          </div>
        </div>
        <div className={styles.home_task_content}>
          <div className={styles.home_task_header}>
            <div className={styles.home_task_title}>
              <h4>{item.brand} <small>{item.collection}</small></h4>
            </div>
            <div className={styles.home_task_subtitle}>
            </div>
            <div className={styles.home_task_status}>
              {item.status}
            </div>
          </div>
          <div className={styles.home_task_footer}>
            <div className={styles.home_task_date_created}>
              <small>{item.date_created} by {item.user}</small>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Box