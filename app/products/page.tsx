import Link from 'next/link';

export const metadata = {
  title: 'Produk - My Next.js Website',
  description: 'Jelajahi koleksi produk teknologi terbaik dengan harga terjangkau.',
}

const products = {
  1: {
    name: "Laptop Gaming",
    price: "Rp 15.000.000",
    description: "Laptop gaming high-end dengan spesifikasi terbaik untuk gaming dan development.",
    image: "🎮",
    category: "Computing",
    rating: 4.8,
    stock: 15
  },
  2: {
    name: "Smartphone Premium",
    price: "Rp 8.000.000",
    description: "Smartphone flagship dengan kamera terbaik dan performa luar biasa.",
    image: "📱",
    category: "Mobile",
    rating: 4.9,
    stock: 25
  },
  3: {
    name: "Headphone Wireless",
    price: "Rp 2.500.000",
    description: "Headphone dengan noise cancelling dan kualitas suara premium.",
    image: "🎧",
    category: "Audio",
    rating: 4.7,
    stock: 40
  },
  4: {
    name: "Mechanical Keyboard",
    price: "Rp 1.200.000",
    description: "Keyboard mechanical dengan switch premium untuk typing experience terbaik.",
    image: "⌨️",
    category: "Accessories",
    rating: 4.6,
    stock: 30
  },
  5: {
    name: "4K Monitor",
    price: "Rp 4.500.000",
    description: "Monitor 4K dengan color accuracy tinggi untuk design dan gaming.",
    image: "🖥️",
    category: "Display",
    rating: 4.8,
    stock: 12
  },
  6: {
    name: "Wireless Mouse",
    price: "Rp 650.000",
    description: "Mouse wireless dengan sensor gaming dan battery life yang lama.",
    image: "🖱️",
    category: "Accessories",
    rating: 4.5,
    stock: 50
  }
}

export default function ProductsPage() {
  const categories = [...new Set(Object.values(products).map(p => p.category))]
  
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Produk Kami</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Jelajahi koleksi produk teknologi terbaik dengan kualitas premium 
            dan harga yang kompetitif. Semua produk dilengkapi dengan garansi resmi.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{Object.keys(products).length}+</div>
            <div className="text-gray-600">Produk</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{categories.length}</div>
            <div className="text-gray-600">Kategori</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">5.0</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(products).map(([id, product]) => (
            <div key={id} className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-2">{product.image}</div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-black">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Stok: {product.stock}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.stock > 20 ? 'bg-green-100 text-green-800' :
                    product.stock > 10 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 20 ? 'Tersedia' : 
                     product.stock > 10 ? 'Stok Terbatas' : 'Hampir Habis'}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Link 
                    href={`/products/${id}`}
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Tidak Menemukan yang Anda Cari?</h2>
          <p className="text-lg mb-6 opacity-90">
            Hubungi tim customer service kami untuk bantuan dalam memilih produk yang tepat
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Hubungi Kami
            </Link>
            <button className="cursor-pointer inline-block border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Live Chat
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Gratis Ongkir</h3>
            <p className="text-gray-200">Gratis ongkos kirim untuk pembelian minimal Rp 500.000</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Garansi Resmi</h3>
            <p className="text-gray-200">Semua produk dilengkapi dengan garansi resmi distributor</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Pembayaran Aman</h3>
            <p className="text-gray-200">Berbagai metode pembayaran yang aman dan terpercaya</p>
          </div>
        </div>
        
        <Link href="/" className="hover:underline block text-center mt-12 text-blue-600">
            Kembali ke Home
        </Link>

      </div>
    </div>
  )
}