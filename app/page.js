'use client'
import useSWR from 'swr'
import SeoHead from '../components/SeoHead'
import Hero from '../components/Hero'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Home() {

  const { data } = useSWR('/api/cms', fetcher)
  const site = data?.site || {}
  const catalogs = data?.catalogs || []
  const products = data?.products || []

  return (
    <>
      <SeoHead title="Home" description={site.description} />

      {/* HERO SECTION */}
      <Hero
        title="Premium Fabrics for Curtains & Sofas"
        subtitle="Distributing high-quality home furnishing materials to retailers across India."
        cta={{ href: '/products', label: 'Explore Products' }}
      />

      {/* FEATURED CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p) => (
              <a
                key={p.id}
                href={`/products/${p.id}`}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST CATALOGS */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Latest Catalogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {catalogs.map((c) => (
              <a
                key={c.id}
                href={`/catalogs/${c.id}`}
                className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <img src={c.cover} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-xl">{c.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
