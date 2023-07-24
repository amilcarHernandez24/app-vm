import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faMagnifyingGlass, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

import styles from './box.module.css'

function Box ({ item }) {

  const getColorStatus = (status) => {
    const done = 1;
    const pending = 2;
    const rejected = 3;

    switch (status) {
      case done:
        return {color: 'var(--success)'}
      case pending:
        return {color: 'var(--warning)'}
      case rejected:
        return {color: 'var(--danger)'}
      default:
        return {color: 'var(--grey)'}
    }
  }

  const getIconStatus = (status) => {
    const done = 1;
    const pending = 2;
    const rejected = 3;

    switch (status) {
      case done:
        return faCheck
      case pending:
        return faMagnifyingGlass
      case rejected:
        return faXmark
      default:
        return faArrowUpFromBracket
    }
  }


  const lineThrough = (status) => {
    switch (status) {
      case 1:
        return {textDecoration: 'line-through'}
      default:
        ''
    }
  }


  return (
    <>
      <section className={styles.home_task}>
        <div className={styles.home_task_content}>
          <div className={styles.home_task_header}>
            <div style={lineThrough(item.status_id)} className={styles.home_task_title}>
              <h4>{item.brand} <small>{item.collection}</small></h4>
            </div>
            <div  className={styles.home_task_status}>
              <div className={styles.home_task_subtitle}>
                <small>{item.status}</small>
              </div>
              <div style={getColorStatus(item.status_id)}  className={styles.home_task_status_icon}>
              <FontAwesomeIcon icon={getIconStatus(item.status_id)} />
              </div>
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