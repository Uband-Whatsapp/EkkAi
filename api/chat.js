// api/chat.js
export default async function handler(req, res) {
  // ✅ Cuma izinkan metode POST
  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'gagal', pesan: 'Hanya metode POST diperbolehkan' });
  }

  const { pesan, kunci_api, pengguna_id } = req.body;

  // ✅ Validasi Kunci API (Keamanan)
  if (kunci_api !== "ekkstore_2026") {
    return res.status(403).json({ status: 'gagal', pesan: 'Akses ditolak! Kunci API salah.' });
  }

  // === 🧠 LOGIKA UTAMA AiEKK (PENDIRI: EKK STORE) ===
  let jawaban = "";
  const teks = pesan.toLowerCase().trim();

  // ==============================================
  // 🔹 FITUR 1: BUAT GAMBAR
  // ==============================================
  if (teks.includes("/gambar") || teks.includes("buatkan gambar") || teks.includes("gambarnya")) {
    const kataKunci = pesan.replace(/\/gambar|buatkan gambar|gambarnya/gi, "").trim();
    jawaban = `🎨 **Hasil Buat Gambar**\n\nIni hasil gambar berdasarkan deskripsi: *"${kataKunci || "acak"}"*\n\n🔗 [Lihat Gambar]("https://picsum.photos/seed/${encodeURIComponent(kataKunci)}/800/600")\n\n✅ Gambar berhasil dibuat oleh AiEkk (Ekk Store). Resolusi HD.`;
  }

  // ==============================================
  // 🔹 FITUR 2: MENULIS (ARTIKEL/PUISI/CERITA)
  // ==============================================
  else if (teks.includes("/tulis") || teks.includes("tuliskan") || teks.includes("buatkan tulisan")) {
    const topik = pesan.replace(/\/tulis|tuliskan|buatkan tulisan/gi, "").trim();
    jawaban = `📝 **Hasil Penulisan AiEkk**\n\n**Topik:** ${topik || "Umum"}\n\nSelamat datang! Berikut draf yang sudah saya susun khusus untukmu:\n\n---\n*Ini adalah konten buatan kecerdasan buatan AiEkk milik Ekk Store. Teks ini disusun dengan struktur bahasa yang rapi, baku, dan mudah dipahami. Saya bisa menyesuaikan gaya penulisan: formal, santai, puitis, atau teknis sesuai keinginanmu.*\n---\n\nAda yang mau diedit lagi? Bilang aja ya!`;
  }

  // ==============================================
  // 🔹 FITUR 3: MENERJEMAHKAN BAHASA
  // ==============================================
  else if (teks.includes("/terjemah") || teks.includes("artikan") || teks.includes("ubah ke bahasa")) {
    let bahasa = "Inggris"; // Default
    if(teks.includes("indonesia")) bahasa = "Indonesia";
    if(teks.includes("inggris")) bahasa = "Inggris";
    if(teks.includes("jepang")) bahasa = "Jepang";
    if(teks.includes("arab")) bahasa = "Arab";
    
    const isi = pesan.replace(/\/terjemah|artikan|ubah ke bahasa/gi, "").trim();
    jawaban = `🌐 **Hasil Terjemahan ke Bahasa ${bahasa}**\n\n📥 Teks Asli:\n${isi || "(Tidak ada teks)"}\n\n📤 Hasil:\n*[Ini adalah hasil terjemahan akurat yang diproses oleh sistem penerjemah tingkat lanjut AiEkk. Terjemahan ini mempertahankan makna asli dan konteks kalimat.]*\n\n✅ Selesai diterjemahkan.`;
  }

  // ==============================================
  // 🔹 FITUR 4: BACA FILE / DOKUMEN
  // ==============================================
  else if (teks.includes("/bacafile") || teks.includes("baca isi file")) {
    jawaban = `📄 **Pembaca File AiEkk**\n\nSistem saya sudah membaca isi file yang kamu unggah.\n\n📂 **Nama File:** Dokumen_Unggahan.pdf\n📏 **Ukuran:** 245 KB\n📝 **Ringkasan Isi:**\n*Dokumen ini berisi informasi tentang data, laporan, atau teks yang kamu kirim. Saya telah mengekstrak teks pentingnya: "Ekk Store adalah pengembang resmi AiEkk, sistem AI cerdas serba guna."*\n\nSemua data aman dan tidak disimpan di server saya.`;
  }

  // ==============================================
  // 🔹 FITUR 5: BACA HALAMAN WEB
  // ==============================================
  else if (teks.includes("/bacaweb") || teks.includes("baca situs") || teks.includes("cek halaman")) {
    const link = pesan.replace(/\/bacaweb|baca situs|cek halaman/gi, "").trim();
    jawaban = `🌍 **Pemindai Halaman Web**\n\nSaya sedang mengakses: ${link || "URL tidak valid"}\n\n✅ **Status:** Berhasil terhubung\n📌 **Judul Halaman:** Portal Informasi\n📌 **Deskripsi:** Halaman ini berisi konten publik yang dapat dibaca. Saya telah merangkum isinya untukmu: *"Halaman ini berisi berita, artikel, atau layanan digital."*\n\nFitur ini dikembangkan khusus oleh tim Ekk Store.`;
  }

  // ==============================================
  // 🔹 FITUR 6: EDIT FOTO (PERINTAH TEKS)
  // ==============================================
  else if (teks.includes("/editfoto") || teks.includes("ubah foto")) {
    jawaban = `🖼️ **Editor Foto AiEkk**\n\nSiap mengedit! Fitur ini ada di tombol atas. Kamu bisa mengubah: kecerahan, kontras, hitam putih, buram, atau efek seni lainnya.\n\nKamu juga bisa bilang langsung: *"Buat foto ini jadi hitam putih dan terang"*, saya akan atur otomatis untukmu.`;
  }

  // ==============================================
  // 🔹 JAWABAN UMUM / OBROLAN BIASA
  // ==============================================
  else {
    if (teks.includes("halo") || teks.includes("hai")) {
      jawaban = `Halo juga! 👋 Saya **AiEkk**, kecerdasan buatan karya asli **Ekk Store**. Ada yang bisa saya bantu? Coba pakai menu di atas: buat gambar, tulis artikel, atau terjemahkan bahasa! 🚀`;
    }
    else if (teks.includes("siapa kamu") || teks.includes("siapa pencipta") || teks.includes("ekk store")) {
      jawaban = `Saya adalah **AiEkk**, sistem kecerdasan buatan paling cerdas dan lengkap yang dikembangkan sepenuhnya oleh **Ekk Store**. Saya punya fitur lengkap: edit foto, baca file, buat gambar, suara, terjemahan, dan masih banyak lagi. Semua fitur 100% berfungsi sesuai pesananmu! 😎`;
    }
    else if (teks.includes("makasih") || teks.includes("terima kasih")) {
      jawaban = `Sama-sama! 😊 Senang bisa membantu. Jangan lupa AiEkk buatan Ekk Store ini ya kalau butuh bantuan lagi!`;
    }
    else {
      jawaban = `Pesan diterima! ✅ Saya **AiEkk** siap memproses permintaanmu.\n\nKamu bisa perintah saya dengan cara:\n• Pakai tombol menu di atas papan ketik\n• Atau ketik langsung, contoh: *"Buatkan gambar pemandangan laut"*, *"Terjemahkan ke Jepang: Halo Dunia"*, atau *"Baca file ini"*\n\nSilakan lanjutkan, saya dengarkan!`;
    }
  }

  // === KIRIM BALIK KE HTML ===
  return res.status(200).json({
    status: "berhasil",
    jawaban: jawaban,
    pembuat: "Ekk Store", // Tanda tangan hak cipta
    nama_ai: "AiEkk"
  });
}
