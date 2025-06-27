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

### 🧠 Esempi di risposte del sistema

- "Questo commento è stato sostituito per motivi educativi. No, il 5G non ti legge il pensiero."
- "Siamo nel 2025, ma il cervello è rimasto al Medioevo."
- "Il complotto più grande è far finta che questo commento avesse senso."
- "Commento nascosto per mancanza di ossigeno logico."
- "Abbiamo verificato: questo utente ha bisogno di un abbonamento alla realtà."
- "Hai sbloccato il badge 'Teoria del Microonde Quantistico'. Complimenti."
- "Il tuo commento è stato sospeso. Non per censura, per compassione."
- "Questo commento è stato sostituito da un messaggio con almeno un neurone attivo."
- "Trova un libro, leggilo, poi riprova."
- "La scienza non ha bisogno della tua opinione, ma tu hai bisogno di un ripasso."
- "Il commento originale è in pausa... come il buon senso di chi l'ha scritto."
- "Questo spazio è stato bonificato dalla disinformazione. Prego."
- "Complotti non trovati. Solo errori di logica."
- "Testo rimosso per motivi di salute mentale collettiva."
- "Il commento è stato convertito in un sorriso sarcastico."
- "Abbiamo fatto fact-checking. Il commento ha perso 3 a 0."
- e tanti altri...

Nota: Il sistema non si limiterà a rispondere in modo ironico e a nascondere il commento:
verrà anche offerta la possibilità di visualizzare il commento nascosto tramite un pulsante "Mostra commento".
Inoltre, sarà presente un pulsante "Mostra fonte", che indirizzerà l’utente verso fonti verificate e attendibili per approfondire in modo corretto l’argomento che ha causato l’intervento del sistema.

---

## 🔒 Blocco profili disinformativi

### 🧱 1. Flagging automatico

Il sistema assegna un punteggio di disinformazione agli utenti che pubblicano contenuti problematici in modo ricorrente. Alcuni esempi di contenuti che possono attivare il blocco temporaneo o permanente includono:

- 🧪 Teorie infondate
  - Es: "I vaccini contengono 5G", "non siamo mai andati sulla luna"

- 🌀 Complottismo estremo
  - Es: "La Terra è piatta", "le scie chimiche ci controllano la mente"

- 🏛️ Disinformazione politica intenzionale
  - Es: narrazioni manipolate, dati falsi, distorsione dei fatti per influenzare il pensiero politico

- 📰 Propaganda o contenuti distorti
  - Articoli o post creati con l’obiettivo di alimentare odio, divisioni sociali o manipolare l’opinione pubblica

- 🧨 Titoli clickbait e fuorvianti
  - Titoli sensazionalistici che travisano completamente il contenuto reale solo per ottenere visualizzazioni

- 🧠 Contenuti creati con IA senza verifica
  - Post generati da chatbot o modelli AI che riportano affermazioni false senza alcuna fonte

- 🐛 Diffusione sistematica di fonti non attendibili
  - Link ricorrenti verso siti già noti per disinformazione o bufale (es. siti bannati da fact-checker ufficiali)


### 🧩 2. Interfaccia del profilo bloccato

- Il profilo è oscurato e mostra:

  > "Questo utente è in pausa studio. Torna quando ha capito che la Terra non è piatta."

  > "Profilo sospeso per eccesso di creatività... nei fatti."

  > "Utente in modalità silenziosa: il cervello sta facendo reboot."

  > "Tutti i contenuti sono attualmente in quarantena cognitiva."
  
  > "Profilo momentaneamente disattivato: l’utente ha confuso Google con una laurea."
  
  > "Offline finché non trova il confine del mondo piatto."
  
  > "Utente in quarantena da bufale. Speriamo torni vaccinato…"
  
  > "Profilo sospeso. È stato avvistato a cercare le scie chimiche con un binocolo."
  
  > "In pausa. Sta ancora cercando ‘la verità’ su un blog del 2006."
  
  > "Questo profilo è temporaneamente assente: sta decifrando un meme come se fosse una fonte scientifica."
  
  > "Ha sostenuto che i dinosauri sono stati inventati dalla NASA. Abbiamo chiamato un paleontologo."
  
  > e tanti altri... 

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

altre idee potrebbero essere:
- 🥇 "Ha vinto il premio 'Pensatore Libero da Fonti Affidabili’"
- 🧪 "Esperto in scienza alternativa, laureato su YouTube"
- 🚫 "Bannato per eccesso di verità non verificata"
- 🪐 "Astrofisico autodidatta: sostiene che la Luna è un proiettore"
- 📵 "Ex utente. Attualmente in modalità 'offline cerebrale'"

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

