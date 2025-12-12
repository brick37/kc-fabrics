import fs from 'fs'
import path from 'path'

export async function GET(req){
  const base = process.cwd()
  const cmsPath = path.join(base, 'cms')
  const files = ['site.json','catalogs.json','products.json','posts.json','stores.json','testimonials.json']
  const data = {}
  for(const f of files){ try{ const content = fs.readFileSync(path.join(cmsPath,f),'utf-8'); data[f.replace('.json','')] = JSON.parse(content) }catch(e){ data[f.replace('.json','')] = null } }
  return new Response(JSON.stringify(data), { status:200, headers: { 'Content-Type':'application/json' } })
}
