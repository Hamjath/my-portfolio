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
    <div>
     <p>I’m a passionate Software Engineer with hands-on experience in Full-Stack web application development and a growing specialization in Artificial Intelligence.</p>
     <p>I hold a B.E. in Electrical and Electronics Engineering from KPR Institute of Engineering and Technology, Coimbatore, and am currently working as a Junior Software Engineer at Equiniti India while pursuing an M.Tech in Artificial Intelligence and Data Science at SRM Institute of Science and Technology, Chennai.</p>
     <p>At Equiniti India, I have gained more than three years of combined internship and full-time experience developing and maintaining scalable enterprise web applications. I work with technologies including C#, .NET, MVC, MS SQL Server, XML, HTML, and Bootstrap, and have contributed to improving system performance, automating workflows, and simplifying deployment processes across multiple projects.</p>
     <p>My current focus is on building intelligent, AI-powered applications using Machine Learning, Generative AI, and Large Language Models. I’m particularly interested in Agentic AI frameworks, Retrieval-Augmented Generation (RAG) pipelines, and AI-driven software engineering that bridges traditional development with modern AI capabilities.</p>
     <p>I’m motivated to solve real-world problems through software, data, and AI while continuously learning, experimenting, and building impactful solutions.</p>
     <p><strong>Core Skills:</strong> Full-Stack Development · .NET Framework · C# · Python · SQL · MVC · REST APIs · Artificial Intelligence · Machine Learning · LLMs · Generative AI · Agentic AI · Prompt Engineering · MLOps · AWS · Azure</p>
     <p>I’m open to connecting regarding opportunities or collaborations in AI development, software engineering, and intelligent application design.</p>
    </div>
   </div>
   <div className="about-grid">
    <article>
     <h2>Experience</h2>
     <h3>Junior Software Engineer</h3>
     <p><strong>Equiniti India · Chennai</strong><br/>September 2024 — Present <span className="experience-duration">· {experienceDuration(2024, 9)}</span></p>
     <ul>
      <li>Worked on a large-scale legacy enterprise application, resolving 80+ production and high-priority bugs and delivering 20–30 feature enhancements through cross-functional collaboration.</li>
      <li>Developed and enhanced backend and UI components using C#, .NET, ASP.NET MVC, Web Forms, ADO.NET, MS SQL, HTML, and TFS, improving maintainability and performance.</li>
      <li>Supported onboarding and new team members through knowledge-transfer sessions covering technical architecture and business workflows.</li>
      <li>Contributed to team culture through office initiatives and team events.</li>
      <li><strong>Tech stack:</strong> C#, .NET Framework, ASP.NET MVC, Web Forms, Azure DevOps, MS SQL, SSMS, stored procedures, HTML, and TFS.</li>
     </ul>
     <h3>Intern Software Engineer</h3>
     <p><strong>Equiniti India · Chennai</strong><br/>January 2024 — September 2024 <span className="experience-duration">· {experienceDuration(2024, 1, 2024, 9)}</span></p>
     <ul>
      <li>Completed knowledge-transfer sessions on enterprise products and achieved a 92% product-assessment score, ranking in the top 1% among interns.</li>
      <li>Designed and developed a full-stack Cab Booking Management web application within a two-month deadline, collaborating with a team of interns.</li>
      <li>Implemented end-to-end functionality using C#, ASP.NET MVC, MS SQL, HTML, and CSS.</li>
     </ul>
    </article>
    <article>
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
