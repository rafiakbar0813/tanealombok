// =========================================================
// TANÉA GUESTHOUSE
// MAIN JAVASCRIPT
// CINEMATIC MINIMAL
// =========================================================


// =========================================================
// 01. NAVBAR — CHANGE ON SCROLL
// =========================================================

const navbar =
    document.querySelector(".navbar");


function handleNavbar() {

    if (!navbar) return;


    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    handleNavbar,
    {
        passive: true
    }
);


handleNavbar();


// =========================================================
// 02. HERO BACKGROUND FADE
// =========================================================

const heroBackgroundSlides =
    document.querySelectorAll(
        ".hero-bg-slide"
    );


let heroBackgroundIndex = 0;

let heroBackgroundTimer = null;


// =========================================================
// CHANGE HERO BACKGROUND
// =========================================================

function changeHeroBackground() {

    if (
        heroBackgroundSlides.length < 2
    ) {

        return;

    }


    const currentSlide =
        heroBackgroundSlides[
            heroBackgroundIndex
        ];


    const nextIndex =
        (
            heroBackgroundIndex + 1
        ) %
        heroBackgroundSlides.length;


    const nextSlide =
        heroBackgroundSlides[
            nextIndex
        ];


    /*
     * NEXT SLIDE DI ATAS
     */

    nextSlide.style.visibility =
        "visible";

    nextSlide.style.zIndex =
        "1";


    /*
     * FADE IN
     */

    nextSlide.classList.add(
        "active"
    );


    /*
     * CURRENT SLIDE DI BAWAH
     */

    currentSlide.style.zIndex =
        "0";


    /*
     * BERSIHKAN SLIDE LAMA
     */

    window.setTimeout(
        () => {

            currentSlide.classList.remove(
                "active"
            );

            currentSlide.style.visibility =
                "hidden";

        },
        2300
    );


    heroBackgroundIndex =
        nextIndex;

}


// =========================================================
// START HERO BACKGROUND
// =========================================================

function startHeroBackground() {

    if (heroBackgroundTimer) {

        clearInterval(
            heroBackgroundTimer
        );

    }


    if (
        heroBackgroundSlides.length < 2
    ) {

        return;

    }


    heroBackgroundTimer =
        setInterval(
            changeHeroBackground,
            6500
        );

}


startHeroBackground();


// =========================================================
// 02B. EXPERIENCE BACKGROUND
// FULLSCREEN CROSSFADE
// =========================================================

const experienceSlides =
    document.querySelectorAll(
        ".experience-bg-slide"
    );


const experienceItems =
    document.querySelectorAll(
        ".experience-item"
    );


const experienceIndexItems =
    document.querySelectorAll(
        ".experience-index-item"
    );


let experienceIndex = 0;

let experienceTimer = null;


// =========================================================
// CHANGE EXPERIENCE
// =========================================================

function changeExperience(
    target
) {

    if (
        !experienceSlides.length
    ) {

        return;

    }


    /*
     * CARI SLIDE BERDASARKAN
     * data-experience
     */

    const targetSlide =
        document.querySelector(
            `.experience-bg-slide[data-experience="${target}"]`
        );


    if (!targetSlide) {

        return;

    }


    /*
     * MATIKAN SEMUA BACKGROUND
     */

    experienceSlides.forEach(
        (slide) => {

            slide.classList.remove(
                "is-active"
            );

        }
    );


    /*
     * AKTIFKAN BACKGROUND BARU
     */

    targetSlide.classList.add(
        "is-active"
    );


    /*
     * UPDATE EXPERIENCE CARD
     */

    experienceItems.forEach(
        (item) => {

            item.classList.toggle(
                "is-active",

                item.dataset
                    .experienceCard ===
                target

            );

        }
    );


    /*
     * UPDATE LEFT MENU
     */

    experienceIndexItems.forEach(
        (item) => {

            item.classList.toggle(
                "is-active",

                item.dataset
                    .experienceTarget ===
                target

            );

        }
    );


    /*
     * SIMPAN INDEX AKTIF
     */

    const newIndex =
        Array.from(
            experienceSlides
        ).indexOf(
            targetSlide
        );


    if (newIndex !== -1) {

        experienceIndex =
            newIndex;

    }

}


// =========================================================
// START EXPERIENCE SLIDER
// =========================================================

function startExperienceSlider() {

    if (experienceTimer) {

        clearInterval(
            experienceTimer
        );

        experienceTimer =
            null;

    }


    if (
        experienceSlides.length < 2
    ) {

        return;

    }


    experienceTimer =
        setInterval(
            () => {

                const nextIndex =
                    (
                        experienceIndex + 1
                    ) %
                    experienceSlides.length;


                const nextSlide =
                    experienceSlides[
                        nextIndex
                    ];


                if (!nextSlide) {
                    return;
                }


                changeExperience(
                    nextSlide.dataset
                        .experience
                );

            },
            6500
        );

}


// =========================================================
// EXPERIENCE CARD CLICK
// =========================================================

experienceItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            () => {

                const target =
                    item.dataset
                        .experienceCard;


                if (!target) {
                    return;
                }


                changeExperience(
                    target
                );


                startExperienceSlider();

            }
        );

    }
);


// =========================================================
// EXPERIENCE LEFT MENU CLICK
// =========================================================

experienceIndexItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            () => {

                const target =
                    item.dataset
                        .experienceTarget;


                if (!target) {
                    return;
                }


                changeExperience(
                    target
                );


                startExperienceSlider();

            }
        );

    }
);


// =========================================================
// EXPERIENCE INITIALIZE
// =========================================================

if (
    experienceSlides.length
) {

    changeExperience(
        "resto"
    );


    startExperienceSlider();

}


// =========================================================
// 03. SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(`
        .section-intro,
        .discover-grid,
        .discover-container,
        .stay-heading,
        .stay-container,
        .room-showcase,
        .experience-card,
        .experience-strip-item,
        .experience-item,
        .comfort-layout,
        .comfort-container,
        .gallery-item,
        .moments-container,
        .explore-heading,
        .explore-container,
        .map-container,
        .booking-content,
        .booking-container,
        .booking-content-new,
        .reviews-header,
        .reviews-widget-container
    `);


if (
    revealElements.length &&
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (entry.isIntersecting) {
                            entry.target.classList.add("is-visible");
                        } else {
                            entry.target.classList.remove("is-visible");
                        }

                    }
                );

            },

            {
                threshold: 0.12,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );


            revealObserver.observe(
                element
            );

        }
    );

}


// =========================================================
// 04. ACTIVE NAVIGATION
// =========================================================

const navLinks =
    document.querySelectorAll(
        ".navbar-menu a"
    );


const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navbarMenu =
    document.querySelector(
        ".navbar-menu"
    );


if (
    navLinks.length &&
    sections.length &&
    navbarMenu
) {

    // -----------------------------------------------------
    // ACTIVE LINE
    // -----------------------------------------------------

    let activeLine =
        navbarMenu.querySelector(
            ".navbar-active-line"
        );


    if (!activeLine) {

        activeLine =
            document.createElement(
                "span"
            );


        activeLine.className =
            "navbar-active-line";


        navbarMenu.appendChild(
            activeLine
        );

    }


    // -----------------------------------------------------
    // MOVE ACTIVE LINE
    // -----------------------------------------------------

    function moveActiveLine(link) {

        if (!link) return;


        // matchMedia mengikuti CSS & TIDAK terpengaruh pinch-zoom
        // (window.innerWidth di Chrome Android ikut mengecil saat zoom-in)
        if (
            window.matchMedia(
                "(max-width: 1100px)"
            ).matches
        ) {

            activeLine.style.opacity =
                "0";

            return;

        }


        const menuRect =
            navbarMenu
                .getBoundingClientRect();


        const linkRect =
            link.getBoundingClientRect();


        const lineWidth = 18;


        const linkCenter =
            linkRect.left +
            (
                linkRect.width / 2
            );


        const lineLeft =
            linkCenter -
            menuRect.left -
            (
                lineWidth / 2
            );


        activeLine.style.width =
            `${lineWidth}px`;


        activeLine.style.transform =
            `translateX(${lineLeft}px)`;


        activeLine.style.opacity =
            "1";

    }


    // -----------------------------------------------------
    // UPDATE ACTIVE NAVIGATION
    // -----------------------------------------------------

    function updateActiveNavigation() {

        const navbarHeight =
            navbar
                ? navbar.offsetHeight
                : 0;


        const triggerPoint =
            window.scrollY +
            navbarHeight +
            (
                document.documentElement.clientHeight *
                0.30
            );


        let activeSection =
            sections[0];


        sections.forEach(
            (section) => {

                if (
                    section.offsetTop <=
                    triggerPoint
                ) {

                    activeSection =
                        section;

                }

            }
        );


        const activeId =
            activeSection.id;


        let activeLink = null;


        navLinks.forEach(
            (link) => {

                const linkTarget =
                    link.getAttribute(
                        "href"
                    );


                const isActive =
                    linkTarget ===
                    `#${activeId}`;


                link.classList.toggle(
                    "active",
                    isActive
                );


                if (isActive) {

                    activeLink =
                        link;

                }

            }
        );


        if (activeLink) {

            moveActiveLine(
                activeLink
            );

        } else {

            activeLine.style.opacity =
                "0";

        }

    }


    // -----------------------------------------------------
    // SCROLL
    // -----------------------------------------------------

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    // -----------------------------------------------------
    // RESIZE
    // -----------------------------------------------------

    window.addEventListener(
        "resize",
        () => {

            updateActiveNavigation();

        }
    );


    // -----------------------------------------------------
    // INITIALIZE
    // -----------------------------------------------------

    updateActiveNavigation();

}


// =========================================================
// 05. MOBILE NAVIGATION
// =========================================================

const mobileMenuToggle =
    document.querySelector(
        ".mobile-menu-toggle"
    );


const navbarMenuMobile =
    document.querySelector(
        ".navbar-menu"
    );


if (
    mobileMenuToggle &&
    navbarMenuMobile
) {

    const collapseQuery =
        window.matchMedia(
            "(max-width: 1100px)"
        );


    function setMobileMenu(open) {

        navbarMenuMobile
            .classList
            .toggle("is-open", open);

        mobileMenuToggle
            .classList
            .toggle("is-open", open);

        document.body
            .classList
            .toggle("menu-open", open);

        mobileMenuToggle
            .setAttribute(
                "aria-expanded",
                String(open)
            );

        mobileMenuToggle
            .setAttribute(
                "aria-label",
                open
                    ? "Tutup menu"
                    : "Buka menu"
            );

    }


    mobileMenuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    mobileMenuToggle.addEventListener(
        "click",
        () => {

            setMobileMenu(
                !navbarMenuMobile
                    .classList
                    .contains("is-open")
            );

        }
    );


    // Tutup setelah pilih menu
    navbarMenuMobile
        .querySelectorAll("a")
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => setMobileMenu(false)
                );

            }
        );


    // Tutup saat tap di luar navbar
    document.addEventListener(
        "click",
        (event) => {

            if (
                navbarMenuMobile
                    .classList
                    .contains("is-open") &&
                !event.target.closest(".navbar")
            ) {

                setMobileMenu(false);

            }

        }
    );


    // Tutup dengan tombol Escape
    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                navbarMenuMobile
                    .classList
                    .contains("is-open")
            ) {

                setMobileMenu(false);

                mobileMenuToggle.focus();

            }

        }
    );


    // Putar HP / ubah ukuran jendela ke layout desktop:
    // pastikan scroll body tidak terkunci dan menu tidak "nyangkut"
    const handleCollapseChange = () => {

        if (!collapseQuery.matches) {

            setMobileMenu(false);

        }

    };

    if (collapseQuery.addEventListener) {

        collapseQuery.addEventListener(
            "change",
            handleCollapseChange
        );

    } else {

        // Safari < 14
        collapseQuery.addListener(
            handleCollapseChange
        );

    }

}


// =========================================================
// 06. SMOOTH NAVIGATION
// =========================================================

const navigationLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


navigationLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target
                        .getBoundingClientRect()
                        .top +
                    window.scrollY -
                    navbarHeight;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    }
);


// =========================================================
// 07. HERO PHOTO MARQUEE
// =========================================================

const heroPhotoTrack =
    document.querySelector(
        ".hero-photo-track"
    );


if (heroPhotoTrack) {

    /*
     * SIMPAN FOTO ASLI
     */

    const originalPhotos =
        Array.from(
            heroPhotoTrack.children
        );


    /*
     * DUPLIKASI FOTO
     */

    originalPhotos.forEach(
        (photo) => {

            const clone =
                photo.cloneNode(true);


            heroPhotoTrack.appendChild(
                clone
            );

        }
    );


    /*
     * ANIMATION STATE
     */

    let marqueePosition = 0;

    let marqueeLastTime =
        performance.now();

    let marqueePaused = false;


    /*
     * SPEED
     */

    const marqueeSpeed = 35;


    /*
     * ANIMATION
     */

    function animateHeroMarquee(
        currentTime
    ) {

        if (!marqueePaused) {

            const deltaTime =
                (
                    currentTime -
                    marqueeLastTime
                ) / 1000;


            marqueePosition -=
                marqueeSpeed *
                deltaTime;


            /*
             * RESET LOOP
             */

            // Jarak satu siklus = posisi foto-kloning pertama.
            // (scrollWidth / 2 meleset sebesar setengah "gap" di HP,
            //  sehingga marquee terlihat loncat tiap putaran.)
            const loopWidth =
                heroPhotoTrack
                    .children[
                        originalPhotos.length
                    ].offsetLeft;


            if (
                Math.abs(
                    marqueePosition
                ) >= loopWidth
            ) {

                marqueePosition +=
                    loopWidth;

            }


            heroPhotoTrack.style.transform =
                `translate3d(
                    ${marqueePosition}px,
                    0,
                    0
                )`;

        }


        marqueeLastTime =
            currentTime;


        requestAnimationFrame(
            animateHeroMarquee
        );

    }


    requestAnimationFrame(
        animateHeroMarquee
    );


    /*
     * PAUSE SAAT TAB TIDAK AKTIF
     */

    document.addEventListener(
        "visibilitychange",
        () => {

            marqueePaused =
                document.visibilityState !==
                "visible";


            marqueeLastTime =
                performance.now();

        }
    );


    /*
     * REDUCED MOTION
     */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        reducedMotion.matches
    ) {

        marqueePaused = true;


        heroPhotoTrack.style.transform =
            "translate3d(0, 0, 0)";

    }

}


// =========================================================
// 08. REDUCED MOTION
// =========================================================

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


function handleReducedMotion() {

    if (
        prefersReducedMotion.matches
    ) {

        /*
         * STOP HERO BACKGROUND
         */

        if (heroBackgroundTimer) {

            clearInterval(
                heroBackgroundTimer
            );

            heroBackgroundTimer =
                null;

        }


        /*
         * STOP EXPERIENCE
         */

        if (experienceTimer) {

            clearInterval(
                experienceTimer
            );

            experienceTimer =
                null;

        }


        /*
         * STOP HERO MARQUEE
         */

        if (heroPhotoTrack) {

            heroPhotoTrack.style.animation =
                "none";

        }

    } else {

        /*
         * START HERO
         */

        if (
            !heroBackgroundTimer &&
            heroBackgroundSlides.length > 1
        ) {

            startHeroBackground();

        }


        /*
         * START EXPERIENCE
         */

        if (
            !experienceTimer &&
            experienceSlides.length > 1
        ) {

            startExperienceSlider();

        }


        /*
         * RESTORE MARQUEE
         */

        if (heroPhotoTrack) {

            heroPhotoTrack.style.animation =
                "";

        }

    }

}


handleReducedMotion();


if (
    prefersReducedMotion.addEventListener
) {

    prefersReducedMotion.addEventListener(
        "change",
        handleReducedMotion
    );

}


// =========================================================
// 09. PREVENT EMPTY LINKS
// =========================================================

document
    .querySelectorAll(
        'a[href="#"]'
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();

                }
            );

        }
    );


// =========================================================
// 10. INITIALIZE
// =========================================================

console.log(
    "tanéa guesthouse — Cinematic Minimal initialized."
);


// =========================================================
// 11. OUR STORY — FADE IN / FADE OUT
// =========================================================

const storyRows =
    document.querySelectorAll(
        ".story-row"
    );


if (
    storyRows.length &&
    "IntersectionObserver" in window
) {

    const storyObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add(
                                    "is-visible"
                                );

                        } else {

                            entry.target
                                .classList
                                .remove(
                                    "is-visible"
                                );

                        }

                    }
                );

            },

            {
                threshold: 0.18
            }

        );


    storyRows.forEach(
        (row) => {

            storyObserver.observe(
                row
            );

        }
    );

}

/* =========================================================
   TANÉA EXPERIENCE — INTERACTIVE DETAIL PANEL
   ========================================================= */

(() => {
    const section = document.querySelector("#experience");
    if (!section) return;

    const panel = section.querySelector("#experienceDetail");
    const backdrop = section.querySelector(
        ".experience-detail-backdrop"
    );

    const title = section.querySelector("#experienceDetailTitle");
    const description = section.querySelector(
        "#experienceDetailDescription"
    );
    const image = section.querySelector("#experienceDetailImage");
    const number = section.querySelector("#experienceDetailNumber");

    const cards = section.querySelectorAll(
        "[data-experience-card]"
    );
    const closeButtons = section.querySelectorAll(
        "[data-detail-close]"
    );

    if (
        !panel ||
        !backdrop ||
        !title ||
        !description ||
        !image ||
        !number
    ) return;

    const experiences = {
        resto: {
            number: "EXPERIENCE — 01",
            title: "Resto & Kafe",
            image: "assets/outdoor/dining.png",
            alt: "Resto dan Kafe Tanéa",
            ornament: "tanea-ornamen-1.png",
            description:
                "Tempat untuk menikmati hidangan, berbagi cerita, " +
                "dan memperpanjang momen kebersamaan. Biarkan suasana " +
                "yang hangat melengkapi pengalaman menginap Anda."
        },

        spa: {
            number: "EXPERIENCE — 02",
            title: "Spa & Massage",
            image: "assets/outdoor/relaxroom.png",
            alt: "Suasana ruang relaksasi",
            ornament: "tanea-ornamen-2.png",
            description:
                "A moment to return to yourself. Temukan kembali " +
                "ritme yang lebih tenang melalui waktu istirahat " +
                "yang memberi ruang bagi tubuh dan pikiran."
        },

        pool: {
            number: "EXPERIENCE — 03",
            title: "Kolam Renang",
            image: "assets/outdoor/kolam3.png",
            alt: "Kolam renang Tanéa",
            ornament: "tanea-ornamen-3.png",
            description:
                "Di antara hijaunya suasana tropis dan pantulan air " +
                "yang tenang, nikmati jeda tanpa terburu-buru. " +
                "Biarkan hari berjalan dengan ritmenya sendiri."
        },

        local: {
            number: "EXPERIENCE — 04",
            title: "Pengalaman Lokal",
            image: "assets/outdoor/view2.png",
            alt: "Pemandangan di sekitar Tanéa",
            ornament: "tanea-ornamen-4.png",
            description:
                "Kenali sisi lain Lombok melalui suasana, keseharian, " +
                "dan keindahan di sekitarnya. Bawa pulang cerita " +
                "yang lebih dari sekadar tempat yang pernah dikunjungi."
        }
    };

    let previousFocus = null;
    let closeTimer = null;

    function openPanel(key, card) {
        const data = experiences[key];
        if (!data) return;

        window.clearTimeout(closeTimer);
        previousFocus = card;

        title.textContent = data.title;
        description.textContent = data.description;
        number.textContent = data.number;

        image.src = data.image;
        image.alt = data.alt;

        const ornamentUrl = new URL(
            `assets/ornaments/${data.ornament}`,
            document.baseURI
        ).href;

        panel.style.setProperty(
            "--experience-ornament",
            `url("${ornamentUrl}")`
        );

        panel.classList.toggle(
            "is-local-experience",
            key === "local"
        );

        cards.forEach((item) => {
            item.classList.toggle("is-active", item === card);
        });

        panel.inert = false;
        panel.setAttribute("aria-hidden", "false");

        backdrop.setAttribute("aria-hidden", "false");

        panel.classList.add("is-open");
        backdrop.classList.add("is-open");

        document.body.classList.add("experience-detail-active");

        const closeButton = panel.querySelector(
            ".experience-detail-close"
        );

        closeButton?.focus({ preventScroll: true });
    }

    function closePanel() {
        if (!panel.classList.contains("is-open")) return;

        panel.classList.remove("is-open");
        backdrop.classList.remove("is-open");

        panel.setAttribute("aria-hidden", "true");
        panel.inert = true;

        backdrop.setAttribute("aria-hidden", "true");

        document.body.classList.remove("experience-detail-active");

        cards.forEach((item) => {
            item.classList.remove("is-active");
        });

        if (previousFocus) {
            previousFocus.focus({ preventScroll: true });
        }

        closeTimer = window.setTimeout(() => {
            image.src = "assets/outdoor/dining.png";
            image.alt = "";
        }, 650);
    }

    cards.forEach((card) => {
        const key = card.dataset.experienceCard;

        card.addEventListener("click", () => {
            openPanel(key, card);
        });

        card.addEventListener("keydown", (event) => {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openPanel(key, card);
            }
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closePanel);
    });

    document.addEventListener("keydown", (event) => {
        if (!panel.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closePanel();
            return;
        }

        if (event.key === "Tab") {
            const focusable = [
                ...panel.querySelectorAll(
                    'button:not([disabled]), a[href], ' +
                    'input:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ].filter((element) => {
                return element.getClientRects().length > 0;
            });

            if (focusable.length === 0) {
                event.preventDefault();
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (
                event.shiftKey &&
                document.activeElement === first
            ) {
                event.preventDefault();
                last.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === last
            ) {
                event.preventDefault();
                first.focus();
            }
        }
    });
})();