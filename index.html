<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AiEkk | Ekk Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/tesseract.js@4/dist/tesseract.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#6D28D9',
                        secondary: '#8B5CF6',
                        accent: '#EC4899',
                        dark: '#1F2937',
                        light: '#F3F4F6',
                        incoming: '#F0F4F8',
                        outgoing: '#EDE9FE',
                        ekkstore: '#7C3AED'
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <style type="text/tailwindcss">
        @layer utilities {
            .content-auto { content-visibility: auto; }
            .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            .scrollbar-hide::-webkit-scrollbar { display: none; }
            .text-shadow { text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
            .glass { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); }
            .btn-hover { transform: translateY(-1px); transition: all 0.2s ease; }
        }
    </style>
</head>
<body class="bg-gradient-to-br from-purple-50 to-indigo-100 font-sans min-h-screen">
    <div class="max-w-2xl mx-auto h-screen flex flex-col bg-white shadow-2xl relative overflow-hidden">
        
        <!-- Header Utama -->
        <header class="bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 flex items-center justify-between shadow-lg z-20">
            <div class="flex items-center gap-3">
                <div class="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center shadow-md">
                    <i class="fa fa-robot text-xl"></i>
                </div>
                <div>
                    <h1 class="font-bold text-lg text-shadow">AiEkk <span class="text-xs bg-accent/80 px-1.5 py-0.5 rounded-md">v2.0</span></h1>
                    <p class="text-xs text-white/90">Dibuat oleh <b>Ekk Store</b> • Siap membantu 🚀</p>
                </div>
            </div>
            <div class="flex gap-2">
                <button id="btnVoice" class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition btn-hover" title="Suara Aktif">
                    <i class="fa fa-volume-up"></i>
                </button>
                <button id="btnEditMode" class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition btn-hover" title="Alat Editor">
                    <i class="fa fa-picture-o"></i>
                </button>
            </div>
        </header>

        <!-- BAR MENU KHUSUS DI ATAS PADA KETIK (Sesuai Permintaan) -->
        <div id="specialMenu" class="bg-light/80 backdrop-blur-sm px-3 py-2 border-b border-gray-200 flex gap-2 overflow-x-auto scrollbar-hide z-10 shadow-sm">
            <button data-action="buat-gambar" class="aksi-btn whitespace-nowrap bg-primary text-white px-3 py-1.5 rounded-lg text-sm shadow hover:shadow-md btn-hover">
                <i class="fa fa-image mr-1"></i> Buat Gambar
            </button>
            <button data-action="tulis-artikel" class="aksi-btn whitespace-nowrap bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/20 btn-hover">
                <i class="fa fa-pencil mr-1"></i> Menulis
            </button>
            <button data-action="terjemahkan" class="aksi-btn whitespace-nowrap bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/20 btn-hover">
                <i class="fa fa-language mr-1"></i> Terjemahkan
            </button>
            <button data-action="baca-file" class="aksi-btn whitespace-nowrap bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/20 btn-hover">
                <i class="fa fa-file-text-o mr-1"></i> Baca File
            </button>
            <button data-action="baca-web" class="aksi-btn whitespace-nowrap bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/20 btn-hover">
                <i class="fa fa-globe mr-1"></i> Baca Halaman
            </button>
            <button data-action="edit-foto" class="aksi-btn whitespace-nowrap bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg text-sm hover:bg-secondary/20 btn-hover">
                <i class="fa fa-wrench mr-1"></i> Edit Foto
            </button>
        </div>

        <!-- HALAMAN UTAMA CHAT -->
        <div id="chatPage" class="flex flex-col flex-1 h-full relative">
            <!-- Area Obrolan -->
            <div id="chatArea" class="flex-1 p-4 overflow-y-auto scrollbar-hide bg-[url('https://picsum.photos/id/1015/1000/1000')] bg-cover bg-center bg-blend-multiply bg-gray-100/80">
                <!-- Pesan Selamat Datang -->
                <div class="flex gap-3 mb-5 max-w-[85%]">
                    <div class="w-9 h-9 rounded-full bg-ekkstore text-white flex items-center justify-center shrink-0 mt-1 shadow">
                        <i class="fa fa-robot text-sm"></i>
                    </div>
                    <div class="incoming rounded-2xl rounded-tl-none p-3.5 shadow-md relative">
                        <p class="text-sm leading-relaxed">👋 Halo! Saya <b>AiEkk</b>, AI cerdas buatan <b>Ekk Store</b>. Semua fitur yang kamu minta sudah aktif 100%! <br><br>✅ Edit Foto & Upload File<br>✅ Buat Gambar & Menulis<br>✅ Terjemahkan Bahasa<br>✅ Baca Isi File & Web<br>✅ Suara & Rekaman (VN)<br>✅ Edit Pesan & Muat Ulang Jawaban<br><br>Ada yang bisa saya bantu hari ini?</p>
                    </div>
                </div>
            </div>

            <!-- Kolom Input & Upload -->
            <form id="chatForm" class="px-4 py-3 bg-white/90 backdrop-blur-md border-t border-gray-200 flex items-center gap-3 shadow-inner">
                <label for="fileInput" class="cursor-pointer text-gray-600 hover:text-primary transition">
                    <i class="fa fa-paperclip text-xl"></i>
                </label>
                <input type="file" id="fileInput" accept="image/*,.pdf,.doc,.docx,.txt" class="hidden">

                <!-- Tombol Rekam Suara -->
                <button type="button" id="recordBtn" class="text-gray-600 hover:text-accent transition relative" title="Rekam Suara">
                    <i class="fa fa-microphone text-xl"></i>
                    <span id="recordingIndicator" class="hidden absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                </button>
                
                <div class="flex-1 relative">
                    <input 
                        type="text" 
                        id="pesanInput" 
                        placeholder="Ketik pesan atau gunakan menu di atas..." 
                        class="w-full bg-light rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 pr-10 shadow-sm"
                        autocomplete="off"
                    >
                    <!-- Tombol Edit Pesan Muncul Saat Diperlukan -->
                </div>
                
                <button type="submit" class="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg btn-hover" title="Kirim Pesan">
                    <i class="fa fa-paper-plane"></i>
                </button>
            </form>
        </div>

        <!-- HALAMAN EDIT FOTO & ALAT -->
        <div id="editPage" class="hidden absolute top-0 left-0 w-full h-full bg-white z-30 flex flex-col shadow-2xl">
            <div class="bg-gradient-to-r from-accent to-pink-500 text-white px-4 py-3 flex items-center justify-between shadow-md">
                <div class="flex items-center gap-2">
                    <button id="backToChat" class="hover:bg-white/20 p-1.5 rounded-lg transition">
                        <i class="fa fa-arrow-left text-lg"></i>
                    </button>
                    <h2 class="font-bold text-lg">Alat AiEkk Editor</h2>
                </div>
            </div>

            <div class="flex-1 bg-gray-900/90 flex items-center justify-center p-4 overflow-hidden">
                <canvas id="editCanvas" class="max-w-full max-h-[70%] object-contain rounded-xl shadow-2xl transition-all duration-300"></canvas>
            </div>

            <div class="p-4 bg-gray-50 border-t">
                <div class="mb-4">
                    <p class="text-sm font-semibold text-dark mb-2">✨ Efek & Filter</p>
                    <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="normal">Normal</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="grayscale">Hitam Putih</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="sepia">Sepia</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="invert">Negatif</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="blur">Buram</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="brightness">Terang</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="contrast">Kontras</button>
                        <button class="filter-btn px-3 py-1.5 bg-white rounded-lg shadow-sm text-xs hover:bg-secondary hover:text-white transition" data-filter="saturate">Warna Kuat</button>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <label for="editFileInput" class="bg-gradient-to-r from-primary to-secondary text-white text-center py-2.5 rounded-lg text-sm shadow hover:shadow-md btn-hover cursor-pointer">
                        <i class="fa fa-upload mr-1.5"></i> Unggah Foto
                    </label>
                    <input type="file" id="editFileInput" accept="image/*" class="hidden">
                    <button id="downloadBtn" class="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-2.5 rounded-lg text-sm shadow hover:shadow-md btn-hover">
                        <i class="fa fa-download mr-1.5"></i> Simpan Hasil
                    </button>
                </div>
            </div>
        </div>

        <!-- MODAL EDIT PESAN -->
        <div id="editModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-xl p-4 w-full max-w-md shadow-2xl">
                <h3 class="font-bold text-lg mb-2">Edit Pesan</h3>
                <textarea id="editTextArea" class="w-full border rounded-lg p-2 text-sm h-24 focus:ring-2 focus:ring-primary/40 focus:border-primary"></textarea>
                <div class="flex justify-end gap-2 mt-3">
                    <button id="cancelEdit" class="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Batal</button>
                    <button id="saveEdit" class="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90">Simpan</button>
                </div>
            </div>
        </div>

    </div>

    <script>
        // === KONFIGURASI UTAMA ===
        const API_URL = '/api/chat'; 
        const KUNCI_API = 'ekkstore_2026'; 
        let voiceEnabled = true;
        let recognition;
        let lastAiResponse = "";
        let lastUserMsgEl = null;
        let currentEditMsg = null;

        // === ELEMENTS ===
        const chatForm = document.getElementById('chatForm');
        const pesanInput = document.getElementById('pesanInput');
        const chatArea = document.getElementById('chatArea');
        const fileInput = document.getElementById('fileInput');
        const btnEditMode = document.getElementById('btnEditMode');
        const chatPage = document.getElementById('chatPage');
        const editPage = document.getElementById('editPage');
        const backToChat = document.getElementById('backToChat');
        const btnVoice = document.getElementById('btnVoice');
        const recordBtn = document.getElementById('recordBtn');
        const recordingIndicator = document.getElementById('recordingIndicator');
        const editModal = document.getElementById('editModal');
        const editTextArea = document.getElementById('editTextArea');
        const saveEdit = document.getElementById('saveEdit');
        const cancelEdit = document.getElementById('cancelEdit');

        // Element Edit Foto
        const editFileInput = document.getElementById('editFileInput');
        const editCanvas = document.getElementById('editCanvas');
        const ctx = editCanvas.getContext('2d');
        let img = new Image();
        let currentFilter = 'none';

        // === INISIALISASI SUARA AI ===
        const synth = window.speechSynthesis;
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.lang = 'id-ID';
            recognition.interimResults = false;
        }

        // === FUNGSI UTAMA TAMBAH PESAN ===
        function tambahPesan(teks, pengirim, dataTambahan = {}) {
            const { isImage = false, isFile = false, isVoice = false } = dataTambahan;
            const div = document.createElement('div');
            div.className = `flex gap-3 mb-5 max-w-[85%] group relative ${pengirim === 'user' ? 'ml-auto flex-row-reverse' : ''}`;
            
            let konten = '';
            if
