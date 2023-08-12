import styles from './preview.module.css'
import Buttons from '../shared/buttons'

import DETAILS from '../../constants/details.json'
import Photo from '../shared/photo'


function Preview () {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.preview_header}>
          <div className={styles.preview_info}>
            <h3 className={styles.preview_title}>
              {DETAILS.period}
            </h3>
            <div className={styles.preview_SUBTITLE}>
              <small>{DETAILS.date_begin} - </small>
              <small>{DETAILS.date_end}</small>
            </div>
          </div>
          <div className={styles.preview_store}>
            <h4>{DETAILS.brand} {DETAILS.collection}</h4>
            <div>&nbsp;</div>
          </div>
        </article>
      </section>
      <section className={styles.section_preview}>
        <article className={styles.preview_img_container}>
        {
          DETAILS.img.map((item) =>
            <Photo key={item.id} item={item} />
          )
        }
        </article>
        <article className={styles.comment_container}>
          <p className={styles.comment_text}>{DETAILS.comment}</p>
        </article>
        <div className={styles.button}>
          <Buttons
            buttonType="button"
            buttonColor="primary"
            type="submit"
            title='Confirmar'
          />
        </div>
      </section>
    </>
  )
}

export default Preview