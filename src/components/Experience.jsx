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
        EXPERIENCIA
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="brutalist-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
            {/* Header / Title Bar */}
            <div style={{ background: 'var(--border-color)', color: '#fff', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '4px solid var(--border-color)', flexWrap: 'wrap', gap: '1rem' }}>
              <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', margin: 0, textTransform: 'uppercase', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', wordBreak: 'break-word' }}>
                <Briefcase size={28} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                <span>{exp.role}</span> <span style={{ color: 'var(--accent-cyan)' }}>@ {exp.company}</span>
              </h3>
              <div className="brutalist-tag" style={{ color: 'var(--text-primary)' }}>
                {exp.period}
              </div>
            </div>
            
            {/* Body */}
            <div style={{ padding: '2rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.1rem', background: 'var(--accent-yellow)', display: 'inline-block' }}>
                {exp.location}
              </p>
              
              <ul style={{ paddingLeft: '1.5rem', listStyleType: 'square' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
