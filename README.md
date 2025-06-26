📘 Anawise – Un Social Network Open Source per la Verità

Anawise è un social network open source progettato per favorire una comunicazione autentica, ironica e rispettosa. Unisce le funzionalità tipiche di un social come Instagram con un sistema avanzato anti-disinformazione, moderazione automatica, fact-checking e interazioni divertenti contro i contenuti complottisti o tossici.

🚀 Stack Tecnologico

Frontend Web: React + Tailwind CSS

App Mobile: React Native (Expo)

Backend API: Node.js + Express

Database: MongoDB

AI/ML: OpenAI API, ConspEmoLLM-v2, Loki (fact-checking), modelli personalizzati

Deployment: Docker, Vercel (frontend), Railway/Render (backend)

Moderazione: Dashboard admin + API automatizzate

🌐 Funzionalità Social Core

Creazione di profili utente con bio, foto e link

Caricamento e visualizzazione di:

📷 Foto

🎥 Video

📝 Stati/testi

📚 Stories (a tempo)

🎬 Reel (short video)

Azioni social:

❤️ Like

💬 Commenti

👤 Follow / Unfollow

🔔 Notifiche

🧠 Moderazione intelligente & Anti-disinformazione

🔍 Livello A – Moderazione automatica AI

Analisi di:

Testo nei post/commenti

Immagini, video e link

Classificazione automatica in:

Disinformazione

Hate speech

Spam / contenuti offensivi

Azioni:

Nasconde o rimuove il contenuto

Mostra messaggi ironici sostitutivi

Richiede revisione umana se borderline

🏷️ Livello B – Segnalazione utenti

Gli utenti possono segnalare post/commenti sospetti

Se il numero di flag supera una soglia → il contenuto viene messo in revisione o rimosso automaticamente

🛡️ Livello C – Revisione umana

Dashboard admin per i moderatori

Review queue: approva / rimuovi / sblocca

Storico e motivazione degli interventi

😵‍💫 Anti-complottismo e risposte ironiche

🎯 ConspEmoLLM-v2

Modello fine-tuned per:

Rilevare contenuti complottisti, ironici o ridicolizzati

Analizzare frasi mascherate e riformulate

🧪 Loki – Fact-checking assistito

Scompone un contenuto in "claim"

Cerca fonti online verificabili

Assiste i moderatori nelle decisioni

🤖 Sistema di risposta automatica ironica

✔️ 1. Rilevamento commenti ignoranti o tossici

Classificazione basata su:

Parole chiave ("scie chimiche", "la terra è piatta")

AI classifiers (OpenAI Moderation, ConspEmoLLM)

🌀 2. Sostituzione automatica del commento

Nasconde l'originale

Inserisce una risposta del tipo:

"Torna a scuola, poi ricominci a commentare"
"Questo utente ha confuso Facebook con Wikipedia"

🤖 3. Generatore AI

Esempio prompt:

const prompt = `Un utente ha commentato: "${text}". Genera una risposta ironica, divertente ma civile.`

Risposta generata via OpenAI/Mistral/Claude.

🔒 Blocco profili disinformativi

🧱 1. Flagging automatico

Utenti che postano contenuti ripetutamente classificati come:

Teorie infondate ("i vaccini hanno il 5G")

Complottismo estremo ("non siamo mai andati sulla luna")

→ Ottengono un punteggio interno → profilazione

🧩 2. Interfaccia ironica del profilo bloccato

Il profilo è oscurato e mostra:

"Questo utente è in pausa studio. Torna quando ha capito che la Terra non è piatta."

Tutti i contenuti sono nascosti

Pulsante: "Richiedi revisione"

💡 Perché Anawise

Rilanciare i social come luoghi di verità e umorismo sano

Combattere la tossicità e la disinformazione con intelligenza e ironia

Costruire un progetto comunitario, aperto ma professionale, a cui puoi contribuire

📬 Vuoi contribuire?

Leggi CONTRIBUTING.md e unisciti allo sviluppo di Anawise!

Puoi anche supportarci con:

⭐ Una stella su GitHub

🐛 Issue o suggerimenti

💬 Diffondere il progetto sui social

Licenza: AGPL v3 – Il codice è libero. Il nome Anawise™ e il logo sono protetti. Vedi TRADEMARK.md

Made with ❤️ per chi ama i fatti, non le fake.
