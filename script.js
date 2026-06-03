:root {
    --bg: #0b0f19;
    --surface: #131c2e;
    --surface-alt: #1e293b;
    --text: #f8fafc;
    --text-muted: #94a3b8;
    --primary: #0ea5e9;
    --primary-hover: #0284c7;
    --border-color: #1e293b;
    --card-hover: #1e293b;
    --input-bg: #1e293b;
    --success: #10b981;
}

body.light {
    --bg: #f8fafc;
    --surface: #ffffff;
    --surface-alt: #f1f5f9;
    --text: #0f172a;
    --text-muted: #64748b;
    --border-color: #e2e8f0;
    --card-hover: #f1f5f9;
    --input-bg: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s, color 0.3s;
    line-height: 1.6;
}

/* HEADER & NAV */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: var(--surface);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
}

.logo a {
    color: var(--primary);
    text-decoration: none;
    font-weight: 700;
    font-size: 1.4rem;
    letter-spacing: -0.5px;
}

.header nav a {
    margin: 0 15px;
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    opacity: 0.8;
    transition: opacity 0.2s, color 0.2s;
}

.header nav a:hover {
    opacity: 1;
    color: var(--primary);
}

.header .mode {
    width: auto;
    padding: 8px 16px;
    background: var(--surface-alt);
    border: 1px solid var(--border-color);
    color: var(--text);
    font-size: 0.85rem;
}

/* HERO SECTION */
.hero {
    padding: 140px 20px;
    background: radial-gradient(circle at top right, rgba(14, 165, 233, 0.15), transparent), linear-gradient(180deg, var(--surface), var(--bg));
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: auto;
}

.badge {
    background: rgba(14, 165, 233, 0.15);
    color: var(--primary);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 20px;
    letter-spacing: -1px;
}

.hero p {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 40px;
}

.hero-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
}

/* BUTTONS */
.btn {
    display: inline-block;
    padding: 14px 28px;
    background: var(--primary);
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
    transition: transform 0.2s, background 0.2s;
}

.btn:hover {
    background: var(--primary-hover);
    transform: translateY(-2px);
}

.btn-secondary {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background: var(--surface-alt);
}

/* STATS SECTION */
.stats-container {
    display: flex;
    justify-content: space-around;
    max-width: 1000px;
    margin: -50px auto 40px auto;
    background: var(--surface);
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.3);
    border: 1px solid var(--border-color);
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 5px;
}

/* SECTIONS STRUCTURE */
.section {
    padding: 80px 20px;
    max-width: 1100px;
    margin: auto;
}

.section-alt {
    background: var(--surface);
    max-width: 100%;
    padding: 80px calc((100% - 1100px) / 2 + 20px);
}

.section-header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px auto;
}

.section-header h2 {
    font-size: 2rem;
    margin-bottom: 15px;
    font-weight: 700;
}

.section-header p {
    color: var(--text-muted);
}

/* CARDS & GRID */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.card {
    background: var(--surface);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.3s ease;
}

body.light .card {
    background: var(--surface);
}

.card-icon {
    font-size: 2rem;
    margin-bottom: 15px;
}

.card h3 {
    margin-bottom: 10px;
    font-size: 1.3rem;
}

.card p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.card:hover, .card:focus-visible {
    transform: translateY(-5px);
    background: var(--card-hover);
    border-color: var(--primary);
}

.card.active {
    border-color: var(--primary);
    background: rgba(14, 165, 233, 0.05);
}

/* ENGAGEMENTS / FEATURES */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.feature-item {
    background: var(--bg);
    padding: 25px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
}

.feature-title {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 1.1rem;
}

.feature-item p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

/* BOOKING FORM & BOX */
.booking-box {
    max-width: 700px;
    margin: auto;
    background: var(--surface);
    border: 1px solid var(--border-color);
    padding: 40px;
    border-radius: 16px;
}

.selected-service-banner {
    background: var(--bg);
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 25px;
    border: 1px solid var(--border-color);
}

#serviceSelected {
    color: var(--primary);
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 0.9rem;
}

input, textarea {
    width: 100%;
    padding: 14px;
    background: var(--input-bg);
    color: var(--text);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
    font-size: 0.95rem;
}

input:focus, textarea:focus {
    border-color: var(--primary);
}

.btn-main {
    width: 100%;
    margin-top: 10px;
}

/* REVIEWS */
.review-card {
    background: var(--bg);
    padding: 30px;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}

.stars {
    margin-bottom: 10px;
}

.review-text {
    font-style: italic;
    color: var(--text);
    margin-bottom: 15px;
}

.review-author {
    color: var(--primary);
    font-weight: 600;
    font-size: 0.9rem;
}

/* CONTACT CARDS */
.contact-cards {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.contact-card {
    background: var(--surface);
    padding: 25px 40px;
    border-radius: 12px;
    text-decoration: none;
    color: var(--text);
    text-align: center;
    width: 100%;
    max-width: 350px;
    border: 1px solid var(--border-color);
    transition: transform 0.2s, border-color 0.2s;
}

.contact-card:hover {
    transform: translateY(-3px);
}

.border-whatsapp:hover { border-color: var(--success); }
.border-email:hover { border-color: var(--primary); }

.contact-icon {
    font-size: 2rem;
    display: block;
    margin-bottom: 10px;
}

/* RESULT PANEL */
#result {
    max-width: 700px;
    margin: 30px auto 0 auto;
    border-radius: 12px;
}

.result-box {
    background: var(--surface);
    border: 1px solid var(--border-color);
    padding: 25px;
    border-radius: 12px;
}

/* FOOTER */
.footer {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    font-size: 0.9 taxi-rem;
    border-top: 1px solid var(--border-color);
    background: var(--surface);
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* RESPONSIVE LAYOUT */
@media (max-width: 768px) {
    .header { flex-direction: column; gap: 15px; padding: 20px; }
    .hero h1 { font-size: 2.2rem; }
    .stats-container { flex-direction: column; gap: 20px; margin-top: 20px; }
    .contact-cards { flex-direction: column; align-items: center; }
}
