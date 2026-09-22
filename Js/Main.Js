// ================= LANGUAGE TOGGLE (EN / AR) =================

const langToggle = document.getElementById("langToggle");
const translatableEls = document.querySelectorAll("[data-en][data-ar]");

function applyLanguage(lang) {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    translatableEls.forEach((el) => {
        el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
    });

    document.title = lang === "ar"
        ? "جيجي كاترينج | أكل بيتي في مصر"
        : "Gigi Catering | Homemade Food in Egypt";

    localStorage.setItem("gigiLang", lang);
}

function getSavedLanguage() {
    try {
        return localStorage.getItem("gigiLang") || "en";
    } catch (e) {
        return "en";
    }
}

langToggle.addEventListener("click", () => {
    const nextLang = document.documentElement.lang === "ar" ? "en" : "ar";
    applyLanguage(nextLang);
});

applyLanguage(getSavedLanguage());


// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
});

// Close the mobile menu whenever a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("open");
    });
});


// ================= ACTIVE LINK ON SCROLL =================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

function setActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 90;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}


// ================= SCROLL TO TOP BUTTON =================

const scrollTopBtn = document.getElementById("scrollTopBtn");

function toggleScrollTopBtn() {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ================= COMBINED SCROLL LISTENER =================

window.addEventListener("scroll", () => {
    setActiveLink();
    toggleScrollTopBtn();
});


// ================= REVEAL FEATURE CARDS ON SCROLL =================

const featureCards = document.querySelectorAll(".feature-card");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("reveal");
                }, index * 120);

                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

featureCards.forEach((card) => revealObserver.observe(card));


// ================= RUN ON PAGE LOAD =================

document.addEventListener("DOMContentLoaded", () => {
    setActiveLink();
    toggleScrollTopBtn();
});