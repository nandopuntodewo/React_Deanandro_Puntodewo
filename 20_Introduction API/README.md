# Apa itu API
API, atau Application Programming Interface, adalah sebuah mekanisme yang memungkinkan berbagai komponen perangkat lunak untuk berkomunikasi dan berinteraksi satu sama lain. API digunakan untuk memungkinkan aplikasi atau sistem yang berbeda untuk saling berbicara dan berbagi data. Ini memungkinkan front-end dan back-end aplikasi untuk berkomunikasi dengan cara yang terstruktur dan terstandarisasi.

API memungkinkan aplikasi untuk melakukan berbagai tugas, seperti mengambil data, memperbarui data, menghapus data, atau melakukan tindakan lainnya dalam database atau sistem yang terkait. API bekerja dengan cara bahwa klien (biasanya aplikasi front-end) mengirimkan permintaan (request) kepada server, dan server akan mengirimkan respons (response) yang sesuai.

API dapat digunakan di berbagai platform, termasuk iOS, Android, dan desktop. Dengan menggunakan API, Anda dapat memiliki satu backend yang mengelola logika bisnis dan menyediakan data kepada berbagai platform klien.

# REST API
REST, yang merupakan singkatan dari Representational State Transfer, adalah salah satu pendekatan dalam mendesain API. REST API menggunakan protokol HTTP sebagai dasarnya, dan berkomunikasi melalui berbagai metode HTTP seperti GET, POST, PUT, DELETE, HEAD, OPTIONS, dan PATCH. Permintaan (request) dan respons (response) yang dihasilkan dalam REST API umumnya menggunakan format data yang berbasis teks, seperti JSON (JavaScript Object Notation).

# JSON
JSON, atau JavaScript Object Notation, adalah format file berbasis teks yang umum digunakan dalam pertukaran data antara server dan klien. File JSON memiliki ekstensi ".json" dan merupakan representasi data yang ringkas dan mudah dibaca oleh manusia, namun juga dapat dipahami dengan baik oleh komputer. Format JSON digunakan secara luas dalam pertukaran data dalam REST API dan banyak protokol komunikasi lainnya.

# Kode Respons HTTP
Ketika Anda berinteraksi dengan API, respons yang diterima dari server biasanya disertai dengan kode respons HTTP. Kode respons HTTP digunakan untuk memberikan informasi tentang status hasil dari permintaan tersebut. Beberapa kategori kode respons HTTP meliputi:
- 100-199: Respons Informasional
- 200-299: Respons Sukses
- 300-399: Pesan Pengalihan (Redirection)
- 400-499: Respons Kesalahan Klien (Client Error)
- 500-599: Respons Kesalahan Server (Server Error)

Kode respons HTTP membantu klien (seperti aplikasi front-end) untuk memahami apakah permintaan mereka berhasil atau mengalami masalah, dan dapat memberikan petunjuk tentang tindakan selanjutnya yang harus diambil.