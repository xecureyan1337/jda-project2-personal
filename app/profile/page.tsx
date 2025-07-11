import Link from 'next/link';

export default function Profile() {
    return (
        <div className="container mx-auto p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="bg-gradient-to-r from-red-400 to-yellow-500 rounded-full w-48 h-48 mx-auto flex items-center justify-center">
                                <span className="text-white text-6xl font-bold">JS</span>
                            </div>
                        </div>
                        
                        <div className="md:w-2/3">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Muhammad Alfiyan NR</h1>
                            <p className="text-blue-600 text-lg mb-4">Web Developer</p>
                            
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Bio</h2>
                                    <p className="text-gray-600">
                                        Seorang mahasiswa yang sedang belajar web development dengan fokus pada 
                                        teknologi modern seperti React dan Next.js. Passionate dalam menciptakan 
                                        user experience yang optimal dan kode yang clean.
                                    </p>
                                </div>
                                
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Skills</h2>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">CSS</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Informasi</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-600"><span className="font-bold">Lokasi:</span> Bandung, Indonesia</p>
                                            <p className="text-gray-600"><span className="font-bold">Status:</span> Mahasiswa</p>
                                            <p className="text-gray-600"><span className="font-bold">Hobi:</span> Coding, Reading, Hacking</p>
                                            <p className="text-gray-600"><span className="font-bold">Bahasa:</span> Indonesia, English</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
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