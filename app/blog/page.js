import SeoHead from '../../components/SeoHead'
import posts from '../../cms/posts.json'
export default function Blog(){ const p = posts; return (<><SeoHead title="Blog" /><section className="section"><div className="container"><h2 className="text-2xl font-semibold">Blog</h2><div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">{p.map(post=> <a key={post.slug} href={`/blog/${post.slug}`} className="card p-4"><h3 className="font-semibold">{post.title}</h3></a>)}</div></div></section></>) }
