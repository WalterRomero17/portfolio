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
    <section id="experiencia" className="pulp-border">
      <div style={{ background: 'var(--pulp-red)', color: '#fff', padding: '0.5rem 1rem', display: 'inline-block', border: '3px solid var(--ink-black)', margin: '-3.5rem 0 2rem -1rem', transform: 'rotate(-3deg)', position: 'relative', zIndex: 10 }}>
        <h2 className="pulp-title" style={{ fontSize: 'clamp(1.5rem, 6vw, 2.5rem)', margin: 0 }}>
          ARCHIVOS DE MISIÓN
        </h2>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
        {experiences.map((exp, idx) => (
          <article key={idx} style={{ borderBottom: idx > 1 ? 'none' : '3px dashed var(--ink-black)', paddingBottom: '2rem' }}>
            
            <h3 className="pulp-title" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.8rem)', color: 'var(--pulp-blue)', marginBottom: '0.5rem', lineHeight: '1.2' }}>
              {exp.role}
            </h3>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="pulp-tag" style={{ background: 'var(--pulp-blue)' }}>@ {exp.company}</span>
              <span className="pulp-tag">{exp.period}</span>
            </div>
            
            <p className="drop-cap" style={{ fontWeight: 'bold' }}>
              {exp.description[0]}
            </p>
            
            <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem', fontWeight: 'bold' }}>
              {exp.description.slice(1).map((item, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
