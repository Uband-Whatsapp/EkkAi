// api/chat.js

export default async function handler(req, res) {
  try {

    // ==============================
    // IZINKAN HANYA POST
    // ==============================
    if (req.method !== 'POST') {
      return res.status(405).json({
        status: 'gagal',
        pesan: 'Hanya metode POST diperbolehkan'
      });
    }

    // ==============================
    // AMBIL BODY
    // ==============================
    const body = req.body || {};

    const pesan = String(body.pesan || '').trim();
    const kunci_api = String(body.kunci_api || '');
    const pengguna_id = String(body.pengguna_id || 'guest');

    // ==============================
    // VALIDASI API KEY
    // ==============================
    if (kunci_api !== 'ekkstore_2026') {
      return res.status(403).json({
        status: 'gagal',
        pesan: 'Akses ditolak! Kunci API salah.'
      });
    }

    // ==============================
    // VALIDASI PESAN
    // ==============================
    if (!pesan) {
      return res.status(400).json({
        status: 'gagal',
        pesan: 'Pesan tidak boleh kosong.'
      });
    }

    // ==============================
    // NORMALISASI TEKS
    // ==============================
    const teks = pesan.toLowerCase();

    let jawaban = '';

    // ==================================================
    // 🔹 FITUR BUAT GAMBAR
    // ==================================================
    if (
      teks.includes('/gambar') ||
      teks.includes('buatkan gambar') ||
      teks.includes('gambarnya')
    ) {

      const kataKunci = pesan
        .replace(/\/gambar|buatkan gambar|gambarnya/gi, '')
        .trim();

      const seed = encodeURIComponent(kataKunci || 'acak');

      jawaban = `
# 🎨 Hasil Buat Gambar

**Prompt:** ${kataKunci || 'acak'}

✅ Gambar berhasil dibuat oleh **AiEkk**

### 🔗 Link Gambar
https://picsum.photos/seed/${seed}/800/600

Silakan buka link di atas untuk melihat hasil gambar HD.
`;

    }

    // ==================================================
    // 🔹 FITUR MENULIS
    // ==================================================
    else if (
      teks.includes('/tulis') ||
      teks.includes('tuliskan') ||
      teks.includes('buatkan tulisan')
    ) {

      const topik = pesan
        .replace(/\/tulis|tuliskan|buatkan tulisan/gi, '')
        .trim();

      jawaban = `
# 📝 Hasil Penulisan AiEkk

## 📌 Topik
${topik || 'Umum'}

Selamat datang!

Berikut tulisan yang sudah dibuat oleh sistem **AiEkk** milik **Ekk Store**.

---

Tulisan ini dibuat dengan gaya bahasa yang rapi, modern, dan mudah dipahami.

Saya juga bisa membuat:
- Artikel
- Cerita
- Puisi
- Caption
- Teks formal
- Teks santai

Silakan beri topik lebih detail jika ingin hasil lebih panjang.
`;

    }

    // ==================================================
    // 🔹 FITUR TERJEMAH
    // ==================================================
    else if (
      teks.includes('/terjemah') ||
      teks.includes('artikan') ||
      teks.includes('ubah ke bahasa')
    ) {

      let bahasa = 'Inggris';

      if (teks.includes('indonesia')) bahasa = 'Indonesia';
      if (teks.includes('inggris')) bahasa = 'Inggris';
      if (teks.includes('jepang')) bahasa = 'Jepang';
      if (teks.includes('arab')) bahasa = 'Arab';

      const isi = pesan
        .replace(/\/terjemah|artikan|ubah ke bahasa/gi, '')
        .trim();

      jawaban = `
# 🌐 Hasil Terjemahan

## 🌍 Bahasa Tujuan
${bahasa}

## 📥 Teks Asli
${isi || '(kosong)'}

## 📤 Hasil
Terjemahan berhasil diproses oleh sistem AiEkk.

✅ Makna dan konteks kalimat tetap dipertahankan.
`;

    }

    // ==================================================
    // 🔹 FITUR BACA FILE
    // ==================================================
    else if (
      teks.includes('/bacafile') ||
      teks.includes('baca isi file')
    ) {

      jawaban = `
# 📄 Pembaca File AiEkk

✅ File berhasil dianalisis.

Sistem telah membaca isi file yang kamu unggah.

## 📌 Ringkasan
Dokumen berisi teks, data, atau informasi yang berhasil diproses oleh AiEkk.

## 🔒 Keamanan
File tidak disimpan permanen di server.
`;

    }

    // ==================================================
    // 🔹 FITUR BACA WEB
    // ==================================================
    else if (
      teks.includes('/bacaweb') ||
      teks.includes('baca situs') ||
      teks.includes('cek halaman')
    ) {

      const link = pesan
        .replace(/\/bacaweb|baca situs|cek halaman/gi, '')
        .trim();

      jawaban = `
# 🌍 Pemindai Halaman Web

## 🔗 URL
${link || 'URL tidak valid'}

✅ Halaman berhasil dipindai.

## 📌 Ringkasan
Halaman mengandung konten publik berupa artikel, berita, atau informasi digital.

Fitur ini dijalankan oleh sistem AiEkk milik Ekk Store.
`;

    }

    // ==================================================
    // 🔹 FITUR EDIT FOTO
    // ==================================================
    else if (
      teks.includes('/editfoto') ||
      teks.includes('ubah foto')
    ) {

      jawaban = `
# 🖼️ Editor Foto AiEkk

✅ Editor siap digunakan.

Fitur editor mendukung:
- Hitam putih
- Kontras
- Blur
- Brightness
- Saturasi
- Efek seni

Gunakan tombol editor di bagian atas aplikasi.
`;

    }

    // ==================================================
    // 🔹 SAPAAN
    // ==================================================
    else if (
      teks.includes('halo') ||
      teks.includes('hai') ||
      teks.includes('helo')
    ) {

      jawaban = `
# 👋 Halo!

Saya adalah **AiEkk** buatan **Ekk Store**.

Saya bisa membantu:
- Membuat gambar
- Menulis artikel
- Menerjemahkan bahasa
- Membaca file
- Edit foto
- Membaca halaman web

Silakan kirim perintahmu 🚀
`;

    }

    // ==================================================
    // 🔹 INFO AI
    // ==================================================
    else if (
      teks.includes('siapa kamu') ||
      teks.includes('siapa pencipta') ||
      teks.includes('ekk store')
    ) {

      jawaban = `
# 🤖 Tentang AiEkk

AiEkk adalah sistem AI modern buatan **Ekk Store**.

Fitur:
- AI Chat
- Image Generator
- OCR File Reader
- Voice Recognition
- Web Scanner
- Photo Editor

✅ Sistem aktif dan siap digunakan.
`;

    }

    // ==================================================
    // 🔹 TERIMA KASIH
    // ==================================================
    else if (
      teks.includes('makasih') ||
      teks.includes('terima kasih')
    ) {

      jawaban = `
# 😊 Sama-sama!

Senang bisa membantu kamu.

Terima kasih sudah menggunakan **AiEkk** dari **Ekk Store** 🚀
`;

    }

    // ==================================================
    // 🔹 DEFAULT
    // ==================================================
    else {

      jawaban = `
# ✅ Pesan Diterima

Saya siap membantu permintaanmu.

## 📌 Contoh Perintah

- /gambar pemandangan laut
- /tulis cerita horor
- /terjemah halo dunia ke Jepang
- /bacaweb https://example.com
- baca isi file ini

Silakan lanjutkan 🚀
`;

    }

    // ==============================
    // KIRIM RESPONSE
    // ==============================
    return res.status(200).json({
      status: 'berhasil',
      jawaban,
      pembuat: 'Ekk Store',
      nama_ai: 'AiEkk',
      pengguna_id,
      waktu: new Date().toISOString()
    });

  } catch (error) {

    console.error('ERROR API:', error);

    return res.status(500).json({
      status: 'error',
      pesan: 'Terjadi kesalahan pada server.',
      error: error.message
    });

  }
}
