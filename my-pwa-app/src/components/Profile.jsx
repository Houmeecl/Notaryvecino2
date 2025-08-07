import { User, Mail, MapPin, Calendar } from 'lucide-react'

const Profile = ({ user }) => {
  return (
    <div className="profile-page fade-in">
      <div className="page-header">
        <h1>Perfil</h1>
        <p>Información de tu cuenta</p>
      </div>

      <div className="profile-content">
        <div className="card profile-card">
          <div className="profile-avatar-section">
            <img src={user.avatar} alt={user.name} className="profile-avatar-large" />
            <div className="profile-info">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <span className="user-role">Desarrollador</span>
            </div>
          </div>
        </div>

        <div className="card profile-details">
          <h3>Información Personal</h3>
          <div className="info-grid">
            <div className="info-item">
              <Mail size={20} />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">{user.email}</span>
              </div>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <div>
                <span className="info-label">Ubicación</span>
                <span className="info-value">Madrid, España</span>
              </div>
            </div>
            <div className="info-item">
              <Calendar size={20} />
              <div>
                <span className="info-label">Miembro desde</span>
                <span className="info-value">Enero 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile