import { supabase } from '@/lib/supabase'
import NavBar from './components/NavBar'
import PortfolioFilm from './components/PortfolioFilm'
import GuideForm from './components/GuideForm'
import Reveal from './components/Reveal'

export const dynamic = 'force-dynamic'

async function getContent(id: string, fallback: string): Promise<string> {
  try {
    const { data } = await supabase.from('content').select('value').eq('id', id).single()
    return data?.value ?? fallback
  } catch {
    return fallback
  }
}

async function getImage(id: string, fallback: string): Promise<string> {
  try {
    const { data } = await supabase.from('images').select('url').eq('id', id).single()
    return data?.url ?? fallback
  } catch {
    return fallback
  }
}

export default async function Home() {
  const [
    heroHeadline,
    heroEyebrow,
    aboutHeadline,
    aboutBody,
    differenceQuote,
    founderLabel,
    founderHeadline,
    founderBody1,
    founderBody2,
    founderBody3,
    guideLabel,
    guideHeadline,
    guideSub,
    guideBody1,
    guideBody2,
    guideBody3,
    footerCtaLabel,
    footerText,
    whatsappNumber,
    instagramHandle,
    servicesHeadline,
    servicesSub,
    service01Title, service01Body,
    service02Title, service02Body,
    service03Title, service03Body,
    service04Title, service04Body,
    service05Title, service05Body,
    service06Title, service06Body,
    service07Title, service07Body,
    faqHeadline,
    faq01Q, faq01A,
    faq02Q, faq02A,
    faq03Q, faq03A,
    faq04Q, faq04A,
    faq05Q, faq05A,
    faq06Q, faq06A,
    heroImage,
    founderPhoto,
    guidePdf,
  ] = await Promise.all([
    getContent('hero_headline', 'We change the energy in the room.'),
    getContent('hero_eyebrow', 'Wedding Essentials · Dubai, UAE'),
    getContent('about_headline', 'Wedding Essentials is a niche wedding service dedicated exclusively to Brides.'),
    getContent('about_body', 'Our services include Wedding Management, Bridal Assistance, Bridal Catwalk & Confidence Training, and every detail in between — for the bride who refuses to leave anything to chance.'),
    getContent('difference_quote', 'The most important person at a wedding is the bride. The most important preparation she can do has nothing to do with the decor - it has everything to do with her.'),
    getContent('founder_label', 'The woman behind Wedding Essentials'),
    getContent('founder_headline', 'I built Wedding Essentials to close the gap between what a wedding looks like and what it feels like. Between the bride who hopes it goes well and the one who knows it will. Between the day that passes in a blur and the one that is lived:'),
    getContent('founder_body_1', 'My name is Mira. I am a Wedding Expert & Bridal Confidence Coach.'),
    getContent('founder_body_2', 'For years I watched brides manage their weddings rather than experience them — present in body, but slightly outside of the moment.'),
    getContent('founder_body_3', 'I work with brides across the Gulf and beyond to change that. Through presence training, on-the-day coordination & dedicated only to you professional bridal assistants, I ensure that the most important day of your life is one you actually live through — completely, consciously, from the first moment to the last.'),
    getContent('guide_label', 'A gift for you'),
    getContent('guide_headline', 'Before you plan another detail — read this.'),
    getContent('guide_sub', 'The Bridal Presence Guide: 7 things every bride should know before she walks in.'),
    getContent('guide_body_1', 'This is not a checklist. It is not a list of tips.'),
    getContent('guide_body_2', 'It is the beginning of the conversation I have with every bride I work with personally — the one that changes how she thinks about her wedding day, her entrance, and herself.'),
    getContent('guide_body_3', 'Free. Yours. And more honest than most things you will read about weddings.'),
    getContent('footer_cta_label', 'Get in touch'),
    getContent('footer_text', 'Every wedding begins with a conversation.'),
    getContent('whatsapp_number', '971506881534'),
    getContent('instagram_handle', 'weddingessentials.me'),
    getContent('services_headline', 'What we do'),
    getContent('services_sub', 'Different services. One purpose.'),
    getContent('service_01_title', 'Wedding Management'),
    getContent('service_01_body', 'The timeline is running.\nThe vendors are coordinating.\nThe family is managed.\nThe protocol is followed.\nYou don\'t know any of this — because you don\'t need to.\nYou arrive as the bride.\nWe handle everything else.'),
    getContent('service_02_title', 'Bridal Assistants'),
    getContent('service_02_body', 'The dress that needs holding before you walk in. The touch-up between outfit changes. The quiet voice that tells you everything is going as planned. Our bridal assistants are trained, calm, and completely dedicated to you.'),
    getContent('service_03_title', 'Catwalk & Confidence Training'),
    getContent('service_03_body', 'Those twenty seconds when every person who loves you turns to look — have you prepared for them? Mira works with brides one-on-one to build the presence, posture, and confidence that makes an entrance unforgettable.'),
    getContent('service_04_title', 'Content Creation'),
    getContent('service_04_body', 'Not staged. Not filtered beyond recognition. Our content creators move through your day with intention — capturing the moments that happen between the planned ones. Content you will still want to watch in ten years.'),
    getContent('service_05_title', 'Polaroid Service'),
    getContent('service_05_body', 'In a world of digital everything, there is something extraordinary about a photograph you can hold in your hands the same night it was taken. Our Polaroid service captures the candid, the tender, and the in-between.'),
    getContent('service_06_title', 'Destination Wedding Coordination & Bridal Assistance'),
    getContent('service_06_body', 'Some weddings happen far from home.\nThe logistics multiply. The unknowns grow.\nAnd the bride still deserves to arrive knowing that every single detail is handled.\nWe travel with you. We coordinate on the ground. We stand beside you on the day exactly as we would in Dubai.'),
    getContent('service_07_title', 'Honeymoon Planning'),
    getContent('service_07_body', 'The wedding ends.\nAnd suddenly — for the first time in months — it is just the two of you.\nWe plan the first journey of your marriage the way we approach everything: with complete dedication to the feeling of it. Not just the itinerary.'),
    getContent('faq_headline', 'Common questions'),
    getContent('faq_01_q', 'Where are you based and where do you work?'),
    getContent('faq_01_a', 'We are based in Dubai and serve brides across the UAE and GCC. We also accept international enquiries — for weddings outside the region, please reach out directly and we will discuss logistics.'),
    getContent('faq_02_q', 'How far in advance should I book?'),
    getContent('faq_02_a', 'We recommend reaching out at least 3–6 months before your wedding date. We work with a limited number of brides each season to ensure every client receives our full attention, so availability can fill quickly during peak seasons.'),
    getContent('faq_03_q', 'What does a bridal assistant actually do on the day?'),
    getContent('faq_03_a', 'Your bridal assistant is dedicated entirely to you from the moment you begin getting ready until the last moment of the evening. She manages your dress, coordinates touch-ups between outfit changes, keeps you calm and informed, and makes sure you never have to think about what comes next.'),
    getContent('faq_04_q', 'How many sessions does the catwalk training involve?'),
    getContent('faq_04_a', 'Mira works with each bride individually and the number of sessions depends on your goals and timeline. Most brides do 2–4 sessions. Each session is one-on-one and fully personalised — this is not a group class. You can book a single introductory session to start.'),
    getContent('faq_05_q', 'Can I book individual services or do I have to take everything?'),
    getContent('faq_05_a', 'Absolutely. Each of our services can be booked independently. Many brides start with one service and add others as their date approaches. Get in touch and we will help you decide what makes sense for your wedding.'),
    getContent('faq_06_q', 'Do you work with non-Arabic or multicultural weddings?'),
    getContent('faq_06_a', 'Yes. We have worked with brides from across the world in Dubai and the GCC. We are experienced across a wide range of cultural traditions and ceremony formats. Every bride is welcome.'),
    getImage('hero_image', '/12300.jpg'),
    getImage('founder_photo', '/esmeerah.jpg'),
    getImage('guide_pdf', 'https://raw.githubusercontent.com/weddingessentials/weddingessentials/main/The%20Bridal%20Presence%20Guide%20by%20Esmeerah%E2%9C%A8.pdf'),
  ])

  // Fetch portfolio images (01–21) with fallbacks
  const defaultPortfolio = [
    '/image1.jpg','/image2.jpg','/image3.jpg','/image4.png','/image5.jpg','/image6.png',
    '/image7.jpg','/image8.jpg','/image9.jpg','/image10.jpg','/image11.jpg','/image12.png',
    '/image13.png','/image14.jpg','/image15.jpg','/image16.jpg','/image18.jpg',
    '/image19.jpg','/image20.jpg','/image21.jpg','/IMG_7844.JPG',
  ]
  const portfolioResults = await Promise.all(
    Array.from({ length: 21 }, (_, i) =>
      getImage(`portfolio_${String(i + 1).padStart(2, '0')}`, defaultPortfolio[i] ?? '/image1.jpg')
    )
  )
  const portfolioImages = portfolioResults

  const waLink = `https://wa.me/${whatsappNumber}`
  const igLink = `https://instagram.com/${instagramHandle}`

  return (
    <>
      <NavBar waLink={waLink} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="Wedding Essentials - Dubai" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">{heroEyebrow}</p>
          <h1>{heroHeadline}</h1>
          <a href={waLink} target="_blank" rel="noopener" className="cta-link cta-link--white">
            Book a consultation
          </a>
        </div>
        <div className="hero-scroll">
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
            <path d="M7 0v18M1 12l6 6 6-6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about" id="about">
        <div className="section-inner">
          <Reveal tag="p" className="about-label">Who Are We?</Reveal>
          <Reveal tag="h2" delay="delay-1">{aboutHeadline}</Reveal>
          <Reveal tag="p" delay="delay-2">
            Created by{' '}
            <a href="https://www.instagram.com/esmeerah" target="_blank" rel="noopener" className="instagram-link">
              @esmeerah
            </a>
          </Reveal>
          <Reveal tag="p" delay="delay-2">{aboutBody}</Reveal>
          <Reveal delay="delay-3">
            <a href={waLink} target="_blank" rel="noopener" className="cta-link">Work with us</a>
          </Reveal>
        </div>
      </section>

      {/* PORTFOLIO FILM ROLL */}
      <PortfolioFilm images={portfolioImages} />

      {/* QUOTE */}
      <section className="quote-section">
        <Reveal tag="p" className="quote-label">The difference</Reveal>
        <Reveal tag="blockquote" delay="delay-1">
          &ldquo;{differenceQuote.replace('her.', '')}<em>her.</em>&rdquo;
        </Reveal>
        <Reveal tag="p" className="quote-attr" delay="delay-2">- Mira, Founder of Wedding Essentials</Reveal>
        <Reveal delay="delay-3">
          <a href={waLink} target="_blank" rel="noopener" className="cta-link cta-link--white">Start your journey</a>
        </Reveal>
      </section>

      {/* THE FOUNDER */}
      <section className="founders">
        <div className="founders-grid">
          <Reveal className="founders-text">
            <span className="label">{founderLabel}</span>
            <h2>{founderHeadline}</h2>
            <ul className="founders-bullets">
              <li>completely, consciously, in the body</li>
              <li>from the first moment to the last.</li>
            </ul>
            <p>{founderBody1}</p>
            <p>{founderBody2}</p>
            <p>{founderBody3}</p>
            <a href={waLink} target="_blank" rel="noopener" className="cta-link cta-link--white">Work with me</a>
          </Reveal>
          <Reveal className="founders-img" delay="delay-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={founderPhoto} alt="Mira - Founder of Wedding Essentials" />
          </Reveal>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="services-section" id="services">
        <div className="services-header">
          <Reveal>
            <h2>{servicesHeadline}</h2>
            <p className="services-sub">{servicesSub}</p>
          </Reveal>
        </div>
        <div className="services-list">
          {[
            { n: '01', title: service01Title, body: service01Body },
            { n: '02', title: service02Title, body: service02Body },
            { n: '03', title: service03Title, body: service03Body },
            { n: '04', title: service04Title, body: service04Body },
            { n: '05', title: service05Title, body: service05Body },
            { n: '06', title: service06Title, body: service06Body },
            { n: '07', title: service07Title, body: service07Body },
          ].map((s) => (
            <Reveal key={s.n} className="service-item">
              <span className="service-num">{s.n}</span>
              <div className="service-body">
                <h3>{s.title}</h3>
                <p style={{ whiteSpace: 'pre-line' }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq-inner">
          <Reveal className="faq-header">
            <span className="label">FAQs</span>
            <h2>{faqHeadline}</h2>
          </Reveal>
          {[
            { q: faq01Q, a: faq01A },
            { q: faq02Q, a: faq02A },
            { q: faq03Q, a: faq03A },
            { q: faq04Q, a: faq04A },
            { q: faq05Q, a: faq05A },
            { q: faq06Q, a: faq06A },
          ].map((item, i) => (
            <Reveal key={i} className="faq-item">
              <details>
                <summary>
                  <span className="q-text">{item.q}</span>
                  <span className="q-icon">+</span>
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BRIDAL PRESENCE GUIDE */}
      <section className="bridal-guide" id="guide">
        <div className="guide-inner">
          <Reveal tag="span" className="guide-label">{guideLabel}</Reveal>
          <Reveal tag="h2" className="guide-headline" delay="delay-1">
            {guideHeadline.split('—')[0]}—<br /><em>{guideHeadline.split('—')[1]?.trim()}</em>
          </Reveal>
          <Reveal tag="p" className="guide-sub" delay="delay-1">{guideSub}</Reveal>
          <Reveal className="guide-body" delay="delay-2">
            <p>{guideBody1}</p>
            <p>{guideBody2}</p>
            <p>{guideBody3}</p>
          </Reveal>
          <GuideForm pdfUrl={guidePdf} />
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="footer-cta" id="contact">
        <Reveal tag="span" className="label">{footerCtaLabel}</Reveal>
        <Reveal tag="h2" delay="delay-1">{footerText}</Reveal>
        <Reveal className="footer-cta-links" delay="delay-2">
          <a href={waLink} target="_blank" rel="noopener" className="cta-link cta-link--white">WhatsApp us</a>
          <a href={igLink} target="_blank" rel="noopener" className="cta-link cta-link--white">Instagram</a>
        </Reveal>
        <Reveal tag="p" delay="delay-3" style={{ marginTop: '40px', fontSize: '12px', color: 'rgba(255,255,255,0.28)' }}>
          Based in Dubai · Available across the UAE and GCC · International enquiries welcome
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-bottom-row">
          <div>
            <a href="#" className="footer-logo">Wedding Essentials</a>
            <span className="footer-tagline">Dubai, UAE</span>
          </div>
        </div>
        <p className="footer-copy">© 2025 Wedding Essentials. All rights reserved.</p>
        <p className="footer-copy" style={{ marginTop: '8px' }}>
          <a href="/privacy" style={{ color: 'inherit', opacity: 0.6, textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)' }}>
            Privacy Policy
          </a>
        </p>
      </footer>
    </>
  )
}
