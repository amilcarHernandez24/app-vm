import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './input.module.css'
import { faArrowUpFromBracket, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function InputFile ({ type = 'file', title, defaultValue, error, name }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedFile(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile();
  };

  return (
    <>
      <label className={styles.label} >{title}</label>
      <input
          onChange={handleFileChange}
          type={type}
          id={name}
          defaultValue={defaultValue}
          className={error ? styles.inputRed : styles.input}
      />
      {
        selectedFile 
        ?
          <div className={styles.preview_photo}>
            <img className={styles.img} src={selectedFile} alt="Selected" />
            <div className={styles.icon_group}>
              <label htmlFor={name}><FontAwesomeIcon className={styles.icon_edit} icon={faArrowUpFromBracket}/></label>
              <label><FontAwesomeIcon className={styles.icon_delete} icon={faTrash} onClick={handleDeleteFile}/></label>
            </div>
          </div>
        :
          <label className={styles.upload} htmlFor={name}>        
          <FontAwesomeIcon className={styles.icon} icon={faArrowUpFromBracket} />
          {error && <p className={styles.label}>{error}</p>}
      </label>
      }
    </>
  )
}

export default InputFile