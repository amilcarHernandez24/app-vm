import { useState } from 'react';
import Form from '../shared/form'
import Input from '../shared/input'
import InputFile from '../shared/inputfile';
import Select from '../shared/select'

import styles from './vm.module.css'
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Vm() {

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
          <InputFile key={4} name="file1" title="Pared"/>
          <InputFile name="file2" title="Mesa"/>
        </Form>
      </section>
    </>
  )
}

export default Vm