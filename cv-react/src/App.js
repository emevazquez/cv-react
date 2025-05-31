import React from 'react';
import './App.css';

const CVApp = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app">
      {/* Print/Download Section - Hidden in print */}
      <div className="no-print">
        <div className="download-section">
          <p><strong>CV Compacto Optimizado ATS:</strong> Fondo oscuro, máximo 1.5 páginas. Usa Ctrl+P → "Guardar como PDF"</p>
          <button onClick={handlePrint} className="download-btn">
            Descargar PDF
          </button>
        </div>
      </div>

      {/* CV Content */}
      <div className="cv-container">
        {/* Header */}
        <header className="header">
          <h1 className="name">MILAGROS PAVÓN VÁZQUEZ</h1>
          <h2 className="title">SENIOR .NET DEVELOPER | TECHNICAL LEAD</h2>
          <div className="contact-info">
            <div className="contact">Paraná, Entre Ríos, Argentina | +54 3458453497 | milivazquezjeje@gmail.com</div>
            <div className="contact">LinkedIn: linkedin.com/in/milagros-pavon-vazquez</div>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="section">
          <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          <p className="summary">
            Senior .NET Developer with 6+ years architecting enterprise solutions for financial services. 
            Currently Technical Lead at Symfa, mentoring teams and delivering scalable applications. 
            Expert in C# .NET, ASP.NET MVC, SQL Server optimization, and legacy system modernization. 
            Proven track record in team leadership and cross-functional stakeholder management.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="section">
          <h3 className="section-title">TECHNICAL SKILLS</h3>
          <div className="skills-section">
            <div className="skill-line">
              <span className="skill-category">Languages:</span> C# .NET, VB.NET, JavaScript, Python, SQL
            </div>
            <div className="skill-line">
              <span className="skill-category">Frameworks:</span> ASP.NET MVC, .NET Core, Web API, Entity Framework, jQuery, Bootstrap, Angular, React.js
            </div>
            <div className="skill-line">
              <span className="skill-category">Databases:</span> SQL Server, PostgreSQL, Informix, Stored Procedures, Performance Tuning
            </div>
            <div className="skill-line">
              <span className="skill-category">Tools:</span> Visual Studio, Git, Azure DevOps, KendoUI, Selenium, Unit Testing
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="section">
          <h3 className="section-title">PROFESSIONAL EXPERIENCE</h3>
          
          <div className="job">
            <div className="job-header">
              <h4 className="job-title">SR SOFTWARE DEVELOPER | TECHNICAL LEAD</h4>
              <div className="job-meta">
                <span className="company">Symfa</span> | <span className="date">July 2023 - Present</span>
              </div>
            </div>
            <ul className="job-duties">
              <li>Lead technical architecture and development for financial services enterprise applications using ASP.NET MVC, .NET Core</li>
              <li>Mentor development teams and establish code review processes, improving code quality and team productivity</li>
              <li>Design high-performance SQL Server stored procedures and database optimization strategies</li>
              <li>Direct stakeholder engagement with Product Owners, DBAs, and Project Managers for technical alignment</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h4 className="job-title">SSR FULLSTACK ENGINEER</h4>
              <div className="job-meta">
                <span className="company">Quadion Technologies</span> | <span className="date">June 2022 - July 2023</span>
              </div>
            </div>
            <ul className="job-duties">
              <li>Successfully migrated critical 4GL legacy systems to .NET, reducing maintenance costs and improving performance</li>
              <li>Developed scalable web applications using ASP.NET MVC, .NET Core, and modern JavaScript frameworks</li>
              <li>Implemented comprehensive testing strategies including unit tests and Selenium automation</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h4 className="job-title">SOFTWARE DEVELOPER AND ANALYST</h4>
              <div className="job-meta">
                <span className="company">Electronica Megatone S.A.</span> | <span className="date">2020 - 2022</span>
              </div>
            </div>
            <ul className="job-duties">
              <li>Built customer-facing web applications using C# .NET MVC, JavaScript, jQuery, and Bootstrap</li>
              <li>Designed SQL Server database solutions for external client projects with performance optimization</li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h4 className="job-title">FULLSTACK DEVELOPER</h4>
              <div className="job-meta">
                <span className="company">Applica Mobile</span> | <span className="date">2019 - 2020</span>
              </div>
            </div>
            <ul className="job-duties">
              <li>Developed mobile-first web applications using modern JavaScript frameworks and responsive design</li>
            </ul>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="section">
          <h3 className="section-title">KEY ACHIEVEMENTS</h3>
          <ul className="achievements">
            <li>Recognized Technical Lead with proven team mentoring and architectural decision-making capabilities</li>
            <li>Legacy modernization expert: Successfully migrated multiple 4GL systems to .NET with measurable cost savings</li>
            <li>Cross-industry experience: Financial services, retail, and mobile development sectors</li>
            <li>Performance optimization specialist: Database tuning and application scalability improvements</li>
          </ul>
        </section>

        {/* Education & Languages */}
        <section className="section">
          <h3 className="section-title">EDUCATION & LANGUAGES</h3>
          <p><strong>TECNICO UNIVERSITARIO EN PROGRAMACION</strong> - Universidad Tecnológica Nacional (2019-2020)</p>
          <p><strong>Languages:</strong> Spanish (Native), English (Advanced - Technical communication)</p>
        </section>
      </div>
    </div>
  );
};

export default CVApp;