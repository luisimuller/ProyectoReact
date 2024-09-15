import React, { useState } from 'react';
import './componenteTarea.css';

const TareaIndividual = ({ tarea, estadoTarea, eliminarTarea }) => {
  const [completado, setCompletado] = useState(tarea.completada);

  const estadoCompletado = () => {
    setCompletado(!completado);
    estadoTarea(tarea.id);
  };

  const borrarTarea = () => {
    eliminarTarea(tarea.id);
  };
  
  

  return (
    <li className="lista">
    <div className={`item ${completado ? 'completed' : ''}`}>{tarea.nombre}</div>
    <div className='botones'>
      <button onClick={estadoCompletado} className='botonCompleta'   >
        Tarea realizada
      </button>
      <button onClick={borrarTarea} className='eliminado'>Eliminar tarea</button>
    </div>
   
  </li>

  );
};

export default TareaIndividual;