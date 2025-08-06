import { useState, useEffect } from 'react'
import { TrendingUp, Users, CheckCircle, Clock, Calendar, Activity } from 'lucide-react'
import './Dashboard.css'

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    activeUsers: 0,
    productivity: 0
  })

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      setStats({
        totalTasks: 24,
        completedTasks: 18,
        activeUsers: 156,
        productivity: 87
      })
    }, 1000)
  }, [])

  const cards = [
    {
      title: 'Tareas Totales',
      value: stats.totalTasks,
      icon: CheckCircle,
      color: 'blue',
      trend: '+12%'
    },
    {
      title: 'Completadas',
      value: stats.completedTasks,
      icon: TrendingUp,
      color: 'green',
      trend: '+8%'
    },
    {
      title: 'Usuarios Activos',
      value: stats.activeUsers,
      icon: Users,
      color: 'purple',
      trend: '+23%'
    },
    {
      title: 'Productividad',
      value: `${stats.productivity}%`,
      icon: Activity,
      color: 'orange',
      trend: '+5%'
    }
  ]

  const recentActivities = [
    { id: 1, action: 'Completó tarea "Diseñar interfaz"', time: 'Hace 2 horas' },
    { id: 2, action: 'Creó nuevo proyecto', time: 'Hace 4 horas' },
    { id: 3, action: 'Actualizó perfil', time: 'Hace 1 día' },
    { id: 4, action: 'Completó sprint review', time: 'Hace 2 días' }
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>¡Bienvenido de vuelta, {user.name.split(' ')[0]}!</h2>
        <p>Aquí tienes un resumen de tu actividad reciente</p>
      </div>

      <div className="stats-grid">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <div key={index} className={`stat-card ${card.color}`}>
              <div className="stat-header">
                <Icon size={24} />
                <span className="trend">{card.trend}</span>
              </div>
              <div className="stat-content">
                <h3>{card.value}</h3>
                <p>{card.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="dashboard-content">
        <div className="recent-activity">
          <h3>Actividad Reciente</h3>
          <div className="activity-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-icon">
                  <Clock size={16} />
                </div>
                <div className="activity-content">
                  <p>{activity.action}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <h3>Acciones Rápidas</h3>
          <div className="action-buttons">
            <button className="action-btn primary">
              <CheckCircle size={20} />
              Nueva Tarea
            </button>
            <button className="action-btn secondary">
              <Calendar size={20} />
              Programar Reunión
            </button>
            <button className="action-btn secondary">
              <Users size={20} />
              Invitar Usuario
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard