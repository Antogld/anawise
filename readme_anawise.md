# 📘 Anawise – Un Social Network Open Source per la Verità

**Anawise** è un social network open source progettato per favorire una comunicazione autentica, ironica e rispettosa. Unisce le funzionalità tipiche di un social come Instagram con un sistema avanzato anti-disinformazione, moderazione automatica, fact-checking e interazioni divertenti contro i contenuti complottisti o tossici.

---

## 🚀 Stack Tecnologico

- **Frontend Web**: React + Tailwind CSS
- **App Mobile**: React Native (Expo)
- **Backend API**: Node.js + Express
- **Database**: MongoDB
- **AI/ML**: OpenAI API, ConspEmoLLM-v2, Loki (fact-checking), modelli personalizzati
- **Deployment**: Docker, Vercel (frontend), Railway/Render (backend)
- **Moderazione**: Dashboard admin + API automatizzate

---

## 🌐 Funzionalità Social Core

- Creazione di **profili utente** con bio, foto e link
- Caricamento e visualizzazione di:
  - 📷 Foto
  - 🎥 Video
  - 📝 Stati/testi
  - 📚 Stories (a tempo)
  - 🎬 Reel (short video)
- Azioni social:
  - ❤️ Like
  - 💬 Commenti
  - 👤 Follow / Unfollow
  - 🔔 Notifiche

---

## 🧠 Moderazione intelligente & Anti-disinformazione

### 🔍 Livello A – Moderazione automatica AI

- Analisi di:
  - Testo nei post/commenti
  - Immagini, video e link
- Classificazione automatica in:
  - Disinformazione
  - Hate speech
  - Spam / contenuti offensivi
- Azioni:
  - Nasconde o rimuove il contenuto
  - Mostra messaggi ironici sostitutivi
  - Richiede revisione umana se borderline

### 🏷️ Livello B – Segnalazione utenti

- Gli utenti possono **segnalare** post/commenti sospetti
- Se il numero di flag supera una soglia → il contenuto viene messo in revisione o rimosso automaticamente

### 🛡️ Livello C – Revisione umana

- Dashboard admin per i moderatori
- Review queue: approva / rimuovi / sblocca
- Storico e motivazione degli interventi

---

## 😵‍💫 Anti-complottismo e risposte ironiche

### 🎯 ConspEmoLLM-v2

- Modello fine-tuned per:
  - Rilevare contenuti complottisti, ironici o ridicolizzati
  - Analizzare frasi mascherate e riformulate

### 🧪 Loki – Fact-checking assistito

- Scompone un contenuto in "claim"
- Cerca fonti online verificabili
- Assiste i moderatori nelle decisioni

---

## 🤖 Sistema di risposta automatica ironica

### ✔️ 1. Rilevamento commenti ignoranti o tossici

- Classificazione basata su:
  - Parole chiave ("scie chimiche", "la terra è piatta")
  - AI classifiers (OpenAI Moderation, ConspEmoLLM)

### 🌀 2. Sostituzione automatica del commento

- Nasconde l'originale
- Inserisce una risposta del tipo:
  > "Torna a scuola, poi ricominci a commentare"
  > "Questo utente ha confuso Facebook con Wikipedia"

### 🧠 Esempi di risposte pungenti e divertenti

- "Questo commento è stato sostituito per motivi educativi. No, il 5G non ti legge il pensiero."
- "Siamo nel 2025, ma il cervello è rimasto al Medioevo."
- "Il complotto più grande è far finta che questo commento avesse senso."
- "Commento nascosto per mancanza di ossigeno logico."
- "Abbiamo verificato: questo utente ha bisogno di un abbonamento alla realtà."
- "Hai sbloccato il badge 'Teoria del Microonde Quantistico'. Complimenti."
- "Il tuo commento è stato sospeso. Non per censura, per compassione."

---

## 🔒 Blocco profili disinformativi

### 🧱 1. Flagging automatico

- Utenti che postano contenuti ripetutamente classificati come:
  - Teorie infondate ("i vaccini hanno il 5G")
  - Complottismo estremo ("non siamo mai andati sulla luna")

→ Ottengono un punteggio interno → profilazione

### 🧩 2. Interfaccia ironica del profilo bloccato

- Il profilo è oscurato e mostra:

  > "Questo utente è in pausa studio. Torna quando ha capito che la Terra non è piatta."

  > "Profilo sospeso per eccesso di creatività... nei fatti."

  > "Utente in modalità silenziosa: il cervello sta facendo reboot."

  > "Tutti i contenuti sono attualmente in quarantena cognitiva."

- Pulsante: "Richiedi revisione"

---

## 🏅 Badge di ironia: premi per la stupidità

Anawise assegna badge temporanei agli utenti in base al livello di "follia digitale" dei loro contenuti. Più sciocchezze si scrivono, più badge si sbloccano.

### 🎖️ Esempi di badge

- 🧢 **Flat Earther of the Month** – Per chi ha dimenticato la gravità
- 📡 **Scie Chimiche Fan Club** – Attivo ogni lunedì con il cielo sereno
- 🧠 **QAnon Mastermind** – Per chi ha visto troppi video su Telegram
- 🚫 **Ignorantus Maximus** – Commenti multipli, logica assente
- ⏳ **Analfabeta Digitale Temporaneo** – Badge a tempo: 48h senza scrivere nulla
- 🪐 **Negazionista Galattico** – Per chi pensa che lo sbarco lunare sia fiction

I badge sono visibili sul profilo con tooltips ironici, durano alcuni giorni e si possono perdere con buon comportamento.

---

## 💡 Perché Anawise

- Rilanciare i social come luoghi di **verità e umorismo sano**
- Combattere la tossicità e la disinformazione con **intelligenza e ironia**
- Costruire un **progetto comunitario, aperto ma professionale**, a cui puoi contribuire

---

## 📬 Vuoi contribuire?

Leggi [CONTRIBUTING.md](./CONTRIBUTING.md) e unisciti allo sviluppo di Anawise!

Puoi anche supportarci con:

- ⭐ Una stella su GitHub
- 🐛 Issue o suggerimenti
- 💬 Diffondere il progetto sui social

---

**Licenza**: AGPL v3 – Il codice è libero. Il nome Anawise™ e il logo sono protetti. Vedi [TRADEMARK.md](./TRADEMARK.md)

**Made with ❤️ per chi ama i fatti, non le fake.**

