import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [countdownDate] = useState(new Date('2026-08-02T13:00:00').getTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [countdownDate]);

  // Generar estrellas cayendo
  const stars = Array.from({ length: 50 }).map((_, i) => (
    <div key={i} className="falling-star"></div>
  ));

  return (
    <div className="App">
      {/* Estrellas cayendo */}
      <div className="stars-container">{stars}</div>

      {/* Decoración de fondo */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
      <div className="decoration decoration-3"></div>

      {/* Header Principal */}
      <section className="header-principal">
        <div className="confetti">
          <span>🎉</span><span>🎂</span><span>⛪</span><span>🎈</span><span>🎉</span>
        </div>
        <h1 className="titulo-principal">¡Te Invitamos!</h1>
        <p className="subtitulo">A una celebración especial llena de alegría</p>
        
        <div className="celebraciones">
          <div className="celebracion-item">
            <span className="icono">⛪</span>
            <h3>Bautizo</h3>
            <p>{`Maya`}</p>
          </div>
          <div className="celebracion-item">
            <span className="icono">🎂</span>
            <h3>Cumpleaños</h3>
            <p>Josabeth (8 años)</p>
          </div>
          <div className="celebracion-item">
            <span className="icono">🎂</span>
            <h3>Cumpleaños</h3>
            <p>Mario (6 años)</p>
          </div>
        </div>
      </section>

      {/* Evento 1: Misa */}
      <section className="evento">
        <div className="evento-header misa">
          <h2>⛪ LA MISA</h2>
        </div>
        <div className="evento-contenido">
          <div className="evento-info">
            <div className="info-item">
              <span className="icono-info">📅</span>
              <div>
                <strong>Fecha:</strong>
                <p>2 de Agosto del 2026</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icono-info">🕐</span>
              <div>
                <strong>Hora:</strong>
                <p>1:00 de la tarde</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icono-info">📍</span>
              <div>
                <strong>Iglesia de la Santa Cruz</strong>
                <p>Av. México 98, La Florida</p>
                <p>98618 Guadalupe, Zac.</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icono-info">👰</span>
              <div>
                <strong>Madrina de Bautizo:</strong>
                <p>Sonia Cruz Gómez</p>
              </div>
            </div>
          </div>
          <div className="mapa-container">
            <iframe
              title="Ubicación Iglesia Santa Cruz"
              src="https://www.google.com/maps?q=22.7617602,-102.5408547&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Evento 2: Fiesta */}
      <section className="evento">
        <div className="evento-header fiesta">
          <h2>🎉 LA FIESTA</h2>
        </div>
        <div className="evento-contenido">
          <div className="evento-info">
            <div className="info-item">
              <span className="icono-info">📅</span>
              <div>
                <strong>Fecha:</strong>
                <p>2 de Agosto del 2026</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icono-info">🕐</span>
              <div>
                <strong>Hora:</strong>
                <p>3:00 de la tarde</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icono-info">📍</span>
              <div>
                <strong>Salón Garabatos</strong>
                <p>Calzada Fco. Garcia Salinas #702</p>
                <p>Col. Lomas del Campestre</p>
                <p>98098 Zacatecas, México</p>
              </div>
            </div>
          </div>
          <div className="mapa-container">
            <iframe
              title="Ubicación Salón Garabatos"
              src="https://www.google.com/maps?q=22.7611809,-102.5510317&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Cuenta Regresiva - MOVIDA AQUÍ */}
      <section className="countdown-section">
        <h2>¡Nos vemos en!</h2>
        <div className="countdown">
          <div className="countdown-item">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Días</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Horas</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Minutos</span>
          </div>
          <div className="countdown-item">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Segundos</span>
          </div>
        </div>
      </section>

      {/* Mensaje Final */}
      <section className="mensaje-final">
        <div className="corazones">
          <span>💕</span><span>💕</span><span>💕</span>
        </div>
        <h2>¡Gracias por ser parte de esta celebración!</h2>
        <p className="confirmacion">
          Por favor confirma tu asistencia
        </p>
        <div className="decoracion-final">
          <span>✨</span><span>🎈</span><span>✨</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Con amor para ustedes 💖</p>
      </footer>
    </div>
  );
}

export default App;
