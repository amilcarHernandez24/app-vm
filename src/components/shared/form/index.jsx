import styles from './form.module.css'
import FunctionalButton from '../buttons'

function Form ({ onSubmitFunction, children, buttonMessage, formTitle, }) {
  return (
    <form onSubmit={onSubmitFunction} className={styles.form}>
      <article className={styles.form_header}>
          <div className={styles.form_info}>
            <h3 className={styles.form_title}>{formTitle}</h3>
            <div className={styles.form_subtitle}>
              <small>Ingresa los datos</small>
            </div>
          </div>
        </article>
      
      {children}
      <div className={styles.button}>
        <FunctionalButton
          buttonType="button"
          buttonColor="primary"
          type="submit"
          title={buttonMessage}
        />
      </div>
    </form>
  )
}

export default Form