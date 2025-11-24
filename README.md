# Micro Frontend React (Module Federation)

Repositori ini berisi contoh sederhana arsitektur micro frontend berbasis React menggunakan Webpack Module Federation. Aplikasi dibagi menjadi dua bagian:

- `host`: aplikasi shell pada port `3000` yang menampilkan UI utama dan melakukan lazy load komponen jarak jauh.
- `remote`: aplikasi mandiri pada port `3001` yang mengekspos komponen `HelloWorld` untuk dikonsumsi oleh host.

## Arsitektur Singkat

- **ModuleFederationPlugin** pada `host/webpack.config.cjs` mendaftarkan `reactRemote` agar dapat diimpor sebagai `import('reactRemote/HelloWorld')`.
- **Remote** mengekspor komponen melalui `ModuleFederationPlugin` dengan `filename: remoteEntry.js`.
- Dependensi `react` dan `react-dom` dibagikan sebagai singleton untuk mencegah duplikasi runtime.

## Struktur Folder

- `host/`: aplikasi container (React 19) beserta konfigurasi Webpack dan Babel.
- `remote/`: aplikasi micro frontend yang mengekspos komponen.
- `LICENSE`: lisensi MIT/ISC sesuai kebutuhan.

## Prasyarat

- Node.js 18+ dan npm 9+ (atau versi yang kompatibel dengan Webpack 5).
- Port `3000` dan `3001` harus bebas.

## Instalasi

```
# Install dependensi remote
cd remote
npm install

# Install dependensi host
cd ../host
npm install
```

## Menjalankan Aplikasi

> Jalankan remote terlebih dahulu supaya `remoteEntry.js` tersedia ketika host melakukan federasi.

```
# Terminal 1 - remote
cd remote
npm start

# Terminal 2 - host
cd host
npm start
```

Host dapat diakses di `http://localhost:3000`, sementara remote di `http://localhost:3001`.

## Alur Pengembangan

1. Tambahkan komponen baru pada `remote/src` dan expose melalui `ModuleFederationPlugin`.
2. Impor komponen tersebut di host menggunakan `lazy(() => import('reactRemote/NamaKomponen'))`.
3. Gunakan `Suspense` untuk menampilkan fallback saat komponen sedang dimuat.

## Tips & Catatan

- Jika mengubah port atau nama remote, perbarui kedua file `webpack.config.cjs`.
- Gunakan `npm run build` (tambahkan skrip sesuai kebutuhan) sebelum deployment produksi.
- Untuk menambah remote lain, ulangi pola yang sama dan registrasikan pada `remotes` di host.
