import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Clock, 
  Calendar,
  Activity,
  BarChart3,
  Zap,
  Target,
  Award
} from 'lucide-react'

const Dashboard = ({ user }) => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    completedTasks: 0,
    activeProjects: 0,
    productivity: 0,
    weeklyGoals: 0,
    achievements: 0
  })

  const [activities, setActivities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    const loadData = async () => {
      setIsLoading(true)
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStats({
        totalTasks: 48,
        completedTasks: 32,
        activeProjects: 6,
        productivity: 89,
        weeklyGoals: 4,
        achievements: 12
      })

      setActivities([
        { id: 1, action: 'Completó tarea "Diseñar nueva interfaz"', time: 'Hace 30 min', type: 'task' },
        { id: 2, action: 'Creó proyecto "App Móvil"', time: 'Hace 2 horas', type: 'project' },
        { id: 3, action: 'Alcanzó meta semanal', time: 'Hace 4 horas', type: 'achievement' },
        { id: 4, action: 'Actualizó perfil', time: 'Hace 1 día', type: 'profile' },
        { id: 5, action: 'Completó sprint review', time: 'Hace 2 días', type: 'meeting' }
      ])
      
      setIsLoading(false)
    }

    loadData()
  }, [])

  const statCards = [
    {
      title: 'Tareas Totales',
      value: stats.totalTasks,
      icon: CheckCircle,
      color: 'blue',
      trend: '+12%',
      description: 'vs mes anterior'
    },
    {
      title: 'Completadas',
      value: stats.completedTasks,
      icon: TrendingUp,
      color: 'green',
      trend: '+18%',
      description: 'vs semana anterior'
    },
    {
      title: 'Proyectos Activos',
      value: stats.activeProjects,
      icon: BarChart3,
      color: 'purple',
      trend: '+2',
      description: 'nuevos este mes'
    },
    {
      title: 'Productividad',
      value: `${stats.productivity}%`,
      icon: Zap,
      color: 'orange',
      trend: '+5%',
      description: 'vs promedio'
    }
  ]

  const quickActions = [
    { label: 'Nueva Tarea', icon: CheckCircle, color: 'blue' },
    { label: 'Nuevo Proyecto', icon: BarChart3, color: 'purple' },
    { label: 'Programar Reunión', icon: Calendar, color: 'green' },
    { label: 'Ver Reportes', icon: Activity, color: 'orange' }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'task': return CheckCircle
      case 'project': return BarChart3
      case 'achievement': return Award
      case 'profile': return Users
      case 'meeting': return Calendar
      default: return Clock
    }
  }

  if (isLoading) {
    return (
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Cargando datos...</p>
        </div>
        <div className="loading-grid">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card loading-card">
              <div className="loading-placeholder"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <div>
          <h1>¡Hola, {user.name.split(' ')[0]}! 👋</h1>
          <p>Aquí tienes un resumen de tu actividad hoy</p>
        </div>
        <div className="dashboard-date">
          <Calendar size={20} />
          <span>{new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {statCards.map((card, index) => {
          const Icon = card.icon
          return (
            <div key={index} className={`stat-card ${card.color}`}>
              <div className="stat-header">
                <div className="stat-icon">
                  <Icon size={24} />
                </div>
                <div className="stat-trend">
                  <span className="trend-value">{card.trend}</span>
                  <span className="trend-desc">{card.description}</span>
                </div>
              </div>
              <div className="stat-content">
                <h3>{card.value}</h3>
                <p>{card.title}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Content Grid */}
      <div className="dashboard-content">
        {/* Quick Actions */}
        <div className="card quick-actions-card">
          <h3>Acciones Rápidas</h3>
          <div className="quick-actions">
            {quickActions.map((action, index) => {
              const Icon = action.icon
              return (
                <button key={index} className={`quick-action ${action.color}`}>
                  <Icon size={20} />
                  <span>{action.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card activity-card">
          <h3>Actividad Reciente</h3>
          <div className="activity-list">
            {activities.map((activity) => {
              const Icon = getActivityIcon(activity.type)
              return (
                <div key={activity.id} className="activity-item">
                  <div className="activity-icon">
                    <Icon size={16} />
                  </div>
                  <div className="activity-content">
                    <p>{activity.action}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Weekly Goals */}
        <div className="card goals-card">
          <h3>Metas de la Semana</h3>
          <div className="goals-progress">
            <div className="goal-item">
              <div className="goal-info">
                <Target size={20} />
                <span>Completar 10 tareas</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
              <span className="progress-text">8/10</span>
            </div>
            <div className="goal-item">
              <div className="goal-info">
                <Award size={20} />
                <span>Finalizar 2 proyectos</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '50%' }}></div>
              </div>
              <span className="progress-text">1/2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard