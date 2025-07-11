import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center p-8">
        <div className="mb-8">
          <div className="text-9xl mb-4 animate-bounce">🤖</div>
          <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-3xl font-semibold text-gray-600 mb-4">Halaman Tidak Ditemukan</h2>
        </div>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">Ups! Sepertinya Anda tersesat di dunia digital.</p>
          <p className="text-gray-500">Halaman yang Anda cari mungkin sudah dipindahkan, dihapus, atau URL yang Anda masukkan salah.</p>
        </div>
        
        <div className="space-y-4">
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            🏠 Kembali ke Home
          </Link>
          
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              About
            </Link>
            
            <Link href="/profile" className="text-blue-600 hover:text-blue-800 underline">
              Profile
            </Link>
            
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
              Contact
            </Link>

            <Link href="/products/1" className="text-blue-600 hover:text-blue-800 underline">
              Products
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  )
}