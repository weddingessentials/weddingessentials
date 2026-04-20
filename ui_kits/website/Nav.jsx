const { useState, useEffect } = React;

function WENav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '22px 60px',
      background: 'rgba(250,248,244,0.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(184,146,74,0.15)',
      boxShadow: scrolled ? '0 2px 30px rgba(0,0,0,0.06)' : 'none',
      transition: 'box-shadow 0.3s ease',
    },
    logo: {
      fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 400,
      letterSpacing: 2, color: '#1A1814', cursor: 'pointer', textDecoration: 'none',
    },
    links: { display: 'flex', gap: 36, listStyle: 'none' },
    link: (isActive) => ({
      fontSize: 10, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase',
      color: isActive ? '#B8924A' : '#8A8478', cursor: 'pointer',
      textDecoration: 'none', transition: 'color 0.3s',
    }),
    cta: {
      fontSize: 10, fontWeight: 500, letterSpacing: '2.5px', textTransform: 'uppercase',
      color: '#1A1814', cursor: 'pointer', borderBottom: '1px solid #B8924A', paddingBottom: 2,
      transition: 'color 0.3s',
    },
  };

  const links = [
    { label: 'Services', key: 'services' },
    { label: 'About', key: 'about' },
    { label: 'Free Guide', key: 'contact' },
    { label: 'Contact', key: 'contact' },
  ];

  return (
    <nav style={s.nav}>
      <span style={s.logo} onClick={() => onNav('home')}>Wedding Essentials</span>
      <ul style={s.links}>
        {links.map(l => (
          <li key={l.label}>
            <span style={s.link(active === l.key)} onClick={() => onNav(l.key)}>{l.label}</span>
          </li>
        ))}
      </ul>
      <span style={s.cta} onClick={() => onNav('contact')}>Enquire</span>
    </nav>
  );
}

Object.assign(window, { WENav });
