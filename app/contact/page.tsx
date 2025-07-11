import Link from "next/link"

export default function Contact() {
    return (
    <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center md:text-left">Hubungi Saya</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                <div className="">
                    <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2 md:mb-0 md:mr-3">
                                <span className="text-blue-600">📧</span>
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <p className="text-gray-300">*******@gmail.com</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-blue-600">📱</span>
                            </div>
                            <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-gray-300">+62 81*-38**-***7</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                <span className="text-blue-600">📍</span>
                            </div>
                            <div>
                                <p className="font-medium">Lokasi</p>
                                <p className="text-gray-300">Bandung, Indonesia</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Social Media</h3>
                        <div className="flex flex-row items-center text-center space-x-3 md:flex-row justify-center md:justify-start md:items-start md:space-y-0 md:space-x-4 md:text-left">
                            <a href="https://www.linkedin.com/in/xecureyan1337" target="_blank" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://github.com/xecureyan1337" target="_blank"className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors">
                                GitHub
                            </a>
                        </div>

                    </div>
                </div>
                
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Kirim Pesan</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Nama</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan nama Anda" />
                        </div>
                        
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Email</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Masukkan email Anda" />
                        </div>
                        
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Pesan</label>
                            <textarea rows={4} className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tulis pesan Anda..."></textarea>
                        </div>
                        
                        <button type="submit" className="cursor-pointer w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors font-medium"> Kirim Pesan </button>
                    
                    </form>

                    <div className="mt-6">
                        <Link href="/" className="text-blue-600 hover:underline font-semibold">
                            ← Kembali ke Beranda
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}