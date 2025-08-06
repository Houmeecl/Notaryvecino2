# React App - Aplicación Moderna

Una aplicación React moderna construida con Vite, que incluye un dashboard interactivo, gestor de tareas y perfil de usuario.

## 🚀 Características

- **Dashboard Interactivo**: Vista general con estadísticas y actividad reciente
- **Gestor de Tareas**: Crear, completar y eliminar tareas con prioridades y fechas
- **Perfil de Usuario**: Ver y editar información personal
- **Diseño Responsivo**: Optimizado para dispositivos móviles y escritorio
- **Interfaz Moderna**: Diseño limpio con gradientes y animaciones suaves
- **Iconos Lucide**: Iconos modernos y consistentes en toda la aplicación

## 🛠️ Tecnologías Utilizadas

- **React 19**: Framework de JavaScript para interfaces de usuario
- **Vite**: Herramienta de construcción rápida y moderna
- **Lucide React**: Librería de iconos moderna
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript ES6+**: Sintaxis moderna de JavaScript

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd react-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   - La aplicación estará disponible en `http://localhost:5173`

## 🏗️ Estructura del Proyecto

```
react-app/
├── public/                 # Archivos públicos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.jsx      # Componente de navegación
│   │   ├── Header.css      # Estilos del header
│   │   ├── Dashboard.jsx   # Componente del dashboard
│   │   ├── Dashboard.css   # Estilos del dashboard
│   │   ├── TaskManager.jsx # Gestor de tareas
│   │   ├── TaskManager.css # Estilos del gestor de tareas
│   │   ├── UserProfile.jsx # Perfil de usuario
│   │   └── UserProfile.css # Estilos del perfil
│   ├── App.jsx             # Componente principal
│   ├── App.css             # Estilos globales
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos base
├── package.json            # Dependencias y scripts
└── README.md              # Este archivo
```

## 🎯 Componentes

### Header
- Navegación entre secciones
- Información del usuario
- Diseño responsivo con iconos

### Dashboard
- Tarjetas de estadísticas animadas
- Lista de actividad reciente
- Botones de acciones rápidas
- Efectos hover y transiciones

### TaskManager
- Crear nuevas tareas
- Marcar tareas como completadas
- Eliminar tareas
- Prioridades y fechas de vencimiento
- Formulario dinámico

### UserProfile
- Ver información del usuario
- Editar perfil en línea
- Estadísticas personales
- Sección de habilidades
- Avatar con opción de edición

## 🎨 Características de Diseño

- **Colores**: Paleta moderna con azules, verdes y grises
- **Tipografía**: Fuentes del sistema para mejor rendimiento
- **Espaciado**: Sistema de espaciado consistente
- **Sombras**: Sombras suaves para profundidad
- **Gradientes**: Gradientes lineales para elementos destacados
- **Animaciones**: Transiciones suaves y efectos hover
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## 📱 Responsive Design

La aplicación está optimizada para:
- **Desktop**: Experiencia completa con todas las características
- **Tablet**: Layout adaptado para pantallas medianas
- **Mobile**: Interfaz simplificada y táctil

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción

# Vista previa
npm run preview      # Vista previa de la construcción

# Linting
npm run lint         # Ejecuta ESLint
```

## 🚀 Despliegue

Para desplegar en producción:

1. **Construir la aplicación**:
   ```bash
   npm run build
   ```

2. **Los archivos se generarán en `dist/`**

3. **Subir a tu servidor web favorito**:
   - Netlify
   - Vercel
   - GitHub Pages
   - Cualquier servidor web estático

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✨ Próximas Características

- [ ] Autenticación de usuarios
- [ ] Base de datos persistente
- [ ] Notificaciones push
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] Tests unitarios
- [ ] PWA (Progressive Web App)

## 🐛 Reportar Bugs

Si encuentras algún bug, por favor abre un issue en GitHub con:
- Descripción del problema
- Pasos para reproducir
- Capturas de pantalla (si aplica)
- Información del navegador/sistema

## 💡 Sugerencias

¿Tienes ideas para mejorar la aplicación? ¡Nos encantaría escucharlas! Abre un issue con la etiqueta "enhancement".

---

**¡Gracias por usar React App!** 🎉
