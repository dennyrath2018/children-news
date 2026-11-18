# 🚀 WonderSparks News | Kids News Portal

A vibrant, positive, and interactive news portal tailored specifically for children of all ages. Built with zero dependencies, accessible typography, dynamic age-based reading level switching, native text-to-speech narration, synthesized kid-friendly audio effects, vocabulary tools, and interactive learning quizzes.

---

## 🌟 Key Features

### 1. 🎯 Dynamic Age & Reading Level Switcher
Every news story is adapted into three distinct reading tiers:
- **🐣 Little Explorers (Ages 6–8):** Simple vocabulary, bite-sized paragraphs, large visuals, and audio-first emphasis.
- **🦊 Curious Kids (Ages 9–11):** Engaging narrative journalism, intriguing science facts, and "Why it Matters" explanations.
- **🚀 Junior Reporters (Ages 12+):** In-depth reporting, accurate scientific terminology, and critical thinking concepts.

### 2. 🔊 Built-in Text-to-Speech (Story Narrator)
- Powered by the native Web Speech Synthesis API.
- Adjustable playback speeds: **Storyteller (0.8x)**, **Normal (0.95x)**, and **Speedy (1.2x)**.
- Real-time animated audio wave badges when reading aloud.

### 3. 🔍 Word Detective & Vocabulary Tooltips
- Highlights challenging words (e.g., *Subterranean*, *Biodiversity*, *Photovoltaic*).
- Clicking any highlighted word reveals friendly phonetic pronunciations and kid-level explanations.
- Each story includes a **Word Detective Notebook** summary section.

### 4. 🌙 Bedtime / Starry Night Mode
- Gentle midnight theme with twinkling stars and muted contrast designed for cozy evening or bedtime reading.

### 5. 🧠 Daily Quizzes & Confetti Celebration
- Story-specific comprehension mini-quizzes.
- Immediate positive feedback with celebratory confetti animation and synthesized audio chimes using the HTML5 Web Audio API (no external sound files required).

### 6. ⭐ Treasure Chest (Bookmarks)
- Kids can star their favorite stories to save them in their personal **Treasure Chest** (persisted in `localStorage`).

### 7. 📊 Daily Wonder Poll & Brain Riddle
- Live interactive voting poll with dynamic visual percentage bars.
- Daily brain teaser with a magic "Reveal Answer" sparkle button.

### 8. 🖨️ Printable Classroom & Bedtime Activity Sheets
- One-click print styling formats stories cleanly onto physical paper for bedtime reading, coloring, or school activities.

---

## 📁 Project Structure

```
ChildrenNews/
├── index.html              # Main responsive semantic layout
├── styles.css              # Cheerful, kid-safe themes & animations
├── server.py               # Built-in lightweight Python HTTP server
├── README.md               # Documentation and guides
└── js/
    ├── app.js              # Application state, events, and UI rendering
    ├── newsData.js         # Curated positive news database & quizzes
    ├── speech.js           # Text-to-speech reader engine
    └── audioEffects.js     # Web Audio API sound synthesizer
```

---

## ⚡ Quick Start

### Option 1: Python HTTP Server (Recommended)
Run the included python server:
```bash
python3 server.py
```
Open **[http://localhost:8080](http://localhost:8080)** in your browser.

### Option 2: Direct Browser Launch
Since WonderSparks uses pure web standards without build tools or external npm dependencies, you can also simply double-click **`index.html`** or open it directly in Safari, Chrome, Firefox, or Edge.

---

## 🌈 Adding New Stories

To add a new story, simply append an entry to `NEWS_ARTICLES` in [js/newsData.js](file:///Users/srimayarath/Documents/AG-Test/ChildrenNews/js/newsData.js):

```javascript
{
  id: "story-id",
  title: "Catchy Kid-Friendly Headline",
  category: "space", // 'space' | 'animals' | 'tech' | 'earth' | 'sports' | 'wacky'
  categoryLabel: "Space & Science",
  categoryEmoji: "🚀",
  badge: "Discovery",
  readTime: "3 min read",
  heroImage: `<svg ...></svg>`,
  versions: {
    little: { summary: "...", content: "..." },
    curious: { summary: "...", content: "..." },
    junior: { summary: "...", content: "..." }
  },
  didYouKnow: "A fascinating one-liner fact...",
  wordDetective: [
    { word: "Telescope", pronunciation: "TEL-uh-skope", meaning: "A super-lens tool that sees distant stars!" }
  ],
  quiz: {
    question: "...",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    correctIndex: 0,
    explanation: "..."
  },
  reactions: { thumbsUp: 0, heart: 0, wow: 0, laugh: 0 }
}
```
