import styles from './buttons.module.css';

const FunctionalButton = ({
  type = 'button',
  title = null,
  action = null,
  buttonType,
  buttonColor
}) => {
  return (
    <button className={`${styles[buttonType]} ${styles[buttonColor]}`} onClick={action} type={type}>
      <div>{title}</div>
    </button>
  );
};

export default FunctionalButton;