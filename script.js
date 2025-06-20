
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calculator-form");
  const resultBox = document.getElementById("result");
  const languageToggle = document.getElementById("language-toggle");

  let currentLanguage = "it";

  const translations = {
    it: {
      title: "Misuratore per scarpe sportive",
      description:
        "Ciao! Questo è un calcolatore per farti trovare la taglia corretta della scarpa per tutte le tue attività sportive come running, trail running, nordic walking e trekking! Va bene anche per le scarpe da Basket, Volley e Tennis!",
      howToUseTitle: "Come utilizzare il calcolatore:",
      howToUseText:
        "Per far sì che la scelta della taglia per l'acquisto della tua scarpa sia corretta, verifica che almeno due dei tre valori che escono dal risultato corrispondano nelle misure fornite dall'azienda della scarpa che vuoi acquistare! Esempio: se devi acquistare una Nike e il risultato che esce dal tuo calcolo è EU 42, UK 8, US 8.5, devi avere almeno due di queste tre taglie che corrispondono!",
      howItWorksTitle: "Come funziona?",
      howItWorksText:
        "Molto semplice! Prendi un foglio grande più del tuo piede, metti il tuo piede sopra il foglio. Ora disegna la sagoma del tuo piede e con un righello o un metro misura la distanza maggiore dal tallone al tuo dito più lungo. Fai la stessa cosa misurando la distanza tra l'inizio del primo e il quinto metatarso. Ora inserisci le misure che hai ottenuto di lunghezza e larghezza.",
      important: "IMPORTANTE!",
      importantText:
        "Devi misurare entrambi i piedi! Solitamente uno dei due è più lungo. Devi inserire la lunghezza e la larghezza del piede più lungo!",
      finalNote:
        "⚠️ Questo misuratore è pensato per utenti adulti (12+). Le taglie sono valide per attività sportive come running, trekking, trail.",
      resultLabel: "La tua taglia è",
      typeFoot: "Tipo piede",
      normal: "Normale",
      wide: "Wide (largo)",
      extraWide: "Extra Wide",
      cm: "cm",
      submit: "Calcola"
    },
    en: {
      title: "Sports Shoe Size Calculator",
      description:
        "Hi! This calculator helps you find the correct shoe size for all your sports activities such as running, trail running, nordic walking and trekking! It’s also good for Basketball, Volleyball and Tennis shoes!",
      howToUseTitle: "How to use the calculator:",
      howToUseText:
        "To choose the correct shoe size, make sure that at least two of the three values from the result (EU, UK, US) match those provided by the brand you want to buy from. Example: if you're buying a Nike shoe and the result is EU 42, UK 8, US 8.5, at least two of those should match!",
      howItWorksTitle: "How it works?",
      howItWorksText:
        "Very simple! Take a sheet larger than your foot, place your foot on it. Draw the outline of your foot and measure from the heel to the longest toe. Then measure the width between the first and fifth metatarsal. Enter the length and width below.",
      important: "IMPORTANT!",
      importantText:
        "Measure both feet! Usually one is longer. Use the longest foot!",
      finalNote:
        "⚠️ This calculator is intended for adult users (12+). Sizes are suitable for sports like running, trekking, trail.",
      resultLabel: "Your size is",
      typeFoot: "Foot type",
      normal: "Normal",
      wide: "Wide",
      extraWide: "Extra Wide",
      cm: "cm",
      submit: "Calculate"
    }
  };

  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "it" ? "en" : "it";
    updateLanguage();
  });

  function updateLanguage() {
    const t = translations[currentLanguage];
    document.getElementById("title").textContent = t.title;
    document.getElementById("description").textContent = t.description;
    document.getElementById("how-to-use-title").textContent = t.howToUseTitle;
    document.getElementById("how-to-use-text").textContent = t.howToUseText;
    document.getElementById("how-it-works-title").textContent =
      t.howItWorksTitle;
    document.getElementById("how-it-works-text").textContent =
      t.howItWorksText;
    document.getElementById("important").textContent = t.important;
    document.getElementById("important-text").textContent = t.importantText;
    document.getElementById("note").textContent = t.finalNote;
    document.getElementById("submit-btn").value = t.submit;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const lunghezza = parseFloat(document.getElementById("lunghezza").value);
    const larghezza = parseFloat(document.getElementById("larghezza").value);

    const tagliaEU = Math.round((lunghezza + 1.5) * 1.5);
    const tagliaUK = (tagliaEU - 33) / 1.5;
    const tagliaUS = tagliaUK + 1;

    let tipo = "normal";
    if (larghezza / lunghezza > 0.44) {
      tipo = "extraWide";
    } else if (larghezza / lunghezza > 0.41) {
      tipo = "wide";
    }

    const t = translations[currentLanguage];

    resultBox.innerHTML = `
      ✅ <strong>${t.resultLabel}:</strong> EU ${tagliaEU}, UK ${tagliaUK.toFixed(
      1
    )}, US ${tagliaUS.toFixed(1)}<br>
      ${t.typeFoot}: ${
      tipo === "normal" ? "🦶 " + t.normal : tipo === "wide" ? "🦶 " + t.wide : "🦶 " + t.extraWide
    }<br><br>
      <em>${t.finalNote}</em>
    `;
  });

  updateLanguage();
});
