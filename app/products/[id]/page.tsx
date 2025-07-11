import Link from 'next/link'

// Data dummy untuk products
const products: { [key: string]: Product } = {
  1: {
    name: "Laptop Gaming",
    price: "Rp 15.000.000",
    description: "Laptop gaming high-end dengan spesifikasi terbaik untuk gaming dan development.",
    image: "🎮",
    specs: ["Intel Core i7", "16GB RAM", "RTX 3070", "1TB SSD"]
  },
  2: {
    name: "Smartphone Premium",
    price: "Rp 8.000.000",
    description: "Smartphone flagship dengan kamera terbaik dan performa luar biasa.",
    image: "📱",
    specs: ["Camera 108MP", "8GB RAM", "256GB Storage", "5000mAh Battery"]
  },
  3: {
    name: "Headphone Wireless",
    price: "Rp 2.500.000",
    description: "Headphone dengan noise cancelling dan kualitas suara premium.",
    image: "🎧",
    specs: ["Active Noise Cancelling", "30h Battery", "Bluetooth 5.0", "Hi-Res Audio"]
  },
  4: {
    name: "Mechanical Keyboard",
    price: "Rp 1.200.000",
    description: "Keyboard mechanical dengan switch premium untuk typing experience terbaik.",
    image: "⌨️",
    specs: ["Cherry MX Blue", "RGB Backlight", "Aluminum Build", "USB-C"]
  },
  5: {
    name: "4K Monitor",
    price: "Rp 4.500.000",
    description: "Monitor 4K dengan color accuracy tinggi untuk design dan gaming.",
    image: "🖥️",
    specs: ["4K Resolution", "144Hz", "HDR10", "USB-C Hub"]
  },
}

type Product = {
  name: string
  description: string
  price: string
  image: string
  specs: string[]
}

type ProductDetailProps = {
  params: { id: string }
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products[params.id]
  
  if (!product) {
    return (
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-4">Produk yang Anda cari tidak ditemukan.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-gray-100 rounded-lg p-16 text-center">
              <span className="text-8xl">{product.image}</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-2 ">{product.name}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">{product.price}</p>
            <p className="text-gray-300 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Spesifikasi:</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-300">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* tombol beli */}
            <button className="cursor-pointer w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mb-4">
              Beli Sekarang
            </button>
            
            {/* tombol keranjang */}
            <button className="cursor-pointer w-full border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
        <Link href="/products" className="hover:underline text-blue-600 hover:text-blue-800">
          ← Kembali ke Halaman Utama Product
        </Link>
      </div>
    </div>
  )
}