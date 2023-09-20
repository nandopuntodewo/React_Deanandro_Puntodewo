# React Hooks: useEffect & Custom Hooks

Hooks adalah fitur yang memungkinkan kita menggunakan state dan fitur React lainnya dalam komponen berbasis fungsi. Dalam README ini, kita akan membahas dua aspek utama dari React Hooks: `useEffect` dan pembuatan custom hook.

## Menggunakan useEffect

`useEffect` adalah salah satu hook paling umum yang digunakan dalam pengembangan React. Ini memungkinkan kita untuk melakukan efek samping (side effects) dalam komponen berbasis fungsi, seperti mengirim permintaan HTTP atau mengatur langganan.

### Penggunaan Dasar `useEffect`

- Gunakan `useEffect` untuk melakukan efek samping dalam komponen berbasis fungsi.
- Fungsi yang diberikan sebagai argumen pertama akan dijalankan setiap kali komponen di-render atau nilai dependensi berubah.
- Kita dapat mengembalikan fungsi dari dalam `useEffect` untuk membersihkan efek samping ketika komponen di-unmount.

## Membuat Custom Hook

Custom hooks adalah cara untuk mengisolasi dan merespons kode yang dapat digunakan ulang dalam beberapa komponen. Membuat custom hook memungkinkan kita untuk berbagi logika antar komponen tanpa perlu menyalin kode yang sama berulang-ulang.

### Contoh Membuat Custom Hook

- Membuat fungsi custom hook yang dapat digunakan di berbagai komponen.
- Custom hook dapat memiliki state dan efek samping sendiri.
- Custom hook mengembalikan nilai yang dapat digunakan oleh komponen yang memanggilnya.

Dengan menggunakan `useEffect` dan custom hooks, kita dapat meningkatkan organisasi dan keberlanjutan kode dalam proyek React kita.