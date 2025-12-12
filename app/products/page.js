// app/products/page.js
import SeoHead from '../../components/SeoHead'

export default async function Products() {
  // Import the local JSON directly on the server
  const data = await import('../../cms/products.json');
  const products = data.default || data;

  return (
    <>
      <SeoHead title="Products" />
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Products</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <a key={p.id} href={`/products/${p.id}`} className="card p-4">
                <h3 className="font-semibold">{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}