import { useState } from 'react'
import { Plus, Check, Trash2, Edit, Calendar, Flag } from 'lucide-react'
import './TaskManager.css'

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Completar diseño de la interfaz',
      description: 'Finalizar el diseño mockup de la página principal',
      completed: false,
      priority: 'high',
      dueDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Implementar autenticación',
      description: 'Configurar sistema de login y registro',
      completed: true,
      priority: 'medium',
      dueDate: '2024-01-10'
    },
    {
      id: 3,
      title: 'Optimizar rendimiento',
      description: 'Mejorar tiempos de carga de la aplicación',
      completed: false,
      priority: 'low',
      dueDate: '2024-01-20'
    }
  ])

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  })

  const [showAddForm, setShowAddForm] = useState(false)

  const addTask = () => {
    if (newTask.title.trim()) {
      const task = {
        id: Date.now(),
        ...newTask,
        completed: false
      }
      setTasks([...tasks, task])
      setNewTask({ title: '', description: '', priority: 'medium', dueDate: '' })
      setShowAddForm(false)
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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'red'
      case 'medium': return 'yellow'
      case 'low': return 'green'
      default: return 'gray'
    }
  }

  const completedTasks = tasks.filter(task => task.completed).length
  const totalTasks = tasks.length

  return (
    <div className="task-manager">
      <div className="task-header">
        <div className="header-info">
          <h2>Gestor de Tareas</h2>
          <p>Organiza y gestiona tus tareas diarias</p>
        </div>
        <div className="task-stats">
          <div className="stat">
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalTasks - completedTasks}</span>
            <span className="stat-label">Pendientes</span>
          </div>
          <div className="stat">
            <span className="stat-number">{totalTasks}</span>
            <span className="stat-label">Total</span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button 
          className="add-task-btn"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus size={20} />
          Nueva Tarea
        </button>
      </div>

      {showAddForm && (
        <div className="add-task-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Título de la tarea"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Descripción (opcional)"
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            />
          </div>
          <div className="form-row">
            <select
              value={newTask.priority}
              onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
            >
              <option value="low">Baja prioridad</option>
              <option value="medium">Media prioridad</option>
              <option value="high">Alta prioridad</option>
            </select>
            <input
              type="date"
              value={newTask.dueDate}
              onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
            />
          </div>
          <div className="form-actions">
            <button className="btn-cancel" onClick={() => setShowAddForm(false)}>
              Cancelar
            </button>
            <button className="btn-save" onClick={addTask}>
              Guardar Tarea
            </button>
          </div>
        </div>
      )}

      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-checkbox">
              <button
                className={`checkbox ${task.completed ? 'checked' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed && <Check size={16} />}
              </button>
            </div>
            
            <div className="task-content">
              <h3 className="task-title">{task.title}</h3>
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
              <div className="task-meta">
                <span className={`priority priority-${task.priority}`}>
                  <Flag size={14} />
                  {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Media' : 'Baja'}
                </span>
                {task.dueDate && (
                  <span className="due-date">
                    <Calendar size={14} />
                    {new Date(task.dueDate).toLocaleDateString('es-ES')}
                  </span>
                )}
              </div>
            </div>

            <div className="task-actions">
              <button
                className="action-btn edit"
                title="Editar"
              >
                <Edit size={16} />
              </button>
              <button
                className="action-btn delete"
                onClick={() => deleteTask(task.id)}
                title="Eliminar"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="empty-state">
          <p>No hay tareas aún. ¡Crea tu primera tarea!</p>
        </div>
      )}
    </div>
  )
}

export default TaskManager