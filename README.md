# AI_Agent_Assistant_TAGE



# 🧠 TAGE – AI-Powered Meeting Assistant

**T**ranscribe
**A**nalyze
**G**enerate
**E**xtract

TAGE is a cutting-edge AI tool that transcribes, analyzes, and summarizes your meetings in real-time. With seamless audio/video upload, it performs live transcription, sentiment analysis, key action item extraction, multilingual translation, and more—so you never miss a thing.

## 🚀 Features

- 🎙️ **Live Transcription** – Accurate, real-time speech-to-text powered by Whisper
- 📊 **Sentiment Analysis** – Visualize emotional tone with confidence scores
- ✅ **Action Item Extraction** – Automatically detect and list tasks from conversations
- 🌍 **Translation Support** – Translate transcripts into multiple languages
- 🧾 **Smart Summarization** – AI-generated concise summaries for quick review
- 🌌 **Immersive UI** – Animated, responsive interface with light/dark themes
- 📥 **Media Upload** – Supports `.mp3`, `.wav`, `.mp4`, `.webm`, and more
- 📈 **Dashboard Panels** – Modular overlay panels for live updates and interaction

## 🛠️ Tech Stack

- **Frontend:** React + TailwindCSS + Framer Motion  
- **Backend:** FastAPI  
- **AI/NLP:** OpenAI Whisper, Hugging Face Transformers, spaCy, custom models  
- **Visualization:** D3 / ChartJS (optional)
- **Animations:** Framer Motion, custom Lottie assets  
- **Deployment:** Docker + GitHub Actions (optional CI/CD)

## 📸 Screenshots

| Dashboard with Analysis | Animated Audio Waveform |
|-------------------------|--------------------------|
| ![Screenshot 1](./screenshots/dashboard.png) | ![Screenshot 2](./screenshots/waveform.png) |

## 📦 Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/AI_Agent_Assistant_TAGE.git
cd TAGE

# Install dependencies
npm install   # for frontend
cd backend
pip install -r requirements.txt

# Run the app
npm run dev   # frontend
uvicorn main:app --reload  # backend
