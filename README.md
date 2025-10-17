# <p align="center"><img src="public/logo/cclogo.png" width="120" alt="CODY Logo"><br>🎵 CODY Music App</p>

The **CODY Music App** is an interactive web music player built by **Cody Cordova**, blending art, technology, and music into one immersive experience.  
It allows users to stream original tracks, visualize their soundwaves, and experience the creative world of CODY in a sleek, modern UI.

---

## 🚀 Features

- 🎧 **15-Track Playlist** – Browse and play any of Cody’s songs in sequence or individually.
- 🌀 **Waveform Visualizer** – Smooth, dynamic audio visualization powered by [WaveSurfer.js](https://wavesurfer-js.org/).
- 🔁 **Auto-Play & Skip Logic** – Seamlessly moves to the next track after finishing or skipping.
- 🖼️ **Stylized UI/UX** – Inspired by vaporwave, neon, and luxury minimalism aesthetics.
- 🔊 **Responsive Audio Controls** – Play, pause, skip, and seek directly in the waveform.
- 🧠 **Smart Instance Management** – Ensures only one audio stream plays at a time.
- 💿 **Media Integration** – Includes looping DJ video, main artist imagery, and reactive captions.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **Next.js 15** | Frontend framework for fast and modular development |
| **React 19** | Component-based UI structure |
| **WaveSurfer.js** | Audio waveform visualizer and player |
| **CSS (Custom)** | Custom styled components for unique brand visuals |
| **TypeScript** | Strongly typed logic for better reliability |

---

## 📁 Project Structure

```bash
cody-music-app/
├── public/
│   ├── music/                # All 15 MP3 tracks (song1.mp3 → song15.mp3)
│   ├── images/               # Artist images (DJ, portrait, etc.)
│   ├── media/                # Video clips (e.g., codytokendj.mp4)
│   └── logo/                 # Logo assets (cclogo.png)
│
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page layout
│   │   └── globals.css       # Global styling and color scheme
│   └── components/
│       ├── AudioPlayer.tsx   # Core music player logic and layout
│       └── WaveSurferPlayer.tsx # Waveform player using WaveSurfer.js
│
├── package.json
└── README.md
```

---

## 🧠 How It Works

1. When the app loads, the **first song** can be played manually using the “Play” button.
2. Once you click **Skip** or a new track in the list, the next song automatically plays.
3. Only **one waveform instance** is active at a time—so tracks never overlap.
4. The UI adjusts for desktop and mobile, stacking sections vertically for clarity:
    - 🎬 DJ Video
    - 🔉 Waveform & Song List
    - 🖼️ Main Artist Image

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/cody-music-app.git
cd cody-music-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Your app will be available at **http://localhost:3000**

---

## 🎨 Design Philosophy

> “Music is emotion in motion. The CODY Music App transforms sound into sight — a journey through color, frequency, and feeling.”

This project embraces a **Y2K / vaporwave / luxury minimal** aesthetic, with pastel gradients, glowing edges, and smooth layout transitions.  
Each design element was built to represent **CODY’s artistry** — a fusion of digital energy and human rhythm.

---

## 🛠️ Future Enhancements

- 🎚️ Volume and mute controls
- ⏱️ Song progress timer
- 💫 Animated transitions between tracks
- 💬 Lyrics or mood-based captions
- 🪙 $CODY Token integration for exclusive fan rewards

---

## 🧑‍🎤 About the Artist

**Cody Cordova** is a Los Angeles–based music producer, DJ, and developer.  
Through projects like **CODY Token** and the **CODY Music App**, he bridges blockchain technology, music, and interactive design to create a new world where fans and creators connect seamlessly.

### Follow Cody’s Journey

- 🌐 [Website](https://codytoken.com)
- 🎧 [SoundCloud](https://soundcloud.com/)
- 🪩 [Instagram](https://instagram.com/)
- 💫 [X / Twitter](https://twitter.com/)

---

## 🧾 License

This project is open-source under the **AGPL-3.0 License**.  
Feel free to remix, learn, and build — with credit to the original creator, **Cody Cordova**.

---

**© 2025 Cody Cordova — All rights reserved.**
