import resumeFile from '../assets/HAMJATH_KHAN_Resume.pdf';

export default function Resume() {
 return (
  <section className="page-section resume-page">
   <div className="resume-heading">
    <p className="page-kicker">Curriculum vitae</p>
    <h1>Resume</h1>
    <p>A quick glance at my journey.</p>
   </div>

   <div className="resume-profile">
    <article className="resume-identity">
     <span className="resume-avatar">HK</span>
     <div>
      <h2>Hamjath Khan N</h2>
      <p>Full-Stack .NET Developer</p>
      <p>AI &amp; Machine Learning Engineer</p>
      <ul>
       <li>📍 Chennai, India</li>
       <li>✉️ h87official@gmail.com</li>
       <li>📞 +91 63740 66607</li>
      </ul>
     </div>
    </article>
    <article className="resume-summary">
     <h3>Professional Summary</h3>
     <p>Software engineer with experience in full-stack .NET development and growing expertise in Artificial Intelligence, Machine Learning, and Data Science. Passionate about building scalable applications and applying AI to solve real-world problems.</p>
    </article>
   </div>

   <div className="resume-details">
    <section>
     <h2>🎓 Education</h2>
     <div className="resume-detail-card">
      <strong>M.Tech — Artificial Intelligence &amp; Data Science</strong>
      <p>SRM Institute of Science and Technology · 2025 — 2027</p>
      <span>CGPA: 9.28 / 10</span>
     </div>
     <div className="resume-detail-card">
      <strong>B.E. — Electrical and Electronics Engineering</strong>
      <p>KPR Institute of Engineering and Technology · 2020 — 2024</p>
      <span>CGPA: 7.5 / 10</span>
     </div>
    </section>

    <section>
     <h2>💼 Experience</h2>
     <div className="resume-detail-card">
      <strong>Junior Software Engineer</strong>
      <p>Equiniti India · September 2024 — Present</p>
      <span>Enterprise .NET applications, production support, and feature development.</span>
     </div>
     <div className="resume-detail-card">
      <strong>Intern Software Engineer</strong>
      <p>Equiniti India · January 2024 — September 2024</p>
      <span>Full-stack development with C#, ASP.NET MVC, and MS SQL Server.</span>
     </div>
    </section>

    <section>
     <h2>🚀 Projects</h2>
     <div className="resume-detail-card">
      <strong>Live Face Anonymizer</strong>
      <p>Real-time face tracking and anonymization using Python, OpenCV, and MediaPipe.</p>
     </div>
     <div className="resume-detail-card">
      <strong>Movie Recommendation System</strong>
      <p>Collaborative filtering recommender built with Python, Flask, and Scikit-learn.</p>
     </div>
     <div className="resume-detail-card">
      <strong>AI-Assisted DLCF-to-SQL Tool</strong>
      <p>Converts database specifications into structured T-SQL scripts.</p>
     </div>
    </section>

    <section>
     <h2>⚙ Skills</h2>
     <div className="resume-skills">
      {['C#','.NET','ASP.NET MVC','Python','JavaScript','React','SQL Server','Machine Learning','Computer Vision','Git','REST APIs'].map(skill => <span key={skill}>{skill}</span>)}
     </div>
     <div className="resume-links">
      <a href="https://github.com/Hamjath" target="_blank" rel="noreferrer">⌘ GitHub</a>
      <a href="https://linkedin.com/in/h87official" target="_blank" rel="noreferrer">in LinkedIn</a>
     </div>
    </section>
   </div>

   <div className="resume-preview-heading">
    <h2>Resume Document</h2>
    <div>
     <a href={resumeFile} target="_blank" rel="noreferrer">Open</a>
     <a href={resumeFile} download>Download PDF</a>
    </div>
   </div>
   <div className="resume-preview">
    <div className="pdf-toolbar">
     <span>☰</span>
     <span>HAMJATH_KHAN_Resume.pdf</span>
     <span>100% +</span>
    </div>
    <iframe src={`${resumeFile}#toolbar=0&navpanes=0`} title="Hamjath Khan N resume preview"/>
    <div className="resume-preview-placeholder">
     <span>PDF</span>
     <strong>Resume preview will appear here</strong>
     <p>Resume document could not be loaded.</p>
    </div>
   </div>
  </section>
 );
}
