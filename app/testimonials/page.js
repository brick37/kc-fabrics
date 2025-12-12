import testimonials from '../../cms/testimonials.json'
import SeoHead from '../../components/SeoHead'
export default function Testimonials(){ return (<><SeoHead title="Testimonials" /><section className="section"><div className="container"><h2 className="text-2xl font-semibold">Testimonials</h2><div className="mt-6 space-y-4">{testimonials.map((t,i)=> <div key={i} className="card p-4"><div className="font-medium">{t.author}</div><div className="text-sm text-gray-600 mt-1">{t.text}</div></div>)}</div></div></section></>) }
