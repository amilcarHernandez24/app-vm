import styles from './select.module.css'
const Select = ({ list, name, kind, title, error }) => {

    return (
      <label className={styles.label}>
        {title}
        <select className={styles.select}>
          <option hidden>- Please select an existing {title.toLowerCase()} -</option>
          {list.map((item) => (
            <option value={item._id} key={item._id} className={styles.select}>
              {item[kind]}
            </option>
          ))}
          {!list.length && <option disabled>- The {title.toLowerCase()}s list is empty -</option>}
        </select>
        {error && <p className={styles.label}>{error}</p>}
      </label>
    );
  };

  export default Select;