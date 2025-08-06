import { useState } from 'react'
import { Edit2, Save, X, Camera, Mail, Phone, MapPin, Briefcase } from 'lucide-react'
import './UserProfile.css'

const UserProfile = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({ ...user })

  const handleSave = () => {
    setUser(editedUser)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedUser({ ...user })
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const profileStats = [
    { label: 'Tareas Completadas', value: '127' },
    { label: 'Proyectos Activos', value: '8' },
    { label: 'Días Activo', value: '45' },
    { label: 'Colaboradores', value: '23' }
  ]

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-avatar-section">
          <div className="avatar-container">
            <img 
              src={editedUser.avatar} 
              alt={editedUser.name}
              className="profile-avatar"
            />
            {isEditing && (
              <button className="avatar-edit-btn">
                <Camera size={20} />
              </button>
            )}
          </div>
          
          <div className="profile-info">
            {isEditing ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editedUser.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="name-input"
                  placeholder="Nombre completo"
                />
                <input
                  type="email"
                  value={editedUser.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="email-input"
                  placeholder="Correo electrónico"
                />
              </div>
            ) : (
              <div className="profile-details">
                <h2>{user.name}</h2>
                <p className="email">{user.email}</p>
                <p className="role">Desarrollador Full Stack</p>
              </div>
            )}
          </div>

          <div className="profile-actions">
            {isEditing ? (
              <div className="edit-actions">
                <button className="btn-cancel" onClick={handleCancel}>
                  <X size={20} />
                  Cancelar
                </button>
                <button className="btn-save" onClick={handleSave}>
                  <Save size={20} />
                  Guardar
                </button>
              </div>
            ) : (
              <button className="btn-edit" onClick={() => setIsEditing(true)}>
                <Edit2 size={20} />
                Editar Perfil
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <h3>Estadísticas</h3>
        <div className="stats-grid">
          {profileStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-section">
          <h3>Información Personal</h3>
          <div className="info-grid">
            {isEditing ? (
              <>
                <div className="info-item">
                  <Mail size={20} />
                  <input
                    type="email"
                    value={editedUser.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Correo electrónico"
                  />
                </div>
                <div className="info-item">
                  <Phone size={20} />
                  <input
                    type="tel"
                    value={editedUser.phone || ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Teléfono"
                  />
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <input
                    type="text"
                    value={editedUser.location || ''}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Ubicación"
                  />
                </div>
                <div className="info-item">
                  <Briefcase size={20} />
                  <input
                    type="text"
                    value={editedUser.position || ''}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    placeholder="Cargo"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="info-item">
                  <Mail size={20} />
                  <div>
                    <span className="info-label">Email</span>
                    <span className="info-value">{user.email}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Phone size={20} />
                  <div>
                    <span className="info-label">Teléfono</span>
                    <span className="info-value">{user.phone || '+34 123 456 789'}</span>
                  </div>
                </div>
                <div className="info-item">
                  <MapPin size={20} />
                  <div>
                    <span className="info-label">Ubicación</span>
                    <span className="info-value">{user.location || 'Madrid, España'}</span>
                  </div>
                </div>
                <div className="info-item">
                  <Briefcase size={20} />
                  <div>
                    <span className="info-label">Cargo</span>
                    <span className="info-value">{user.position || 'Desarrollador Full Stack'}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h3>Sobre mí</h3>
          {isEditing ? (
            <textarea
              value={editedUser.bio || ''}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Escribe algo sobre ti..."
              rows="4"
              className="bio-textarea"
            />
          ) : (
            <p className="bio-text">
              {user.bio || 'Desarrollador apasionado por crear experiencias digitales excepcionales. Con más de 5 años de experiencia en tecnologías web modernas, me especializo en React, Node.js y diseño de interfaces de usuario.'}
            </p>
          )}
        </div>

        <div className="profile-section">
          <h3>Habilidades</h3>
          <div className="skills-list">
            {['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'MongoDB', 'Express'].map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile