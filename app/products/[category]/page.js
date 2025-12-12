import SeoHead from '../../../components/SeoHead'
export default async function Category({params}){
  const data = await import('../../../cms/products.json')
  const found = data.default.find(p=>p.id===params.category)
  if(!found) return <div className="section container">Not found</div>
  return (<><SeoHead title={found.title} /><section className="section"><div className="container"><h2 className="text-2xl font-semibold">{found.title}</h2><div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">{found.items.map(it=> <div key={it.id} className="card overflow-hidden"><img src={it.image} className="w-full h-44 object-cover"/><div className="p-3"><div className="font-semibold">{it.title}</div></div></div>)}</div></div></section></>)
}
