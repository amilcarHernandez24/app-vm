import { useState } from 'react';

import styles from './home.module.css'
import Box from '../shared/box'

import INFO from '../../constants/info.json'

function Home () {

  const [filteredStatusId, setFilteredStatusId] = useState(null);
  const [filteredData, setFilteredData] = useState(INFO.tasks);

  const handleClick = (status) => {
    const data = INFO.tasks;

    if (status === null || status === filteredStatusId) {
      setFilteredData(data)
      setFilteredStatusId(null);
    } else {
      const newData = data.filter((item) => item.status_id === status);
      setFilteredData(newData);
      setFilteredStatusId(status);
    }
  };

  const getPercentage = (tasks, status) => {
    const total = tasks.length;
    const count = tasks.reduce((count, task) => count + (task.status_id === status ? 1 : 0), 0);
    return (
      total > 0 ? (count / total) * 100 : 0
    )
  };

  const percentageName = (percentage) => {
    let value = percentage;
    return value <= 40 ? 'Aun falta' : value <= 79 ? 'Queda poco' :value <= 99 ? 'Casi listo' : 'Completado'
  }
  //Rango: 0 - 40 'Aun falta' / 41 - 79 'Queda poco' / 80 - 99 'Casi listo'/ 100 'Completado',

  const percentageGrowBar = (percentage) => {

    let caseOne = percentage <= 40;
    let caseTwo = percentage <= 79;
    let caseThree = percentage <= 99;

    if (caseOne) {
      return {backgroundColor: 'var(--danger)', width: `${percentage}%`}
    } else if (caseTwo) {
      return {backgroundColor: 'var(--warning)', width: `${percentage}%`}
    } else if  (caseThree) {
      return {backgroundColor: 'var(--success)', width: `${percentage}%`}
    }

    return {backgroundColor: 'var(--success)', width: `${percentage}%`}
  }


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
          <span style={percentageGrowBar(getPercentage(INFO.tasks, 1))}>{percentageName(getPercentage(INFO.tasks, 1))}</span>
        </article>

        <article className={styles.home_body}>
          <div className={styles.home_filters}>
            <div className={filteredStatusId === null ? styles.status_active : ''}>
                <span onClick={() => handleClick(null)}>All <small>{INFO.tasks.length}</small> | </span>
            </div>
            <div className={filteredStatusId === 0 ? styles.status_active : ''}>
                <span onClick={() => handleClick(0)}>Untaken <small>{INFO.tasks.reduce((count, task) => count + (task.status_id === 0 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={filteredStatusId === 3 ? styles.status_active : ''}>
                <span onClick={() => handleClick(3)}>Rejected <small>{INFO.tasks.reduce((count, task) => count + (task.status_id === 3 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={filteredStatusId === 2 ? styles.status_active : ''}>
                <span onClick={() => handleClick(2)}>Pending <small>{INFO.tasks.reduce((count, task) => count + (task.status_id === 2 ? 1 : 0), 0)}</small></span>
            </div>
            <div className={filteredStatusId === 1 ? styles.status_active : ''}>
                <span onClick={() => handleClick(1)}>Done <small>{INFO.tasks.reduce((count, task) => count + (task.status_id === 1 ? 1 : 0), 0)}</small></span>
            </div>
          </div>

          <div className={styles.home_content}>
            {
              filteredData.map((item) =>
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