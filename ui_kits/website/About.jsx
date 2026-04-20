function WEAbout({ onNav }) {
  return (
    <div style={{ background: '#F0EDE6', paddingTop: 120 }}>
      <div style={{ padding: '80px 60px', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'start' }}>
        {/* Left */}
        <div>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A', display: 'block', marginBottom: 24 }}>
            The woman behind Wedding Essentials
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(30px,3.5vw,44px)', fontWeight: 300, lineHeight: 1.25, marginBottom: 40 }}>
            I started this because I kept watching brides <em style={{ fontStyle: 'italic' }}>disappear inside their own weddings.</em>
          </h2>
          <button onClick={() => onNav('contact')} style={{
            fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase',
            color: '#1A1814', padding: '14px 36px', border: '1px solid rgba(26,24,20,0.25)',
            background: 'none', cursor: 'pointer', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.target.style.borderColor='#B8924A'; e.target.style.color='#B8924A'; }}
            onMouseLeave={e => { e.target.style.borderColor='rgba(26,24,20,0.25)'; e.target.style.color='#1A1814'; }}>
            Work with me
          </button>
        </div>

        {/* Right */}
        <div style={{ paddingTop: 16 }}>
          {[
            'Every detail was perfect. The room, the flowers, the dress. And somehow — in the middle of all of it — the bride was managing rather than experiencing.',
            'I built Wedding Essentials to close that gap. Between what a wedding looks like and what it feels like. Between the bride who hopes it goes well and the one who knows it will.',
          ].map((p, i) => (
            <p key={i} style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 2, color: '#8A8478', marginBottom: 20, textWrap: 'pretty' }}>{p}</p>
          ))}
          <div style={{ width: 1, height: 52, background: 'linear-gradient(to bottom, #B8924A, transparent)', margin: '24px 0' }} />
          <p style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 2, color: '#8A8478', marginBottom: 20 }}>
            <strong style={{ color: '#1A1814', fontWeight: 500 }}>My name is Mira.</strong> I am a wedding expert, a bridal confidence coach, and the founder of Wedding Essentials. I work with brides across the Gulf and beyond — in grand ballrooms and intimate gardens.
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: 17, color: '#1A1814', lineHeight: 1.75, marginBottom: 20 }}>
            What I know after years of this work is simple: the most important person at a wedding is the bride. And the most important preparation she can do has nothing to do with the décor.
          </p>
          <p style={{ fontSize: 13.5, fontWeight: 300, lineHeight: 2, color: '#1A1814' }}>It has everything to do with her.</p>
        </div>
      </div>

      {/* Portfolio placeholder */}
      <div style={{ background: '#FAF8F4', padding: '80px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>Portfolio</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 300, lineHeight: 1.2, marginTop: 16 }}>
            Some moments from the weddings<br />we have had the privilege of being part of.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, background: 'rgba(184,146,74,0.1)', maxWidth: 1100, margin: '0 auto' }}>
          {[
            { span: 2, ratio: '16/9', img: '../../assets/photo-bride-staircase.jpg', alt: 'Bride on marble staircase — Dubai luxury venue' },
            { span: 1, ratio: '3/4', img: '../../assets/photo-team-bride.jpg', alt: 'Team Bride by Wedding Essentials — bridal assistant adjusting gown' },
            { span: 1, ratio: '3/4', img: '../../assets/photo-bride-preparation.jpg', alt: 'Bride being prepared — editorial B&W' },
            { span: 1, ratio: '3/4', img: '../../assets/photo-orchid-bouquet.jpg', alt: 'Bride holding white orchid bouquet — detail' },
            { span: 1, ratio: '3/4', img: '../../assets/photo-bouquet-detail.jpg', alt: 'Pearl and feather bouquet detail' },
          ].map((item, i) => (
            <div key={i} style={{
              gridColumn: `span ${item.span}`, aspectRatio: item.ratio,
              background: '#F0EDE6', overflow: 'hidden',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
            }}>
              {item.img
                ? <img src={item.img} alt={item.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(10%) contrast(1.03)', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => e.target.style.transform='scale(1.03)'}
                    onMouseLeave={e => e.target.style.transform='scale(1)'} />
                : <span style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: '#8A8478' }}>Your photo here</span>
              }
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', textAlign: 'center', color: '#8A8478', fontSize: 18, marginTop: 48 }}>
          Each wedding is unique. Each entrance is once in a lifetime.
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { WEAbout });
