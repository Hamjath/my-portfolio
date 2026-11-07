import { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function Projects({ onOpenProject }) {
 const [filter,setFilter] = useState('All');
 const visible = filter === 'All' ? projects : projects.filter(project => project[0] === filter);
 return (
  <section className="page-section projects-page">
   <p className="page-kicker">Selected work</p><h1><span>Projects</span></h1>
   <p className="projects-lead">A collection of my major work across AI, data science, and full-stack development.</p>
   <div className="filters">
    {[['All','✨ All Projects'],['AI','🤖 AI Projects'],['Full-Stack','💻 Full-Stack Projects']].map(([value,label]) =>
     <button className={filter === value ? 'active' : ''} onClick={() => setFilter(value)} key={value}>{label}</button>)}
   </div>
   <div className="project-grid">
    {visible.map(project => (
     <article className="project-card" key={project[2]}>
      <div className="project-image"><img src={project[5]} alt=""/><span>{project[1]}</span></div>
      <div className="project-content">
       <h3>{project[2]}</h3><p>{project[3]}</p>
       <div className="tech-list">{project[4].map(technology=><span key={technology}>{technology}</span>)}</div>
       <div className="project-actions">
        <button className="details-button" onClick={() => onOpenProject(project)}>View Details <b>→</b></button>
        <button className="code-button" onClick={() => onOpenProject(project)}>‹› Code</button>
       </div>
      </div>
     </article>
    ))}
   </div>
  </section>
 );
}
