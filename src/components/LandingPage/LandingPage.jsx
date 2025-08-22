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
      cargo: "Desarrolladora Frontend",
      empresa: "TechCorp",
      contenido: "Esta app del clima me ayudó a entender la integración de APIs y el manejo de estado. ¡Los datos en tiempo real son súper precisos!",
      avatar: "👩‍💻"
    },
    {
      nombre: "Carlos Ruiz",
      cargo: "Desarrollador Full Stack",
      empresa: "StartupXYZ",
      contenido: "Perfecto para practicar React Context y CSS moderno. El diseño es hermoso y el código está muy limpio.",
      avatar: "👨‍💻"
    },
    {
      nombre: "Ana Martínez",
      cargo: "Diseñadora UI/UX",
      empresa: "DesignStudio",
      contenido: "Me encanta cómo este proyecto combina funcionalidad con diseño hermoso. ¡Ideal para proyectos de portfolio!",
      avatar: "🎨"
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
            <span className="logo-text">AppClima</span>
          </div>
          <div className="landing-nav">
            <button className="nav-link">Tecnologías</button>
            <button className="nav-link">Características</button>
            <button className="nav-link">Precios</button>
            <button className="nav-link">Documentación</button>
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
            <span className="badge-icon">Nuevo</span>
            <span className="badge-text">Comienza con datos del clima en tiempo real gratis</span>
          </div>

          <h1 className="hero-title">
            Construye una App del Clima
            <span className="gradient-text"> con React</span>
          </h1>

          <p className="hero-description">
            Desarrolla una aplicación completa del clima usando React, Context API y tecnologías web modernas. 
            Aprende integración de APIs, manejo de estado y diseño responsivo con práctica real.
          </p>

          <button className="cta-button" onClick={startUsingApp}>
            <span className="cta-icon">→</span>
            Empezar a Construir
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Desarrolladores</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Consultas API</span>
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
            <span className="section-category">Tecnologías</span>
            <h2 className="section-title">Tecnologías del Proyecto</h2>
            <p className="section-description">
              Este proyecto está diseñado para que practiques HTML, CSS, JavaScript y React. 
              Puedes practicar con frameworks modernos y construir proyectos del mundo real.
            </p>
          </div>

          <div className="roadmap-grid">
            <div className="roadmap-card">
              <div className="roadmap-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>HTML & CSS</h3>
              <p>Domina los fundamentos del desarrollo web con HTML semántico y técnicas CSS modernas.</p>
              <div className="difficulty">
                <span className="difficulty-label">Principiante</span>
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10,9 9,9 8,9"/>
                </svg>
              </div>
              <h3>JavaScript</h3>
              <p>Aprende JavaScript moderno incluyendo ES6+, programación asíncrona y manipulación del DOM.</p>
              <div className="difficulty">
                <span className="difficulty-label">Intermedio</span>
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
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h3>React</h3>
              <p>Construye interfaces dinámicas con React, hooks y patrones modernos de manejo de estado.</p>
              <div className="difficulty">
                <span className="difficulty-label">Avanzado</span>
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
            <h2 className="section-title">Comienza fácilmente en 3 pasos</h2>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">[Paso 1]</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </div>
              <h3>Elige un desafío de programación</h3>
              <p>Elige un desafío, las rutas te ayudarán a navegar. Tendrás acceso al editor de código donde puedes descargar los recursos y obtener los requisitos.</p>
            </div>

            <div className="process-step">
              <div className="step-number">[Paso 2]</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Programa y Envía</h3>
              <p>Programa el proyecto en tu propio espacio. Para enviar el proyecto, debes proporcionar un enlace del repositorio de GitHub y un enlace de demo. El enlace de demo es donde tu proyecto está desplegado.</p>
            </div>

            <div className="process-step">
              <div className="step-number">[Paso 3]</div>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Revisa y Recibe Feedback</h3>
              <p>Para mejorar tu código y extender tu conocimiento, revisa el código de otros y dales feedback para mejorar. Estas habilidades son esenciales en el trabajo.</p>
            </div>
          </div>

          <button className="process-cta" onClick={startUsingApp}>
            Empezar a programar ahora
          </button>
        </div>

        {/* Sección Opiniones */}
        <div 
          ref={opinionesRef}
          className={`testimonials-section ${opinionesVisible ? 'animate-in' : ''}`}
        >
          <div className="section-header">
            <h2 className="section-title">Lo que dicen los desarrolladores</h2>
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
              Comienza gratis y mejora mientras creces
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
                <button className="plan-button">
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
            <h2>¿Listo para empezar a construir?</h2>
            <p>Únete a miles de desarrolladores construyendo increíbles aplicaciones del clima</p>
            <button className="final-cta-button" onClick={startUsingApp}>
              Empezar a Construir Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
