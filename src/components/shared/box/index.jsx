import styles from './box.module.css'

function Box ({ item }) {

  const getColorStatus = (status) => {
    const done = 1;
    const pending = 2;
    const rejected = 3;

    switch (status) {
      case done:
        return {backgroundColor: 'var(--success)'}
      case pending:
        return {backgroundColor: 'var(--warning)'}
      case rejected:
        return {backgroundColor: 'var(--danger)'}
      default:
        return {backgroundColor: 'var(--grey)'}
    }
  }

  return (
    <>
      <section className={styles.home_task}>
        <div className={styles.home_task_content}>
          <div className={styles.home_task_header}>
            <div className={styles.home_task_title}>
              <h4>{item.brand} <small>{item.collection}</small></h4>
            </div>
            <div className={styles.home_task_subtitle}>
              <small>{item.status}</small>
            </div>
            <div style={getColorStatus(item.status_id)} className={styles.home_task_status}>
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