import { useState, useEffect } from 'react'
import { RefreshCw, X } from 'lucide-react'

const PWAUpdateNotification = () => {
  const [showUpdate, setShowUpdate] = useState(false)
  const [registration, setRegistration] = useState(null)

  useEffect(() => {
    // Escuchar por actualizaciones del service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })

      navigator.serviceWorker.ready.then((registration) => {
        setRegistration(registration)
        
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setShowUpdate(true)
            }
          })
        })
      })
    }
  }, [])

  const handleUpdate = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      setShowUpdate(false)
    }
  }

  const handleDismiss = () => {
    setShowUpdate(false)
  }

  if (!showUpdate) return null

  return (
    <div className="pwa-update-notification">
      <div className="update-content">
        <div className="update-icon">
          <RefreshCw size={20} />
        </div>
        <div className="update-text">
          <h4>Nueva versión disponible</h4>
          <p>Hay una actualización disponible para la aplicación</p>
        </div>
        <div className="update-actions">
          <button className="btn btn-success" onClick={handleUpdate}>
            Actualizar
          </button>
          <button className="dismiss-btn" onClick={handleDismiss}>
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAUpdateNotification