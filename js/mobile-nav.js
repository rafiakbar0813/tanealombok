/* Menu hamburger untuk halaman kamar (index.html punya versi sendiri di script.js) */
(function () {
    var toggle = document.querySelector(".mobile-menu-toggle");
    var menu = document.querySelector(".navbar-menu");
    if (!toggle || !menu) return;

    var mq = window.matchMedia("(max-width: 1100px)");

    function setOpen(open) {
        menu.classList.toggle("is-open", open);
        toggle.classList.toggle("is-open", open);
        document.body.classList.toggle("menu-open", open);
        toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
        setOpen(!menu.classList.contains("is-open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { setOpen(false); });
    });
    document.addEventListener("click", function (e) {
        if (menu.classList.contains("is-open") && !e.target.closest(".navbar")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && menu.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    var onChange = function () { if (!mq.matches) setOpen(false); };
    if (mq.addEventListener) mq.addEventListener("change", onChange); else mq.addListener(onChange);
})();
