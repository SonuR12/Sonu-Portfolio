💼 Personal Resume Website

This is a fully responsive and professional personal resume website built using Next.js, TypeScript, Tailwind CSS, and ShadCN UI. It showcases your resume in a beautifully designed layout, with the ability to download it as a high-quality PNG image or a multi-page A4-sized PDF. The project is performance-optimized, accessible, and visually engaging with smooth Framer Motion animations.

It’s designed to make a strong first impression — whether you're applying for jobs, showcasing your skills to clients, or sharing your professional story with the world.

✨ Key Features

✅ Responsive Design
Looks great on mobile phones, tablets, laptops, and desktops — built mobile-first using Tailwind CSS.
🖼️ Downloadable Resume
Export your resume in multiple formats:
PNG Image: Perfect for sharing on platforms like LinkedIn.
Multi-page PDF: Automatically paginated for A4 dimensions using jsPDF.
💡 Clean and Minimal UI
Built using ShadCN UI and Tailwind utilities for a consistent and elegant look.
⚙️ Modern Tech Stack
Uses the latest versions of popular frameworks and libraries: Next.js 14+, TypeScript, and React Server Components.
🎞️ Animations with Framer Motion
Subtle animations bring your content to life without distracting the reader.
🌐 Optimized for SEO and Performance
Fast load times, clean HTML structure, and accessibility-ready.
🛠️ Tech Stack

Technology	Purpose
Next.js	App framework for server-side rendering and routing
TypeScript	Static typing for scalable code
Tailwind CSS	Utility-first styling framework
ShadCN UI	Headless, themeable UI components
Framer Motion	Animation library for React
html2canvas-pro	Captures DOM elements as image
jsPDF	Generates downloadable PDF files
📁 Folder Structure

resume-website/
│
├── app/
│   ├── resume/
│   │   ├── ResumeCard.tsx         # Resume sections (Experience, Skills, etc.)
│   │   └── ResumeDownload.tsx     # Download modal with PNG/PDF export logic
│   ├── layout.tsx                 # Shared layout across pages
│   └── page.tsx                   # Landing page for the resume
│
├── public/
│   └── assets/                    # Static files like logos and images
│
├── styles/
│   └── globals.css                # Custom global styles
│
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── README.md                     # You are here!
🚀 Getting Started

Follow the steps below to run the project locally:

1. Clone the Repository
git clone https://github.com/your-username/resume-website.git
cd resume-website
2. Install Dependencies
npm install
# or
yarn install
3. Run the Development Server
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser to view the site.

4. Build for Production
npm run build
npm run start
🧠 How the Download Feature Works

The download feature leverages two powerful libraries:

html2canvas-pro: Captures a DOM element as a high-resolution canvas.
jsPDF: Converts the canvas into a PDF format with multi-page A4 support.
When a user clicks the Download Resume button:

The modal opens with format options (PNG or PDF).
The html2canvas-pro captures the resume section.
The captured image is passed to jsPDF, which handles page-breaking and final file export.
The file is automatically downloaded to the user’s system.
This export logic ensures your resume maintains clarity and readability in both formats.

📸 Live Demo & Screenshots

Coming soon: Live Site Link
Add preview screenshots or screen recordings here to show off the functionality.

🙏 Acknowledgements

This project wouldn’t have been possible without:

Next.js
ShadCN UI
Tailwind CSS
Framer Motion
html2canvas-pro
jsPDF
🔐 License

This project is licensed under the MIT License. Feel free to fork, customize, and use it for personal or professional projects.

