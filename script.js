// =========================
// AOS Init
// =========================
AOS.init({
    duration: 1000,
    once: true
});

// =========================
// Typed.js
// =========================
new Typed("#typing", {
    strings: [
        "Junior Data Analyst",
        "Business Intelligence Analyst",
        "AI & Machine Learning Enthusiast"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});

// =========================
// Theme Toggle
// =========================
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = toggle.querySelector("i");
    if (document.body.classList.contains("light-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});

// =========================
// Lightbox
// =========================
const lightbox     = document.getElementById("lightbox");
const lightboxImg  = document.getElementById("lightbox-img");
const closeBtn     = document.getElementById("lightbox-close");
const prevBtn      = document.getElementById("lightbox-prev");
const nextBtn      = document.getElementById("lightbox-next");

let allImages = [];   
let currentIndex = 0;

function collectImages() {
    allImages = Array.from(document.querySelectorAll(".lightbox-trigger"));
}

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = allImages[currentIndex].src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function showPrev() {
    currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

function showNext() {
    currentIndex = (currentIndex + 1) % allImages.length;
    lightboxImg.src = allImages[currentIndex].src;
}

document.addEventListener("DOMContentLoaded", () => {
    collectImages();

    allImages.forEach((img, i) => {
        img.addEventListener("click", () => openLightbox(i));
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", showPrev);
    nextBtn.addEventListener("click", showNext);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "ArrowLeft")  showPrev();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "Escape")     closeLightbox();
    });
});

// =========================
// Contact Form
// =========================
const WHATSAPP_NUMBER = "201004036432";
const EMAIL_ADDRESS   = "yoseef.sameh178@gmail.com";

document.getElementById("send-whatsapp").addEventListener("click", () => {
    const name    = document.getElementById("sender-name").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !message) {
        alert("Please fill in your name and message before sending.");
        return;
    }

    const text = `Hello Youseef! My name is ${name}.\n\n${message}`;
    const url  = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
});

document.getElementById("send-email").addEventListener("click", () => {
    const name    = document.getElementById("sender-name").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !message) {
        alert("Please fill in your name and message before sending.");
        return;
    }

    const subject = `Portfolio Message from ${name}`;
    const body    = `Hello Youseef,\n\nMy name is ${name}.\n\n${message}`;
    const url     = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
});