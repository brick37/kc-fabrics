export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-semibold">KC Fabrics</h4>
          <p className="text-sm text-gray-600 max-w-sm">A leading distributor of home furnishing fabrics across India — curtains, upholstery and more.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h5 className="font-medium">Contact</h5>
          <p className="text-sm">Email: sales@kcfabrics.com</p>
          <p className="text-sm">Phone: +91-12345-67890</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 text-gray-400">© {new Date().getFullYear()} KC Fabrics. All rights reserved.</div>
    </footer>
  )
}
