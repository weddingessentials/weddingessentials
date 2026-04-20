function WEContact({ sent, onSent }) {
  const [guideSent, setGuideSent] = React.useState(false);

  return (
    <div style={{ paddingTop: 88 }}>

      {/* ── PDF Lead Magnet (dark) ── */}
      <div style={{ background: '#1A1814', padding: '100px 60px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, #B8924A, transparent)' }} />

        {/* Centered heading — full width */}
        <div style={{ textAlign: 'center', marginBottom: 72, maxWidth: 1100, margin: '0 auto 72px' }}>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#D4AA6A', display: 'block', marginBottom: 24 }}>A gift for you</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
            Before you plan another detail —<br /><em style={{ fontStyle: 'italic', color: '#D4AA6A' }}>read this.</em>
          </h2>
          <div style={{ width: 40, height: 1, background: '#B8924A', margin: '0 auto 24px' }} />
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(17px,2vw,22px)', fontStyle: 'italic', color: 'rgba(250,248,244,0.7)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            The Bridal Presence Guide: 10 things every bride should know before she walks in.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, maxWidth: 1100, margin: '0 auto', alignItems: 'start' }}>

          {/* Left — description + download */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: 'rgba(250,248,244,0.4)' }}>
              This is not a checklist. It is not a list of tips.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: 'rgba(250,248,244,0.4)' }}>
              It is the beginning of the conversation I have with every bride I work with personally — the one that changes how she thinks about her wedding day, her entrance, and herself.
            </p>
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: 'rgba(250,248,244,0.4)' }}>
              Free. Yours. And more honest than most things you will read about weddings.
            </p>
            <div style={{ marginTop: 16, padding: '24px', border: '1px solid rgba(184,146,74,0.2)', background: 'rgba(184,146,74,0.04)' }}>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontStyle: 'italic', color: 'rgba(250,248,244,0.5)', lineHeight: 1.7, marginBottom: 16 }}>
                Already know you want it?
              </p>
              <a href="#" style={{ display: 'inline-block', fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#D4AA6A', border: '1px solid rgba(184,146,74,0.4)', padding: '12px 28px', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => e.target.style.background = 'rgba(184,146,74,0.12)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}>
                Download the Guide ↓
              </a>
              <p style={{ fontSize: 9, letterSpacing: '1.5px', color: 'rgba(250,248,244,0.2)', marginTop: 12, textTransform: 'uppercase' }}>PDF · Free · No sign-up required</p>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {!guideSent ? (
              <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={e => { e.preventDefault(); setGuideSent(true); }}>
                {[
                  { label: 'Your Name', placeholder: 'Your name', type: 'text' },
                  { label: 'Email Address', placeholder: 'Your email address', type: 'email' },
                  { label: 'Phone / WhatsApp', placeholder: 'Your number', type: 'tel' },
                ].map(f => (
                  <div key={f.label}>
                    <label style={{ fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required={f.type !== 'tel'} style={{ background: 'rgba(250,248,244,0.05)', border: '1px solid rgba(184,146,74,0.22)', color: '#fff', padding: '13px 16px', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 300, outline: 'none', width: '100%' }} />
                  </div>
                ))}
                <div>
                  <label style={{ fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: 8 }}>One question</label>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, fontStyle: 'italic', color: 'rgba(250,248,244,0.65)', padding: '13px 16px', borderLeft: '2px solid #B8924A', lineHeight: 1.65, marginBottom: 8 }}>
                    "When you imagine walking into your wedding — what is the one thing you are most afraid of?"
                  </div>
                  <textarea placeholder="Take your time. There is no wrong answer." required style={{ background: 'rgba(250,248,244,0.05)', border: '1px solid rgba(184,146,74,0.22)', color: '#fff', padding: '13px 16px', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 300, outline: 'none', width: '100%', height: 90, resize: 'none', lineHeight: 1.7 }} />
                </div>
                <button type="submit" style={{ background: '#B8924A', color: '#fff', border: 'none', padding: '16px 32px', fontFamily: 'Montserrat,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', cursor: 'pointer', width: '100%', transition: 'background 0.3s' }}
                  onMouseEnter={e => e.target.style.background = '#D4AA6A'}
                  onMouseLeave={e => e.target.style.background = '#B8924A'}>
                  Send Me the Guide
                </button>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontStyle: 'italic', color: 'rgba(250,248,244,0.3)', textAlign: 'center' }}>Free. No spam. Ever.</p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 20 }}>It is on its way.</h3>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: 'italic', color: 'rgba(250,248,244,0.5)', lineHeight: 1.8 }}>
                  And if something in it makes you feel something —<br />you know where to find me.
                </p>
              </div>
            )}
          </div>

        </div>{/* end two-col grid */}
      </div>{/* end dark section */}

      {/* ── Contact section ── */}
      <div style={{ background: '#F0EDE6', padding: '100px 60px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>Get in touch</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 300, lineHeight: 1.2, margin: '16px 0 12px' }}>
            Every wedding begins<br />with a conversation.
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontStyle: 'italic', color: '#8A8478', marginBottom: 12 }}>Tell us about yours.</p>
          <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.95, color: '#8A8478', marginBottom: 48, textWrap: 'pretty' }}>
            We work with a limited number of brides each season to ensure every client receives our complete attention.
          </p>

          {!sent ? (
            <form style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left' }} onSubmit={e => { e.preventDefault(); onSent(); }}>
              {[
                { label: 'Your Name', placeholder: 'Name', type: 'text' },
                { label: 'Email Address', placeholder: 'Email', type: 'email' },
                { label: 'Wedding Date', placeholder: 'Approximate date or season', type: 'text' },
              ].map(f => (
                <div key={f.label}>
                  <label style={{ fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: 7 }}>{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} style={{ background: '#FAF8F4', border: '1px solid rgba(26,24,20,0.12)', color: '#1A1814', padding: '13px 16px', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 300, outline: 'none', width: '100%' }} />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 9, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: 7 }}>How Can We Help?</label>
                <textarea placeholder="Tell us about your wedding and what you are looking for..." style={{ background: '#FAF8F4', border: '1px solid rgba(26,24,20,0.12)', color: '#1A1814', padding: '13px 16px', fontFamily: 'Montserrat,sans-serif', fontSize: 13, fontWeight: 300, outline: 'none', width: '100%', height: 110, resize: 'none', lineHeight: 1.7 }} />
              </div>
              <button type="submit" style={{ background: '#1A1814', color: '#fff', border: 'none', padding: '16px 32px', fontFamily: 'Montserrat,sans-serif', fontSize: 10, fontWeight: 500, letterSpacing: '3px', textTransform: 'uppercase', cursor: 'pointer', width: '100%', marginTop: 8, transition: 'background 0.3s' }}
                onMouseEnter={e => e.target.style.background = '#B8924A'}
                onMouseLeave={e => e.target.style.background = '#1A1814'}>
                Send Enquiry
              </button>
            </form>
          ) : (
            <div style={{ padding: '60px 0', textAlign: 'center' }}>
              <div style={{ width: 40, height: 1, background: '#B8924A', margin: '0 auto 32px' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 300, color: '#1A1814', marginBottom: 16 }}>Thank you.</h3>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontStyle: 'italic', color: '#8A8478', lineHeight: 1.8 }}>We will be in touch shortly.</p>
            </div>
          )}

          <div style={{ marginTop: 52, paddingTop: 40, borderTop: '1px solid rgba(184,146,74,0.2)', fontSize: 12.5, color: '#8A8478', lineHeight: 2.1 }}>
            <p>Based in Dubai, available across the UAE and GCC.</p>
            <p>For international enquiries, please reach out directly.</p>
            <div style={{ display: 'flex', gap: 36, justifyContent: 'center', marginTop: 20 }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/weddingessentials.me' },
                { label: 'Email', href: 'mailto:hello@weddingessentials.me' },
                { label: 'WhatsApp', href: 'https://wa.me/971506881534' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener" style={{ fontSize: 10, letterSpacing: '2.5px', textTransform: 'uppercase', color: '#8A8478', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => e.target.style.color = '#B8924A'}
                  onMouseLeave={e => e.target.style.color = '#8A8478'}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>{/* end contact section */}

      {/* ── Footer ── */}
      <footer style={{ background: '#1A1814', padding: '40px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 300, color: '#fff', letterSpacing: 2 }}>Wedding Essentials</span>
        <span style={{ fontSize: 9, letterSpacing: '3px', textTransform: 'uppercase', color: '#B8924A' }}>Coordination · Presence · Memory</span>
        <span style={{ fontSize: 10, color: 'rgba(250,248,244,0.28)' }}>© Wedding Essentials · Dubai · All rights reserved.</span>
      </footer>

    </div>
  );
}

Object.assign(window, { WEContact });
