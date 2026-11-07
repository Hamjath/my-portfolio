import { skillGroups } from '../data/portfolioData';

export default function Skills() {
 return (
  <section className="page-section">
   <p className="page-kicker">Technical expertise</p>
   <h1>Skills</h1>
   <div className="skill-grid">
    {skillGroups.map(([name,list]) => (
     <article className="skill-group" key={name}><h2>{name}</h2><div>{list.map(skill=><span key={skill}>{skill}</span>)}</div></article>
    ))}
   </div>
  </section>
 );
}
