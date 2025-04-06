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
- **AI/NLP:** OpenAI Whisper, Hugging Face Transformers, spaCy, custom models - BERT NER, BART Large model using CNN., VADERSENTIMENT, Google Deeptranslate.  
- **Visualization:** Python, Pandas, React Js
- **Animations:** Framer Motion, custom Lottie assets  
- **Deployment:** Docker + GitHub Actions (optional CI/CD)
- **DataBase:** Mongo DB

## 📸 Screenshots

| Dashboard with Analysis | Animated Audio Waveform |
|-------------------------|--------------------------|
|!<img width="1903" alt="Screenshot 2025-04-06 at 1 03 00 PM" src="https://github.com/user-attachments/assets/ba48396e-0b23-4777-9461-7669ccc7471f" />
 | !<img width="1905" alt="Screenshot 2025-04-06 at 1 14 57 PM" src="https://github.com/user-attachments/assets/158eefbb-3630-4e82-a345-7f19ff721350" />


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
