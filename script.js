const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero-banner img");
const playButtons = document.querySelectorAll(".play-btn");
const videoModal = document.getElementById("videoModal");
const videoBackdrop = document.getElementById("videoBackdrop");
const videoClose = document.getElementById("videoClose");
const videoFrame = document.getElementById("videoFrame");
const scrollProgress = document.getElementById("scrollProgress");

if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        document.body.style.overflow = mainNav.classList.contains("open") ? "hidden" : "";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            document.body.style.overflow = "";
        });
    });
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
        scrollProgress.style.width = `${Math.min(progress, 100)}%`;
    }

    if (siteHeader) {
        siteHeader.classList.toggle("scrolled", scrollTop > 8);
    }

    if (heroImage) {
        const zoom = 1.02 + Math.min(window.scrollY / 4000, 0.08);
        heroImage.style.transform = `scale(${zoom})`;
    }
});

const tiltCards = document.querySelectorAll(".media-card, .services-grid article, .process-grid article");

if (window.innerWidth > 900) {
    tiltCards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const rotateX = ((y / rect.height) - 0.5) * -8;
            const rotateY = ((x / rect.width) - 0.5) * 10;
            card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

const revealItems = document.querySelectorAll(".featured-block, .media-card, .contact-cta, .services-band, .agency-intro, .process-band");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
});

function openVideo(url) {
    if (!videoModal || !videoFrame) {
        return;
    }

    videoFrame.src = `${url}?autoplay=1&rel=0`;
    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeVideo() {
    if (!videoModal || !videoFrame) {
        return;
    }

    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    videoFrame.src = "";
    document.body.style.overflow = "";
}

playButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const url = button.getAttribute("data-video");
        if (url) {
            openVideo(url);
        }
    });
});

if (videoBackdrop) {
    videoBackdrop.addEventListener("click", closeVideo);
}

if (videoClose) {
    videoClose.addEventListener("click", closeVideo);
}

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeVideo();
    }
});
