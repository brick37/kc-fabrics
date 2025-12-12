'use client'
export default function WhatsAppButton(){ const phone='+911234567890'; const url=`https://api.whatsapp.com/send?phone=${phone.replace(/\D/g,'')}&text=Hi%20KC%20Fabrics`; return (<a href={url} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg">💬</a>) }
