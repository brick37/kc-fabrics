'use client'
import useSWR from 'swr'
import SeoHead from '../components/SeoHead'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

const fetcher = (url)=>fetch(url).then(r=>r.json())
export default function Home(){
  const {data, error} = useSWR('/api/cms', fetcher)
  const site = data?.site || {name:'KC Fabrics', description:'Premium'}
  const catalogs = data?.catalogs || []
  const products = data?.products || []
  return (
    <>
      <SeoHead title="Home" description={site.description} />
      <Hero title="Premium Fabrics for Curtains & Sofas" subtitle="Distributing high-quality home furnishing materials to retailers across India." cta={{href:'/products', label:'Explore Products'}} />
      <section className="section"><div className="container"><h2 className="text-2xl font-semibold">Featured Categories</h2><div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">{products.map(p=> <a key={p.id} href={`/products/${p.id}`} className="card p-4"><h3 className="font-semibold">{p.title}</h3></a>)}</div></div></section>
      <section className="section"><div className="container"><h2 className="text-2xl font-semibold">Latest Catalogs</h2><div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">{catalogs.map(c=> <a key={c.id} href={`/catalogs/${c.id}`} className="card overflow-hidden"><img src={c.cover} className="w-full h-56 object-cover"/><div className="p-4"><h3 className="font-semibold">{c.title}</h3></div></a>)}</div></div></section>
    </>
  )
}
