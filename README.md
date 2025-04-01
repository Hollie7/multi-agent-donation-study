# Multi-Agent Donation Persuasion System

This is a web-based chatbot platform designed to explore how **multi-agent** and **single-agent** systems with different **social identities** can influence users' willingness to **donate to charity**. The system integrates large language models (OpenAI GPT) and Firebase to simulate interactive conversations with agents of varying group affiliations (e.g., in-group vs. out-group).

## 🧠 Project Overview

- Supports both **single-agent** and **multi-agent** modes.
- Agents are designed with **social identity cues** to examine their influence on donation behaviors.
- Built with **React + Vite** frontend, powered by **OpenAI** for dialogue and **Firebase** for user data management.


## ⚙️ Getting Started

To run this project locally or deploy it yourself, make sure to configure the following environment variables.

### 🔐 Required Environment Variables

Create a `.env` file in your project root and include:

```env
VITE_OPENAI_API=your_openai_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## 🧪 Development
```env
npm install
npm run dev
```

## 🧱 Build
```env
npm run build
```

## 📄 License
This project is for academic and research purposes.
