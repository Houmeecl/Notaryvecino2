import { useState, useEffect } from 'react'
import { 
  Home, 
  Calendar as CalendarIcon, 
  CheckSquare, 
  User, 
  Settings as SettingsIcon,
  Menu,
  X,
  Download,
  RefreshCw
} from 'lucide-react'

// Componentes
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import Tasks from './components/Tasks'
import Profile from './components/Profile'
import Settings from './components/Settings'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import PWAUpdateNotification from './components/PWAUpdateNotification'

// Estilos
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState({
    name: 'María García',
    email: 'maria@ejemplo.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  })

  // Cerrar sidebar al cambiar de tab
  useEffect(() => {
    setSidebarOpen(false)
  }, [activeTab])

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'calendar', label: 'Calendario', icon: CalendarIcon },
    { id: 'tasks', label: 'Tareas', icon: CheckSquare },
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'settings', label: 'Configuración', icon: SettingsIcon },
  ]

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} />
      case 'calendar':
        return <Calendar />
      case 'tasks':
        return <Tasks />
      case 'profile':
        return <Profile user={user} setUser={setUser} />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard user={user} />
    }
  }

  return (
    <div className="app">
      {/* PWA Components */}
      <PWAInstallPrompt />
      <PWAUpdateNotification />
      
      {/* Mobile Header */}
      <header className="mobile-header">
        <button 
          className="menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <h1>Mi PWA App</h1>
        <div className="header-user">
          <img src={user.avatar} alt={user.name} className="user-avatar-small" />
        </div>
      </header>

      <div className="app-layout">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="sidebar-header">
            <h2>Mi PWA App</h2>
            <p>Aplicación Moderna</p>
          </div>
          
          <nav className="sidebar-nav">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          <div className="sidebar-user">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
          </div>
        </aside>

        {/* Overlay para mobile */}
        {sidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="main-content">
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  )
}

export default App
