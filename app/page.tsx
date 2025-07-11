// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4 ">
          Selamat Datang di Website Saya
        </h1>
        <p className="text-lg mb-8">
          Ini adalah project Next.js pertama pada JDA <span className="text-blue-200 underline font-semibold hover:text-blue-400"><a href="https://jda.alkademi.id/" target="_blank">(Jabar Digital Akademi)</a></span> dengan bantuan AI untuk belajar routing dan navigasi.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl text-black font-semibold mb-2">Tentang Saya</h3>
            <p className="text-gray-600 mb-4">Pelajari lebih lanjut dunia web development.</p>
            <Link href="/about" className="text-blue-600 hover:text-blue-800 font-medium">
              Lihat Selengkapnya →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl text-black font-semibold mb-2">Profil</h3>
            <p className="text-gray-600 mb-4">Informasi detail tentang background dan keahlian saya.</p>
            <Link href="/profile" className="text-blue-600 hover:text-blue-800 font-medium">
              Lihat Profil →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl text-black font-semibold mb-2">Kontak</h3>
            <p className="text-gray-600 mb-4">Ingin berkolaborasi atau bertanya? Hubungi saya di sini.</p>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-medium">
              Hubungi Saya →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-xl text-black font-semibold mb-2">Produk Kami</h3>
            <p className="text-gray-600 mb-4">
              Jelajahi koleksi produk teknologi terbaik dengan kualitas premium.
            </p>
            <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium">
              Lihat Semua Produk →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
