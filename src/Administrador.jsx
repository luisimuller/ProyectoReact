import React from 'react'
import ListadoTareas from './componenteLista/componenteLista.jsx';
import FormularioTarea from './componenteFormulario/componenteFormulario.jsx';
import { useEffect,useState } from 'react';

const Administrador = () =>  {

    const obtenerTareasDesdeLocalStorage = () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
      };
    
      const [tareas, setTarea] = useState(obtenerTareasDesdeLocalStorage);
    
      useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
        console.log('La lista de tareas ha cambiado:', tareas);
      }, [tareas]);
    
    
      const tareaFinalizada = (id) => {
        setTarea((tareasGuardadas) =>
          tareasGuardadas.map((tarea) =>
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
          )
        );
      };
    
      const eliminarTarea = (id) => {
        setTarea((tareasGuardadas) => tareasGuardadas.filter((tarea) => tarea.id !== id));
      };
    
      const agregarTareas = (nuevaTarea) => {
        setTarea((tareasGuardadas) => [...tareasGuardadas, nuevaTarea]);
      };
  return (
    <div>
      <h1 className="titulo">Lista de Tareas</h1>
      <FormularioTarea insertarTarea={agregarTareas} />
      <ListadoTareas
        tareas={tareas}
        estadoTarea={tareaFinalizada}
        eliminarTarea={eliminarTarea}
      />
    </div>
  )
}

export default Administrador;
