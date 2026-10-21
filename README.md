# Narinde - Official Web Portal & Clothing Studio

Repository resmi ekosistem digital **Narinde Group**, memuat website profil korporasi serta landing page khusus untuk divisi pakaian & konveksi (**Narinde Clothing Studio**).

---

## 📂 Struktur Multi-Page Repository

```
narinde/
├── clothing/                # 🧵 WEBSITE KHUSUS NARINDE CLOTHING STUDIO
│   ├── assets/              # Foto lookbook, studio rack, & macro kain
│   │   ├── fabric-detail.jpg
│   │   ├── hero-lookbook.jpg
│   │   └── studio-rack.jpg
│   ├── app.js               # Filter katalog, size chart, & FAQ
│   ├── index.html           # Landing page Narinde Clothing Studio
│   └── style.css            # Styling Minimalist & Clean Studio
│
├── assets/                  # 🏢 Asset Landing Page Narinde Group
│   ├── clothing-showcase.jpg
│   ├── digital-showcase.jpg
│   ├── farm-showcase.jpg
│   └── hero-banner.jpg
├── app.js                   # Interaktivitas portal Group
├── index.html               # 🌐 Halaman Utama Narinde Group Portal
├── server.cjs               # Server HTTP lokal (mendukung root & /clothing)
├── style.css                # Styling portal Group
└── README.md
```

---

## 🌐 Navigasi & Halaman

| Halaman | Rute Lokal | Keterangan |
| :--- | :--- | :--- |
| **Narinde Group Portal** | `http://localhost:5180/` | Profil korporat 3 pilar: Apparel, Teknologi Digital (AppSheet), dan Agribisnis. |
| **Narinde Clothing Studio** | `http://localhost:5180/clothing` | Landing page spesialis konveksi premium: Lookbook, katalog tanpa harga ritel (B2B direct quote), spesifikasi kain, size guide, dan alur kerja. |

---

## 🚀 Cara Menjalankan Secara Lokal

```bash
# Jalankan web server Node.js
node server.cjs
```
- Buka Group Portal: `http://localhost:5180`
- Buka Clothing Studio: `http://localhost:5180/clothing`

---

## ☁️ Panduan Deployment

### 1. GitHub Pages (Otomatis & Gratis)
1. Buka repositori di GitHub ➡️ **Settings** ➡️ **Pages**.
2. Pada bagian **Build and deployment**, pilih Source: `Deploy from a branch`.
3. Pilih Branch `main` dan folder `/(root)`.
4. Klik **Save**.
5. Website Anda otomatis aktif di:
   - Portal Utama: `https://sbesaarr.github.io/narinde/`
   - Clothing Studio: `https://sbesaarr.github.io/narinde/clothing/`

### 2. Vercel / Netlify / Cloudflare Pages
- Cukup hubungkan repository `sbesaarr/narinde` dengan default settings (Framework: *Other* / Static).
- Rute `/` akan membuka Group Portal dan `/clothing` akan membuka Clothing Studio secara otomatis.

---

## 📄 Lisensi
Hak Cipta © Narinde Group. Seluruh hak cipta dilindungi.
