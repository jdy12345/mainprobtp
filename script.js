// ===== THÈME (Clair/Sombre) =====
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

// Initialiser le thème au chargement
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        updateThemeIcon(true);
    }
}

function updateThemeIcon(isDark) {
    const icon = document.querySelector('.theme-icon');
    icon.textContent = isDark ? '☀️' : '🌓';
}

// ===== MENU MOBILE =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Fermer le menu mobile si on clique ailleurs
document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.querySelector('.mobile-menu-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.style.display = 'none';
    }
});

// ===== SÉLECTION DE SERVICE =====
function selectService(service) {
    const status = document.getElementById('serviceStatus');
    const serviceNames = {
        depannage: '⚡ Dépannage d\'urgence',
        maintenance: '⚙️ Maintenance préventive',
        chantier: '🏗️ Gestion de chantiers'
    };
    status.textContent = serviceNames[service] || '⚡ Aucun service sélectionné';
    document.getElementById('serviceType').value = service;

    // Fermer le menu mobile si ouvert
    document.getElementById('mobileMenu').style.display = 'none';
}

function updateServiceStatus() {
    const select = document.getElementById('serviceType');
    const status = document.getElementById('serviceStatus');
    const serviceNames = {
        depannage: '⚡ Dépannage d\'urgence',
        maintenance: '⚙️ Maintenance préventive',
        chantier: '🏗️ Gestion de chantiers'
    };
    status.textContent = serviceNames[select.value] || '⚡ Aucun service sélectionné';
}

// ===== SOUMISSION DU FORMULAIRE =====
document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const resultPanel = document.getElementById('result');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Désactiver le bouton pendant le traitement
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Traitement...</span> <span class="spinner">🌀</span>';

    // Simuler un délai de traitement (remplacer par un vrai appel API)
    setTimeout(() => {
        // Récupérer les valeurs
        const service = form.serviceType.value;
        const location = form.location.value;
        const date = form.date.value;
        const details = form.details.value;
        const phone = form.phone.value;

        // Générer un devis aléatoire (exemple)
        const servicesPrices = {
            depannage: { min: 25000, max: 150000 },
            maintenance: { min: 50000, max: 300000 },
            chantier: { min: 500000, max: 5000000 }
        };
        const priceRange = servicesPrices[service] || { min: 20000, max: 100000 };
        const estimatedPrice = Math.floor(
            Math.random() * (priceRange.max - priceRange.min + 1) + priceRange.min
        ).toLocaleString('fr-FR');

        // Afficher le résultat
        resultPanel.innerHTML = `
            <div class="result-box">
                <div class="result-icon">✅</div>
                <h3>Devis généré avec succès !</h3>
                <p>Votre demande a été enregistrée. Voici une estimation :</p>
                <div class="result-details">
                    <div class="result-item">
                        <span class="result-label">Service :</span>
                        <span class="result-value">${form.serviceType.options[form.serviceType.selectedIndex].text}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Localisation :</span>
                        <span class="result-value">${location}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Date :</span>
                        <span class="result-value">${new Date(date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Estimation :</span>
                        <strong class="result-value">${estimatedPrice} FCFA</strong>
                    </div>
                </div>
                <p class="result-message">
                    Un conseiller vous contactera sous 15 minutes au <strong>${phone}</strong> pour confirmer l'intervention.
                </p>
                <a href="https://wa.me/2250141298874?text=Bonjour%2C%20je%20souhaite%20confirmer%20ma%20demande%20d%27intervention%20pour%20${encodeURIComponent(service)}%20%C3%A0%20${encodeURIComponent(location)}"
                   class="btn btn-primary"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span>Confirmer par WhatsApp</span>
                    <span class="btn-arrow">→</span>
                </a>
            </div>
        `;

        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Demander l\'intervention</span> <span class="btn-arrow">→</span>';

        // Scroll vers le résultat
        resultPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Réinitialiser le formulaire (optionnel)
        // form.reset();
    }, 1500);
});

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                const delayClass = entry.target.dataset.delay ? `delay-${entry.target.dataset.delay}` : '';
                if (delayClass) {
                    entry.target.classList.add(delayClass);
                }
            }
        });
    }, { threshold: 0.1 });

    // Observer les éléments avec la classe "animate-on-scroll"
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Ajouter la classe aux éléments clés
    document.querySelectorAll('.section-header, .service-card, .engagement-card, .testimonial-card, .contact-card').forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.dataset.delay = (index % 4) + 1; // Delay de 1 à 4
    });
}

// ===== STATS ANIMATION (Counter) =====
function animateStats() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target.replace(/\D/g, ''));
                const isDecimal = entry.target.dataset.target.includes('.');
                let current = 0;
                const increment = target / 100;
                const duration = 2000; // 2 secondes
                const stepTime = duration / 100;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    entry.target.textContent = isDecimal
                        ? (current / 10).toFixed(1).replace('.', ',')
                        : Math.floor(current).toLocaleString('fr-FR');
                }, stepTime);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollAnimations();
    animateStats();

    // Fermer le menu mobile au clic sur un lien
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('mobileMenu').style.display = 'none';
        });
    });
});
