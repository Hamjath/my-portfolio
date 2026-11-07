import profileImage from '../assets/profilewithNoBGPNG.png';
import SocialLinks from '../components/SocialLinks';

export default function Home() {
 return (
  <section className="hero-section">
   <div className="portrait-wrap"><div className="portrait-glow"/><img src={profileImage} alt="Hamjath Khan N" className="portrait"/></div>
   <div className="hero-copy">
    <p className="eyebrow">Hello, I'm</p>
    <h1 className="hero-name"><span>Hamjath Khan N</span></h1>
    <p className="hero-role">Full-Stack .NET Developer | AI & Machine Learning Engineer</p>
    <div className="skill-cloud">{['Full-Stack Developer','AI/ML Engineer','Data Science','Problem Solver','Tech Explorer'].map(skill=><span key={skill}>{skill}</span>)}</div>
   </div>
   <div className="quick-info">
    <article><span>📍</span><div><small>Location</small><strong>Chennai, India</strong></div></article>
    <article><span>💼</span><div><small>Expertise</small><strong>.NET, AI & Data Science</strong></div></article>
    <article><span>📧</span><div><small>Contact</small><strong>h87official@gmail.com</strong></div></article>
   </div>
   <div className="home-connect"><h2>Connect with me</h2><SocialLinks /></div>
  </section>
 );
}
