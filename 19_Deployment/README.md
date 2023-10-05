# Memerlukan Proses Build
Secara bawaan, React memiliki banyak pesan peringatan yang berguna dalam pengembangan aplikasi. Namun, pesan-pesan peringatan ini dapat membuat aplikasi React menjadi lebih besar dan memperlambat kinerjanya. Oleh karena itu, penting untuk melakukan proses build agar aplikasi kita dapat berjalan dalam mode produksi, yang akan meningkatkan performanya.

# Proses Build untuk Aplikasi React
Dalam proyek yang menggunakan React atau Vite, kita perlu menjalankan proses build untuk menghasilkan versi produksi dari aplikasi kita. Ini adalah langkah yang diperlukan sebelum mendeploy aplikasi ke lingkungan produksi. Untuk pengembangan sehari-hari, kita biasanya menggunakan `npm start` atau `npm run dev` untuk menjalankan aplikasi dalam mode pengembangan.

# Menjalankan Aplikasi yang Dioptimalkan secara Lokal
Agar dapat menjalankan aplikasi secara optimal di komputer lokal, kita dapat menggunakan alat bernama "serve."

Langkah-langkahnya sebagai berikut:
1. Instal serve dengan perintah `npm install -g serve`.
2. Jalankan perintah `serve -s build` untuk menghosting aplikasi dari direktori build yang telah dihasilkan selama proses build.

# Mendeploy dengan Vercel
Vercel adalah platform end-to-end yang ditujukan untuk para pengembang. Melalui Vercel, kita dapat membuat dan mendeploy aplikasi kita sehingga dapat diakses oleh banyak orang.

Langkah-langkah untuk melakukan deploy di Vercel adalah sebagai berikut:
1. Login ke Vercel dengan menggunakan akun GitHub.
2. Pilih repositori yang akan di-deploy dari GitHub.
3. Lakukan proses deploy dengan Vercel.
4. Setelah selesai, website kita akan dapat diakses melalui tautan yang disediakan oleh Vercel.

# Tautan Deploy
Anda dapat mengakses aplikasi yang telah di-deploy melalui tautan berikut: [https://react-createproduct.vercel.app/](https://react-createproduct.vercel.app/)