function WEServices({ onNav }) {
  const services = [
    {
      num: '01 — Wedding Management',
      title: 'On the day, you should feel nothing but present.',
      body: 'The timeline is running. The vendors are coordinating. The family is being managed. The protocol is being followed.\n\nYou don\'t know any of this — because you don\'t need to. That is what we are here for.\n\nYou arrive as the bride. We handle everything else.',
    },
    {
      num: '02 — Bridal Assistants',
      title: 'Your person. For every moment you need one.',
      body: 'The dress that needs holding before you walk in. The touch-up between outfit changes. The quiet voice that tells you everything is going as planned.\n\nFrom the moment you begin getting ready until the last moment of the evening — she is there.',
    },
    {
      num: '04 — Polaroid Service',
      title: 'Some moments deserve to be held, not scrolled.',
      body: 'In a world of digital everything, there is something extraordinary about a photograph you can hold in your hands the same night it was taken.\n\nA small detail. A lasting memory.',
    },
    {
      num: '05 — Content Creation',
      title: 'Your wedding, told the way it actually felt.',
      body: 'Not staged. Not filtered beyond recognition. Not content that looks like every other wedding you have ever seen.\n\nContent you will still want to watch in ten years.',
    },
  ];

  const [hovered, setHovered] = React.useState(null);

  const cardStyle = (i) => ({
    background: hovered === i ? '#F5F2EC' : '#FAF8F4',
    padding: '52px 44px',
    display: 'flex', flexDirection: 'column', gap: 16,
    position: 'relative', overflow: 'hidden',
    transition: 'background 0.4s ease',
    cursor: 'default',
  });

  return (
    <div style={{ background: '#FAF8F4', paddingTop: 120 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '80px 60px 64px' }}>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>What We Do</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.2, marginTop: 16 }}>
          Every service exists<br />for one reason.
        </h2>
        <div style={{ width: 40, height: 1, background: '#B8924A', margin: '20px auto 0' }} />
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(184,146,74,0.12)', maxWidth: 1200, margin: '0 auto' }}>
        {services.map((svc, i) => (
          <div key={i} style={cardStyle(i)} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            {/* hover line */}
            <div style={{
              position: 'absolute', bottom: 0, left: 44,
              width: hovered === i ? 'calc(100% - 88px)' : 0,
              height: 2, background: '#B8924A',
              transition: 'width 0.5s ease',
            }} />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '3px', color: '#B8924A' }}>{svc.num}</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(20px,2vw,26px)', fontWeight: 300, lineHeight: 1.3, color: '#1A1814' }}>{svc.title}</h3>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: '#8A8478', whiteSpace: 'pre-line' }}>{svc.body}</p>
          </div>
        ))}

        {/* Featured card */}
        <div style={{ gridColumn: '1 / -1', background: '#1A1814', padding: '72px 64px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '3px', color: '#D4AA6A' }}>03 — Catwalk & Confidence Training</span>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,3vw,38px)', fontWeight: 300, fontStyle: 'italic', color: '#fff', lineHeight: 1.3 }}>
              You have practiced everything about your wedding.<br />Have you practiced yourself?
            </h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: '#D4AA6A', border: '1px solid rgba(184,146,74,0.35)', padding: '7px 16px', width: 'fit-content' }}>By Mira · One on One · Dubai</span>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: 'rgba(250,248,244,0.55)', whiteSpace: 'pre-line' }}>
              {'The dress was chosen months ago. The venue, the flowers, the music — every detail considered.\n\nAnd yet the walk — those twenty seconds when every person who loves you turns to look — is the one thing almost no bride ever prepares for.\n\nThis is not a rehearsal. It is a transformation.'}
            </p>
          </div>
        </div>
      </div>

      {/* Single section CTA */}
      <div style={{ textAlign: 'center', padding: '72px 60px', background: '#F0EDE6', borderTop: '1px solid rgba(184,146,74,0.15)' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(18px,2vw,24px)', fontStyle: 'italic', fontWeight: 300, color: '#1A1814', marginBottom: 32, lineHeight: 1.7 }}>
          Every wedding is different. Every bride is different.<br />Tell us about yours.
        </p>
        <button onClick={() => onNav('contact')} style={{
          fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
          color: '#fff', background: '#1A1814', padding: '16px 52px', border: 'none',
          cursor: 'pointer', transition: 'background 0.3s, transform 0.3s',
        }}
          onMouseEnter={e => { e.target.style.background='#B8924A'; e.target.style.transform='translateY(-1px)'; }}
          onMouseLeave={e => { e.target.style.background='#1A1814'; e.target.style.transform=''; }}>
          Begin the Conversation
        </button>
      </div>

      <div style={{ height: 0 }} />
    </div>
  );
}

Object.assign(window, { WEServices });
