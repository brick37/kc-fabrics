'use client'
import {useEffect, useState} from 'react'
import Link from 'next/link'

export default function Header(){
  const [theme,setTheme]=useState('light')
  useEffect(()=>{ const t=localStorage.getItem('kc-theme')||'light'; setTheme(t); document.documentElement.setAttribute('data-theme', t==='dark'?'dark':'light') },[])
  const toggle=()=>{ const nt=theme==='dark'?'light':'dark'; setTheme(nt); localStorage.setItem('kc-theme', nt); document.documentElement.setAttribute('data-theme', nt==='dark'?'dark':'light') }
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href='/'><a className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold">KF</div><div><div className="font-semibold">KC Fabrics</div><div className="text-xs text-gray-500">Premium Home Furnishings</div></div></a></Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href='/products'><a>Products</a></Link>
          <Link href='/catalogs'><a>Catalogs</a></Link>
          <Link href='/store-locator'><a>Stores</a></Link>
          <Link href='/blog'><a>Blog</a></Link>
          <Link href='/about'><a>About</a></Link>
          <Link href='/contact'><a className="px-3 py-1 border rounded">Contact</a></Link>
          <button onClick={toggle} className="px-3 py-1 border rounded">{theme==='dark'?'☀️':'🌙'}</button>
        </nav>
      </div>
    </header>
  )
}
