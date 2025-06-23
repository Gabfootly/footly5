function changeLanguage() {
    const lang = document.getElementById("language").value;

    document.getElementById("title").textContent = lang === "en" ? "Sports Shoe Size Calculator" : "Misuratore per scarpe sportive";
    document.getElementById("description").textContent = lang === "en"
        ? "Hi! This is a calculator to help you find the correct shoe size for all your sporting activities like running, trail running, nordic walking, and trekking! It also works for Basketball, Volleyball, and Tennis shoes!"
        : "Ciao! Questo è un calcolatore per farti trovare la taglia corretta della scarpa per tutte le tue attività sportive come running, trail running, nordic walking e trekking! Va bene anche per le scarpe da Basket, Volley e Tennis!";
    document.getElementById("how-to-use-heading").textContent = lang === "en"
        ? "How to use the calculator:" : "Come utilizzare il calcolatore:";
    document.getElementById("instructions-1").textContent = lang === "en"
        ? "To ensure you're choosing the correct size, check that at least two out of the three values in the result (EU, UK, US) match the sizes provided by the brand you're purchasing from. For example: if you are buying Nike and your calculated result is EU 42, UK 8, US 8.5, make sure at least two of those match their size chart!"
        : "Per far sì che la scelta della taglia per l'acquisto della tua scarpa sia corretta, verifica che almeno due dei tre valori che escono dal risultato corrispondano nelle misure fornite dall'azienda della scarpa che vuoi acquistare! Esempio: se devi acquistare una Nike e il risultato che esce dal tuo calcolo è EU 42, UK 8, US 8.5, devi avere almeno due di queste tre taglie che corrispondono!";
    document.getElementById("how-it-works-heading").textContent = lang === "en"
        ? "How does it work?" : "Come funziona?";
    document.getElementById("instructions-2").textContent = lang === "en"
        ? "Very simple! Take a sheet of paper larger than your foot, place your foot on it. Draw the outline of your foot and then, using a ruler or tape measure, measure the longest distance from the heel to the longest toe. Do the same to measure the width from the base of the first to the fifth metatarsal. Now enter these length and width measurements."
        : "Molto semplice! Prendi un foglio grande più del tuo piede, metti il tuo piede sopra il foglio. Ora disegna la sagoma del tuo piede e con un righello o un metro misura la distanza maggiore dal tallone al tuo dito più lungo. Fai la stessa cosa misurando la distanza tra l'inizio del primo e il quinto metatarso. Ora inserisci le misure che hai ottenuto di lunghezza e larghezza.";
    document.getElementById("important-heading").textContent = lang === "en"
        ? "IMPORTANT!" : "IMPORTANTE!";
    document.getElementById("instructions-3").textContent = lang === "en"
        ? "You must measure both feet! One is usually longer. Enter the length and width of the longer foot."
        : "Devi misurare entrambi i piedi! Solitamente uno dei due è più lungo. Devi inserire la lunghezza e la larghezza del piede più lungo!";
    document.getElementById("gender-label").textContent = lang === "en" ? "Gender:" : "Sesso:";
    document.getElementById("male-option").textContent = lang === "en" ? "Male" : "Uomo";
    document.getElementById("female-option").textContent = lang === "en" ? "Female" : "Donna";
    document.getElementById("foot-length-label").textContent = lang === "en" ? "Foot length (cm):" : "Lunghezza piede (cm):";
    document.getElementById("foot-width-label").textContent = lang === "en" ? "Foot width (cm):" : "Larghezza piede (cm):";
    document.getElementById("calculate-button").textContent = lang === "en" ? "Calculate Size" : "Calcola Taglia";

    // ✅ Traduzione del messaggio finale
    document.getElementById("note").textContent = lang === "en"
        ? "⚠️ This tool is intended for users aged 12 and older. Sizes apply to sports shoes like running, trekking and trail."
        : "⚠️ Questo misuratore è pensato per utenti adulti (12+). Le taglie sono valide per attività sportive come running, trekking, trail.";

    // ✅ Traduzione del testo alternativo dell'immagine
    document.getElementById("foot-image").alt = lang === "en"
        ? "Foot measurement instructions"
        : "Istruzioni di misurazione piede";
}

// Imposta la lingua iniziale
document.getElementById("language").value = "it";
changeLanguage();

