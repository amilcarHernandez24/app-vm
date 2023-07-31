import styles from './input.module.css';

const Input = ({ type = 'text', title, defaultValue, error }) => {

  return (
    <label className={styles.label}>
      {title}
      <input
        type={type}
        defaultValue={defaultValue}
        className={error ? styles.inputRed : ''}
      />
      {error && <p className={styles.label}>{error}</p>}
    </label>
  );
};

export default Input;