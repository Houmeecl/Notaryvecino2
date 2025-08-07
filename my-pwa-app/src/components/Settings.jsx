import { Settings as SettingsIcon, Bell, Moon, Globe, Shield } from 'lucide-react'

const Settings = () => {
  return (
    <div className="settings-page fade-in">
      <div className="page-header">
        <h1>Configuración</h1>
        <p>Personaliza tu experiencia</p>
      </div>

      <div className="settings-content">
        <div className="card">
          <h3>Notificaciones</h3>
          <div className="setting-item">
            <div className="setting-info">
              <Bell size={20} />
              <div>
                <span className="setting-label">Notificaciones Push</span>
                <span className="setting-desc">Recibir notificaciones de la app</span>
              </div>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="card">
          <h3>Apariencia</h3>
          <div className="setting-item">
            <div className="setting-info">
              <Moon size={20} />
              <div>
                <span className="setting-label">Modo Oscuro</span>
                <span className="setting-desc">Cambiar a tema oscuro</span>
              </div>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="card">
          <h3>General</h3>
          <div className="setting-item">
            <div className="setting-info">
              <Globe size={20} />
              <div>
                <span className="setting-label">Idioma</span>
                <span className="setting-desc">Español</span>
              </div>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <Shield size={20} />
              <div>
                <span className="setting-label">Privacidad</span>
                <span className="setting-desc">Gestionar datos personales</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings