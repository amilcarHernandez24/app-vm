import styles from './home.module.css'
import Box from '../shared/box'

import INFO from '../../constants/info.json'

function Home () {

  const getPercentage = (tasks, status) => {
    const total = tasks.length;
    const count = tasks.reduce((count, task) => count + (task.status_id === status ? 1 : 0), 0);
    return (
      total > 0 ? (count / total) * 100 : 0
    )
  };


  const getColor = (percentage) => {
    const danger ='var(--danger)';
    const warning = 'var(--warning)';
    const success = 'var(--success)';
    return percentage <= 40 ? {color: danger} : percentage <= 79 ? {color: warning} : {color: success}
  };

  return (
    <>
      <section className={styles.home}>
        <article className={styles.home_header}>
          <div className={styles.home_info}>
            <h3 className={styles.home_title}>
              {INFO.period}
            </h3>
            <div className={styles.home_date}>
              <small>{INFO.date_begin} - </small>
              <small>{INFO.date_end}</small>
            </div>
          </div>
          <div style={getColor(getPercentage(INFO.tasks, 1))} className={styles.home_completado}>
            <h4>{ getPercentage(INFO.tasks, 1)}%</h4>
          </div>
        </article>

        <article className={styles.home_status_bar}>
          <span>{'Completado'}</span>
        </article>

        <article className={styles.home_body}>
          <div className={styles.home_filters}>
            <div className={styles.home_filter_all}>
                <span>All <small>{INFO.tasks.length}</small> | </span>
            </div>
            <div className={styles.home_filter_non_taken}>
                <span>Untaken <small>{INFO.tasks.reduce((count, task) => count + (task.status === 0 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={styles.home_filter_pending}>
                <span>Pending <small>{INFO.tasks.reduce((count, task) => count + (task.status === 2 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={styles.home_filter_rejected}>
                <span>Rejected <small>{INFO.tasks.reduce((count, task) => count + (task.status === 3 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={styles.home_filter_done}>
                <span>Done <small>{INFO.tasks.reduce((count, task) => count + (task.status === 1 ? 1 : 0), 0)}</small></span>
            </div>
          </div>

          <div className={styles.home_content}>
            {
              INFO.tasks.map((item) =>
                  <Box key={item.id} item={item} />
                )
            }
          </div>
        </article>
      </section>
    </>
  )
}

  export default Home