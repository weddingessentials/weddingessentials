const { Resend } = require('resend')

const resend = new Resend('re_Pk9e8cqy_JVrttNXzqSGbVrLK8N3bsnfz')

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, email, phone, answer } = req.body

  try {
    await resend.emails.send({
      from: 'Wedding Essentials <onboarding@resend.dev>',
      replyTo: 'weddingessentialsme@gmail.com',
      to: 'weddingessentialsme@gmail.com',
      subject: `New guide request from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
          <h2 style="color:#c9a87c;margin-bottom:24px;">New Bridal Guide Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
          <p style="margin-top:24px;"><strong>Their biggest fear:</strong></p>
          <blockquote style="border-left:3px solid #c9a87c;padding-left:16px;color:#555;font-style:italic;">${answer}</blockquote>
        </div>
      `
    })

    return res.status(200).json({ success: true })

  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Failed to send' })
  }
}
