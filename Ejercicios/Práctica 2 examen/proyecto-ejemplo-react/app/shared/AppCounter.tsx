

export default function AppCounter({tasks}:any) {
  return (<>
    <p>Tareas pendientes: {tasks.filter(t => t.completed).length}</p>
    <p>Tareas completadas: {tasks.filter(t => t.completed).length}</p>
  </>  
  );
}