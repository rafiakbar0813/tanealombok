/* =========================================================
   TANÉA GUESTHOUSE
   GOOGLE REVIEWS — HORIZONTAL SLIDER
   ========================================================= */

(() => {
    "use strict";

    const initReviews = () => {
        const section = document.querySelector("#reviews");

        if (!section) return;

        const viewport = section.querySelector(".reviews-viewport");
        const track = section.querySelector(".reviews-track");
        const cards = Array.from(
            section.querySelectorAll(".review-card")
        );

        const prevButton = section.querySelector(".reviews-prev");
        const nextButton = section.querySelector(".reviews-next");
        const pagination = section.querySelector(".reviews-pagination");
        const googleLink = section.querySelector("#reviewsGoogleLink");

        if (googleLink) {
            googleLink.href =
                "https://maps.app.goo.gl/QtVHffbfXvTw5UzZA";
            googleLink.target = "_blank";
            googleLink.rel = "noopener noreferrer";
        }

        if (!viewport || !track || cards.length === 0) return;

        let currentIndex = 0;
        let visibleCards = 3;
        let maxIndex = 0;
        let resizeTimer;

        const getVisibleCards = () => {
            // matchMedia: tidak ikut berubah saat pinch-zoom
            if (window.matchMedia("(max-width: 640px)").matches) return 1;
            if (window.matchMedia("(max-width: 1024px)").matches) return 2;
            return 3;
        };

        const getGap = () => {
            const styles = window.getComputedStyle(track);
            return parseFloat(styles.columnGap) || 0;
        };

        const createPagination = () => {
            if (!pagination) return;

            pagination.innerHTML = "";

            for (let i = 0; i <= maxIndex; i++) {
                const dot = document.createElement("button");

                dot.type = "button";
                dot.className = "reviews-dot";
                dot.setAttribute("aria-label", `Show review ${i + 1}`);

                dot.addEventListener("click", () => {
                    currentIndex = i;
                    updateSlider();
                });

                pagination.appendChild(dot);
            }
        };

        const updateSlider = () => {
            visibleCards = getVisibleCards();
            maxIndex = Math.max(0, cards.length - visibleCards);

            currentIndex = Math.min(currentIndex, maxIndex);

            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = getGap();
            const offset = currentIndex * (cardWidth + gap);

            track.style.transform = `translateX(-${offset}px)`;

            if (prevButton) {
                prevButton.disabled = currentIndex === 0;
            }

            if (nextButton) {
                nextButton.disabled = currentIndex >= maxIndex;
            }

            if (pagination) {
                const dots = pagination.querySelectorAll(".reviews-dot");

                dots.forEach((dot, index) => {
                    dot.classList.toggle("active", index === currentIndex);
                    dot.setAttribute(
                        "aria-current",
                        index === currentIndex ? "true" : "false"
                    );
                });
            }
        };

        const rebuildSlider = () => {
            visibleCards = getVisibleCards();
            maxIndex = Math.max(0, cards.length - visibleCards);
            currentIndex = Math.min(currentIndex, maxIndex);

            createPagination();
            updateSlider();
        };

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                currentIndex = Math.max(0, currentIndex - 1);
                updateSlider();
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                currentIndex = Math.min(maxIndex, currentIndex + 1);
                updateSlider();
            });
        }

        window.addEventListener("resize", () => {
            window.clearTimeout(resizeTimer);

            resizeTimer = window.setTimeout(() => {
                rebuildSlider();
            }, 150);
        });

        rebuildSlider();
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initReviews, {
            once: true
        });
    } else {
        initReviews();
    }
})();