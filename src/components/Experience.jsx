import React from 'react';

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
      'Gestión y optimización de bases de datos Oracle (PL/SQL).'
    ]
  },
  {
    company: 'EY',
    role: 'Desarrollador Java Backend',
    period: '2022 – 2023',
    location: 'Buenos Aires, Argentina',
    description: [
      'Diseño, desarrollo y despliegue de microservicios utilizando Java y Spring.',
      'Implementación de RabbitMQ para mensajería asincrónica entre servicios, mejorando el desacoplamiento.'
    ]
  },
  {
    company: 'NTT DATA',
    role: 'Desarrollador Web',
    period: '2020 – 2022',
    location: 'Buenos Aires, Argentina',
    description: [
      'Actualización y mejora de microservicios para optimizar rendimiento y añadir funcionalidades con Java y Spring.',
      'Desarrollo de soluciones personalizadas para aplicaciones propietarias en C#.'
    ]
  },
  {
    company: 'ATOS',
    role: 'Desarrollador Java Full Stack',
    period: '2020',
    location: 'Buenos Aires, Argentina',
    description: [
      'Mantenimiento y mejora de aplicaciones web legadas basadas en Struts.',
      'Utilización de Hibernate para mapeo objeto-relacional (ORM).'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experiencia" className="container" style={{ padding: '8rem 0' }}>
      <h2 className="section-title noir-title">
        Experiencia
      </h2>
      
      <div style={{ marginTop: '4rem' }}>
        {experiences.map((exp, idx) => (
          <div key={idx} className="noir-item delay-1 animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
              <h3 className="noir-title" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
                {exp.role} <span style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontWeight: '400', textTransform: 'none', fontFamily: 'Inter, sans-serif' }}>en {exp.company}</span>
              </h3>
              <span className="noir-tag">{exp.period}</span>
            </div>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
              {exp.location}
            </p>
            
            <ul style={{ paddingLeft: '0', listStyleType: 'none' }}>
              {exp.description.map((item, i) => (
                <li key={i} style={{ marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem', position: 'relative', paddingLeft: '1.5rem' }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--border-color)' }}>—</span> {item}
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
