import { useEffect, useState } from 'react';
import './App.css';
import About from './pages/About';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

const nav = [['Home','/'],['About Me','/about'],['Skills','/skills'],['Projects','/projects'],['Certificates','/certificates'],['Resume','/resume'],['Contact','/contact']];

const pageComponents = {
 '/': Home,
 '/about': About,
 '/skills': Skills,
 '/projects': Projects,
 '/certificates': Certificates,
 '/resume': Resume,
 '/contact': Contact,
};

export default function App() {
 const [path,setPath] = useState(window.location.pathname.replace(/\/$/, '') || '/');
 const [menu,setMenu] = useState(false);
 const [project,setProject] = useState(null);
 useEffect(() => { const update=()=>setPath(window.location.pathname.replace(/\/$/, '') || '/'); window.addEventListener('popstate',update); return()=>window.removeEventListener('popstate',update); },[]);
 function go(e,destination){ if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey) return; e.preventDefault(); window.history.pushState({},'',destination); setPath(destination); setMenu(false); window.scrollTo(0,0); }
 const Page = pageComponents[path] || Home;

 return <div className="site-shell"><header className="topbar"><a className="brand" href="/" onClick={e=>go(e,'/')}><span className="brand-mark">HK</span><span className="brand-copy"><strong>Hamjath Khan N</strong><small>Full-Stack | AI &amp; ML Developer</small></span></a><nav className="desktop-nav">{nav.map(([label,d])=><a className={path===d?'active':''} href={d} onClick={e=>go(e,d)} key={label}>{label}</a>)}</nav><button className={`menu-button ${menu?'is-open':''}`} onClick={()=>setMenu(!menu)} aria-label="Toggle navigation"><span/><span/><span/></button></header><nav className={`menu-drawer ${menu?'is-open':''}`}>{nav.map(([label,d])=><a className={path===d?'active':''} href={d} onClick={e=>go(e,d)} key={label}>{label}</a>)}</nav>{menu&&<button className="menu-backdrop" onClick={()=>setMenu(false)} aria-label="Close navigation"/>}<main key={path} className="page-reveal"><Page onOpenProject={setProject}/></main>{project&&<div className="modal-backdrop" onMouseDown={()=>setProject(null)}><article className="project-modal" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setProject(null)}>×</button><span className="project-badge">{project[1]}</span><h2>{project[2]}</h2><p>{project[3]}</p></article></div>}<footer>© 2026 Hamjath Khan N · Built with React</footer></div>;
}
