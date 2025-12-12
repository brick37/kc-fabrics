export default function Hero({ title, subtitle, cta }) {
  return (
    <section className="section py-16">
      <div className="container mx-auto md:flex items-center gap-12">
        
        <div className="flex-1">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            {title}
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            {subtitle}
          </p>

          {cta && (
            <div className="mt-8">
              <a
                href={cta.href}
                className="px-8 py-4 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
              >
                {cta.label}
              </a>
            </div>
          )}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1">
          <div className="rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <img
              src="/images/hero-fabrics.jpg"
              alt="Premium Fabrics"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
