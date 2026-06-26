import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'RED LINK',
    role: 'Desarrollador Java Full Stack',
    period: '2023 – Presente',
    location: 'Buenos Aires, Argentina',
    description: [
      'Desarrollo e implementación de nuevas funcionalidades para aplicaciones corporativas utilizando Java y Spring Framework.',
      'Diseño y construcción de interfaces de usuario responsivas con Angular.',
      'Configuración de servidores Nginx como proxy reverso para optimización del enrutamiento de tráfico y seguridad.',
      'Conocimientos en F5 BIG-IP como API Gateway y balanceador de carga.',
      'Gestión y optimización de bases de datos Oracle (PL/SQL).',
      'Colaboración en equipos ágiles bajo metodología Scrum.'
    ]
  },
  {
    company: 'EY',
    role: 'Desarrollador Java Backend',
    period: '2022 – 2023',
    location: 'Buenos Aires, Argentina',
    description: [
      'Diseño, desarrollo y despliegue de microservicios utilizando Java y Spring.',
      'Implementación de RabbitMQ para mensajería asincrónica entre servicios, mejorando el desacoplamiento mediante patrones basados en eventos.'
    ]
  },
  {
    company: 'NTT DATA',
    role: 'Desarrollador Web',
    period: '2020 – 2022',
    location: 'Buenos Aires, Argentina',
    description: [
      'Actualización y mejora de microservicios para optimizar rendimiento y añadir funcionalidades con Java y Spring.',
      'Desarrollo de soluciones personalizadas para aplicaciones propietarias en C#.',
      'Gestión de bases de datos y ejecución de consultas en sistemas Oracle.'
    ]
  },
  {
    company: 'ATOS',
    role: 'Desarrollador Java Full Stack',
    period: '2020',
    location: 'Buenos Aires, Argentina',
    description: [
      'Mantenimiento y mejora de aplicaciones web legadas basadas en Struts.',
      'Utilización de Hibernate para mapeo objeto-relacional (ORM).',
      'Traducción de requerimientos de negocio en diseños técnicos y funcionales.',
      'Actualizaciones en interfaces gráficas utilizando diversas tecnologías front-end.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">
        <span className="highlight">01.</span> Experiencia Profesional
      </h2>
      
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className={`glass-card delay-${idx % 3 + 1}`} style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.2rem' }}>
                  {exp.role} <span className="highlight">@ {exp.company}</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={16} /> {exp.location}
                </p>
              </div>
              <div style={{ color: 'var(--accent-color)', fontFamily: 'monospace', fontSize: '1rem', marginTop: '0.5rem' }}>
                {exp.period}
              </div>
            </div>
            
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
              {exp.description.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
