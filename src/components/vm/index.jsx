import { useState } from 'react';
import Form from '../shared/form'
import Input from '../shared/input'
import InputFile from '../shared/inputfile';
import Select from '../shared/select'

import styles from './vm.module.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Vm() {

  const [selectedFilePared, setSelectedFilePared] = useState(null);
  const [selectedFileMesa, setSelectedFileMesa] = useState(null);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        switch (type) {
          case 1:
            // pared
            setSelectedFilePared(e.target.result);
            break;
          case 2:
            // mesa
            setSelectedFileMesa(e.target.result);
            break;
          default:
            break;
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteFile = (type) => {
    switch (type) {
      case 1:
        // pared
        setSelectedFilePared(null);
        break;
      case 2:
        // mesa
        setSelectedFileMesa(null);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {

  };

  const handleReset = () => {

  }

  return (
    <>
      <section className={styles.vm}>
        <Form
          onSubmitFunction={handleSubmit}
          buttonMessage={'Create'}
          formTitle={'Create VM'}
          resetFunction={handleReset}>
          <Select
            key={1}
            list={[
              {
                id: 1,
                name: "Tres Cruces"
              }
            ]}
            name='select1'
            kind="name"
            title="Tienda"/>
          <Select
            key={2}
            list={[
              {
                id: 1,
                name: "Blue Steal"
              }
            ]}
            name='select2'
            kind="name"
            title="Marca"/>
          <Select
            key={3}
            list={[
              {
                id: 1,
                name: "MJ_Joven"
              },
              {
                id: 2,
                name: "MJ_Soft"
              },
              {
                id: 3,
                name: "MJ_Rebel"
              }
            ]}
            name='select3'
            kind="name"
            title="Colección"/>
          
          <InputFile onChangeFunction={(event) => handleFileChange(event, 1)} type="file" key={4} name="file1" title="Pared"/>
          {selectedFilePared && (
            <div>
              <img className={styles.img} src={selectedFilePared} alt="Selected" />
              <FontAwesomeIcon icon={faXmark} onClick={() => handleDeleteFile(1)}/>
            </div>
          )}
          <InputFile onChangeFunction={(event) => handleFileChange(event, 2)} type="file" key={5} name="file2" title="Mesa"/>
          {selectedFileMesa && (
            <div>
              <img className={styles.img} src={selectedFileMesa} alt="Selected" />
              <FontAwesomeIcon icon={faXmark} onClick={() => handleDeleteFile(2)}/>
            </div>
          )}
        </Form>
      </section>
    </>
  )
}

export default Vm