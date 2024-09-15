import React from 'react';
import TareaIndividual from '../componenteTarea/componenteTarea.jsx';
import './componenteLista.css';

const ListadoTareas = ({ tareas, estadoTarea, eliminarTarea }) => {
  return (
    <ul className='eliminarPuntos'>
      {tareas.map(tarea => (
        <TareaIndividual
          key={tarea.id}
          tarea={tarea}
          estadoTarea={estadoTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
};

export default ListadoTareas;