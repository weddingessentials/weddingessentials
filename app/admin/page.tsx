'use client'
import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const PASSWORD = 'Tothestars18M$@'

// Human-readable labels for every content field
const CONTENT_LABELS: Record<string, { label: string; section: string; multiline: boolean }> = {
  hero_headline:    { label: 'Main headline', section: 'Hero', multiline: false },
  hero_eyebrow:     { label: 'Location label (top of hero)', section: 'Hero', multiline: false },
  about_headline:   { label: 'Who we are — headline', section: 'About', multiline: true },
  about_body:       { label: 'Who we are — body text', section: 'About', multiline: true },
  difference_quote: { label: 'Big quote', section: 'Quote Section', multiline: true },
  founder_label:    { label: 'Section label', section: 'Founder', multiline: false },
  founder_headline: { label: 'Founder headline', section: 'Founder', multiline: true },
  founder_body_1:   { label: 'First paragraph', section: 'Founder', multiline: true },
  founder_body_2:   { label: 'Second paragraph', section: 'Founder', multiline: true },
  founder_body_3:   { label: 'Third paragraph', section: 'Founder', multiline: true },
  guide_label:      { label: 'Section label ("A gift for you")', section: 'Bridal Guide', multiline: false },
  guide_headline:   { label: 'Guide headline', section: 'Bridal Guide', multiline: true },
  guide_sub:        { label: 'Guide subtitle', section: 'Bridal Guide', multiline: true },
  guide_body_1:     { label: 'First paragraph', section: 'Bridal Guide', multiline: true },
  guide_body_2:     { label: 'Second paragraph', section: 'Bridal Guide', multiline: true },
  guide_body_3:     { label: 'Third paragraph', section: 'Bridal Guide', multiline: true },
  footer_cta_label: { label: 'Section label ("Get in touch")', section: 'Footer', multiline: false },
  footer_text:      { label: 'Footer headline', section: 'Footer', multiline: true },
  whatsapp_number:  { label: 'WhatsApp number (digits only, e.g. 971506881534)', section: 'Contact', multiline: false },
  instagram_handle: { label: 'Instagram handle (without @)', section: 'Contact', multiline: false },
}

const IMAGE_LABELS: Record<string, string> = {
  hero_image:    'Hero background image',
  founder_photo: 'Founder / About photo',
  guide_pdf:     'Bridal Guide PDF (upload new PDF file)',
  ...Object.fromEntries(
    Array.from({ length: 21 }, (_, i) => [`portfolio_${String(i + 1).padStart(2, '0')}`, `Photo ${i + 1}`])
  ),
}

const s: Record<string, React.CSSProperties> = {
  page:        { minHeight: '100vh', background: '#0a0908', color: '#f0ede8', fontFamily: "'Poppins', system-ui, sans-serif" },
  center:      { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' },
  loginBox:    { width: 360, padding: '48px 40px', border: '1px solid rgba(201,168,124,0.2)', background: '#111' },
  loginTitle:  { fontSize: 20, fontWeight: 300, color: '#f0ede8', marginBottom: 32, letterSpacing: '0.02em' },
  input:       { width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,124,0.3)', color: '#f0ede8', fontSize: 14, padding: '14px 16px', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', marginBottom: 16 },
  btn:         { width: '100%', background: '#c9a87c', color: '#fff', border: 'none', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, padding: '16px', cursor: 'pointer', fontFamily: 'inherit' },
  error:       { color: '#e08080', fontSize: 13, marginBottom: 16 },
  header:      { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)' },
  headerTitle: { fontSize: 14, fontWeight: 500, letterSpacing: '0.08em' },
  logoutBtn:   { background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(240,237,232,0.5)', fontSize: 11, letterSpacing: '0.12em', padding: '8px 16px', cursor: 'pointer', fontFamily: 'inherit' },
  tabs:        { display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 40px' },
  tab:         { fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, padding: '16px 0', marginRight: 32, cursor: 'pointer', border: 'none', background: 'none', color: 'rgba(240,237,232,0.4)', fontFamily: 'inherit', borderBottom: '2px solid transparent' },
  tabActive:   { color: '#c9a87c', borderBottomColor: '#c9a87c' },
  content:     { padding: '40px', maxWidth: 760, margin: '0 auto' },
  sectionHead: { fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: '#c9a87c', borderBottom: '1px solid rgba(201,168,124,0.2)', paddingBottom: 10, marginBottom: 28, marginTop: 40 },
  fieldRow:    { marginBottom: 28 },
  label:       { fontSize: 11, fontWeight: 400, color: 'rgba(240,237,232,0.55)', display: 'block', marginBottom: 8 },
  textarea:    { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,124,0.2)', color: '#f0ede8', fontSize: 14, padding: '14px 16px', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', resize: 'vertical' as const, lineHeight: 1.6 },
  textInput:   { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,124,0.2)', color: '#f0ede8', fontSize: 14, padding: '14px 16px', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit' },
  saveBtn:     { background: '#c9a87c', color: '#fff', border: 'none', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, padding: '10px 24px', cursor: 'pointer', fontFamily: 'inherit', marginTop: 10 },
  savedMsg:    { fontSize: 12, color: '#7ecb8f', marginLeft: 12 },
  imgCard:     { border: '1px solid rgba(201,168,124,0.15)', padding: 24, marginBottom: 24 },
  imgLabel:    { fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#c9a87c', marginBottom: 12, display: 'block' },
  imgPreview:  { width: 120, height: 90, objectFit: 'cover' as const, display: 'block', marginBottom: 12, border: '1px solid rgba(255,255,255,0.08)' },
  uploadBtn:   { background: 'none', border: '1px solid rgba(201,168,124,0.5)', color: '#c9a87c', fontSize: 11, letterSpacing: '0.12em', padding: '10px 20px', cursor: 'pointer', fontFamily: 'inherit' },
  currentUrl:  { fontSize: 11, color: 'rgba(240,237,232,0.3)', wordBreak: 'break-all' as const, marginBottom: 10, lineHeight: 1.5 },
  table:       { width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 },
  th:          { textAlign: 'left' as const, padding: '12px 16px', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#c9a87c', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  td:          { padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(240,237,232,0.75)', verticalAlign: 'top' as const },
}

type ContentRow = { id: string; value: string }
type ImageRow = { id: string; url: string }
type SubmissionRow = { id: string; name: string; email: string; phone: string; answer: string; created_at: string }

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pw === PASSWORD) { sessionStorage.setItem('adminAuth', 'true'); onLogin() }
    else setError('Incorrect password')
  }
  return (
    <div style={{ ...s.page, ...s.center }}>
      <div style={s.loginBox}>
        <h1 style={s.loginTitle}>Wedding Essentials — Admin</h1>
        {error && <p style={s.error}>{error}</p>}
        <form onSubmit={submit}>
          <input style={s.input} type="password" placeholder="Password" value={pw} onChange={e => setPw(e.target.value)} autoFocus />
          <button style={s.btn} type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

function TextContentTab() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    supabase.from('content').select('id,value').then(({ data }) => {
      if (data) {
        const v: Record<string, string> = {}
        data.forEach((r: ContentRow) => { v[r.id] = r.value })
        setValues(v)
      }
      setLoaded(true)
    })
  }, [])

  const save = async (id: string) => {
    await supabase.from('content').update({ value: values[id], updated_at: new Date().toISOString() }).eq('id', id)
    setSaved(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2500)
  }

  if (!loaded) return <div style={{ ...s.content, color: 'rgba(240,237,232,0.4)' }}>Loading...</div>

  // Group by section
  const sections: Record<string, string[]> = {}
  Object.entries(CONTENT_LABELS).forEach(([id, meta]) => {
    if (!sections[meta.section]) sections[meta.section] = []
    sections[meta.section].push(id)
  })

  return (
    <div style={s.content}>
      <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.35)', marginBottom: 8 }}>
        Edit any text below and click Save. Changes appear on the website immediately.
      </p>
      {Object.entries(sections).map(([section, ids]) => (
        <div key={section}>
          <p style={s.sectionHead}>{section}</p>
          {ids.map(id => {
            const meta = CONTENT_LABELS[id]
            const val = values[id] ?? ''
            return (
              <div key={id} style={s.fieldRow}>
                <span style={s.label}>{meta.label}</span>
                {meta.multiline ? (
                  <textarea
                    style={{ ...s.textarea, minHeight: val.length > 120 ? 120 : 60 }}
                    value={val}
                    onChange={e => setValues(prev => ({ ...prev, [id]: e.target.value }))}
                  />
                ) : (
                  <input
                    style={s.textInput}
                    type="text"
                    value={val}
                    onChange={e => setValues(prev => ({ ...prev, [id]: e.target.value }))}
                  />
                )}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                  <button style={s.saveBtn} onClick={() => save(id)}>Save</button>
                  {saved[id] && <span style={s.savedMsg}>Saved ✓</span>}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

function ImagesTab() {
  const [rows, setRows] = useState<ImageRow[]>([])
  const [uploading, setUploading] = useState<Record<string, boolean>>({})
  const [saved, setSaved] = useState<Record<string, boolean>>({})

  const load = useCallback(() => {
    supabase.from('images').select('*').then(({ data }) => {
      if (data) setRows(data)
    })
  }, [])

  useEffect(() => { load() }, [load])

  const upload = async (id: string, file: File) => {
    setUploading(prev => ({ ...prev, [id]: true }))
    const isPdf = file.type === 'application/pdf' || file.name.endsWith('.pdf')
    const ext = file.name.split('.').pop()
    const path = `${id}-${Date.now()}.${ext}`
    const bucket = isPdf ? 'wedding-images' : 'wedding-images'

    const { error: uploadErr } = await supabase.storage.from(bucket).upload(path, file, { upsert: true })
    if (!uploadErr) {
      const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path)
      await supabase.from('images').upsert({ id, url: urlData.publicUrl, updated_at: new Date().toISOString() })
      setSaved(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2500)
      load()
    } else {
      console.error(uploadErr)
    }
    setUploading(prev => ({ ...prev, [id]: false }))
  }

  const mainIds = ['hero_image', 'founder_photo', 'guide_pdf']
  const portfolioIds = Array.from({ length: 21 }, (_, i) => `portfolio_${String(i + 1).padStart(2, '0')}`)
  const allIds = [...mainIds, ...portfolioIds]
  const displayRows = allIds.map(id => rows.find(r => r.id === id) ?? { id, url: '' })

  return (
    <div style={s.content}>
      <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.35)', marginBottom: 32 }}>
        Upload new images or a new PDF. Changes appear on the website immediately.
      </p>
      {displayRows.map(row => {
        const isPdf = row.id === 'guide_pdf'
        const label = IMAGE_LABELS[row.id] ?? row.id
        const isImg = !isPdf && row.url && (row.url.startsWith('/') || row.url.startsWith('http'))
        const isPortfolio = row.id.startsWith('portfolio_')
      const sectionBreak = isPortfolio && row.id === 'portfolio_01'
      return (
        <div key={row.id}>
        {sectionBreak && (
          <p style={{ ...s.sectionHead, marginTop: 48 }}>Portfolio Images (21 photos in carousel)</p>
        )}
          <div style={{ ...s.imgCard, ...(isPortfolio ? { display: 'inline-flex', flexDirection: 'column' as const, width: 'calc(33% - 8px)', margin: '0 4px 8px 0', verticalAlign: 'top', padding: 16 } : {}) }}>
            <span style={s.imgLabel}>{label}</span>
            {row.url && <p style={s.currentUrl}>Current: {row.url}</p>}
            {isImg && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={row.url} alt={row.id} style={isPortfolio ? { ...s.imgPreview, width: '100%', height: 80 } : s.imgPreview} />
            )}
            {isPdf && row.url && (
              <p style={{ fontSize: 12, color: '#c9a87c', marginBottom: 12 }}>
                <a href={row.url} target="_blank" rel="noopener" style={{ color: '#c9a87c' }}>
                  View current PDF ↗
                </a>
              </p>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <button
                style={{ ...s.uploadBtn, opacity: uploading[row.id] ? 0.5 : 1 }}
                type="button"
                onClick={() => document.getElementById(`file-${row.id}`)?.click()}
              >
                {uploading[row.id] ? 'Uploading…' : isPdf ? 'Upload new PDF' : 'Upload new image'}
              </button>
              <input
                id={`file-${row.id}`}
                type="file"
                accept={isPdf ? '.pdf,application/pdf' : 'image/*'}
                style={{ display: 'none' }}
                onChange={e => { if (e.target.files?.[0]) upload(row.id, e.target.files[0]) }}
              />
              {saved[row.id] && <span style={s.savedMsg}>Updated ✓</span>}
            </div>
          </div>
        </div>
        )
      })}
    </div>
  )
}

function SubmissionsTab() {
  const [rows, setRows] = useState<SubmissionRow[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    supabase.from('guide_submissions').select('*').order('created_at', { ascending: false }).then(({ data }) => {
      if (data) setRows(data)
      setLoaded(true)
    })
  }, [])

  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  if (!loaded) return <div style={{ ...s.content, color: 'rgba(240,237,232,0.4)' }}>Loading...</div>

  return (
    <div style={{ ...s.content, maxWidth: '100%', overflowX: 'auto' }}>
      <p style={{ fontSize: 13, color: 'rgba(240,237,232,0.35)', marginBottom: 32 }}>
        {rows.length} guide request{rows.length !== 1 ? 's' : ''} — newest first.
      </p>
      {rows.length === 0 ? (
        <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No submissions yet. They will appear here when brides request the guide.</p>
      ) : (
        <table style={s.table}>
          <thead>
            <tr>
              {['Date', 'Name', 'Email', 'Phone', 'Their Answer'].map(h => (
                <th key={h} style={s.th}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td style={{ ...s.td, whiteSpace: 'nowrap' }}>{fmt(r.created_at)}</td>
                <td style={s.td}>{r.name}</td>
                <td style={s.td}>{r.email}</td>
                <td style={s.td}>{r.phone}</td>
                <td style={{ ...s.td, maxWidth: 340, lineHeight: 1.6 }}>{r.answer || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [tab, setTab] = useState<'submissions' | 'text' | 'images'>('submissions')

  useEffect(() => {
    setAuthed(sessionStorage.getItem('adminAuth') === 'true')
  }, [])

  if (authed === null) return null
  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />

  const tabs: { key: typeof tab; label: string }[] = [
    { key: 'submissions', label: 'Guide Submissions' },
    { key: 'text', label: 'Edit Text' },
    { key: 'images', label: 'Images & PDF' },
  ]

  return (
    <div style={s.page}>
      <div style={s.header}>
        <span style={s.headerTitle}>Wedding Essentials — Admin</span>
        <button style={s.logoutBtn} onClick={() => { sessionStorage.removeItem('adminAuth'); setAuthed(false) }}>
          Log out
        </button>
      </div>
      <div style={s.tabs}>
        {tabs.map(t => (
          <button key={t.key} style={{ ...s.tab, ...(tab === t.key ? s.tabActive : {}) }} onClick={() => setTab(t.key)}>
            {t.label}
          </button>
        ))}
      </div>
      {tab === 'text' && <TextContentTab />}
      {tab === 'images' && <ImagesTab />}
      {tab === 'submissions' && <SubmissionsTab />}
    </div>
  )
}
