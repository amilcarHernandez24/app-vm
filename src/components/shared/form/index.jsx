import styles from './form.module.css';
import FunctionalButton from '../buttons';

const Form = ({
  onSubmitFunction,
  children,
  buttonMessage,
  formTitle,
}) => {

  return (
    <form onSubmit={onSubmitFunction} className={styles.form}>
      <h2>{formTitle}</h2>
      {children}
      <div className={styles.button}>
        <FunctionalButton
          buttonType="form__button"
          buttonColor=" "
          type="submit"
          title={buttonMessage}
        />
      </div>
    </form>
  );
};

export default Form;