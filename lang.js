/* ===== FORMEVITAL LANGUAGE SWITCHER ===== */

const translations = {
    en: {
        nav_blog: "Blog",
        nav_biohacking: "Biohacking",
        nav_contact: "Contact",
        title: "VisiFlora Review 2026: The Hidden Link Between Vision & Gut",
        date: "September 2026",
        category: "Vision & Gut Health",
        readtime: "6 min read",
        intro: 'Did you know that your eye health depends directly on your gut microbiome? This is what the latest research on the "Gut-Eye Axis" reveals. <strong>VisiFlora</strong> is the first supplement to target this unique connection.',
        h2_why: "Why VisiFlora Changes the Game",
        why_text: "Unlike classic supplements (Lutein + Zinc) that only treat symptoms, VisiFlora uses a hybrid formula:",
        point1_strong: "Specific probiotics",
        point1: "for ocular nutrient absorption.",
        point2_strong: "Powerful antioxidants",
        point2: "(Lutein, Zeaxanthin) to protect the macula.",
        point3_strong: "Neurological support",
        point3: "for the eye-brain connection.",
        product_title: "VisiFlora — Hybrid Vision & Gut Formula",
        prod_point1: "Rank #19 ClickBank (Top Seller)",
        prod_point2: "60-Day Money-Back Guarantee",
        prod_point3: '"Blue Ocean Offer" (Low competition)',
        cta_button: "Check official price →",
        h2_verdict: "FormeVital Verdict",
        verdict: "If you're over 50 and feel your vision declining despite carrots and blueberries, the problem may come from your gut. VisiFlora is the most innovative solution of 2026.",
        transparency: "Transparency: This site contains affiliate links. We may earn a commission at no extra cost to you.",
        footer_rights: "All rights reserved.",
        footer_tagline: "Cellular Health Optimization & Natural Wellness"
    },
    fr: {
        nav_blog: "Blog",
        nav_biohacking: "Biohacking",
        nav_contact: "Contact",
        title: "VisiFlora Avis 2026 : Le lien caché entre Vision et Intestin",
        date: "Septembre 2026",
        category: "Vision & Santé Intestinale",
        readtime: "6 min de lecture",
        intro: 'Saviez-vous que la santé de vos yeux dépend directement de votre microbiote intestinal ? C\'est ce que révèle la dernière recherche sur l\'"Axe Intestin-Yeux". <strong>VisiFlora</strong> est le premier supplément à cibler cette connexion unique.',
        h2_why: "Pourquoi VisiFlora change la donne",
        why_text: "Contrairement aux compléments classiques (Lutéine + Zinc) qui ne traitent que les symptômes, VisiFlora utilise une formule hybride :",
        point1_strong: "Probiotiques spécifiques",
        point1: "pour l'absorption des nutriments oculaires.",
        point2_strong: "Antioxydants puissants",
        point2: "(Lutéine, Zéaxanthine) pour protéger la macula.",
        point3_strong: "Support neurologique",
        point3: "pour la connexion œil-cerveau.",
        product_title: "VisiFlora — Formule Hybride Vision & Intestin",
        prod_point1: "Rang #19 ClickBank (Top Vendeur)",
        prod_point2: "Garantie 60 jours satisfait ou remboursé",
        prod_point3: '"Offre Océan Bleu" (Faible concurrence)',
        cta_button: "Voir le prix officiel →",
        h2_verdict: "Verdict FormeVital",
        verdict: "Si vous avez plus de 50 ans et que vous sentez votre vision baisser malgré les carottes et les myrtilles, le problème vient peut-être de votre intestin. VisiFlora est la solution la plus innovante de 2026.",
        transparency: "Transparence : Ce site contient des liens d'affiliation. Nous pouvons toucher une commission sans frais supplémentaires pour vous.",
        footer_rights: "Tous droits réservés.",
        footer_tagline: "Optimisation Santé Cellulaire & Bien-être Naturel"
    },
    mg: {
        nav_blog: "Blog",
        nav_biohacking: "Biohacking",
        nav_contact: "Fifandraisana",
        title: "VisiFlora Review 2026: Ny fifandraisana miafina eo amin'ny Maso sy ny Kibo",
        date: "Septambra 2026",
        category: "Fahasalaman'ny Maso sy ny Kibo",
        readtime: "6 minitra vakiana",
        intro: 'Fantatrao ve fa ny fahasalaman\'ny masonao dia miankina mivantana amin\'ny microbiote ao an-kibonao? Izany no hitan\'ny fikarohana farany momba ny "Gut-Eye Axis". <strong>VisiFlora</strong> no fanampiana voalohany mikendry ity fifandraisana manokana ity.',
        h2_why: "Nahoana VisiFlora no manova ny lalao",
        why_text: "Tsy toy ny fanampiana klasika (Lutein + Zinc) izay manasitrana fotsiny ny soritr'aretina, VisiFlora dia mampiasa formula hybride:",
        point1_strong: "Probiotique manokana",
        point1: "ho an'ny fahazoana sakafo ho an'ny maso.",
        point2_strong: "Antioxydant mahery",
        point2: "(Lutein, Zeaxanthin) hiaro ny macula.",
        point3_strong: "Fanohanana neurologique",
        point3: "ho an'ny fifandraisana maso-atidoha.",
        product_title: "VisiFlora — Formula Hybride Maso & Kibo",
        prod_point1: "Laharana #19 ClickBank (Mpivarotra ambony)",
        prod_point2: "Garantie 60 andro fahafaham-po na vola averina",
        prod_point3: '"Tolotra Ranomasina Manga" (Fifaninanana kely)',
        cta_button: "Jereo ny vidiny ofisialy →",
        h2_verdict: "Verdict FormeVital",
        verdict: "Raha mihoatra ny 50 taona ianao ary mahatsapa fa mihamalemy ny fahitanao na dia misy karaoty sy voankazo mainty aza, mety avy amin'ny kibonao ny olana. VisiFlora no vahaolana vaovao indrindra amin'ny 2026.",
        transparency: "Fahamalinana: Misy lien affiliation ity site ity. Mety hahazo commission izahay tsy misy vidiny fanampiny ho anao.",
        footer_rights: "Zo rehetra voatahiry.",
        footer_tagline: "Fanatsarana fahasalamana cellular & fahasalamana voajanahary"
    }
};

const langFlags = { en: '🇬', fr: '🇫🇷', mg: '🇲🇬' };
const langNames = { en: 'English', fr: 'Français', mg: 'Malagasy' };

// Get current language from localStorage or default to 'en'
let currentLang = localStorage.getItem('fvLang') || 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fvLang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Update language button
    const flagEl = document.getElementById('langFlag');
    const nameEl = document.getElementById('langName');
    if (flagEl) flagEl.textContent = langFlags[lang];
    if (nameEl) nameEl.textContent = langNames[lang];
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    
    // Language button click
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });
        
        // Language option clicks
        const options = langDropdown.querySelectorAll('.lang-option');
        options.forEach(option => {
            option.addEventListener('click', function() {
                const newLang = this.getAttribute('data-lang');
                applyLanguage(newLang);
                langDropdown.classList.remove('show');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            langDropdown.classList.remove('show');
        });
    }
});
