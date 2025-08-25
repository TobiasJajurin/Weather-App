import { useLanding } from '../../contexts/LandingContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const { startUsingApp } = useLanding();
  const { isDark, toggleTheme } = useTheme();
  
  const [slideActual, setSlideActual] = useState(0);
  const [heroRef, heroVisible] = useScrollAnimation(0.3);
  const [tecnologiasRef, tecnologiasVisible] = useScrollAnimation(0.2);
  const [procesoRef, procesoVisible] = useScrollAnimation(0.2);
  const [opinionesRef, opinionesVisible] = useScrollAnimation(0.2);
  const [planesRef, planesVisible] = useScrollAnimation(0.2);
  const [finalRef, finalVisible] = useScrollAnimation(0.2);

  const scrollTo = (ref) => {
    const offset = 80;
    const element = ref?.current;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Carrusel automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  const opiniones = [
    {
      nombre: "María González",
      cargo: "Vecina de CABA",
      empresa: "",
      contenido: "La app me avisa el cambio de temperatura y la lluvia. Pude planificar mis salidas sin sorpresas.",
      avatar: "☂️"
    },
    {
      nombre: "Carlos Ruiz",
      cargo: "Ciclista urbano",
      empresa: "",
      contenido: "El pronóstico por días y el viento me sirven mucho para elegir mis rutas a diario.",
      avatar: "🚴"
    },
    {
      nombre: "Ana Martínez",
      cargo: "Organizadora de eventos",
      empresa: "",
      contenido: "La información de humedad, UV y sensación térmica es clarísima. Me ayuda a coordinar eventos al aire libre.",
      avatar: "🌤️"
    }
  ];

  const planesPrecios = [
    {
      nombre: "Gratis",
      precio: "$0",
      periodo: "para siempre",
      caracteristicas: [
        "Datos del clima en tiempo real",
        "Pronóstico de 5 días",
        "Búsqueda de ubicaciones",
        "Modo oscuro/claro",
        "Acceso básico a la API"
      ],
      popular: false
    },
    {
      nombre: "Pro",
      precio: "$9",
      periodo: "mes",
      caracteristicas: [
        "Todo lo de Gratis",
        "Pronóstico extendido (15 días)",
        "Alertas meteorológicas",
        "Datos históricos",
        "Acceso prioritario a la API",
        "Análisis avanzados"
      ],
      popular: true
    },
    {
      nombre: "Empresa",
      precio: "$29",
      periodo: "mes",
      caracteristicas: [
        "Todo lo de Pro",
        "Integraciones personalizadas",
        "Soporte dedicado",
        "Opciones white-label",
        "Exportación masiva de datos",
        "Garantía SLA"
      ],
      popular: false
    }
  ];

  return (
    <div className="landing">
      <div className="landing-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
        </div>
        <div className="connection-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>

      <header className="landing-header">
        <div className="landing-header-content">
          <div className="landing-logo">
            <div className="logo-icon"></div>
            <span className="logo-text">trocaweather</span>
          </div>
          <div className="landing-nav">
            <button className="nav-link" onClick={() => scrollTo(tecnologiasRef)}>Características</button>
            <button className="nav-link" onClick={() => scrollTo(procesoRef)}>Cómo usar</button>
            <button className="nav-link" onClick={() => scrollTo(planesRef)}>Precios</button>
            <button className="nav-link" onClick={() => scrollTo(finalRef)}>Contacto</button>
            <button className="theme-toggle-landing" onClick={toggleTheme}>
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <div className="landing-content">
        {/* Sección Hero */}
        <div 
          ref={heroRef}
          className={`hero-section ${heroVisible ? 'animate-in' : ''}`}
        >
          <div className="hero-badge">
            <span className="badge-text">Comienza con datos del clima en tiempo real gratis</span>
          </div>

          <h1 className="hero-title">
            Pronóstico del tiempo
            <span className="gradient-text"> en tiempo real</span>
          </h1>

          <p className="hero-description">
            Consulta el estado actual, sensación térmica, viento, humedad e índice UV, además del pronóstico extendido de forma clara y rápida.
          </p>

          <button className="cta-button" onClick={startUsingApp}>
            <span className="cta-icon">→</span>
            Ver clima
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Usuarios</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Ubicaciones</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Tiempo Activo</span>
            </div>
          </div>
        </div>

        {/* Sección Tecnologías */}
        <div 
          ref={tecnologiasRef}
          className={`roadmap-section ${tecnologiasVisible ? 'animate-in' : ''}`}
        >
          <div className="section-header">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11H1l8-8 8 8h-8v8z"/>
                <path d="M3 21h18"/>
              </svg>
            </div>
            <span className="section-category">Características</span>
            <h2 className="section-title">Características principales</h2>
            <p className="section-description">
              Toda la información que necesitás para decidir cómo vestirte, cuándo salir y planificar tu día según el clima.
            </p>
          </div>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <div className="roadmap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
                  <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.14-6.14-1.41 1.41M7.27 16.73l-1.41 1.41M16.73 16.73l1.41 1.41M7.27 7.27 5.86 5.86"/>
                </svg>
              </div>
              <h3>Clima actual</h3>
              <p>Temperatura, sensación térmica, humedad, viento y visibilidad en tiempo real para tu ubicación.</p>
              <div className="difficulty">
                <span className="difficulty-label">Disponible</span>
                <div className="difficulty-bars">
                  <div className="bar active"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 16s3-6 9-6 9 6 9 6"/>
                  <path d="M7 16a5 5 0 0 0 10 0"/>
                </svg>
              </div>
              <h3>Pronóstico de 5 días</h3>
              <p>Resumen por día con máximas y mínimas, probabilidad de lluvia y variaciones de temperatura.</p>
              <div className="difficulty">
                <span className="difficulty-label">Disponible</span>
                <div className="difficulty-bars">
                  <div className="bar active"></div>
                  <div className="bar active"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 7s-2 3-8 3-8-3-8-3 2-3 8-3 8 3 8 3Z"/>
                  <path d="M4 14h16M7 18h10"/>
                </svg>
              </div>
              <h3>Alertas y detalles</h3>
              <p>Índice UV, presión, nubosidad y avisos de clima relevante para estar siempre prevenido.</p>
              <div className="difficulty">
                <span className="difficulty-label">Disponible</span>
                <div className="difficulty-bars">
                  <div className="bar active"></div>
                  <div className="bar active"></div>
                  <div className="bar active"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Proceso */}
        <div 
          ref={procesoRef}
          className={`process-section ${procesoVisible ? 'animate-in' : ''}`}
        >
          <div className="section-header">
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 6.34L4.93 4.93m11.32 0l1.41-1.41M4.93 17.66l1.41 1.41m11.32-11.32l1.41-1.41"/>
              </svg>
            </div>
            <span className="section-category">Cómo funciona</span>
            <h2 className="section-title">Usá trocaweather en 3 pasos</h2>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">Paso 1</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3>Busca tu ciudad</h3>
              <p>Ingresá el nombre de tu ciudad para ver el clima actual y el pronóstico de los próximos días.</p>
            </div>

            <div className="process-step">
              <div className="step-number">Paso 2</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Explorá los detalles</h3>
              <p>Revisá temperatura, viento, humedad, presión, UV y la probabilidad de precipitaciones por día.</p>
            </div>

            <div className="process-step">
              <div className="step-number">Paso 3</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Personalizá tu experiencia</h3>
              <p>Cambiá entre °C y °F, alterná modo claro/oscuro y mantené tus preferencias para futuras consultas.</p>
            </div>
          </div>

          <button className="process-cta" onClick={startUsingApp}>
            Ver clima
          </button>
        </div>

        {/* Sección Opiniones */}
        <div 
          ref={opinionesRef}
          className={`testimonials-section ${opinionesVisible ? 'animate-in' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Lo que dicen los usuarios</h2>
            <p className="section-description">
              Únete a miles de desarrolladores que han mejorado sus habilidades con nuestros proyectos
            </p>
          </div>

          <div className="testimonials-carousel">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${slideActual * 100}%)` }}
            >
              {opiniones.map((opinion, index) => (
                <div key={index} className="testimonial-card">
                  <div className="testimonial-content">
                    <p>"{opinion.contenido}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{opinion.avatar}</div>
                    <div className="author-info">
                      <h4>{opinion.nombre}</h4>
                      <p>{opinion.cargo} en {opinion.empresa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`indicator ${slideActual === index ? 'active' : ''}`}
                  onClick={() => setSlideActual(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sección Precios */}
        <div 
          ref={planesRef}
          className={`pricing-section ${planesVisible ? 'animate-in' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Elige tu plan</h2>
            <p className="section-description">
              Elegí el plan que mejor se adapta a lo que necesitás ver del clima
            </p>
          </div>

          <div className="pricing-grid">
            {planesPrecios.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Más Popular</div>}
                <div className="plan-header">
                  <h3>{plan.nombre}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.precio}</span>
                    <span className="period">/{plan.periodo}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.caracteristicas.map((caracteristica, featureIndex) => (
                    <li key={featureIndex}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      {caracteristica}
                    </li>
                  ))}
                </ul>
                <button 
                  className="plan-button"
                  onClick={plan.nombre === 'Gratis' ? startUsingApp : 
                    plan.nombre === 'Pro' ? () => window.open('https://www.linkedin.com/in/ianmiglin', '_blank') :
                    () => window.open('https://www.linkedin.com/in/tobiasjajurin/', '_blank')}
                >
                  Comenzar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Final */}
        <div 
          ref={finalRef}
          className={`final-cta-section ${finalVisible ? 'animate-in' : ''}`}
        >
          <div className="cta-content">
            <h2>¿Listo para ver el clima?</h2>
            <p>Únete a miles de usuarios consultando el clima en tiempo real</p>
            <button className="final-cta-button" onClick={startUsingApp}>
              Ver clima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
