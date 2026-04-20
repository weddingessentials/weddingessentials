function WEHero({ onNav }) {
  const s = {
    section: {
      minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr',
      position: 'relative', overflow: 'hidden',
    },
    // Left: text
    left: {
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '140px 64px 80px 72px', position: 'relative', zIndex: 2,
      background: '#FAF8F4',
    },
    bg: {
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 30% 60%, rgba(184,146,74,0.07) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    eyebrow: {
      fontSize: 10, fontWeight: 500, letterSpacing: '4px', textTransform: 'uppercase',
      color: '#B8924A', marginBottom: 32,
      animation: 'fadeUp 1s ease 0.2s both',
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 5vw, 76px)',
      fontWeight: 300, lineHeight: 1.1, color: '#1A1814', letterSpacing: -1,
      marginBottom: 28, animation: 'fadeUp 1s ease 0.4s both',
    },
    em: { fontStyle: 'italic', fontWeight: 300, color: '#B8924A' },
    sub: {
      fontSize: 13, fontWeight: 300, lineHeight: 1.9, color: '#8A8478',
      maxWidth: 400, marginBottom: 48,
      animation: 'fadeUp 1s ease 0.6s both',
    },
    btnWrap: { display: 'flex', gap: 16, animation: 'fadeUp 1s ease 0.8s both', flexWrap: 'wrap' },
    btnPrimary: {
      fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
      color: '#fff', background: '#1A1814', padding: '16px 44px', cursor: 'pointer',
      border: 'none', transition: 'background 0.3s, transform 0.3s',
    },
    tagline: {
      marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(184,146,74,0.2)',
      fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontStyle: 'italic',
      color: '#8A8478', lineHeight: 1.7, animation: 'fadeUp 1s ease 1s both',
    },
    // Right: photo
    right: {
      position: 'relative', overflow: 'hidden',
    },
    photo: {
      width: '100%', height: '100%', objectFit: 'cover', display: 'block',
      filter: 'grayscale(15%) contrast(1.05)',
      transition: 'transform 8s ease',
    },
    photoOverlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(250,248,244,0.15) 0%, transparent 40%)',
    },
  };

  return (
    <>
    <section style={s.section}>
      {/* Left — copy */}
      <div style={s.left}>
        <div style={s.bg} />
        <p style={s.eyebrow}>Wedding Essentials · Dubai</p>
        <h1 style={s.h1}>
          The day is planned.<br />Now prepare <em style={s.em}>yourself</em><br />for it.
        </h1>
        <p style={s.sub}>
          Wedding management, bridal assistance, bridal presence training,
          and every detail in between — for the bride who refuses to leave anything to chance.
        </p>
        <div style={s.btnWrap}>
          <button style={s.btnPrimary} onClick={() => onNav('contact')}
            onMouseEnter={e => { e.target.style.background='#B8924A'; e.target.style.transform='translateY(-1px)'; }}
            onMouseLeave={e => { e.target.style.background='#1A1814'; e.target.style.transform=''; }}>
            Enquire Now
          </button>
          <a href="https://wa.me/971506881534" target="_blank" rel="noopener" style={{
            fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#1A1814', padding: '14px 28px', border: '1px solid rgba(26,24,20,0.25)',
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='#B8924A'; e.currentTarget.style.color='#B8924A'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(26,24,20,0.25)'; e.currentTarget.style.color='#1A1814'; }}>
            WhatsApp us
          </a>
        </div>
        <div style={s.tagline}>
          "We change the energy in the room."
        </div>
      </div>

      {/* Right — photo */}
      <div style={s.right}>
        <img
          src="../../assets/photo-bride-preparation.jpg"
          alt="Bride being prepared — veil, makeup, multiple hands attending to her"
          style={s.photo}
        />
        <div style={s.photoOverlay} />
      </div>
    </section>

    {/* Intro strip */}
    <div style={{
      background: '#F0EDE6', padding: '52px 80px', textAlign: 'center',
      borderTop: '1px solid rgba(184,146,74,0.2)', borderBottom: '1px solid rgba(184,146,74,0.2)',
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(17px, 2vw, 22px)',
        fontWeight: 300, fontStyle: 'italic', lineHeight: 1.8, color: '#1A1814', maxWidth: 680, margin: '0 auto',
      }}>
        We believe the most important wedding detail is{' '}
        <strong style={{ fontStyle: 'normal', fontWeight: 500 }}>the woman at the centre of it.</strong>{' '}
        Wedding Essentials exists to make sure she is ready — for every moment, every entrance, every photograph.
      </p>
    </div>

    {/* Services strip */}
    <div style={{ background: '#FAF8F4', padding: '80px 72px' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>What We Do</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 300, lineHeight: 1.2, marginTop: 14 }}>
          Five services. One purpose.
        </h2>
        <div style={{ width: 40, height: 1, background: '#B8924A', margin: '18px auto 0' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2, background: 'rgba(184,146,74,0.1)', maxWidth: 1100, margin: '0 auto' }}>
        {[
          { num: '01', title: 'Wedding Management' },
          { num: '02', title: 'Bridal Assistants' },
          { num: '03', title: 'Catwalk & Confidence', featured: true },
          { num: '04', title: 'Polaroid Service' },
          { num: '05', title: 'Content Creation' },
        ].map((s, i) => (
          <div key={i} onClick={() => onNav('services')} style={{
            background: s.featured ? '#1A1814' : '#FAF8F4',
            padding: '32px 24px', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 10,
            transition: 'background 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = s.featured ? '#221F1A' : '#F5F2EC'}
            onMouseLeave={e => e.currentTarget.style.background = s.featured ? '#1A1814' : '#FAF8F4'}>
            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '2px', color: s.featured ? '#D4AA6A' : '#B8924A' }}>{s.num}</span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 17, fontWeight: 300, lineHeight: 1.3, color: s.featured ? '#fff' : '#1A1814' }}>{s.title}</span>
            <span style={{ fontSize: 9, letterSpacing: '2px', textTransform: 'uppercase', color: s.featured ? '#D4AA6A' : '#B8924A', marginTop: 4 }}>Enquire →</span>
          </div>
        ))}
      </div>
    </div>

    {/* About teaser */}
    <div style={{ background: '#F0EDE6', padding: '80px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1200, margin: '0 auto', boxSizing: 'border-box', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
        <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>About Mira</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(26px,3vw,40px)', fontWeight: 300, lineHeight: 1.25 }}>
          I started this because I kept watching brides <em style={{ fontStyle: 'italic' }}>disappear inside their own weddings.</em>
        </h2>
        <button onClick={() => onNav('about')} style={{
          fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
          color: '#1A1814', padding: '14px 32px', border: '1px solid rgba(26,24,20,0.25)',
          background: 'none', cursor: 'pointer', width: 'fit-content', transition: 'all 0.3s',
        }}
          onMouseEnter={e => { e.target.style.borderColor='#B8924A'; e.target.style.color='#B8924A'; }}
          onMouseLeave={e => { e.target.style.borderColor='rgba(26,24,20,0.25)'; e.target.style.color='#1A1814'; }}>
          Meet Mira
        </button>
      </div>
      <div>
        <img src="../../assets/photo-team-bride.jpg" alt="Team Bride by Wedding Essentials" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', filter: 'contrast(1.03)' }} />
      </div>
    </div>

    </>
  );
}

Object.assign(window, { WEHero });
