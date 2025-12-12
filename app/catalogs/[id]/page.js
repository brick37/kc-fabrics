import SeoHead from '../../../components/SeoHead'
import { CATALOGS } from '../../../data/sampleCatalogs'
export default function CatalogDetail({params}){
  const id = params.id
  const catalog = CATALOGS.find(c=>c.id===id)
  if(!catalog) return <div className="section container">Catalog not found</div>
  return (<><SeoHead title={catalog.title} description={catalog.description} /><section className="section"><div className="container md:flex gap-8"><div className="flex-1"><img src={catalog.cover} className="w-full h-72 object-cover rounded"/></div><div className="flex-1"><h2 className="text-2xl font-semibold">{catalog.title}</h2><p className="mt-2 text-gray-600">{catalog.description}</p><div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">{catalog.fabrics.map(f=> <div key={f.sku} className="card p-3"><img src={f.image} className="w-full h-40 object-cover rounded"/><div className="mt-2"><div className="font-medium">{f.name}</div><div className="text-xs text-gray-500">SKU: {f.sku}</div></div></div>)}</div></div></div></section></>)
}
