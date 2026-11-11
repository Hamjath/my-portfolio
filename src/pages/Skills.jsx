import { skillGroups } from '../data/portfolioData';

const skillIcons = {
  'C#': 'csharp/csharp-original.svg',
  Python: 'python/python-original.svg',
  JavaScript: 'javascript/javascript-original.svg',
  'ASP.NET MVC': 'dotnetcore/dotnetcore-original.svg',
  '.NET': 'dotnetcore/dotnetcore-original.svg',
  React: 'react/react-original.svg',
  Flask: 'flask/flask-original.svg',
  Django: 'django/django-plain.svg',
  Git: 'git/git-original.svg',
  GitHub: 'github/github-original.svg',
  'SQL Server': 'microsoftsqlserver/microsoftsqlserver-original.svg',
  Docker: 'docker/docker-original.svg',
  Postman: 'postman/postman-original.svg',
  'Visual Studio': 'visualstudio/visualstudio-original.svg',
  SSMS: 'microsoftsqlserver/microsoftsqlserver-original.svg',
  'Computer Vision': 'opencv/opencv-original.svg',
  'REST APIs': 'swagger/swagger-original.svg',
};

 const nodeColors = [
   '#19b8ed', '#61dafb', '#ffca28', '#ef5350', '#00d084',
   '#ff7043', '#7e57c2', '#42a5f5', '#26c6da', '#8bc34a',
 ];

 const nodePositions = [
    ['8%', '11%'], ['19%', '8%'], ['30%', '13%'], ['42%', '8%'], ['54%', '9%'],
    ['66%', '8%'], ['78%', '13%'], ['91%', '23%'], ['8%', '35%'], ['20%', '28%'],
   ['32%', '39%'], ['44%', '24%'], ['56%', '39%'], ['68%', '28%'], ['80%', '43%'],
   ['92%', '53%'], ['4%', '57%'], ['16%', '49%'], ['28%', '62%'], ['40%', '52%'],
   ['52%', '66%'], ['64%', '57%'], ['76%', '67%'], ['88%', '76%'], ['12%', '78%'],
   ['31%', '78%'], ['48%', '82%'], ['67%', '81%'],
 ];

 const driftPatterns = [
   [8, -7, 10.2],
   [-9, 5, 11.1],
   [6, 9, 10.6],
   [-6, -8, 12.8],
   [10, 4, 9.9],
   [-8, 8, 11.4],
   [7, -10, 12.4],
   [-10, -5, 10.1],
   [5, 7, 13.1],
   [-5, 10, 9.7],
 ];

 export default function Skills() {
  const skills = skillGroups.flatMap(([, list]) => list);

  return (
   <section className="page-section skills-page">
    <p className="page-kicker skills-page-kicker">Technical expertise</p>
    <h1 className="skills-page-title">Skills</h1>
    <div className="skills-orbit" aria-label="Technical skills">
     {skills.map((skill, index) => {
      const iconPath = skillIcons[skill];
      const [driftX, driftY, duration] = driftPatterns[index % driftPatterns.length];
      return (
       <article
        className={`skill-node skill-node-${index % 10}`}
        style={{
         '--node-color': nodeColors[index % nodeColors.length],
         '--node-delay': `${-(index % 7) * 0.7}s`,
         '--node-size': `${72 + (index % 4) * 3}px`,
         '--drift-x': `${driftX}px`,
         '--drift-y': `${driftY}px`,
         '--drift-x-alt': `${-driftX * 0.65}px`,
         '--drift-y-alt': `${-driftY * 0.65}px`,
         '--float-duration': `${duration}s`,
         left: nodePositions[index]?.[0] ?? `${8 + (index % 5) * 18}%`,
         top: nodePositions[index]?.[1] ?? `${72 + Math.floor(index / 5) * 4}%`,
        }}
        key={skill}
        title={skill}
       >
        <span className="skill-node-icon" aria-hidden="true">
         {iconPath && (
          <img
           src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}`}
           alt=""
           loading="lazy"
           onError={event => {
            event.currentTarget.hidden = true;
            event.currentTarget.nextElementSibling.hidden = false;
           }}
          />
         )}
         <span className="skill-icon-fallback" hidden={Boolean(iconPath)}>
          {skill.slice(0, 2).toUpperCase()}
         </span>
        </span>
        <strong>{skill}</strong>
       </article>
      );
     })}
    </div>
    <div className="skill-grid skills-card-grid">
     {skillGroups.map(([name, list]) => (
      <article className="skill-group" key={name}><h2>{name}</h2><div>{list.map(skill => <span key={skill}>{skill}</span>)}</div></article>
     ))}
    </div>
   </section>
 );
 }
