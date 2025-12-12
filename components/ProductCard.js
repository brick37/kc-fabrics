import Image from 'next/image'
export default function ProductCard({title, subtitle, image, href}){
  return (<a href={href} className="card overflow-hidden block"><div className="relative h-48 w-full"><img src={image} alt={title} className="w-full h-full object-cover"/></div><div className="p-4"><h3 className="font-semibold">{title}</h3><p className="text-sm text-gray-600 mt-1">{subtitle}</p></div></a>)
}
