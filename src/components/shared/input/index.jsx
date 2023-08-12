import styles from './input.module.css'

function Input ({ type = 'text', title, defaultValue, error }) {

  return (
    <label className={styles.label}>
      {title}
      <input
        type={type}
        defaultValue={defaultValue}
        className={error ? styles.inputRed : styles.input}
      />
      {error && <p className={styles.label}>{error}</p>}
    </label>
  )
}

export default Input