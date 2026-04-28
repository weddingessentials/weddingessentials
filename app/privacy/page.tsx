import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy – Wedding Essentials Dubai',
  description: 'Privacy Policy for Wedding Essentials, Dubai, UAE.',
}

export default function PrivacyPage() {
  return (
    <>
      <style>{`
        body { font-family: 'Poppins', sans-serif; color: #0a0a0a; background: #fff; }
        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 22px 48px; background: #fff; border-bottom: 1px solid rgba(0,0,0,0.08); }
        .nav-logo { font-family: 'Montez', cursive; font-size: 1.25rem; color: #0a0a0a; text-decoration: none; }
        .nav-back { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #0a0a0a; border-bottom: 1px solid currentColor; padding-bottom: 1px; text-decoration: none; }
        .policy-wrap { max-width: 760px; margin: 0 auto; padding: 140px 40px 100px; }
        .policy-label { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #aaa; margin-bottom: 18px; }
        .policy-title { font-family: 'Montez', cursive; font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 400; line-height: 1.15; margin-bottom: 10px; }
        .policy-date { font-size: 12px; color: #aaa; letter-spacing: 0.06em; margin-bottom: 56px; }
        .policy-section { margin-bottom: 48px; }
        .policy-section h2 { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: #0a0a0a; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.1); }
        .policy-section p { font-size: 14px; line-height: 1.9; color: #555; margin-bottom: 14px; }
        .policy-section ul { margin: 10px 0 14px 20px; font-size: 14px; line-height: 1.9; color: #555; }
        .policy-section ul li { margin-bottom: 6px; }
        .policy-section a { border-bottom: 1px solid rgba(0,0,0,0.25); color: inherit; text-decoration: none; }
        .policy-highlight { background: #f7f7f7; border-left: 3px solid #0a0a0a; padding: 18px 22px; font-size: 13px; line-height: 1.8; color: #444; margin: 20px 0; }
        .policy-footer { border-top: 1px solid rgba(0,0,0,0.08); padding: 36px 40px; text-align: center; font-size: 12px; color: #aaa; }
        .policy-footer a { color: #777; border-bottom: 1px solid rgba(0,0,0,0.2); text-decoration: none; }
        @media (max-width: 600px) { nav { padding: 18px 24px; } .policy-wrap { padding: 110px 24px 72px; } }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Wedding Essentials</a>
        <a href="/" className="nav-back">← Back</a>
      </nav>

      <main className="policy-wrap">
        <p className="policy-label">Legal</p>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-date">Last updated: April 2025</p>

        <div className="policy-section">
          <h2>Who we are</h2>
          <p>Wedding Essentials is a bridal services company based in Dubai, United Arab Emirates. We provide wedding management, bridal assistance, catwalk and confidence training, content creation, destination wedding coordination, honeymoon planning, and related services.</p>
          <p>For any privacy-related questions, you can reach us via WhatsApp at <a href="https://wa.me/971506881534" target="_blank" rel="noopener">+971 50 688 1534</a> or through our Instagram <a href="https://instagram.com/weddingessentials.me" target="_blank" rel="noopener">@weddingessentials.me</a>.</p>
        </div>

        <div className="policy-section">
          <h2>What this website does and does not collect</h2>
          <p>This website is a brochure site. It does not have user accounts. The only form it contains is the Bridal Presence Guide request form, which collects your name, email, phone number, and an optional personal answer.</p>
          <div className="policy-highlight">
            We do not run analytics. We do not use advertising or tracking pixels. We do not set cookies. We do not sell or share your data with third parties for commercial purposes.
          </div>
        </div>

        <div className="policy-section">
          <h2>Cookies</h2>
          <p>This website does not set any cookies. Google Fonts may set cookies as part of their CDN service.</p>
        </div>

        <div className="policy-section">
          <h2>Applicable law and your rights</h2>
          <p>Wedding Essentials operates under the laws of the United Arab Emirates, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (UAE PDPL).</p>
          <p>To exercise any rights, please contact us via WhatsApp at <a href="https://wa.me/971506881534" target="_blank" rel="noopener">+971 50 688 1534</a>.</p>
        </div>

        <div className="policy-section">
          <h2>Children</h2>
          <p>This website is not directed at children under the age of 16.</p>
        </div>
      </main>

      <footer className="policy-footer">
        <p>© 2025 Wedding Essentials, Dubai, UAE &nbsp;·&nbsp; <a href="/">Return to site</a></p>
      </footer>
    </>
  )
}
