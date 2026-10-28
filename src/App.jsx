import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'face-anonymizer',
      category: 'ai',
      title: 'Live Face Anonymizer',
      badge: 'Computer Vision',
      summary: 'Real-time face tracking & anonymization system operating at 30+ FPS.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'InsightFace'],
      details: 'Built a privacy-first computer vision system that detects faces, maintains track IDs across frames using distance matching, and applies real-time anonymization overlays.',
      github: 'https://github.com/Hamjath'
    },
    {
      id: 'movie-recommender',
      category: 'ai',
      title: 'Movie Recommendation System',
      badge: 'Machine Learning',
      summary: 'Collaborative filtering recommender app deployed on Render & Hugging Face.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Hugging Face'],
      details: 'Developed a personalized recommendation model based on user interaction histories. Integrated Flask web service with Render deployment and optimized memory limits.',
      github: 'https://github.com/Hamjath/Movie_Recommender_Model_Flask',
      demo: 'https://movie-recommender-model-flask.onrender.com'
    },
    {
      id: 'dlcf-automation',
      category: 'fullstack',
      title: 'AI-Assisted DLCF-to-SQL Tool',
      badge: 'Developer Automation',
      summary: 'Enterprise tool converting database specs directly into structured T-SQL scripts.',
      tech: ['Python', 'SQL Server', 'T-SQL', 'Document Processing'],
      details: 'Automates manual database script creation by parsing DLCF spec files and outputting standardized SQL scripts for tables, constraints, and triggers.',
      github: 'https://github.com/Hamjath'
    },
    {
      id: 'cab-booking',
      category: 'fullstack',
      title: 'Cab Booking Management System',
      badge: 'Full-Stack MVC',
      summary: 'End-to-end full-stack web application for cab reservations and fleet logging.',
      tech: ['C#', 'ASP.NET MVC', 'MS SQL Server', 'Bootstrap'],
      details: 'Built complete booking workflow, user authentication, and admin metrics dashboard during enterprise internship.',
      github: 'https://github.com/Hamjath'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div style={{
      backgroundColor: '#0f172a',
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px 10%'
    }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid #1e293b' }}>
        <h2 style={{ margin: 0, color: '#38bdf8', fontSize: '1.5rem' }}>Hamjath Khan N.</h2>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: '#94a3b8', textDecoration: 'none' }}>Projects</a>
          <a href="#experience" style={{ color: '#94a3b8', textDecoration: 'none' }}>Experience</a>
          <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" style={{ padding: '60px 0', textAlign: 'center' }}>
        <span style={{ backgroundColor: '#0284c7', color: '#fff', padding: '4px 12px', borderRadius: '16px', fontSize: '0.85rem' }}>
          M.Tech AI & Data Science @ SRM
        </span>
        <h1 style={{ fontSize: '2.8rem', margin: '20px 0 10px 0' }}>
          Full-Stack .NET Developer & <span style={{ color: '#38bdf8' }}>AI/ML Engineer</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '650px', margin: '0 auto 30px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Software Engineer at Equiniti India with 2+ years of enterprise experience in .NET & SQL Server, currently pursuing M.Tech in AI & Data Science at SRM Institute of Science and Technology.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://github.com/Hamjath" target="_blank" rel="noreferrer" style={{ backgroundColor: '#1e293b', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>GitHub</a>
          <a href="https://linkedin.com/in/h87official" target="_blank" rel="noreferrer" style={{ backgroundColor: '#0284c7', color: '#fff', padding: '10px 20px', borderRadius: '6px', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '40px 0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Featured Projects</h2>
        
        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          {['all', 'ai', 'fullstack'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                backgroundColor: activeTab === tab ? '#0284c7' : '#1e293b',
                color: '#fff',
                border: 'none',
                padding: '8px 18px',
                borderRadius: '6px',
                cursor: 'pointer',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'all' ? 'All Projects' : tab === 'ai' ? 'AI & Vision' : 'Full-Stack'}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredProjects.map((p) => (
            <div key={p.id} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '10px', border: '1px solid #334155' }}>
              <span style={{ fontSize: '0.75rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>{p.badge}</span>
              <h3 style={{ margin: '10px 0', fontSize: '1.3rem' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>{p.summary}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '15px 0' }}>
                {p.tech.map((t, idx) => (
                  <span key={idx} style={{ backgroundColor: '#0f172a', color: '#cbd5e1', padding: '3px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>{t}</span>
                ))}
              </div>
              <button 
                onClick={() => setSelectedProject(p)}
                style={{ backgroundColor: 'transparent', color: '#38bdf8', border: '1px solid #38bdf8', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '40px 0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Experience & Education</h2>
        <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '10px', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, color: '#38bdf8' }}>Junior Software Engineer — Equiniti India</h3>
          <p style={{ color: '#94a3b8', margin: '5px 0 15px 0' }}>Sept 2024 – Present | Chennai, India</p>
          <ul style={{ color: '#cbd5e1', lineHeight: '1.6', paddingLeft: '20px' }}>
            <li>Resolved 80+ production and high-priority bugs on enterprise legacy applications.</li>
            <li>Enhanced backend & UI components using C# (.NET), ASP.NET MVC, ADO.NET, and MS SQL.</li>
            <li>Ranked #1 among interns during training assessments with a 92% aggregate score.</li>
          </ul>
        </div>

        <div style={{ backgroundColor: '#1e293b', padding: '25px', borderRadius: '10px' }}>
          <h3 style={{ margin: 0, color: '#38bdf8' }}>M.Tech in Artificial Intelligence & Data Science</h3>
          <p style={{ color: '#94a3b8', margin: '5px 0 15px 0' }}>SRM Institute of Science and Technology | CGPA: 9.3/10</p>
          <p style={{ color: '#cbd5e1', margin: 0 }}>Focused on Machine Learning, Computer Vision, Image Processing, and Deep Learning applications.</p>
        </div>
      </section>

      {/* Modal Popup for Project Details */}
      {selectedProject && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '12px', maxWidth: '550px', width: '100%', position: 'relative' }}>
            <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}>✕</button>
            <h3 style={{ color: '#38bdf8', marginTop: 0 }}>{selectedProject.title}</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>{selectedProject.details}</p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <a href={selectedProject.github} target="_blank" rel="noreferrer" style={{ backgroundColor: '#0284c7', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>Source Code</a>
              {selectedProject.demo && (
                <a href={selectedProject.demo} target="_blank" rel="noreferrer" style={{ backgroundColor: '#10b981', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none' }}>Live Demo</a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer id="contact" style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1e293b', marginTop: '40px', color: '#64748b' }}>
        <p>Hamjath Khan N. • h87official@gmail.com • Chennai, India</p>
      </footer>
    </div>
  );
}