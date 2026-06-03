let selectedService = "";
let cost = 0;
let assignedProviderName = ""; 

function toggleDarkMode() {
    document.body.classList.toggle("light");
}

function selectService(service) {
    selectedService = service;
    document.getElementById("serviceSelected").textContent = `${service} sélectionné ✔`;

    const cards = document.querySelectorAll(".card");
    cards.forEach(c => c.classList.remove("active"));

    cards.forEach(c => {
        if (c.querySelector("h3").textContent === service) {
            c.classList.add("active");
        }
    });
}

function startBooking() {
    const locationInput = document.getElementById("location");
    const detailsInput = document.getElementById("details");
    const phoneInput = document.getElementById("userPhone");
    const resultDiv = document.getElementById("result");

    let location = locationInput.value.trim();
    let details = detailsInput.value.trim();
    let phone = phoneInput.value.trim();

    if (!selectedService || !location || !details || !phone) {
        alert("Veuillez sélectionner un service (en cliquant sur une carte) et remplir tous les champs du formulaire.");
        return;
    }

    const phoneRegex = /^(\+?225)?\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        alert("Veuillez entrer un numéro de téléphone WhatsApp valide au format standard.");
        return;
    }

    let base = 10000;
    if (selectedService === "Dépannage") base = 15000;
    if (selectedService === "Maintenance") base = 25000;
    if (selectedService === "Contrat") base = 40000;

    cost = base + Math.floor(Math.random() * 5000);

    resultDiv.innerHTML = `
        <div class="result-box">
            <h3 style="color: var(--primary); margin-bottom:15px;">📊 Analyse algorithmique</h3>
            <p style="margin-bottom: 8px;"><strong>Catégorie :</strong> ${selectedService}</p>
            <p style="margin-bottom: 8px;"><strong>Frais d'intervention estimés :</strong> <span style="color:var(--primary); font-weight:700;">${cost.toLocaleString()} FCFA</span></p>
            <p style="color: var(--text-muted); font-style:italic;" class="loading">🔍 Allocation de l'artisan certifié le plus proche...</p>
        </div>
    `;

    setTimeout(assignProvider, 2500);
}

function assignProvider() {
    const providers = ["Alain Dubois", "Fatou Keita", "Jean Konan"];
    assignedProviderName = providers[Math.floor(Math.random() * providers.length)];
    const resultBox = document.querySelector(".result-box");

    const loadingText = resultBox.querySelector(".loading");
    if(loadingText) loadingText.remove();

    const providerParagraph = document.createElement("p");
    providerParagraph.style.marginTop = "10px";
    providerParagraph.innerHTML = `👷 <strong>Artisan disponible :</strong> ${assignedProviderName} <span style="color:#10b981; font-size:0.85rem;">(Certifié RGE)</span>`;
    resultBox.appendChild(providerParagraph);

    setTimeout(() => {
        const payButton = document.createElement("button");
        payButton.type = "button";
        payButton.className = "btn";
        payButton.textContent = "Confirmer & Payer l'acompte";
        payButton.onclick = pay;
        payButton.style.marginTop = "20px";
        payButton.style.width = "100%";
        resultBox.appendChild(payButton);
    }, 1200);
}

function pay() {
    const resultBox = document.querySelector(".result-box");
    const location = document.getElementById("location").value.trim();
    const details = document.getElementById("details").value.trim();
    const clientPhone = document.getElementById("userPhone").value.trim();
    
    resultBox.innerHTML = "<p style='text-align:center;'>⚡ <em>Traitement sécurisé du paiement en cours...</em></p>";

    setTimeout(() => {
        resultBox.innerHTML = `
            <div style="text-align:center; padding:10px;">
                <h3 style='color: #10b981; margin-bottom:10px;'>✔ Paiement Validé 🎉</h3>
                <p>Génération automatique du reçu sur WhatsApp et Email...</p>
            </div>
        `;
        
        let messageText = `🏗️ MAIN PRO BTP - CONFIRMATION DE COMMANDE\n\n`;
        messageText += `🛠️ Service de base : ${selectedService}\n`;
        messageText += `💰 Montant Total Facturé : ${cost.toLocaleString()} FCFA\n`;
        messageText += `📍 Lieu d'intervention : ${location}\n`;
        messageText += `📝 Spécifications : ${details}\n`;
        messageText += `📞 Contact Client : ${clientPhone}\n`;
        messageText += `👷 Artisan Assigné : ${assignedProviderName}\n\n`;
        messageText += `L'artisan se met en route immédiatement. Merci pour votre confiance !`;

        let whatsappUrl = `https://wa.me{encodeURIComponent(messageText)}`;
        let emailSubject = encodeURIComponent(`[Main Pro BTP] Reçu Intervention - ${selectedService}`);
        let emailUrl = `mailto:Scroizhipoficiel@://gmail.com{emailSubject}&body=${encodeURIComponent(messageText)}`;

        setTimeout(() => {
            window.open(whatsappUrl, "_blank"); 
            window.location.href = emailUrl;     
            resetForm();
        }, 2000);

    }, 2500);
}

function resetForm() {
    selectedService = "";
    cost = 0;
    assignedProviderName = "";

    document.getElementById("serviceSelected").textContent = "Aucun service sélectionné";
    document.getElementById("location").value = "";
    document.getElementById("details").value = "";
    document.getElementById("userPhone").value = "";

    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
    
    setTimeout(() => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "";
    }, 2000);
}
