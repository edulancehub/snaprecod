const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");
const heroImage = document.querySelector(".hero-banner img");
const playButtons = document.querySelectorAll(".play-btn");
const videoModal = document.getElementById("videoModal");
const videoBackdrop = document.getElementById("videoBackdrop");
const videoClose = document.getElementById("videoClose");
const videoFrame = document.getElementById("videoFrame");
const langEN = document.getElementById("langEN");
const langBN = document.getElementById("langBN");

const translations = {
    en: {
        nav_home: "Home",
        nav_services: "What We Do",
        nav_process: "How We Do It",
        nav_gallery: "Gallery",
        nav_about: "Who We Are",
        nav_contact: "Contact Us",
        hero_title: "FILM AGENCY",
        hero_sub: "Bengali & English creative production for cinema, drama and brands.",
        trust_1: "Trusted for Film & Ad Production",
        trust_2: "OTT Ready Workflow",
        trust_3: "4K / 6K Delivery",
        trust_4: "Color + Sound Finish",
        trust_5: "Fast Turnaround",
        about_title: "Snaprecod is a full-stack visual production studio.",
        about_text: "We produce feature films, drama series, campaign videos, music content, and social-first branded stories with directors, cinematographers, editors, colorists and sound designers under one team.",
        stat_1: "Delivered Projects",
        stat_2: "Active Team Members",
        stat_3: "Years of Production",
        services_title: "What We Do",
        service_1_t: "Film & Drama Production",
        service_1_d: "Script to screen production with crew, equipment, and post pipeline.",
        service_2_t: "Commercial Campaigns",
        service_2_d: "Brand films and ad creatives for TV, OTT and social platforms.",
        service_3_t: "Music & Culture Visuals",
        service_3_d: "Music videos, cultural documentaries, and event visual films.",
        lifestyle_1: "Our brand and lifestyle video production showcases your unique story, values, and people. We build emotional connection through cinematic storytelling and bold visual language.",
        lifestyle_2: "Check out some examples below...",
        locations_1: "We capture authentic moments in diverse settings from factory floors to outdoor locations, adding context and cinematic depth.",
        locations_2: "Check out some examples below...",
        card_1: "Children 1st : CMSS Volunteer Promo Video",
        card_2: "Government Social Campaign : Atmospheric TV Advert",
        card_3: "Healthcare Brand : TV Commercial",
        card_4: "Science Zone - Innovation Showcase",
        card_5: "Hotel Brand : Presence & Demand Campaign",
        card_6: "Public Information Shoot : #BeCourteous",
        process_title: "How We Do It",
        p1_t: "Creative Discovery",
        p1_d: "Brand goals, audience mapping, and script strategy.",
        p2_t: "Production Planning",
        p2_d: "Location, casting, schedule, and shot division.",
        p3_t: "Shooting & Direction",
        p3_d: "High-end capture with dedicated on-set supervision.",
        p4_t: "Post & Delivery",
        p4_d: "Edit, color, sound and multi-platform delivery.",
        cta_title: "Let's Build Your Next Film",
        cta_btn: "Message on Instagram"
    },
    bn: {
        nav_home: "হোম",
        nav_services: "আমরা যা করি",
        nav_process: "কাজের ধাপ",
        nav_gallery: "গ্যালারি",
        nav_about: "আমরা কারা",
        nav_contact: "যোগাযোগ",
        hero_title: "ফিল্ম এজেন্সি",
        hero_sub: "সিনেমা, নাটক ও ব্র্যান্ডের জন্য বাংলা ও ইংরেজি ক্রিয়েটিভ প্রোডাকশন।",
        trust_1: "ফিল্ম ও বিজ্ঞাপন প্রোডাকশনে বিশ্বস্ত",
        trust_2: "OTT রেডি ওয়ার্কফ্লো",
        trust_3: "4K / 6K ডেলিভারি",
        trust_4: "কালার ও সাউন্ড ফিনিশ",
        trust_5: "দ্রুত ডেলিভারি",
        about_title: "Snaprecod একটি পূর্ণাঙ্গ ভিজ্যুয়াল প্রোডাকশন স্টুডিও।",
        about_text: "আমরা ফিচার ফিল্ম, নাটক সিরিজ, ক্যাম্পেইন ভিডিও, মিউজিক কনটেন্ট এবং সোশ্যাল ব্র্যান্ড স্টোরি নির্মাণ করি। পরিচালক, সিনেমাটোগ্রাফার, সম্পাদক, কালারিস্ট ও সাউন্ড ডিজাইনারসহ এক টিমে কাজ সম্পন্ন করি।",
        stat_1: "সম্পন্ন প্রোজেক্ট",
        stat_2: "সক্রিয় টিম সদস্য",
        stat_3: "বছরের অভিজ্ঞতা",
        services_title: "আমরা যা করি",
        service_1_t: "ফিল্ম ও নাটক প্রোডাকশন",
        service_1_d: "স্ক্রিপ্ট থেকে স্ক্রিন পর্যন্ত পূর্ণাঙ্গ প্রোডাকশন সাপোর্ট।",
        service_2_t: "কমার্শিয়াল ক্যাম্পেইন",
        service_2_d: "টিভি, OTT ও সোশ্যাল মিডিয়ার জন্য ব্র্যান্ড ফিল্ম ও বিজ্ঞাপন।",
        service_3_t: "মিউজিক ও কালচারাল ভিজ্যুয়াল",
        service_3_d: "মিউজিক ভিডিও, ডকুমেন্টারি ও ইভেন্ট ফিল্ম তৈরি।",
        lifestyle_1: "আমাদের লাইফস্টাইল ও ব্র্যান্ড ভিডিও আপনার গল্প, মূল্যবোধ ও মানুষের বাস্তব মুখ তুলে ধরে। সিনেম্যাটিক ভাষা দিয়ে আমরা দর্শকের সাথে আবেগের সংযোগ তৈরি করি।",
        lifestyle_2: "নিচে কিছু কাজ দেখুন...",
        locations_1: "কারখানা থেকে আউটডোর লোকেশন পর্যন্ত বাস্তব পরিবেশে আমরা শক্তিশালী ভিজ্যুয়াল গল্প ধারণ করি।",
        locations_2: "নিচে কিছু কাজ দেখুন...",
        card_1: "চিলড্রেন ফার্স্ট : ভলান্টিয়ার প্রোমো ভিডিও",
        card_2: "সরকারি সামাজিক ক্যাম্পেইন : টিভি বিজ্ঞাপন",
        card_3: "হেলথকেয়ার ব্র্যান্ড : টিভি কমার্শিয়াল",
        card_4: "সায়েন্স জোন : ইনোভেশন শোকেস",
        card_5: "হোটেল ব্র্যান্ড : উপস্থিতি ও ডিমান্ড ক্যাম্পেইন",
        card_6: "জনসচেতনতা শুট : #BeCourteous",
        process_title: "আমরা যেভাবে কাজ করি",
        p1_t: "ক্রিয়েটিভ ডিসকভারি",
        p1_d: "ব্র্যান্ড লক্ষ্য, অডিয়েন্স ম্যাপিং ও স্ক্রিপ্ট স্ট্র্যাটেজি।",
        p2_t: "প্রোডাকশন পরিকল্পনা",
        p2_d: "লোকেশন, কাস্টিং, শিডিউল ও শট ডিভিশন।",
        p3_t: "শুটিং ও ডিরেকশন",
        p3_d: "উন্নত ক্যাপচার ও অন-সেট সুপারভিশন।",
        p4_t: "পোস্ট ও ডেলিভারি",
        p4_d: "এডিট, কালার, সাউন্ড এবং মাল্টি-প্ল্যাটফর্ম ডেলিভারি।",
        cta_title: "আপনার পরবর্তী ফিল্ম প্রোজেক্ট শুরু করি",
        cta_btn: "ইনস্টাগ্রামে মেসেজ করুন"
    }
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.getAttribute("data-i18n");
        if (dict[key]) {
            node.textContent = dict[key];
        }
    });

    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    if (langEN && langBN) {
        langEN.classList.toggle("active", lang === "en");
        langBN.classList.toggle("active", lang === "bn");
    }
}

if (langEN) {
    langEN.addEventListener("click", () => applyLanguage("en"));
}
if (langBN) {
    langBN.addEventListener("click", () => applyLanguage("bn"));
}

if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}

window.addEventListener("scroll", () => {
    if (siteHeader) {
        siteHeader.classList.toggle("scrolled", window.scrollY > 8);
    }

    if (heroImage) {
        const zoom = 1.02 + Math.min(window.scrollY / 4000, 0.08);
        heroImage.style.transform = `scale(${zoom})`;
    }
});

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

applyLanguage("en");
