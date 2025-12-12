import SeoHead from "../../components/SeoHead";

export default async function CatalogsPage() {
  // Always use absolute alias import
  const data = await import("../../cms/catalogs.json");

  const catalogs = data.default || [];

  return (
    <>
      <SeoHead title="Catalogs" />

      <section className="section">
        <div className="container">
          <h1 className="text-3xl font-semibold mb-6">Catalogs</h1>

          {/* Defensive: avoid .map on undefined */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {catalogs.length > 0 ? (
              catalogs.map((catalog) => (
                <a
                  key={catalog.id}
                  href={`/catalogs/${catalog.id}`}
                  className="card p-4"
                >
                  <h3 className="font-semibold">{catalog.title}</h3>
                </a>
              ))
            ) : (
              <p>No catalogs found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}