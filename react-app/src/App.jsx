import { useState } from 'react'
import Header from './components/Header'
import TaskManager from './components/TaskManager'
import UserProfile from './components/UserProfile'
import Dashboard from './components/Dashboard'
import PWAUpdateNotification from './components/PWAUpdateNotification'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan@ejemplo.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  })

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} />
      case 'tasks':
        return <TaskManager />
      case 'profile':
        return <UserProfile user={user} setUser={setUser} />
      default:
        return <Dashboard user={user} />
    }
  }

  return (
    <div className="app">
      <PWAInstallPrompt />
      <Header 
        user={user} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />
      <main className="main-content">
        {renderActiveComponent()}
      </main>
      <PWAUpdateNotification />
    </div>
  )
}

export default App
