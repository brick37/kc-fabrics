import fs from 'fs'
import path from 'path'
export async function POST(req){
  const body = await req.json()
  const base = process.cwd()
  const file = path.join(base, 'data','contacts.json')
  const arr = fs.existsSync(file)? JSON.parse(fs.readFileSync(file)) : []
  arr.push({ ...body, receivedAt: new Date().toISOString() })
  fs.mkdirSync(path.dirname(file), { recursive:true })
  fs.writeFileSync(file, JSON.stringify(arr, null, 2))
  return new Response(JSON.stringify({ ok:true }), { status:200, headers:{'Content-Type':'application/json'} })
}
