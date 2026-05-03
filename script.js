/* FOOTLY - Motore di calcolo Definitivo 2026
   Proprietà di Gabriele Sanzi
*/

const dataUomo = [
  {Tipo_piede: "Normale/stretto", MinLunghezza: 22.8, MaxLunghezza: 23.3, MinLarghezza: 8.7, MaxLarghezza: 9.5, EU: 38, UK: 5.0, US: 5.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 22.8, MaxLunghezza: 23.3, MinLarghezza: 9.55, MaxLarghezza: 10.2, EU: "39 (39 1/3)", UK: 6.0, US: 6.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 23.4, MaxLunghezza: 23.7, MinLarghezza: 8.8, MaxLarghezza: 9.6, EU: "38 1/2 ( 38 2/3)", UK: 5.5, US: 6},
  {Tipo_piede: "Piede largo", MinLunghezza: 23.4, MaxLunghezza: 23.7, MinLarghezza: 9.65, MaxLarghezza: 10.4, EU: "39 (39 1/3)", UK: 6.0, US: 6.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 23.75, MaxLunghezza: 24.1, MinLarghezza: 8.9, MaxLarghezza: 10.0, EU: "39 (39 1/3)", UK: 6.0, US: 6.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 23.5, MaxLunghezza: 24.1, MinLarghezza: 10.0, MaxLarghezza: 10.5, EU: 40, UK: 6.5, US: 7},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 9.1, MaxLarghezza: 10.15, EU: 40, UK: 6.5, US: 7.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.2, MaxLarghezza: 10.4, EU: "40 1/2 (40 2/3)", UK: 7.0, US: 7.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.5, MaxLarghezza: 10.6, EU: "41 (41 1/3)", UK: 7.5, US: 8.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 24.6, MaxLunghezza: 25.0, MinLarghezza: 9.25, MaxLarghezza: 10.4, EU: "40 1/2 (40 2/3)", UK: 7.0, US: 7.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 24.6, MaxLunghezza: 25.0, MinLarghezza: 10.45, MaxLarghezza: 10.6, EU: "41 (41 1/3)", UK: 7.5, US: 8.0},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.7, MaxLarghezza: 10.8, EU: 41.5, UK: 7.5, US: 8.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 9.25, MaxLarghezza: 10.4, EU: "41 (41 1/3)", UK: 7.5, US: 8.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 10.55, MaxLarghezza: 10.8, EU: 42, UK: 8.0, US: 8.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 10.9, MaxLarghezza: 11.0, EU: "42 1/2 ( 42 2/3)", UK: 8.5, US: 9.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.5, MaxLunghezza: 25.8, MinLarghezza: 9.55, MaxLarghezza: 10.7, EU: 42, UK: 8.0, US: 8.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.5, MaxLunghezza: 25.8, MinLarghezza: 10.8, MaxLarghezza: 11.0, EU: "42 1/2 ( 42 2/3)", UK: 8.5, US: 9.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 9.7, MaxLarghezza: 10.88, EU: "42 1/2 ( 42 2/3)", UK: 8.5, US: 9.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 10.9, MaxLarghezza: 11.0, EU: 43, UK: 9.0, US: 9.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 11.1, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 10.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 9.88, MaxLarghezza: 10.9, EU: "43 ( 43 1/3)", UK: 9.0, US: 9.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 11.0, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 10.0},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 11.1, MaxLarghezza: 11.2, EU: "44 1/2 (44 2/3)", UK: 10.0, US: 10.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 10.0, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 10.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 11.3, MaxLarghezza: 11.4, EU: "44 1/2 (44 2/3)", UK: 10.0, US: 10.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 11.5, MaxLarghezza: 11.6, EU: "45 ( 45 1/3)", UK: 10.5, US: 11.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 27.1, MaxLunghezza: 27.5, MinLarghezza: 10.2, MaxLarghezza: 11.3, EU: "44 1/2 (44 2/3)", UK: 10.0, US: 10.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 27.1, MaxLunghezza: 27.5, MinLarghezza: 11.4, MaxLarghezza: 11.5, EU: "45 ( 45 1/3)", UK: 10.5, US: 11.0},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 27.1, MaxLunghezza: 27.5, MinLarghezza: 11.52, MaxLarghezza: 11.6, EU: 45.5, UK: 11.0, US: 11.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 27.6, MaxLunghezza: 27.9, MinLarghezza: 10.4, MaxLarghezza: 11.5, EU: 45, UK: 10.5, US: 11.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 27.6, MaxLunghezza: 27.9, MinLarghezza: 11.6, MaxLarghezza: 11.7, EU: 45.5, UK: 11.0, US: 11.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 27.6, MaxLunghezza: 27.9, MinLarghezza: 11.72, MaxLarghezza: 11.8, EU: 46, UK: 11.0, US: 11.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 28.0, MaxLunghezza: 28.3, MinLarghezza: 10.6, MaxLarghezza: 11.6, EU: 46, UK: 11.0, US: 11.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 28.0, MaxLunghezza: 28.3, MinLarghezza: 11.65, MaxLarghezza: 11.78, EU: "46 1/2 ( 46 2/3)", UK: 11.5, US: 12.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 28.4, MaxLunghezza: 28.7, MinLarghezza: 10.7, MaxLarghezza: 11.8, EU: "46 1/2 ( 46 2/3)", UK: 11.5, US: 12.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 28.4, MaxLunghezza: 28.7, MinLarghezza: 11.85, MaxLarghezza: 12.0, EU: "47 (47 1/3)", UK: 12.0, US: 12.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 28.8, MaxLunghezza: 29.2, MinLarghezza: 10.8, MaxLarghezza: 12.05, EU: "47 (47 1/3)", UK: 12.0, US: 12.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 28.8, MaxLunghezza: 29.2, MinLarghezza: 12.07, MaxLarghezza: 12.2, EU: "47 1/2 (48)", UK: 12.5, US: 13.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 29.3, MaxLunghezza: 29.6, MinLarghezza: 11.0, MaxLarghezza: 12.2, EU: 48, UK: 12.5, US: 13.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 29.3, MaxLunghezza: 29.6, MinLarghezza: 12.25, MaxLarghezza: 12.4, EU: "48 1/2 (48 2/3)", UK: 13.0, US: 13.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 29.7, MaxLunghezza: 30.0, MinLarghezza: 11.1, MaxLarghezza: 12.4, EU: "48 1/2 (48 2/3)", UK: 13.0, US: 13.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 29.7, MaxLunghezza: 30.0, MinLarghezza: 12.5, MaxLarghezza: 12.6, EU: "49 (49 1/3)", UK: 13.5, US: 14.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 30.1, MaxLunghezza: 30.5, MinLarghezza: 11.3, MaxLarghezza: 12.53, EU: "49 (49 1/3)", UK: 13.5, US: 14.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 30.1, MaxLunghezza: 30.5, MinLarghezza: 12.6, MaxLarghezza: 12.8, EU: 50, UK: 14.0, US: 14.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 30.6, MaxLunghezza: 30.9, MinLarghezza: 11.5, MaxLarghezza: 12.85, EU: 50, UK: 14.0, US: 14.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 31.0, MaxLunghezza: 31.4, MinLarghezza: 11.7, MaxLarghezza: 13.05, EU: "50 1/2 (50 2/3)", UK: 14.5, US: 15.0},
];

const dataDonna = [
  {Tipo_piede: "Normale/stretto", MinLunghezza: 22.0, MaxLunghezza: 22.0, MinLarghezza: 8.3, MaxLarghezza: 9.1, EU: 36, UK: 3.5, US: 5.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 22.0, MaxLunghezza: 22.0, MinLarghezza: 9.15, MaxLarghezza: 9.6, EU: "37 ( 37 1/3)", UK: 4.5, US: 6.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 22.1, MaxLunghezza: 22.5, MinLarghezza: 8.5, MaxLarghezza: 9.3, EU: "36 1/2 ( 36 2/3)", UK: 4.0, US: 5.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 22.1, MaxLunghezza: 22.5, MinLarghezza: 9.35, MaxLarghezza: 9.8, EU: 38, UK: 5.0, US: 6.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 22.6, MaxLunghezza: 22.6, MinLarghezza: 8.6, MaxLarghezza: 9.4, EU: "37 (37 1/3)", UK: 4.5, US: 6.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 22.6, MaxLunghezza: 22.7, MinLarghezza: 9.45, MaxLarghezza: 10.0, EU: "38 1/2 ( 38 2/3)", UK: 5.5, US: 7.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 22.8, MaxLunghezza: 23.3, MinLarghezza: 8.7, MaxLarghezza: 9.5, EU: 38, UK: 5.0, US: 6.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 22.8, MaxLunghezza: 23.3, MinLarghezza: 9.55, MaxLarghezza: 10.2, EU: "39 (39 1/3)", UK: 6.0, US: 7.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 23.4, MaxLunghezza: 23.7, MinLarghezza: 8.8, MaxLarghezza: 9.6, EU: "38 1/2 ( 38 2/3)", UK: 5.5, US: 7.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 23.4, MaxLunghezza: 23.7, MinLarghezza: 9.65, MaxLarghezza: 10.4, EU: "39 (39 1/3)", UK: 6.0, US: 7.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 23.75, MaxLunghezza: 24.1, MinLarghezza: 8.9, MaxLarghezza: 10.0, EU: "39 (39 1/3)", UK: 6.0, US: 7.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 23.5, MaxLunghezza: 24.1, MinLarghezza: 10.0, MaxLarghezza: 10.5, EU: 40, UK: 6.5, US: 8.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 9.1, MaxLarghezza: 10.15, EU: 40, UK: 6.5, US: 8.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.2, MaxLarghezza: 10.4, EU: "40 1/2 (40 2/3)", UK: 7.0, US: 8.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.5, MaxLarghezza: 10.6, EU: "41 (41 1/3)", UK: 7.5, US: 9.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 24.6, MaxLunghezza: 25.0, MinLarghezza: 9.25, MaxLarghezza: 10.4, EU: "40 1/2 (40 2/3)", UK: 7.0, US: 8.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 24.6, MaxLunghezza: 25.0, MinLarghezza: 10.45, MaxLarghezza: 10.6, EU: "41 (41 1/3)", UK: 7.5, US: 9.0},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 24.2, MaxLunghezza: 24.5, MinLarghezza: 10.7, MaxLarghezza: 10.8, EU: 41.5, UK: 7.6, US: 9.3},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 9.25, MaxLarghezza: 10.4, EU: "41 (41 1/3)", UK: 7.5, US: 9.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 10.55, MaxLarghezza: 10.8, EU: 42, UK: 8.0, US: 9.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 25.1, MaxLunghezza: 25.4, MinLarghezza: 10.9, MaxLarghezza: 11.0, EU: "42 1/2 ( 42 2/3)", UK: 8.5, US: 10.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.5, MaxLunghezza: 25.8, MinLarghezza: 9.55, MaxLarghezza: 10.7, EU: 42, UK: 8.0, US: 9.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.5, MaxLunghezza: 25.8, MinLarghezza: 10.8, MaxLarghezza: 11.0, EU: "42 1/2 ( 42 2/3)", UK: 8.5, US: 10.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 9.7, MaxLarghezza: 10.88, EU: "42  1/2 ( 42 2/3)", UK: 8.5, US: 10.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 10.9, MaxLarghezza: 11.1, EU: 43, UK: 9.0, US: 10.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 25.9, MaxLunghezza: 26.3, MinLarghezza: 11.1, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 11.0},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 9.88, MaxLarghezza: 10.9, EU: "43 ( 43 1/3)", UK: 9.0, US: 10.5},
  {Tipo_piede: "Piede largo", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 11.0, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 11.0},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 26.4, MaxLunghezza: 26.7, MinLarghezza: 11.1, MaxLarghezza: 11.2, EU: "44 1/2 (44 2/3)", UK: 10.0, US: 11.5},
  {Tipo_piede: "Normale/stretto", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 10.0, MaxLarghezza: 11.2, EU: 44, UK: 9.5, US: 11.0},
  {Tipo_piede: "Piede largo", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 11.3, MaxLarghezza: 11.4, EU: "44 1/2 (44 2/3)", UK: 10.0, US: 11.5},
  {Tipo_piede: "Piede Molto largo", MinLunghezza: 26.75, MaxLunghezza: 27.0, MinLarghezza: 11.5, MaxLarghezza: 11.6, EU: "45 ( 45 1/3)", UK: 10.5, US: 12.0},
];

function calcolaTaglia() {
    const lunghezzaInput = document.getElementById("foot-length").value;
    const larghezzaInput = document.getElementById("foot-width").value;
    
    const lunghezza = parseFloat(lunghezzaInput.replace(',', '.'));
    const larghezza = parseFloat(larghezzaInput.replace(',', '.'));
    const genere = document.getElementById("gender").value;
    const lang = document.getElementById("language") ? document.getElementById("language").value : "it";
    const risultato = document.getElementById("result");

    if (isNaN(lunghezza) || isNaN(larghezza)) {
        risultato.innerHTML = lang === "en" ? "❗ Enter valid numbers." : "❗ Inserisci numeri validi.";
        return;
    }

    const dati = genere === "male" ? dataUomo : dataDonna;
    let opzioni = dati.filter(d => lunghezza >= d.MinLunghezza && lunghezza <= d.MaxLunghezza);

    if (opzioni.length === 0) {
        risultato.innerHTML = lang === "en" ? "❗ Length out of range." : "❗ Lunghezza fuori range.";
        return;
    }

    let match = opzioni.find(d => larghezza >= d.MinLarghezza && larghezza <= d.MaxLarghezza);
    let notaPiede = "";

    if (!match) {
        if (larghezza < opzioni[0].MinLarghezza) {
            match = opzioni[0];
            notaPiede = lang === "en" ? "Very Narrow Fit" : "Pianta molto stretta";
        } else {
            match = opzioni[opzioni.length - 1];
            notaPiede = lang === "en" ? "Extra Wide Fit" : "Pianta extra larga";
        }
    } else {
        // Traduzione dinamica del tipo piede
        if (lang === "en") {
            notaPiede = match.Tipo_piede.replace("Normale/stretto", "Normal/Narrow").replace("Piede largo", "Wide Fit").replace("Piede Molto largo", "Extra Wide Fit");
        } else {
            notaPiede = match.Tipo_piede;
        }
    }

    const tagliaConsigliata = lang === "en" ? "Recommended size:" : "Taglia consigliata:";
    const tipoPiedeTesto = lang === "en" ? "Foot type:" : "Tipo piede:";

    risultato.innerHTML = `
        <div style="border:2px solid #27ae60; padding:15px; border-radius:10px; background:#f4fff8;">
            <p style="margin:0; font-size:0.9em; color:#555;">${tagliaConsigliata}</p>
            <strong style="font-size:1.6em; color:#27ae60;">EU ${match.EU}</strong><br>
            <span style="color:#333;">UK ${match.UK} | US ${match.US}</span>
            <hr style="border:0; border-top:1px solid #c8e6d1; margin:10px 0;">
            <p style="margin:0; font-size:0.9em;">${tipoPiedeTesto} <strong>${notaPiede}</strong></p>
        </div>`;
}

// FUNZIONE CAMBIO LINGUA POTENZIATA (Index + Consumer)
function changeLanguage() {
    const lang = document.getElementById("language").value;
    
    const t = {
        it: {
            title: "Fai scegliere la taglia giusta delle scarpe online.",
            desc: "Footly è un misuratore di piedi per <strong>ecommerce di scarpe sportive</strong>. Aiuta i clienti a scegliere la taglia corretta, riducendo errori e resi.",
            btnDemo: "Guarda la demo",
            btnContact: "Contattaci",
            heroSmall: "Vuoi integrare Footly nel tuo ecommerce? Scrivici.",
            why: "Perché Footly aiuta a vendere meglio",
            b1: "❌ Taglie sbagliate = resi costosi",
            b2: "❌ Clienti indecisi = carrelli abbandonati",
            b3: "❌ Cambi continui = tempo perso",
            prices: "Prezzi semplici",
            p1: "Ecommerce piccoli",
            p2: "Ecommerce strutturati",
            demoT: "Demo Footly",
            demoS: "Versione demo del misuratore integrabile negli ecommerce.",
            gender: "Sesso",
            male: "Uomo",
            female: "Donna",
            len: "Lunghezza piede (cm)",
            wid: "Larghezza piede (cm)",
            btnCalc: "Calcola taglia",
            note: "Demo gratuita – nessun dato raccolto"
        },
        en: {
            title: "Help your customers choose the right shoe size online.",
            desc: "Footly is a foot measurement tool for <strong>sports shoe e-commerce</strong>. It helps customers pick the correct size, reducing errors and returns.",
            btnDemo: "Watch the demo",
            btnContact: "Contact us",
            heroSmall: "Want to integrate Footly? Write to us.",
            why: "Why Footly helps you sell more",
            b1: "❌ Wrong sizes = costly returns",
            b2: "❌ Undecided customers = abandoned carts",
            b3: "❌ Constant exchanges = wasted time",
            prices: "Simple pricing",
            p1: "Small shops",
            p2: "Enterprise shops",
            demoT: "Footly Demo",
            demoS: "Demo version of the calculator for e-commerce.",
            gender: "Gender",
            male: "Male",
            female: "Female",
            len: "Foot length (cm)",
            wid: "Foot width (cm)",
            btnCalc: "Calculate Size",
            note: "Free demo – no data collected"
        }
    };

    const sel = t[lang];

    // Landing Page
    if(document.getElementById("title")) document.getElementById("title").textContent = sel.title;
    if(document.getElementById("description")) document.getElementById("description").innerHTML = sel.desc;
    if(document.getElementById("btn-demo")) document.getElementById("btn-demo").textContent = sel.btnDemo;
    if(document.getElementById("btn-contact")) document.getElementById("btn-contact").textContent = sel.btnContact;
    if(document.getElementById("hero-small")) document.getElementById("hero-small").textContent = sel.heroSmall;
    if(document.getElementById("why-title")) document.getElementById("why-title").textContent = sel.why;
    if(document.getElementById("bullet-1")) document.getElementById("bullet-1").textContent = sel.b1;
    if(document.getElementById("bullet-2")) document.getElementById("bullet-2").textContent = sel.b2;
    if(document.getElementById("bullet-3")) document.getElementById("bullet-3").textContent = sel.b3;
    if(document.getElementById("prices-title")) document.getElementById("prices-title").textContent = sel.prices;
    if(document.getElementById("plan-small")) document.getElementById("plan-small").textContent = sel.p1;
    if(document.getElementById("plan-pro")) document.getElementById("plan-pro").textContent = sel.p2;

    // Calcolatore (comune a Index e Consumer)
    if(document.getElementById("demo-title")) document.getElementById("demo-title").textContent = sel.demoT;
    if(document.getElementById("demo-sub")) document.getElementById("demo-sub").textContent = sel.demoS;
    if(document.getElementById("lbl-gender")) document.getElementById("lbl-gender").textContent = sel.gender;
    if(document.getElementById("opt-male")) document.getElementById("opt-male").textContent = sel.male;
    if(document.getElementById("opt-female")) document.getElementById("opt-female").textContent = sel.female;
    if(document.getElementById("lbl-length")) document.getElementById("lbl-length").textContent = sel.len;
    if(document.getElementById("lbl-width")) document.getElementById("lbl-width").textContent = sel.wid;
    if(document.getElementById("calculate-button")) document.getElementById("calculate-button").textContent = sel.btnCalc;
    if(document.getElementById("note")) document.getElementById("note").textContent = sel.note;
}
