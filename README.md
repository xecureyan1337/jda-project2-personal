# My Next.js Website

Project Next.js untuk mempelajari dasar-dasar routing, static pages, dan dynamic routes.

## 🚀 Fitur

- ✅ **Halaman Statis**: Home, About, Profile, Contact
- ✅ **Dynamic Routes**: Products dengan parameter ID
- ✅ **Navigasi**: Menu navigasi yang responsive
- ✅ **404 Page**: Halaman error yang custom dan menarik
- ✅ **Responsive Design**: Menggunakan Tailwind CSS
- ✅ **SEO Optimized**: Metadata untuk setiap halaman

## 📁 Struktur Project

```
src/
├── app/
│   ├── about/page.js          # Halaman About
│   ├── contact/page.js        # Halaman Contact
│   ├── profile/page.js        # Halaman Profile
│   ├── products/[id]/page.js  # Dynamic route untuk products
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   ├── loading.js             # Loading state
│   ├── not-found.js           # 404 page
│   └── page.js                # Home page
```

## 🛠️ Teknologi yang Digunakan

- **Next.js** - React framework dengan App Router
- **Tailwind CSS** - Utility-first CSS framework
- **React** - JavaScript library untuk UI
- **JavaScript** - Programming language

## 🏃‍♂️ Cara Menjalankan

### Prerequisites
- Node.js (versi 18 atau lebih tinggi). Dipakai versi v22.16.0
- npm / pnpm

### Instalasi

1. Clone repository:
```bash
git clone [URL_REPOSITORY]
cd my-nextjs-project
```

2. Install dependencies:
```bash
pnpm install
```

3. Jalankan development server:
```bash
pnpm run dev
```

4. Buka browser dan kunjungi `http://localhost:3000`

## 📄 Halaman yang Tersedia

| Route | Deskripsi |
|-------|-----------|
| `/` | Halaman utama dengan overview |
| `/about` | Informasi tentang pembelajaran |
| `/profile` | Profil personal |
| `/contact` | Informasi kontak dan form |
| `/products/[id]` | Detail produk berdasarkan ID |

## 🎨 Fitur UI/UX

- **Responsive Design**: Bekerja di desktop dan mobile
- **Smooth Navigation**: Navigasi tanpa reload halaman
- **Interactive Elements**: Hover effects dan transitions
- **Error Handling**: 404 page yang user-friendly
- **Loading States**: Feedback visual saat loading

## 🔗 Dynamic Routes

Project ini menggunakan dynamic routes untuk halaman products:
- Route pattern: `/products/[id]`
- Contoh: `/products/1`, `/products/2`, dll.
- Handle invalid IDs dengan error message yang sesuai

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Pembelajaran

Melalui project ini, saya mempelajari:

1. **Next.js App Router**: Struktur routing modern
2. **Static Pages**: Membuat halaman statis
3. **Dynamic Routes**: Routing dengan parameter
4. **Component Navigation**: Navigasi antar halaman
5. **Error Handling**: Custom 404 page
6. **Styling**: Tailwind CSS untuk responsive design
7. **SEO**: Metadata dan optimasi search engine

**Note**: Ini adalah project pembelajaran yang ditujukan untuk memahami dasar-dasar Next.js routing dan navigation.