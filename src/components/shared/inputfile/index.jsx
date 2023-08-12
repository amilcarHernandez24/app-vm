import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './input.module.css'
import { faArrowUpFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons'

function InputFile ({ onChangeFunction, type = 'file', title, defaultValue, error, name }) {

  return (
    <label className={styles.label} htmlFor={name}>
      {title}
      
      <FontAwesomeIcon icon={faArrowUpFromBracket} />

      <input
        onChange={onChangeFunction}
        type={type}
        id={name}
        defaultValue={defaultValue}
        className={error ? styles.inputRed : styles.input}
      />
      {error && <p className={styles.label}>{error}</p>}
    </label>
  )
}

export default InputFile