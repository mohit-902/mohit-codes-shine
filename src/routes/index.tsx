import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowRight, ArrowUpRight, Award, BookOpen, Code2, Cpu, Github, GraduationCap, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/portfolio/navigation';
import { SectionHeading } from '@/components/portfolio/section-heading';
import { portfolio as p, gmailComposeUrl } from '@/data/portfolio';
import boardImage from '@/assets/embedded-board.jpg';
import portrait from '@/assets/mohit-headshot.png.asset.json';
import { Chatbot } from '@/components/portfolio/chatbot';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Mohit Rajpurohit | ECE Student & Aspiring Embedded Systems Engineer' },
    { name: 'description', content: 'Meet Mohit Rajpurohit, a first-year B.Tech ECE student at JECRC University exploring programming, microcontrollers, and embedded systems.' },
    { property: 'og:title', content: 'Mohit Rajpurohit | Engineering Portfolio' },
    { property: 'og:description', content: 'Education, technical skills, and professional profiles of Mohit Rajpurohit, aspiring embedded systems engineer.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

function Portfolio() {
  return <>
    <a className="skip-link" href="#about">Skip to content</a>
    <Navigation />
    <Chatbot />
    <main>
      <section id="home" className="hero">
        <img className="hero-image" src={boardImage} alt="Close-up of an ESP32 microcontroller board" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="page-width hero-content">
          <p className="hero-kicker"><span className="status-dot" /> LEARNING. EXPLORING. BUILDING.</p>
          <p className="hello">Hello, I’m</p>
          <h1>Mohit<br /><span>Rajpurohit<span className="text-primary">.</span></span></h1>
          <p className="hero-title">{p.title}<span className="text-primary"> / </span><br className="mobile-break" />{p.ambition}</p>
          <p className="hero-intro">{p.introduction}</p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="#projects">View my projects <ArrowUpRight /></a></Button>
            <Button asChild size="lg" variant="outline"><a href="#contact">Contact me <ArrowRight /></a></Button>
          </div>
          <div className="hero-socials">
            <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="Visit Mohit’s GitHub"><Github size={19} /></a>
            <a href={p.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit Mohit’s LinkedIn"><Linkedin size={19} /></a>
            <span className="social-divider" /><span><MapPin size={14} /> {p.location}</span>
          </div>
        </div>
        <div className="page-width hero-bottom"><a href="#about"><ArrowDown size={15} /> A little more about me</a><span>ENGINEERING MY PATH, ONE STEP AT A TIME</span></div>
      </section>

      <section id="about" className="section page-width about-layout">
        <div><SectionHeading number="01" eyebrow="ABOUT ME" title="Curiosity is my starting point." />
          <p className="section-copy">{p.about}</p>
          <p className="section-copy">My goal is to grow into an embedded systems engineer, connecting what I learn in the classroom with my interest in hardware and programming.</p>
          <div className="about-meta"><span><GraduationCap size={17} /> ECE student</span><span><Cpu size={17} /> Embedded systems enthusiast</span></div>
        </div>
        <figure className="profile-portrait"><img src={portrait.url} alt="Mohit Rajpurohit wearing a suit and tie" width={768} height={1059} loading="lazy" /><figcaption>MOHIT RAJPUROHIT</figcaption><div className="portrait-corner top-left" /><div className="portrait-corner bottom-right" /></figure>
      </section>

      <section id="education" className="section section-band"><div className="page-width">
        <SectionHeading number="02" eyebrow="EDUCATION" title="The foundation of my journey." />
        <div className="education-layout"><div className="degree-detail"><div className="education-icon"><GraduationCap size={27} /></div><div><span className="small-label">CURRENTLY PURSUING</span><h3>B.Tech in Electronics &<br className="desktop-break" /> Communication Engineering</h3><p className="college">{p.education.college}</p><span className="location-line"><MapPin size={14} />{p.education.location}</span><div className="degree-tags"><span>1st year · 1st semester</span><span>Expected graduation · 2030</span></div></div></div>
        <div className="school-results"><div><BookOpen size={20} /><span>Class 12</span><strong>{p.education.class12}<small>%</small></strong></div><div><BookOpen size={20} /><span>Class 10</span><strong>{p.education.class10.toFixed(2)}<small>%</small></strong></div></div></div>
      </div></section>

      <section id="skills" className="section page-width">
        <SectionHeading number="03" eyebrow="TECHNICAL SKILLS" title="My growing toolkit." />
        <div className="skills-grid">{p.skills.map((skill) => { const Icon = skill.icon === 'code' ? Code2 : skill.icon === 'cpu' ? Cpu : MessageSquare; return <div className="skill-card" key={skill.category}><Icon size={24} className="text-primary" /><h3>{skill.category}</h3><div className="skill-tags">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>; })}</div>
      </section>

      <section id="projects" className="section section-band"><div className="page-width">
        <div className="section-title-row"><SectionHeading number="04" eyebrow="PROJECTS" title="Room for what’s next." /><a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a></div>
        <div className="projects-empty"><Code2 size={31} strokeWidth={1.5} /><div><h3>Projects to come.</h3><p>My portfolio is just getting started. Completed projects will be shared here.</p></div><span className="outline-label">THE JOURNEY BEGINS</span></div>
      </div></section>

      <section id="certifications" className="section page-width">
        <SectionHeading number="05" eyebrow="CERTIFICATIONS" title="Learning beyond the classroom." />
        <div className="cert-grid">{p.certifications.map((cert, index) => <article key={cert.name} className="cert-card"><div className="cert-icon"><Award size={25} /></div><div><span className="small-label">WORKSHOP {String(index + 1).padStart(2, '0')}</span><h3>{cert.name}</h3><p>Issued by {cert.issuer}</p></div><Award size={46} strokeWidth={1} className="cert-watermark" /></article>)}</div>
      </section>

      <section id="contact" className="section contact-section"><div className="page-width contact-layout">
        <div><SectionHeading number="06" eyebrow="CONTACT" title="Let’s start a conversation." /><p className="section-copy">Have an opportunity, an idea, or simply want to connect?<br className="desktop-break" /> I’d love to hear from you.</p><Button asChild size="lg" className="contact-cta"><a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">Get in touch <ArrowUpRight /></a></Button></div>
        <div className="contact-details"><a className="email-link" href={gmailComposeUrl} target="_blank" rel="noopener noreferrer"><Mail size={20} /><div><span className="small-label">EMAIL</span><span>{p.email}</span></div><ArrowUpRight size={18} /></a><div className="contact-location"><MapPin size={20} /><div><span className="small-label">BASED IN</span><span>{p.location}</span></div></div><div className="professional-links"><a href={p.github} target="_blank" rel="noopener noreferrer"><Github size={19} /> GitHub <ArrowUpRight size={15} /></a><a href={p.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={15} /></a></div></div>
      </div></section>
    </main>
    <footer className="page-width footer"><div><a className="wordmark" href="#home">mohit<span className="text-primary">.</span></a><p>© {new Date().getFullYear()} Mohit Rajpurohit. All rights reserved.</p></div><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a><a href="#home" className="back-top">Back to top <ArrowUpRight size={14} /></a></nav></footer>
  </>;
}
