import profileImage from '../assets/profilewithNoBGPNG.png';

function experienceDuration(startYear, startMonth, endYear = null, endMonth = null) {
 const now = new Date();
 const finalYear = endYear ?? now.getFullYear();
 const finalMonth = endMonth ?? now.getMonth() + 1;
 let months = (finalYear - startYear) * 12 + finalMonth - startMonth;
 if (months < 0) months = 0;
 const years = Math.floor(months / 12);
 const remainingMonths = months % 12;
 const yearText = years ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
 const monthText = remainingMonths ? `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}` : '';
 return [yearText, monthText].filter(Boolean).join(' ') || '0 months';
}

export default function About() {
 return (
  <section className="page-section about-page">
   <h1>About Me</h1>
   <div className="about-intro">
    <img src={profileImage} alt="Hamjath Khan N"/>
    <div className="about-intro-copy">
     <p className="about-lead">I’m a software engineer focused on full-stack .NET development, with a growing specialization in artificial intelligence.</p>
     <p>I work as a Junior Software Engineer at Equiniti India and am pursuing an M.Tech in Artificial Intelligence and Data Science at SRM Institute of Science and Technology. I hold a B.E. in Electrical and Electronics Engineering from KPR Institute of Engineering and Technology.</p>
     <p>My current interests include machine learning, generative AI, large language models, agentic systems, and retrieval-augmented generation. I enjoy applying these technologies to practical software challenges.</p>
     <h2>Areas of focus</h2>
     <div className="about-focus-list">
      {['Full-Stack Development', '.NET', 'C#', 'Python', 'SQL', 'REST APIs', 'Machine Learning', 'LLMs', 'Generative AI', 'Agentic AI', 'Prompt Engineering', 'MLOps', 'AWS', 'Azure'].map(skill => <span key={skill}>{skill}</span>)}
     </div>
     <p className="about-open-to">Open to opportunities and collaborations in AI development, software engineering, and intelligent application design.</p>
    </div>
   </div>
   <div className="about-highlights" aria-label="Career highlights">
    <article><strong>80+</strong><span>production and high-priority bugs resolved</span></article>
    <article><strong>20–30</strong><span>feature enhancements delivered</span></article>
    <article><strong>Top 1%</strong><span>intern product-assessment ranking</span></article>
   </div>
   <div className="about-grid">
    <article className="about-panel">
     <h2>Experience</h2>
     <div className="experience-item">
      <h3>Junior Software Engineer</h3>
      <p className="about-meta"><strong>Equiniti India · Chennai</strong><br/>September 2024 — Present <span className="experience-duration">· {experienceDuration(2024, 9)}</span></p>
      <ul>
       <li>Resolved 80+ production and high-priority bugs and delivered 20–30 feature enhancements for a large-scale enterprise application.</li>
       <li>Developed backend and UI components using C#, .NET, ASP.NET MVC, Web Forms, ADO.NET, MS SQL, HTML, and TFS.</li>
       <li>Supported onboarding with knowledge-transfer sessions on technical architecture and business workflows.</li>
       <li><strong>Tech stack:</strong> C#, .NET Framework, ASP.NET MVC, Web Forms, Azure DevOps, MS SQL, SSMS, stored procedures, HTML, and TFS.</li>
      </ul>
     </div>
     <div className="experience-item">
      <h3>Intern Software Engineer</h3>
      <p className="about-meta"><strong>Equiniti India · Chennai</strong><br/>January 2024 — September 2024 <span className="experience-duration">· {experienceDuration(2024, 1, 2024, 9)}</span></p>
      <ul>
       <li>Scored 92% in the enterprise product assessment, ranking in the top 1% among interns.</li>
       <li>Designed and built a full-stack Cab Booking Management web application in two months with a team of interns.</li>
       <li>Implemented end-to-end functionality using C#, ASP.NET MVC, MS SQL, HTML, and CSS.</li>
      </ul>
     </div>
    </article>
    <article className="about-panel">
     <h2>Education</h2>
     <div className="education-item">
      <h3>SRM Institute of Science and Technology (SRMIST)</h3>
      <p><strong>Master of Technology — Artificial Intelligence and Data Science</strong><br/>August 2025 — May 2027<br/>CGPA: 9.28 / 10</p>
      <p>Pursuing a Master of Technology in Artificial Intelligence and Data Science, with a focus on developing practical skills in machine learning, data analysis, and intelligent software applications.</p>
      <p>Exploring AI/ML concepts through hands-on projects, including recommendation systems and computer vision, while strengthening programming and problem-solving skills and building on my professional software engineering experience to bridge traditional software development and AI-driven solutions.</p>
      <p><strong>Skills:</strong> Artificial Intelligence, Large Language Models, and related AI technologies</p>
     </div>
     <div className="education-item">
      <h3>KPR Institute of Engineering and Technology</h3>
      <p><strong>Bachelor of Engineering — Electrical and Electronics Engineering</strong><br/>June 2020 — July 2024<br/>CGPA: 7.5 / 10</p>
      <p>Completed a Bachelor of Engineering in Electrical and Electronics Engineering, developing a strong foundation in engineering principles, analytical thinking, and problem-solving.</p>
      <p>Relevant coursework included Object-Oriented Programming, Database Management Systems, Data Structures and Algorithms, Operating Systems, Computer Networks, and Image Processing.</p>
      <p><strong>Skills:</strong> Python, C#, and other engineering and programming technologies</p>
     </div>
    </article>
   </div>
  </section>
 );
}
