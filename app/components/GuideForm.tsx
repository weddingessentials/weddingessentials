'use client'
import { useState } from 'react'

export default function GuideForm({ pdfUrl }: { pdfUrl: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value.trim()
    const answer = (form.elements.namedItem('answer') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !phone) return

    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'The Bridal Presence Guide.pdf'
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    fetch('/api/send-guide', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, answer }),
    }).catch(() => {})

    setSubmittedName(name)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="guide-thanks">
        Your guide is downloading now. Thank you, {submittedName}.
      </div>
    )
  }

  return (
    <form className="guide-form" onSubmit={handleSubmit} noValidate>
      <div className="guide-field">
        <label htmlFor="guideName">Your Name</label>
        <input className="guide-input" type="text" id="guideName" name="name" placeholder="Your name" required />
      </div>
      <div className="guide-field">
        <label htmlFor="guideEmail">Email Address</label>
        <input className="guide-input" type="email" id="guideEmail" name="email" placeholder="Your email address" required />
      </div>
      <div className="guide-field">
        <label htmlFor="guidePhone">Phone / WhatsApp</label>
        <input className="guide-input" type="text" id="guidePhone" name="phone" placeholder="Your number" required />
      </div>
      <div className="guide-question-block">
        <span className="guide-question-qlabel">One question before you receive your guide</span>
        <p className="guide-question-quote">&ldquo;When you imagine walking into your wedding — what is the one thing you are most afraid of?&rdquo;</p>
      </div>
      <div className="guide-field">
        <textarea className="guide-textarea" id="guideAnswer" name="answer" placeholder="Take your time. There is no wrong answer." />
      </div>
      <button className="guide-submit-btn" type="submit">Send me the guide</button>
      <span className="guide-fine">Free. No spam. Ever.</span>
    </form>
  )
}
