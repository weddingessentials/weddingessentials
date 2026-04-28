import { supabase } from '@/lib/supabase'

export async function GET() {
  await supabase.from('content').select('id').limit(1)
  return Response.json({ ok: true, ts: new Date().toISOString() })
}
