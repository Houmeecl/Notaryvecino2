import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

const Calendar = () => {
  return (
    <div className="calendar-page fade-in">
      <div className="page-header">
        <h1>Calendario</h1>
        <p>Gestiona tus eventos y citas</p>
      </div>
      
      <div className="card">
        <div className="calendar-header">
          <button className="btn btn-secondary">
            <ChevronLeft size={20} />
          </button>
          <h2>Enero 2024</h2>
          <button className="btn btn-secondary">
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="calendar-placeholder">
          <CalendarIcon size={64} />
          <h3>Próximamente</h3>
          <p>El calendario estará disponible en una futura actualización</p>
        </div>
      </div>
    </div>
  )
}

export default Calendar