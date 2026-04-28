'use client'
import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const PASSWORD = 'Tothestars18M$@'

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#0a0908', color: '#f0ede8', fontFamily: 'system-ui, sans-serif' },
  center: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' },
  loginBox: { width: 360, padding: '48px 40px', border: '1px solid rgba(201,168,124,0.2)', background: '#111' },
  loginTitle: { fontSize: 20, fontWeight: 300, color: '#f0ede8', marginBottom: 32, letterSpacing: '0.02em' },
  input: { width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,124,0.3)', color: '#f0ede8', fontSize: 14, padding: '14px 16px', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', marginBottom: 16 },
  btn: { width: '100%', background: '#c9a87c', color: '#fff', border: 'none', fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, padding: '16px', cursor: 'pointer', fontFamily: 'inherit' },
  error: { color: '#e08080', fontSize: 13, marginBottom: 16 },
  header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#0a0908' },
  headerTitle: { fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', color: '#f0ede8' },
  logoutBtn: { background: 'none', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(240,237,232,0.5)', fontSize: 11, letterSpacing: '0.12em', padding: '8px 16px', cursor: 'pointer', fontFamily: 'inherit' },
  tabs: { display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 40px', background: '#0a0908' },
  tab: { fontSize: 11, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase' as const, padding: '16px 0', marginRight: 32, cursor: 'pointer', border: 'none', background: 'none', color: 'rgba(240,237,232,0.4)', fontFamily: 'inherit', borderBottom: '2px solid transparent' },
  tabActive: { color: '#c9a87c', borderBottomColor: '#c9a87c' },
  content: { padding: '40px', maxWidth: 860, margin: '0 auto' },
  fieldRow: { marginBottom: 32 },
  label: { fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: '#c9a87c', display: 'block', marginBottom: 10 },
  textarea: { width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,124,0.25)', color: '#f0ede8', fontSize: 14, padding: '14px 16px', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'inherit', resize: 'vertical' as const, minHeight: 80, lineHeight: 1.6 },
  saveBtn: { background: '#c9a87c', color: '#fff', border: 'none', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, padding: '10px 20px', cursor: 'pointer', fontFamily: 'inherit', marginTop: 10 },
  savedMsg: { fontSize: 12, color: '#7ecb8f', marginLeft: 12 },
  table: { width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 },
  th: { textAlign: 'left' as const, padding: '12px 16px', fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#c9a87c', borderBottom: '1px solid rgba(255,255,255,0.1)' },
  td: { padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(240,237,232,0.75)', verticalAlign: 'top' as const },
  imgPreview: { width: 80, height: 60, objectFit: 'cover' as const, display: 'block', marginTop: 8 },
  uploadBtn: { background: 'none', border: '1px solid rgba(201,168,124,0.4)', color: '#c9a87c', fontSize: 10, letterSpacing: '0.14em', padding: '8px 14px', cursor: 'pointer', fontFamily: 'inherit', marginTop: 8 },
}

type ContentRow = { id: string; value: string }
type ImageRow = { id: string; url: string }
type SubmissionRow = { id: string; name: string; email: string; phone: string; answer: string; created_at: string }

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pw === PASSWORD) {
      sessionStorage.setItem('adminAuth', 'true')
      onLogin()
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div style={{ ...s.page, ...s.center }}>
      <div style={s.loginBox}>
        <h1 style={s.loginTitle}>Wedding Essentials — Admin</h1>
        {error && <p style={s.error}>{error}</p>}
        <form onSubmit={submit}>
          <input
            style={s.input}
            type="password"
            placeholder="Password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            autoFocus
          />
          <button style={s.btn} type="submit">Enter</button>
        </form>
      </div>
    </div>
  )
}

function TextContentTab() {
  const [rows, setRows] = useState<ContentRow[]>([])
  const [values, setValues] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState<Record<string, boolean>>({})

  useEffect(() => {
    supabase.from('content').select('*').order('id').then(({ data }) => {
      if (data) {
        setRows(data)
        const v: Record<string, string> = {}
        data.forEach((r: ContentRow) => { v[r.id] = r.value })
        setValues(v)
      }
    })
  }, [])

  const save = async (id: string) => {
    await supabase.from('content').update({ value: values[id], updated_at: new Date().toISOString() }).eq('id', id)
    setSaved(prev => ({ ...prev, [id]: true }))
    setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2000)
  }

  return (
    <div style={s.content}>
      <h2 style={{ fontSize: 13, fontWeight: 400, color: 'rgba(240,237,232,0.4)', marginBottom: 32, letterSpacing: '0.06em' }}>
        Edit text fields — changes go live on the site immediately.
      </h2>
      {rows.map(row => (
        <div key={row.id} style={s.fieldRow}>
          <span style={s.label}>{row.id.replace(/_/g, ' ')}</span>
          <textarea
            style={s.textarea}
            value={values[row.id] ?? ''}
            onChange={e => setValues(prev => ({ ...prev, [row.id]: e.target.value }))}
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={s.saveBtn} onClick={() => save(row.id)}>Save</button>
            {saved[row.id] && <span style={s.savedMsg}>Saved ✓</span>}
          </div>
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
    supabase.from('images').select('*').order('id').then(({ data }) => {
      if (data) setRows(data)
    })
  }, [])

  useEffect(() => { load() }, [load])

  const upload = async (id: string, file: File) => {
    setUploading(prev => ({ ...prev, [id]: true }))
    const ext = file.name.split('.').pop()
    const path = `${id}-${Date.now()}.${ext}`
    const { error: uploadErr } = await supabase.storage.from('wedding-images').upload(path, file, { upsert: true })
    if (!uploadErr) {
      const { data: urlData } = supabase.storage.from('wedding-images').getPublicUrl(path)
      await supabase.from('images').upsert({ id, url: urlData.publicUrl, updated_at: new Date().toISOString() })
      setSaved(prev => ({ ...prev, [id]: true }))
      setTimeout(() => setSaved(prev => ({ ...prev, [id]: false })), 2000)
      load()
    }
    setUploading(prev => ({ ...prev, [id]: false }))
  }

  return (
    <div style={s.content}>
      <h2 style={{ fontSize: 13, fontWeight: 400, color: 'rgba(240,237,232,0.4)', marginBottom: 32, letterSpacing: '0.06em' }}>
        Upload images — they will update live on the site.
      </h2>
      {rows.length === 0 && <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No images configured yet.</p>}
      {rows.map(row => (
        <div key={row.id} style={{ ...s.fieldRow, borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 24 }}>
          <span style={s.label}>{row.id.replace(/_/g, ' ')}</span>
          <p style={{ fontSize: 12, color: 'rgba(240,237,232,0.35)', marginBottom: 8, wordBreak: 'break-all' }}>{row.url}</p>
          {row.url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={row.url} alt={row.id} style={s.imgPreview} />
          )}
          <div>
            <label>
              <button
                style={{ ...s.uploadBtn, opacity: uploading[row.id] ? 0.5 : 1 }}
                onClick={() => document.getElementById(`file-${row.id}`)?.click()}
                type="button"
              >
                {uploading[row.id] ? 'Uploading…' : 'Upload new image'}
              </button>
              <input
                id={`file-${row.id}`}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={e => { if (e.target.files?.[0]) upload(row.id, e.target.files[0]) }}
              />
            </label>
            {saved[row.id] && <span style={s.savedMsg}>Updated ✓</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

function SubmissionsTab() {
  const [rows, setRows] = useState<SubmissionRow[]>([])

  useEffect(() => {
    supabase.from('guide_submissions').select('*').order('created_at', { ascending: false }).then(({ data }) => {
      if (data) setRows(data)
    })
  }, [])

  const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div style={{ ...s.content, maxWidth: '100%', overflowX: 'auto' }}>
      <h2 style={{ fontSize: 13, fontWeight: 400, color: 'rgba(240,237,232,0.4)', marginBottom: 32, letterSpacing: '0.06em' }}>
        {rows.length} submission{rows.length !== 1 ? 's' : ''} — newest first.
      </h2>
      {rows.length === 0 ? (
        <p style={{ color: 'rgba(240,237,232,0.4)', fontSize: 14 }}>No submissions yet.</p>
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
                <td style={{ ...s.td, maxWidth: 360 }}>{r.answer}</td>
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
  const [tab, setTab] = useState<'text' | 'images' | 'submissions'>('submissions')

  useEffect(() => {
    setAuthed(sessionStorage.getItem('adminAuth') === 'true')
  }, [])

  if (authed === null) return null

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />

  const tabs: { key: typeof tab; label: string }[] = [
    { key: 'submissions', label: 'Guide Submissions' },
    { key: 'text', label: 'Text Content' },
    { key: 'images', label: 'Images' },
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
          <button
            key={t.key}
            style={{ ...s.tab, ...(tab === t.key ? s.tabActive : {}) }}
            onClick={() => setTab(t.key)}
          >
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
