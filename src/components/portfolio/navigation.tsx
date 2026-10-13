import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation, portfolio } from '@/data/portfolio';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-20% 0px -60% 0px' });
    navigation.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <header className="site-header">
    <div className="page-width header-inner">
      <a href="#home" aria-label="Mohit Rajpurohit, home" className="wordmark">mohit<span className="text-primary">.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} className={active === id ? 'nav-active' : ''}>{label}</a>)}
      </nav>
      <Button asChild variant="outline" className="header-contact"><a href={`mailto:${portfolio.email}`}>Let’s connect <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav page-width">{navigation.map(({id,label}) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </header>;
}
