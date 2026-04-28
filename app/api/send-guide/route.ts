import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const { name, email, phone, answer } = await req.json()

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
      `,
    })

    await supabase.from('guide_submissions').insert({ name, email, phone, answer })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
