import { useState, useEffect } from 'react'
import { Download, X, Smartphone } from 'lucide-react'
import './PWAInstallPrompt.css'

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Verificar si ya está instalada
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    const isInWebAppiOS = (window.navigator.standalone === true)
    
    if (isStandalone || isInWebAppiOS) {
      setIsInstalled(true)
      return
    }

    // Escuchar el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      
      // Mostrar el prompt después de un pequeño delay
      setTimeout(() => {
        setShowPrompt(true)
      }, 3000)
    }

    // Escuchar cuando la app se instala
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowPrompt(false)
      setDeferredPrompt(null)
      console.log('🎉 PWA instalada exitosamente!')
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    // Mostrar el prompt de instalación
    deferredPrompt.prompt()

    // Esperar la respuesta del usuario
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('👍 Usuario aceptó instalar la PWA')
    } else {
      console.log('👎 Usuario rechazó instalar la PWA')
    }

    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    // No mostrar de nuevo en esta sesión
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }

  // No mostrar si ya está instalada o si fue rechazada en esta sesión
  if (isInstalled || !showPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null
  }

  return (
    <div className="pwa-install-prompt">
      <div className="install-content">
        <div className="install-icon">
          <Smartphone size={24} />
        </div>
        <div className="install-text">
          <h4>¡Instala la App!</h4>
          <p>Instala React App en tu dispositivo para una mejor experiencia</p>
        </div>
        <div className="install-actions">
          <button className="install-btn" onClick={handleInstallClick}>
            <Download size={16} />
            Instalar
          </button>
          <button className="dismiss-btn" onClick={handleDismiss}>
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAInstallPrompt