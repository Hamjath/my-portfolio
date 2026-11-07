function Icon({ type }) {
 const files = { linkedin: 'linkedin.png', github: 'github.png', email: 'gmail.png', whatsapp: 'whatsapp.png' };
 return <img className="social-icon" src={`/${files[type]}`} alt="" aria-hidden="true" />;
}

export default function SocialLinks() {
 return (
  <div className="social-grid">
   <a href="https://linkedin.com/in/h87official" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon type="linkedin"/><span>LinkedIn</span></a>
   <a href="https://github.com/Hamjath" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon type="github"/><span>GitHub</span></a>
   <a href="mailto:h87official@gmail.com" aria-label="Email"><Icon type="email"/><span>Email</span></a>
   <a href="https://wa.me/916374066607" target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon type="whatsapp"/><span>WhatsApp</span></a>
  </div>
 );
}
