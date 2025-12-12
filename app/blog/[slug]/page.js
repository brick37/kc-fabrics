import SeoHead from '../../../components/SeoHead'
import posts from '../../../cms/posts.json'
export default function Post({params}){ const post = posts.find(p=>p.slug===params.slug); if(!post) return <div className="section container">Not found</div>; return (<><SeoHead title={post.title} /><section className="section"><div className="container"><h2 className="text-2xl font-semibold">{post.title}</h2><p className="mt-4 text-gray-600">{post.content}</p></div></section></>) }
