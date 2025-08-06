import { User, Home, CheckSquare, Settings } from 'lucide-react'
import './Header.css'

const Header = ({ user, activeTab, setActiveTab }) => {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'tasks', label: 'Tareas', icon: CheckSquare },
    { id: 'profile', label: 'Perfil', icon: User },
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>React App</h1>
        </div>
        
        <nav className="navigation">
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

        <div className="user-info">
          <img 
            src={user.avatar} 
            alt={user.name}
            className="user-avatar"
          />
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header