import React, { useState } from 'react';
import './componenteFormulario.css';


const FormularioTarea = ({ insertarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const cambiaValor = (event) => {
    setNuevaTarea(event.target.value);
  };

  const cargarTarea = (event) => {
    event.preventDefault();

    if (nuevaTarea.trim() !== '') {
      insertarTarea({
        id: Date.now(),
        nombre: nuevaTarea,
        completada: false,
      });

      setNuevaTarea('');
    }
  };

  return (
    <form onSubmit={cargarTarea} className='formulario'>
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        value={nuevaTarea}
        onChange={cambiaValor}
        className='ingreso'
      />
      <button type="submit" className='btn btn-primary addTask'>Agregar Tarea</button>
    </form>
  );
};

export default FormularioTarea