/* =========================================================
   TANÉA GUESTHOUSE — ID / EN LANGUAGE SWITCHER
   Static bilingual content for the main landing page.
   ========================================================= */

(() => {
    const translations = {
        id: {
            '.navbar-menu a': ['Beranda', 'Tentang', 'Experience', 'Kamar', 'Galeri', 'Lokasi'],
            '[data-i18n="navBooking"]': ['PESAN SEKARANG'],
            '.mobile-menu-toggle': ['Buka menu'],

            '.story-intro h2': ['A Place to<br>Feel at Ease'],
            '.story-intro .eyebrow': ['filosofi'],
            '.story-intro-text': ['Terinspirasi dari kata “tana”, yang berarti bumi dan tempat untuk tinggal, tanéa guesthouse berada di Desa Mertak, Lombok Tengah, menawarkan tempat bernaung yang damai bagi para wisatawan yang mencari kehangatan, ketenangan, dan keseimbangan bersama alam.'],

            '.story-row-02 .story-description h3': ['made for her'],
            '.story-row-02 .story-description p': ['Tanéa adalah guesthouse yang ramah perempuan, dirancang dengan mengutamakan kenyamanan, privasi, dan ketenangan. Baik bepergian sendiri maupun mencari tempat untuk beristirahat, setiap pengalaman menginap dirancang agar terasa aman, hangat, dan praktis.'],

            '.story-row-03 .story-description h3': ['Work, Rest, Reset'],
            '.story-row-03 .story-description p': ['Saat pekerjaan tetap berjalan, tanéa menawarkan ruang yang tenang untuk bekerja dengan nyaman, beristirahat sejenak, dan kembali dengan pikiran lebih jernih. Penginapan untuk workcation, tempat produktivitas bertemu relaksasi.'],

            '.experience-header h2': ['temukan pengalaman anda'],
            '.experience-header > p': ['Nikmati momen relaksasi, jelajahi keindahan Lombok melalui perjalanan yang dirancang dengan cermat, dan rasakan petualangan di tengah lanskap pulau yang memukau. Dari perawatan spa hingga penjelajahan budaya dan alam, setiap pengalaman dirancang untuk memperkaya masa menginap Anda.'],
            '.experience-item-content h3': ['Spa & Pijat', 'Tur & Perjalanan', 'Petualangan'],
            '.experience-item-content p': ['Perlambat langkah, rileks, dan kembali terhubung dengan diri sendiri.', 'Jelajahi Lombok sesuai ritme Anda dengan pilihan transportasi yang praktis.', 'Temukan lanskap dan pengalaman alam Lombok yang mengesankan.'],
            '.experience-card-link': ['Jelajahi Perawatan →', 'Jelajahi Transportasi →', 'Jelajahi Petualangan →'],

            '.stay-content .section-label': ['Ciptakan kenangan indah lewat kenyamanan menginap yang istimewa.'],
            '.stay-content h2': ['Kamar'],
            '.stay-content > p': ['Temukan pengalaman menginap yang dirancang untuk menghadirkan kenyamanan, ketenangan, dan kedekatan dengan keindahan alam tropis Lombok. Setiap ruang memadukan suasana hangat, detail interior alami, serta atmosfer santai untuk menemani momen Anda di tanéa guesthouse.'],
            '.stay-room-view': ['LIHAT KAMAR ↗', 'LIHAT KAMAR ↗'],
            '.stay-room-info h3': ['Deluxe Room', 'Twin Room'],
            '.stay-room-info p': ['Ruang beristirahat yang nyaman dengan suasana alami untuk menemani waktu bersantai selama berada di Lombok.', 'Ruang yang dirancang untuk memberikan kenyamanan dan keleluasaan saat menikmati waktu bersama teman atau keluarga.'],
            '.stay-footer .text-link': ['Pesan Kamar →'],

            '.moments-heading .section-label': ['GALERI INSTAGRAM'],
            '.moments-heading h2': ['Momen di Tanéa'],
            '.moments-instagram-link': ['Ikuti perjalanan kami ↗'],
            '.moments-photo-overlay span': ['Lihat di Instagram ↗', 'Lihat di Instagram ↗', 'Lihat di Instagram ↗', 'Lihat di Instagram ↗'],
            '.moments-embed-label': ['PRATINJAU POSTINGAN INSTAGRAM'],

            
            '.location-top-label': ['lokasi'],
            '.location-sidebar-intro h2': ['jelajahi'],
            '.location-sidebar-intro p': [
                'Temukan pantai yang indah, lanskap yang memukau, dan destinasi lokal yang mudah dijangkau dari tanéa guesthouse.'
            ],
            '.destination-time': [
                'Jelajahi pesisir',
                'Pantai & pesisir',
                'Alam & lanskap',
                'Jelajahi pesisir'
            ],
            '.map-caption a': ['BUKA GOOGLE MAPS ↗'],
            '.location-directions': ['LIHAT LOKASI ↗'],


            '[data-i18n="bookingEyebrow"]': ['RESERVASI'],
            '[data-i18n="bookingHeading"]': ['Temukan ruang untuk beristirahat.'],
            '[data-i18n="bookingDescription"]': ['Pilih kamar yang sesuai dengan perjalanan Anda. Kami akan membantu melanjutkan reservasi melalui WhatsApp.'],
            '[data-i18n="bookDeluxe"]': ['Deluxe Room ↗'],
            '[data-i18n="bookTwin"]': ['Twin Room ↗'],

            '.footer-newsletter-heading .footer-eyebrow': ['TETAP TERHUBUNG DENGAN TANÉA GUESTHOUSE'],
            '.footer-newsletter-heading h2': ['Temukan inspirasi lewat<br>cerita, momen istimewa<br>dan keindahan Lombok.'],

            '.reviews-header .eyebrow': ['Ulasan'],
            '.reviews-heading': ['komentar tamu'],

            '.newsletter-input-row button': ['Berlangganan ➤'],
            '.newsletter-privacy span': ['Saya menyetujui Kebijakan Privasi'],
            '.footer-info-item .footer-info-label': ['ALAMAT', 'TELEPON / WHATSAPP', 'EMAIL', 'MEDIA SOSIAL'],
            '.footer-copyright span': ['© 2026 tanéa guesthouse. Hak cipta dilindungi.']
        },

        en: {
            '.navbar-menu a': ['Home', 'About', 'Experience', 'Rooms', 'Gallery', 'Location'],
            '[data-i18n="navBooking"]': ['BOOK NOW'],
            '.mobile-menu-toggle': ['Open menu'],

            '.story-intro h2': ['A Place to<br>Feel at Ease'],
            '.story-intro .eyebrow': ['philosophy'],
            '.story-intro-text': ['Inspired by the word “tana,” meaning earth and a place to stay, tanéa guesthouse is nestled in Mertak Village, Central Lombok, offering a peaceful sanctuary for travelers seeking warmth, tranquility, and balance amidst nature.'],

            '.story-row-02 .story-description h3': ['Made for her'],
            '.story-row-02 .story-description p': ['tanéa is a female-friendly guesthouse created with comfort, privacy, and peace of mind. Whether travelling solo or seeking a quieter escape, every stay is designed to feel safe, welcoming, and effortless.'],

            '.story-row-03 .story-description h3': ['Work, Rest, Reset'],
            '.story-row-03 .story-description p': ['While work carries on, tanéa offers a peaceful space to work in comfort, take a moment to rest, and return with a clearer mind. A stay designed for workcations, where productivity meets relaxation.'],

            '.experience-header h2': ['discover your experience'],
            '.experience-header > p': ['Indulge in moments of deep relaxation, discover the beauty of Lombok through thoughtfully curated journeys, and embrace exciting adventures surrounded by the island’s breathtaking landscapes. Each experience is designed to enrich your stay and connect you with Lombok’s authentic spirit.'],
            '.experience-item-content h3': ['Spa & Massage', 'Tour & Travel', 'Adventure'],
            '.experience-item-content p': ['Slow down, unwind, and reconnect with yourself.', 'Explore Lombok at your own pace with convenient transport.', 'Discover Lombok’s memorable landscapes and outdoor experiences.'],
            '.experience-card-link': ['Explore Treatment →', 'Explore Rentals →', 'Explore Adventures →'],

            '.stay-content .section-label': ['Create beautiful memories through an exceptional stay.'],
            '.stay-content h2': ['Rooms'],
            '.stay-content > p': ['Discover a stay designed for comfort, tranquility, and a closer connection to Lombok’s tropical beauty. Each room blends warm details, natural interiors, and a relaxed atmosphere for your time at tanéa guesthouse.'],
            '.stay-room-view': ['VIEW ROOM ↗', 'VIEW ROOM ↗'],
            '.stay-room-info h3': ['Deluxe Room', 'Twin Room'],
            '.stay-room-info p': ['A comfortable retreat with a natural atmosphere for relaxing during your time in Lombok.', 'A thoughtfully designed room offering comfort and space for time with friends or family.'],
            '.stay-footer .text-link': ['Book a Room →'],

            '.moments-heading .section-label': ['INSTAGRAM'],
            '.moments-heading h2': ['Moments at Tanéa'],
            '.moments-instagram-link': ['Follow our journey ↗'],
            '.moments-photo-overlay span': ['View on Instagram ↗', 'View on Instagram ↗', 'View on Instagram ↗', 'View on Instagram ↗'],
            '.moments-embed-label': ['INSTAGRAM POST PREVIEW'],

            
            '.location-top-label': ['location'],
            '.location-sidebar-intro h2': ['explore'],
            '.location-sidebar-intro p': [
                'Discover beautiful beaches, scenic landscapes, and local attractions, all within reach from tanéa guesthouse.'
            ],
            '.destination-time': [
                'Explore the coast',
                'Beach & coastline',
                'Nature & landscapes',
                'Coastal discovery'
            ],
            '.map-caption a': ['OPEN GOOGLE MAPS ↗'],
            '.location-directions': ['VIEW LOCATION ↗'],


            '.footer-newsletter-heading .footer-eyebrow': ['STAY CONNECTED WITH TANÉA GUESTHOUSE'],
            '.footer-newsletter-heading h2': ['Stay inspired with<br>stories, special moments<br>and Lombok discoveries.'],

            '.reviews-header .eyebrow': ['Review'],
            '.reviews-heading': ['guest comments'],
            
            '.newsletter-input-row button': ['Subscribe ➤'],
            '.newsletter-privacy span': ['I agree to the Privacy Policy'],
            '.footer-info-item .footer-info-label': ['ADDRESS', 'PHONE / WHATSAPP', 'EMAIL', 'SOCIAL'],
            '.footer-copyright span': ['© 2026 tanéa guesthouse. All rights reserved.']
        }
    };

    function applyLanguage(language) {
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

        /* Story titles: italic in Indonesian, normal in English */
        document.documentElement.classList.toggle(
            'story-title-italic',
            language === 'id'
        );

        const storyTitles = document.querySelectorAll(
            '.story-intro h2, ' +
            '.story-row-02 .story-description h3, ' +
            '.story-row-03 .story-description h3'
        );

        storyTitles.forEach(title => {
            title.style.setProperty(
                'font-style',
                language === 'id' ? 'italic' : 'normal',
                'important'
            );

            /* Prevent nested em/i tags from overriding the language style */
            title.querySelectorAll('em, i').forEach(child => {
                child.style.setProperty(
                    'font-style',
                    'inherit',
                    'important'
                );
            });
        });

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
                applyLanguage(button.dataset.language);
            });
        });

        let saved = 'id';

        try {
            saved = sessionStorage.getItem('tanea-language') || 'id';
        } catch (_) {}

        applyLanguage(saved);
    });
})();