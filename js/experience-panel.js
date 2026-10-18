
(() => {
    const section = document.querySelector("#experience");
    if (!section) return;

    const panel = section.querySelector("#experienceDetail");
    const backdrop = section.querySelector(".experience-detail-backdrop");
    const title = section.querySelector("#experienceDetailTitle");
    const description = section.querySelector("#experienceDetailDescription");
    const image = section.querySelector("#experienceDetailImage");
    const number = section.querySelector("#experienceDetailNumber");
    const priceArea = section.querySelector("#experiencePriceArea");
    const priceHeading = section.querySelector("#experiencePriceHeading");
    const priceList = section.querySelector("#experiencePriceList");
    const destinationArea = section.querySelector("#experienceDestinationArea");
    const destinations = section.querySelector("#experienceDestinations");
    const destinationFilters = section.querySelector("#experienceDestinationFilters");
    const destinationEmpty = section.querySelector("#experienceDestinationEmpty");
    const contact = section.querySelector("#experienceDetailContact");

    if (
        !panel || !backdrop || !title || !description || !image ||
        !number || !priceArea || !priceList || !destinationArea
    ) return;

    const experiences = {
        spa: {
            number: "EXPERIENCE — 01",
            title: "Spa & Massage",
            image: "assets/outdoor/relaxroom.png",
            alt: "Spa and Massage Tanéa Guesthouse",
            description:
                "A moment to return to yourself. Nikmati waktu relaksasi dalam suasana yang tenang dan natural.",
            heading: "Treatment Menu",
            price: 150000,
            items: [
                "Traditional Massage",
                "Aromatherapy Massage",
                "Hot Stone Massage",
                "Foot Reflexology",
                "Body Scrub"
            ],
            message:
                "Halo Tanéa Guesthouse, saya ingin bertanya tentang menu dan harga Spa & Massage."
        },

        travel: {
            number: "EXPERIENCE — 02",
            title: "Tour & Travel",
            image: "assets/outdoor/ViewOTDR7.jpeg",
            alt: "Pemandangan perjalanan di Lombok",
            description:
                "Explore Lombok at your own pace. Pilih kendaraan dan temukan destinasi menarik selama berada di Lombok.",

            heading: "Motor Rental",

            
        places: [
            // =====================================
            // BEACHES — 5 DESTINATIONS
            // =====================================
            {
                name: "Tanjung Aan",
                category: "beaches",
                time: "White Sand Beach",
                image: "assets/outdoor/destination-tanjung-aan.jpg"
            },
            {
                name: "Selong Belanak",
                category: "beaches",
                time: "Beach & Surfing",
                image: "assets/outdoor/destination-selong-belanak.jpg"
            },
            {
                name: "Pantai Mawun",
                category: "beaches",
                time: "Hidden Bay",
                image: "assets/outdoor/destination-mawun.jpg"
            },
            {
                name: "Pantai Seger",
                category: "beaches",
                time: "Coastal Landscape",
                image: "assets/outdoor/destination-seger.jpg"
            },
            {
                name: "Pink Beach",
                category: "beaches",
                time: "Pink Sand Beach",
                image: "assets/outdoor/destination-pink-beach.jpg"
            },

            // =====================================
            // CULTURE — SASAK HERITAGE
            // =====================================
            {
                name: "Desa Adat Sade",
                category: "culture",
                time: "Traditional Sasak Village",
                image: "assets/outdoor/destination-sade.jpg"
            },
            {
                name: "Desa Sukarara",
                category: "culture",
                time: "Traditional Weaving",
                image: "assets/outdoor/destination-sukarara.jpg"
            },
            {
                name: "Desa Banyumulek",
                category: "culture",
                time: "Traditional Pottery",
                image: "assets/outdoor/destination-banyumulek.jpg"
            },

            // =====================================
            // NATURE — 3 DESTINATIONS
            // =====================================
            {
                name: "Bukit Merese",
                category: "nature",
                time: "Hills & Ocean Views",
                image: "assets/outdoor/destination-merese.jpg"
            },
            {
                name: "Benang Kelambu Waterfall",
                category: "nature",
                time: "Tropical Waterfall",
                image: "assets/outdoor/destination-benang-kelambu.jpg"
            },
            {
                name: "Sembalun",
                category: "nature",
                time: "Mountain Landscape",
                image: "assets/outdoor/destination-sembalun.jpg"
            }
        ],


            message:
                "Halo Tanéa Guesthouse, saya ingin bertanya tentang rental motor, mobil, dan destinasi wisata di Lombok."
        },

        
        adventure: {
            number: "EXPERIENCE — 03",
            title: "Adventure",
            image: "assets/outdoor/view2.png",
            alt: "Aktivitas petualangan di Lombok",

            description:
                "Make your Lombok getaway more memorable. Discover exciting ways to explore the sea, coastline, and natural beauty of Lombok.",

            heading: "Recommended Activities",

            activities: [
                {
                    title: "Snorkeling",
                    description:
                        "Explore clear tropical waters and discover the beauty of marine life.",
                    image: "assets/outdoor/adventure-snorkeling.jpg",
                    alt: "Snorkeling in tropical waters"
                },
                {
                    title: "Surfing",
                    description:
                        "Experience Lombok's waves, whether you're learning or already love to surf.",
                    image: "assets/outdoor/adventure-surfing.jpg",
                    alt: "Surfing on a tropical beach"
                },
                {
                    title: "Stand-Up Paddleboarding",
                    description:
                        "Paddle across calm waters and enjoy a peaceful view of the coastline.",
                    image: "assets/outdoor/adventure-sup.jpg",
                    alt: "Stand-up paddleboarding"
                },
                {
                    title: "Scuba Diving",
                    description:
                        "Discover underwater landscapes and marine life with a suitable dive operator.",
                    image: "assets/outdoor/adventure-diving.jpg",
                    alt: "Scuba diving in tropical waters"
                },
                {
                    title: "Horse Riding",
                    description:
                        "Enjoy a guided horseback ride along available coastal or countryside routes.",
                    image: "assets/outdoor/adventure-horse-riding.jpg",
                    alt: "Horse riding along the coast"
                },
                {
                    title: "Coastal Hiking & Sunset Trek",
                    description:
                        "Explore scenic coastal hills and enjoy breathtaking sunset views.",
                    image: "assets/outdoor/adventure-hiking.jpg",
                    alt: "Hiking along Lombok's coastal hills"
                }
            ],

            message:
                "Halo Tanéa Guesthouse, saya ingin bertanya tentang aktivitas Adventure di Lombok dan ketersediaannya."
        }

    };

    let previousFocus = null;

    function addPriceRows(items, fixedPrice = null) {
        items.forEach(item => {
            const row = document.createElement("div");
            row.className = "experience-price-row";

            const itemName = document.createElement("span");
            itemName.textContent = Array.isArray(item) ? item[0] : item;

            const itemPrice = document.createElement("span");

            if (Array.isArray(item) && typeof item[1] === "number") {
                itemPrice.textContent = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0
                }).format(item[1]);
            } else if (Array.isArray(item)) {
                itemPrice.textContent = item[1];
            } else if (fixedPrice !== null) {
                itemPrice.textContent = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0
                }).format(fixedPrice);
            } else {
                itemPrice.textContent = "";
            }

            row.append(itemName, itemPrice);
            priceList.appendChild(row);
        });
    }

    const destinationCategories = [
        { key: "all", label: "all" },
        { key: "beaches", label: "beaches" },
        { key: "cafes", label: "cafés" },
        { key: "nature", label: "nature" },
        { key: "culture", label: "culture" }
    ];

    let activeDestinationCategory = "all";
    let activeTravelTab = "motor";
    let travelTabs = null;

    function createTravelTabs() {
        if (travelTabs) return travelTabs;

        travelTabs = document.createElement("div");
        travelTabs.className = "experience-travel-tabs";
        travelTabs.setAttribute("role", "tablist");
        travelTabs.setAttribute("aria-label", "Tour and Travel categories");

        const tabs = [
            { key: "motor", label: "Motor Rental" },
            { key: "car", label: "Car Rental" },
            { key: "destinations", label: "Destinations" }
        ];

        tabs.forEach(tab => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "experience-travel-tab";
            button.dataset.travelTab = tab.key;
            button.textContent = tab.label;
            button.setAttribute("role", "tab");

            button.addEventListener("click", () => {
                activeTravelTab = tab.key;
                renderTravelTab(tab.key);
            });

            travelTabs.appendChild(button);
        });

        priceArea.parentNode.insertBefore(travelTabs, priceArea);

        return travelTabs;
    }

    function renderTravelTab(tabKey) {
        if (!travelTabs) return;

        travelTabs.querySelectorAll(".experience-travel-tab").forEach(button => {
            const active = button.dataset.travelTab === tabKey;

            button.classList.toggle("is-active", active);
            button.setAttribute("aria-selected", String(active));
            button.tabIndex = active ? 0 : -1;
        });

        priceList.replaceChildren();

        if (destinationFilters) {
            destinationFilters.replaceChildren();
        }

        if (destinations) {
            destinations.replaceChildren();
        }

        if (tabKey === "destinations") {
            priceArea.hidden = true;
            destinationArea.hidden = false;

            activeDestinationCategory = "all";
            renderDestinationFilters(experiences.travel.places);
            renderDestinationCards(experiences.travel.places);
            return;
        }

        priceArea.hidden = false;
        destinationArea.hidden = true;

        
        if (tabKey === "motor") {
            priceHeading.textContent = "Motor Rental";

            const grid = document.createElement("div");
            grid.className = "experience-motor-cards";

            
            const motorOptions = [
                {
                    id: "with-rack",
                    title: "Motor / Scooter",
                    subtitle: "With Surf Rack",
                    image: "assets/outdoor/with_rack.png",
                    price: 100000,
                    description:
                        "A convenient option for exploring Lombok with your surfboard.",
                    message:
                        "Halo Tanéa Guesthouse, saya ingin bertanya tentang rental Motor / Scooter with Surf Rack seharga Rp100.000."
                },
                {
                    id: "without-rack",
                    title: "Motor / Scooter",
                    subtitle: "Without Surf Rack",
                    image: "assets/outdoor/without_rack.png",
                    price: 80000,
                    description:
                        "A convenient option for getting around Lombok.",
                    message:
                        "Halo Tanéa Guesthouse, saya ingin bertanya tentang rental Motor / Scooter without Surf Rack seharga Rp80.000."
                }
            ];


            motorOptions.forEach(option => {
                const card = document.createElement("button");
                card.type = "button";
                card.className = "experience-motor-card";
                card.dataset.motorOption = option.id;
                card.setAttribute("aria-pressed", "false");

                const photo = document.createElement("img");
                photo.className = "experience-motor-card-image";
                photo.src = option.image;
                photo.alt = option.title + " — " + option.subtitle;
                photo.loading = "lazy";

                const content = document.createElement("div");
                content.className = "experience-motor-card-content";

                const eyebrow = document.createElement("span");
                eyebrow.className = "experience-motor-card-eyebrow";
                eyebrow.textContent = "MOTOR / SCOOTER";

                const subtitle = document.createElement("h4");
                subtitle.className = "experience-motor-card-subtitle";
                subtitle.textContent = option.subtitle;

                const description = document.createElement("p");
                description.className = "experience-motor-card-description";
                description.textContent = option.description;

                
                const price = document.createElement("div");
                price.className = "experience-motor-card-price";

                const priceLabel = document.createElement("span");
                priceLabel.className = "experience-motor-card-price-label";
                priceLabel.textContent = "RENTAL PRICE";

                const priceValue = document.createElement("strong");
                priceValue.className = "experience-motor-card-price-value";
                priceValue.textContent = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0
                }).format(option.price);

                price.append(priceLabel, priceValue);


                const viewMore = document.createElement("span");
                viewMore.className = "experience-motor-card-link";
                viewMore.textContent = "SELECT OPTION ↗";

                content.append(eyebrow, subtitle, description, price, viewMore);
                card.append(photo, content);

                card.addEventListener("click", () => {
                    grid.querySelectorAll(".experience-motor-card").forEach(item => {
                        const selected = item === card;

                        item.classList.toggle("is-selected", selected);
                        item.setAttribute("aria-pressed", String(selected));
                    });

                    if (contact) {
                        contact.href =
                            "https://wa.me/6281311394071?text=" +
                            encodeURIComponent(option.message);
                    }

                    if (contact) {
                        contact.textContent = "ASK ABOUT " +
                            (option.id === "with-rack" ? "SURF RACK" : "SCOOTER") +
                            " ↗";
                    }
                });

                grid.appendChild(card);
            });

            priceList.appendChild(grid);
            return;
        }


        
            if (tabKey === "car") {
                priceHeading.textContent = "Car Rental";

                const grid = document.createElement("div");
                grid.className = "experience-motor-cards";

                
                const carOptions = [
                    {
                        title: "Car Rental",
                        subtitle: "7-Seater",
                        image: "assets/outdoor/7seat.png",
                        price: 999990,
                        description:
                            "A spacious option for families and groups exploring Lombok.",
                        message:
                            "Halo Tanéa Guesthouse, saya ingin bertanya tentang rental mobil 7-Seater."
                    },
                    {
                        title: "Car Rental",
                        subtitle: "5-Seater",
                        image: "assets/outdoor/5seat.png",
                        price: 999990,
                        description:
                            "A comfortable option for smaller groups exploring Lombok.",
                        message:
                            "Halo Tanéa Guesthouse, saya ingin bertanya tentang rental mobil 5-Seater."
                    }
                ];

                carOptions.forEach(option => {
                    const card = document.createElement("article");
                    card.className = "experience-motor-card";

                    const image = document.createElement("img");
                    image.className = "experience-motor-card-image";
                    image.src = option.image;
                    image.alt = option.subtitle + " car rental";
                    image.loading = "lazy";

                    const content = document.createElement("div");
                    content.className = "experience-motor-card-content";

                    const eyebrow = document.createElement("span");
                    eyebrow.className = "experience-motor-card-eyebrow";
                    eyebrow.textContent = option.title;

                    const subtitle = document.createElement("h4");
                    subtitle.className = "experience-motor-card-subtitle";
                    subtitle.textContent = option.subtitle;

                    const description = document.createElement("p");
                    description.className = "experience-motor-card-description";
                    description.textContent = option.description;

                    
                    const price = document.createElement("div");
                    price.className = "experience-motor-card-price";

                    const priceLabel = document.createElement("span");
                    priceLabel.className = "experience-motor-card-price-label";
                    priceLabel.textContent = "RENTAL PRICE";

                    const priceValue = document.createElement("strong");
                    priceValue.className = "experience-motor-card-price-value";
                    priceValue.textContent =
                        option.price > 0
                            ? new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                maximumFractionDigits: 0
                            }).format(option.price)
                            : "Price to be confirmed";

                    price.append(priceLabel, priceValue);

                    const viewMore = document.createElement("a");
                    viewMore.className = "experience-motor-card-link";
                    viewMore.href =
                        "https://wa.me/6281311394071?text=" +
                        encodeURIComponent(option.message);
                    viewMore.target = "_blank";
                    viewMore.rel = "noopener noreferrer";
                    viewMore.textContent = "ASK ABOUT THIS CAR ↗";

                    content.append(
                    eyebrow,
                    subtitle,
                    description,
                    price,
                    viewMore
                );

                    card.append(image, content);
                    grid.appendChild(card);
                });

                priceList.appendChild(grid);
                return;
            }

    }

    function renderDestinationFilters(places) {
        if (!destinationFilters) return;

        destinationFilters.replaceChildren();

        destinationCategories.forEach(category => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "experience-destination-filter";
            button.textContent = category.label;
            button.dataset.category = category.key;

            button.setAttribute(
                "aria-pressed",
                String(activeDestinationCategory === category.key)
            );

            button.classList.toggle(
                "is-active",
                activeDestinationCategory === category.key
            );

            button.addEventListener("click", () => {
                activeDestinationCategory = category.key;

                destinationFilters
                    .querySelectorAll(".experience-destination-filter")
                    .forEach(item => {
                        const active = item.dataset.category === category.key;

                        item.classList.toggle("is-active", active);
                        item.setAttribute("aria-pressed", String(active));
                    });

                renderDestinationCards(places);
            });

            destinationFilters.appendChild(button);
        });
    }

    function renderDestinationCards(places) {
        if (!destinations) return;

        destinations.replaceChildren();

        const filtered = activeDestinationCategory === "all"
            ? places
            : places.filter(
                place => place.category === activeDestinationCategory
            );

        filtered.forEach(place => {
            const cardEl = document.createElement("article");
            cardEl.className = "experience-destination";

            const photo = document.createElement("img");
            photo.src = place.image;
            photo.alt = place.name;
            photo.loading = "lazy";

            const info = document.createElement("div");
            info.className = "experience-destination-info";

            const placeTitle = document.createElement("h5");
            placeTitle.textContent = place.name;

            const placeTime = document.createElement("p");
            placeTime.textContent = place.time;

            info.append(placeTitle, placeTime);
            cardEl.append(photo, info);
            destinations.appendChild(cardEl);
        });

        if (destinationEmpty) {
            destinationEmpty.hidden = filtered.length > 0;
            destinationEmpty.textContent = filtered.length
                ? ""
                : "Destinations for this category will be added soon.";
        }
    }


        function renderAdventureCards(activities) {
            priceList.replaceChildren();

            const grid = document.createElement("div");
            grid.className = "experience-adventure-grid";

            activities.forEach(activity => {
                const card = document.createElement("article");
                card.className = "experience-adventure-card";

                const photo = document.createElement("img");
                photo.className = "experience-adventure-image";
                photo.src = activity.image;
                photo.alt = activity.alt;
                photo.loading = "lazy";

                const content = document.createElement("div");
                content.className = "experience-adventure-content";

                const heading = document.createElement("h4");
                heading.className = "experience-adventure-title";
                heading.textContent = activity.title;

                const description = document.createElement("p");
                description.className = "experience-adventure-description";
                description.textContent = activity.description;

                content.append(heading, description);
                card.append(photo, content);
                grid.appendChild(card);
            });

            priceList.appendChild(grid);
        }


    function openPanel(key, card) {
        const data = experiences[key];
        if (!data) return;

        previousFocus = card;

        title.textContent = data.title;
        panel.dataset.experienceType = key;
        description.textContent = data.description;
        number.textContent = data.number;
        image.src = data.image;
        image.alt = data.alt;

        priceList.replaceChildren();

        if (destinations) {
            destinations.replaceChildren();
        }

        if (destinationFilters) {
            destinationFilters.replaceChildren();
        }

        activeDestinationCategory = "all";

        
        if (key === "travel") {
            activeTravelTab = "motor";
            createTravelTabs();
            travelTabs.hidden = false;
            renderTravelTab("motor");

        } else {
            if (travelTabs) {
                travelTabs.hidden = true;
            }

            destinationArea.hidden = !data.places;
            priceArea.hidden = !data.items && !data.activities;

            if (data.activities) {
                priceHeading.textContent = data.heading;
                renderAdventureCards(data.activities);

            } else if (data.items) {
                priceHeading.textContent = data.heading;
                addPriceRows(data.items, data.price ?? null);
            }

            if (data.places) {
                renderDestinationFilters(data.places);
                renderDestinationCards(data.places);
            }
        }


        if (contact) {
            contact.href =
                "https://wa.me/6281311394071?text=" +
                encodeURIComponent(data.message);
        }

        panel.inert = false;
        panel.setAttribute("aria-hidden", "false");
        backdrop.setAttribute("aria-hidden", "false");

        panel.classList.add("is-open");
        backdrop.classList.add("is-open");
        document.body.classList.add("experience-detail-active");

        section.querySelectorAll("[data-experience-card]").forEach(item => {
            item.classList.toggle("is-active", item === card);
        });

        panel.querySelector(".experience-detail-close")?.focus({
            preventScroll: true
        });
    }

    function closePanel() {
        if (!panel.classList.contains("is-open")) return;

        panel.classList.remove("is-open");
        backdrop.classList.remove("is-open");

        panel.setAttribute("aria-hidden", "true");
        panel.inert = true;
        backdrop.setAttribute("aria-hidden", "true");

        document.body.classList.remove("experience-detail-active");

        section.querySelectorAll("[data-experience-card]").forEach(item => {
            item.classList.remove("is-active");
        });

        previousFocus?.focus({ preventScroll: true });
    }

    section.querySelectorAll("[data-experience-card]").forEach(card => {
        card.addEventListener("click", () => {
            openPanel(card.dataset.experienceCard, card);
        });
    });

    section.querySelectorAll("[data-detail-close]").forEach(button => {
        button.addEventListener("click", closePanel);
    });

    document.addEventListener("keydown", event => {
        if (!panel.classList.contains("is-open")) return;

        if (event.key === "Escape") {
            closePanel();
        }
    });
})();
