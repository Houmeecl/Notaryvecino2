import { useState } from 'react'
import { Plus, Check, Trash2, CheckSquare } from 'lucide-react'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Completar diseño de la interfaz', completed: false },
    { id: 2, title: 'Implementar autenticación', completed: true },
    { id: 3, title: 'Optimizar rendimiento', completed: false },
    { id: 4, title: 'Escribir documentación', completed: false },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        completed: false
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const completedCount = tasks.filter(task => task.completed).length

  return (
    <div className="tasks-page fade-in">
      <div className="page-header">
        <h1>Tareas</h1>
        <p>Organiza y gestiona tus tareas diarias</p>
      </div>

      <div className="tasks-stats">
        <div className="stat-item">
          <span className="stat-number">{completedCount}</span>
          <span className="stat-label">Completadas</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{tasks.length - completedCount}</span>
          <span className="stat-label">Pendientes</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{tasks.length}</span>
          <span className="stat-label">Total</span>
        </div>
      </div>

      <div className="card">
        <div className="add-task-form">
          <input
            type="text"
            placeholder="Agregar nueva tarea..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button className="btn btn-primary" onClick={addTask}>
            <Plus size={20} />
            Agregar
          </button>
        </div>

        <div className="tasks-list">
          {tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <button
                className={`task-checkbox ${task.completed ? 'checked' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed && <Check size={16} />}
              </button>
              
              <span className="task-title">{task.title}</span>
              
              <button
                className="task-delete"
                onClick={() => deleteTask(task.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div className="empty-state">
            <CheckSquare size={64} />
            <h3>No hay tareas</h3>
            <p>¡Agrega tu primera tarea para comenzar!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tasks