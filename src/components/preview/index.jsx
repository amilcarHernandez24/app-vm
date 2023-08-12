import styles from './preview.module.css'
import Buttons from '../shared/buttons'

import DETAILS from '../../constants/details.json'
import Photo from '../shared/photo'


function Preview () {
  return (
    <>
      <section className={styles.section}>
        <article className={styles.preview_info}>
          <div className={styles.preview_info_header}>
            <h3>{DETAILS.store}</h3>
            <small>{DETAILS.period}</small>
          </div>
          <small>{DETAILS.collection}</small>
        </article>
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
            buttonType="form_button"
            buttonColor="Aca le paso clase que esta en el comp button"
            type="submit"
            title='Confirmar'
          />
        </div>
      </section>
    </>
  )
}

export default Preview