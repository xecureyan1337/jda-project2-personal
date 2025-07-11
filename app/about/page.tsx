import Link from 'next/link';

export default function About() {
    return (
        <div className="container mx-auto p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Tentang Saya</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-black bg-blue-50 rounded-lg text-center">Perjalanan Belajar</h2>
                        <p className="text-yellow-700 mb-4">
                        Saya sedang belajar Next.js sebagai bagian dari pengembangan skill dalam 
                        web development dan juga pelatihan di JDA, Jabar Digital Academy ❤️. Framework ini sangat menarik karena kemudahan dalam 
                        membuat aplikasi React yang production-ready.
                        </p>
                        <p className="text-yellow-700 mb-4 ">
                        Tugas ini adalah langkah pertama saya dalam memahami konsep routing, 
                        static pages, dan dynamic routes di Next.js.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-black bg-blue-50 rounded-lg text-center">Teknologi yang Dipelajari</h2>
                        <ul className="list-disc list-inside text-yellow-700 space-y-2">
                        <li>Next.js App Router</li>
                        <li>Static dan Dynamic Routing</li>
                        <li>Komponen Navigation</li>
                        <li>Tailwind CSS untuk styling</li>
                        <li>Error Handling (404 page)</li>
                        <li>Git dan GitHub untuk version control</li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-black">Tujuan Belajar</h2>
                    <p className="text-gray-700">
                        Melalui project ini, saya ingin menguasai dasar-dasar Next.js dan 
                        mempersiapkan diri untuk membuat aplikasi web yang lebih kompleks. 
                        Setiap fitur yang saya implementasikan adalah langkah menuju pemahaman 
                        yang lebih mendalam tentang modern web development.
                    </p>

                {/* Link kembali ke halaman utama */}
                <div className="mt-8">
                    <Link href="/" className="text-blue-600 hover:underline font-semibold">
                        ← Kembali ke Beranda
                    </Link>
                </div>
                </div>

            </div>
        </div>
    )
}