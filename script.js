/* FOOTLY - Motore di calcolo B2B 2026
   Proprietà di Gabriele Sanzi
   Logica: Calcolo Reale + Traduzione Universale (Landing + Consumer)
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

    const isLanding = document.getElementById("demo-section") !== null;

    if (isNaN(lunghezza) || isNaN(larghezza)) {
        risultato.innerHTML = lang === "en" ? "❗ Enter valid numbers." : "❗ Inserisci numeri validi.";
        return;
    }

    if (isLanding) {
        if (lunghezza < 24 || lunghezza > 26) {
            const demoMsg = lang === "en" 
                ? "<strong>DEMO LIMIT:</strong> To test the algorithm on all sizes, check the live integration on this store:" 
                : "<strong>LIMITE DEMO:</strong> Per testare l'algoritmo completo su ogni taglia, guarda l'integrazione live qui:";
            const btnText = lang === "en" ? "VIEW LIVE ON STORE" : "VEDI LIVE SULLO STORE";
            risultato.innerHTML = `<div style="border:2px dashed #e67e22; padding:15px; border-radius:10px; background:#fff9f4; text-align:center;"><p style="margin:0 0 12px 0; font-size:0.85em; color:#d35400; line-height:1.4;">${demoMsg}</p><a href="https://bfoutdoorshop.com/products/ultraventure-4-w?variant=51507061490006" target="_blank" style="display:inline-block; background:#27ae60; color:white; padding:10px 18px; border-radius:5px; text-decoration:none; font-weight:bold; font-size:0.8em; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${btnText}</a></div>`;
            return;
        }
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
        notaPiede = lang === "en" 
            ? match.Tipo_piede.replace("Normale/stretto", "Normal/Narrow").replace("Piede largo", "Wide Fit").replace("Piede Molto largo", "Extra Wide Fit")
            : match.Tipo_piede;
    }

    const tagliaConsigliata = lang === "en" ? "Recommended size:" : "Taglia consigliata:";
    const tipoPiedeTesto = lang === "en" ? "Foot type:" : "Tipo piede:";
    
    let htmlResult = `<div style="border:2px solid #27ae60; padding:15px; border-radius:10px; background:#f4fff8;"><p style="margin:0; font-size:0.9em; color:#555;">${tagliaConsigliata}</p><strong style="font-size:1.8em; color:#27ae60;">EU ${match.EU}</strong><br><span style="color:#333; font-weight:bold;">UK ${match.UK} | US ${match.US}</span><hr style="border:0; border-top:1px solid #c8e6d1; margin:10px 0;"><p style="margin:0; font-size:0.9em;">${tipoPiedeTesto} <strong>${notaPiede}</strong></p>`;

    if (isLanding) {
        const promoText = lang === "en" 
            ? "This is the result if 25.7 cm length and 10 cm width are entered. <br>See it live on: <a href='https://bfoutdoorshop.com/products/ultraventure-4-w?variant=51507061490006' target='_blank' style='color:#27ae60; font-weight:bold;'>BF Outdoor Shop</a>" 
            : "Questo è il risultato se inserisci 25.7 cm di lunghezza e 10 cm di larghezza. <br>Vedi l'integrazione su: <a href='https://bfoutdoorshop.com/products/ultraventure-4-w?variant=51507061490006' target='_blank' style='color:#27ae60; font-weight:bold;'>BF Outdoor Shop</a>";
        htmlResult += `<p style="margin-top:12px; font-size:0.75em; color:#666; border-top: 1px dashed #ccc; padding-top:8px; line-height:1.4;">${promoText}</p>`;
    }
    htmlResult += `</div>`;
    risultato.innerHTML = htmlResult;
}

function changeLanguage() {
    const lang = document.getElementById("language").value;
    const t = {
        it: {
            "main-title": "Riduci i resi del tuo e-commerce",
            "main-sub": "La soluzione plug-and-play per far scegliere ai tuoi clienti la taglia perfetta.",
            "feat1-t": "-30% Resi",
            "feat1-p": "Elimina l'incertezza della taglia e abbatti i costi logistici.",
            "feat2-t": "+Conversioni",
            "feat2-p": "Aumenta la fiducia del cliente e riduci i carrelli abbandonati.",
            "feat3-t": "Plug & Play",
            "feat3-p": "Si integra in 5 minuti su Shopify, WooCommerce o siti custom.",
            "demo-label": "DEMO ANTEPRIMA",
            "demo-title": "Esempio di integrazione",
            "demo-sub": "Ecco come i tuoi clienti visualizzeranno Footly sul tuo sito:",
            "instr-title": "1. Istruzioni per il cliente",
            "calc-title": "2. Calcolatore dinamico",
            "lbl-gender": "Sesso",
            "opt-male": "Uomo",
            "opt-female": "Donna",
            "lbl-length": "Lunghezza piede (cm)",
            "lbl-width": "Larghezza piede (cm)",
            "calculate-button": "CALCOLA TAGLIA",
            "cta-title": "Pronto a ottimizzare il tuo store?",
            "cta-sub": "Scegli la precisione di Footly per i tuoi clienti.",
            "price-tag": "A partire da €29 / mese",
            "btn-contact": "CONTATTACI PER UNA PROVA",
            // Elementi Consumer
            "lbl-how-to": "Come prendere le misure",
            "lbl-how-to-sub": "Misura entrambi i piedi e inserisci la misura del più lungo.",
            "v-title": "🛡️ Sistema di Validazione Incrociata",
            "v-descr": "Il calcolo è basato sulla convergenza dei dati ufficiali dei brand."
        },
        en: {
            "main-title": "Reduce your e-commerce returns",
            "main-sub": "The plug-and-play solution for the perfect size.",
            "feat1-t": "-30% Returns",
            "feat1-p": "Eliminate size uncertainty and cut logistics costs.",
            "feat2-t": "+Conversions",
            "feat2-p": "Increase customer confidence and reduce abandoned carts.",
            "feat3-t": "Plug & Play",
            "feat3-p": "Integrates in 5 minutes on Shopify, WooCommerce or custom sites.",
            "demo-label": "DEMO PREVIEW",
            "demo-title": "Integration Example",
            "demo-sub": "This is how your customers will see Footly on your site:",
            "instr-title": "1. Customer Instructions",
            "calc-title": "2. Dynamic Calculator",
            "lbl-gender": "Gender",
            "opt-male": "Male",
            "opt-female": "Female",
            "lbl-length": "Foot length (cm)",
            "lbl-width": "Foot width (cm)",
            "calculate-button": "CALCULATE SIZE",
            "cta-title": "Ready to optimize your store?",
            "cta-sub": "Choose Footly's precision for your customers.",
            "price-tag": "Starting at €29 / month",
            "btn-contact": "CONTACT US FOR A TRIAL",
            // Elementi Consumer
            "lbl-how-to": "How to take measurements",
            "lbl-how-to-sub": "Measure both feet and enter the size of the longest one.",
            "v-title": "🛡️ Cross-Validation System",
            "v-descr": "The calculation is based on the convergence of official brand data."
        }
    };
    
    const sel = t[lang];
    for (let id in sel) {
        const el = document.getElementById(id);
        if (el) { el.innerText = sel[id]; }
    }
    
    const res = document.getElementById("result");
    if(res) res.innerHTML = "";
}
