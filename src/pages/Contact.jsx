import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

export default function Contact() {
 const [emailDraft, setEmailDraft] = useState(null);
 const [copyStatus, setCopyStatus] = useState('');

 function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = String(data.get('subject') || '').trim() || 'Portfolio contact';
  const body = `Name: ${data.get('name')}\nEmail or Phone: ${data.get('contact')}\n\n${data.get('message')}`;
  const mailto = `mailto:h87official@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setEmailDraft({ mailto, message: `To: h87official@gmail.com\nSubject: ${subject}\n\n${body}` });
  setCopyStatus('');
  window.location.href = mailto;
 }

 async function copyEmailDraft() {
  if (!emailDraft) return;
  try {
   await navigator.clipboard.writeText(emailDraft.message);
   setCopyStatus('Message copied. Paste it into your email app.');
  } catch {
   setCopyStatus('Automatic copy was unavailable. Select and copy the message below.');
  }
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
   {emailDraft && (
    <aside className="contact-email-fallback" aria-live="polite">
     <p>Your email app should open. If it didn’t, <a href={emailDraft.mailto}>try opening it again</a> or copy the message below.</p>
     <button type="button" onClick={copyEmailDraft}>Copy email message</button>
     {copyStatus && <p className="contact-copy-status" role="status">{copyStatus}</p>}
     {copyStatus.startsWith('Automatic copy') && (
      <textarea aria-label="Email message to copy" readOnly value={emailDraft.message} onFocus={event => event.currentTarget.select()} />
     )}
    </aside>
   )}
  </section>
 );
}
