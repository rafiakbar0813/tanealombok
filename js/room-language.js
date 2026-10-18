
/* =========================================================
   TANÉA GUESTHOUSE — ROOM DETAIL LANGUAGE SWITCHER
   Bahasa Indonesia / English
   ========================================================= */

(() => {
    const translations = {
        id: {
            '.navbar-menu a': [
                'Beranda', 'Tentang', 'Experience',
                'Kamar', 'Galeri', 'Lokasi'
            ],
            '.navbar-booking': ['PESAN SEKARANG'],
            '.mobile-menu-toggle': ['Buka menu'],

            '.room-detail-hero-caption span': [
                'TANÉA GUESTHOUSE · LOMBOK'
            ],
            '.room-eyebrow': [
                'RETRET PRIBADI ANDA',
                'KAMAR',
                'FASILITAS KAMAR',
                'RENCANAKAN MENGINAP',
                'JELAJAHI KAMAR LAIN'
            ],
            '.room-detail-heading h2': [
                'Ruang yang nyaman<br><em>untuk bersantai.</em>'
            ],
            '.room-detail-heading p': [
                'Nikmati kenyamanan beristirahat dalam suasana tropis yang hangat dan menenangkan. Deluxe Room dirancang untuk menemani waktu bersantai Anda selama menginap di Tanéa Guesthouse.'
            ],
            '.room-detail-meta span': [
                '24 m²', '2 Tamu', '1 Tempat Tidur Queen'
            ],
            '.room-detail-description h3': [
                'Kenyamanan dalam setiap detail.'
            ],
            '.room-detail-description p': [
                'Temukan ruang untuk beristirahat, menikmati suasana yang tenang, dan kembali terhubung dengan hal-hal sederhana. Detail dan fasilitas kamar akan disesuaikan dengan informasi asli Tanéa Guesthouse.'
            ],
            '.room-detail-facilities h3': ['Fasilitas Kamar'],
            '.room-booking-panel h3': ['Pesan Penginapan Anda'],
            '.room-booking-note': [
                'Rencanakan pengalaman menginap Anda di Tanéa.'
            ],
            'label[for="check-in"]': ['Check-in'],
            'label[for="check-out"]': ['Check-out'],
            'label[for="adults"]': ['Dewasa'],
            'label[for="children"]': ['Anak-anak'],
            '#room-booking-form button[type="submit"]': [
                'Cek Ketersediaan <span aria-hidden="true">→</span>'
            ],
            '.other-rooms > h2': ['Kamar Lainnya'],
            '.room-detail-footer a': [
                '← Kembali ke semua kamar'
            ]
        },

        en: {
            '.navbar-menu a': [
                'Home', 'About', 'Experience',
                'Rooms', 'Gallery', 'Location'
            ],
            '.navbar-booking': ['BOOK NOW'],
            '.mobile-menu-toggle': ['Open menu'],

            '.room-detail-hero-caption span': [
                'TANÉA GUESTHOUSE · LOMBOK'
            ],
            '.room-eyebrow': [
                'YOUR PRIVATE RETREAT',
                'THE ROOM',
                'ROOM AMENITIES',
                'PLAN YOUR STAY',
                'EXPLORE MORE'
            ],
            '.room-detail-heading h2': [
                'A gentle space<br><em>to unwind.</em>'
            ],
            '.room-detail-heading p': [
                'Enjoy a comfortable stay in a warm and calming tropical atmosphere. The Deluxe Room is designed to make your time at Tanéa Guesthouse relaxing and memorable.'
            ],
            '.room-detail-meta span': [
                '24 m²', '2 Guests', '1 Queen Bed'
            ],
            '.room-detail-description h3': [
                'Comfort in every detail.'
            ],
            '.room-detail-description p': [
                'Find a space to rest, enjoy the peaceful atmosphere, and reconnect with life’s simple pleasures. Room details and amenities will be updated to reflect the official information from Tanéa Guesthouse.'
            ],
            '.room-detail-facilities h3': ['Room Amenities'],
            '.room-booking-panel h3': ['Book Your Stay'],
            '.room-booking-note': [
                'Plan your stay at Tanéa.'
            ],
            'label[for="check-in"]': ['Check-in'],
            'label[for="check-out"]': ['Check-out'],
            'label[for="adults"]': ['Adults'],
            'label[for="children"]': ['Children'],
            '#room-booking-form button[type="submit"]': [
                'Check Availability <span aria-hidden="true">→</span>'
            ],
            '.other-rooms > h2': ['Other Rooms'],
            '.room-detail-footer a': [
                '← Back to all rooms'
            ]
        }
    };

    function applyRoomLanguage(language) {
        const dictionary = translations[language] || translations.id;

        Object.entries(dictionary).forEach(([selector, values]) => {
            const elements = document.querySelectorAll(selector);

            elements.forEach((element, index) => {
                const value = values[Math.min(index, values.length - 1)];

                if (value == null) return;

                if (element.matches('.mobile-menu-toggle')) {
                    element.setAttribute('aria-label', value);
                    return;
                }

                element.innerHTML = value;
            });
        });

        document.documentElement.lang = language;

        document.querySelectorAll('[data-language]').forEach(button => {
            const active = button.dataset.language === language;

            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });

        try {
            sessionStorage.setItem('tanea-language', language);
        } catch (_) {}
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-language]').forEach(button => {
            button.addEventListener('click', () => {
                applyRoomLanguage(button.dataset.language);
            });
        });

        let saved = 'id';

        try {
            saved = sessionStorage.getItem('tanea-language') || 'id';
        } catch (_) {}

        applyRoomLanguage(saved);
    });
})();
