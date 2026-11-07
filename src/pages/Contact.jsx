import SocialLinks from '../components/SocialLinks';

export default function Contact() {
 function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = data.get('subject') || 'Portfolio contact';
  const body = `Name: ${data.get('name')}\nEmail or Phone: ${data.get('contact')}\n\n${data.get('message')}`;
  window.location.href = `mailto:h87official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 }

 return (
  <section className="page-section contact-page">
   <h1>Let's Connect <span>&amp; Collaborate</span> <span className="contact-handshake" aria-hidden="true">🤝</span></h1>
   <p className="contact-lead">Let's turn ideas into reality—reach out and let's get started.</p>
   <SocialLinks />
   <form className="contact-form" onSubmit={handleSubmit}>
    <input name="name" aria-label="Your name" placeholder="Your Name" required/>
    <input name="contact" aria-label="Your email or phone" placeholder="Your Email or Phone" required/>
    <input name="subject" aria-label="Subject" placeholder="Subject"/>
    <textarea name="message" aria-label="Your message" placeholder="Your Message..." rows="5" required/>
    <button type="submit">🚀 Send Message</button>
   </form>
  </section>
 );
}
