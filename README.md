# 🎯 KonnichiWow Interactive Quiz Application

A modern, responsive, and accessible interactive quiz application built for the **KonnichiWow Frontend Development Task**. Features real-time feedback, gamification elements, and comprehensive performance tracking.

---

## 📋 Task Requirements

This project fulfills the **Frontend Development Task - Practice Quiz** requirements:

### Core Requirements ✅
- **Multiple-Choice Questions**: 10 questions with 4 options each
- **Live Feedback**: Instant color-coded feedback with explanations after each answer
- **Progress Tracking**: Visual progress bar with "Question X of Y" counter
- **Navigation**: Complete quiz flow from start to summary with score review
- **Responsive Design**: 
  - Mobile: Touch-friendly vertical layout
  - Desktop: Horizontal layouts with keyboard navigation (1-4, Enter)
- **Accessibility**: Full keyboard navigation and screen reader support
- **Brand Consistency**: KonnichiWow logo, mascot, and color palette (#EC265F, #26ECB4)

### Bonus Features Implemented 🎁
- **Dynamic Questions**: Loaded from local JSON file
- **Gamification**:
  - Streak tracking for consecutive correct answers
  - Achievement badges for milestones (3, 5, 10 streak)
  - Animated mascot companion (Tenkun)
- **Performance Analytics**: Time tracking, average per question, accuracy stats

---

## ✨ Features

### Quiz Functionality
- 10 multiple-choice questions with instant feedback
- Color-coded answer indicators (green/red)
- Detailed explanations for each answer
- Progress tracking with animated bar
- Comprehensive results dashboard

### Gamification
- 🔥 Streak counter (consecutive correct answers)
- 🏆 Achievement badges at milestones
- 🎨 Animated Tenkun mascot with contextual poses
- ⏱️ Time tracking and analytics

### User Experience
- ⌨️ Keyboard shortcuts (1-4 for options, Enter to submit/next)
- 🎭 Smooth Framer Motion animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG 2.1 AA accessibility compliant

---

## 🎨 Design System

### Brand Assets
- **Logo**: KonnichiWow wordmark ([Assets Link](https://drive.google.com/drive/folders/1MPYoEuOmur_DIDzrIGtSXAOdlJb2dk9C?usp=drive_link))
- **Mascot**: Tenkun character ([Assets Link](https://drive.google.com/drive/folders/1wHQ3OVPQ3UT3qNX9dqqyEBp4OwB-enCv?usp=sharing))

### Color Palette
- **Primary Pink**: `#EC265F` - Panels, buttons, accents
- **Accent Turquoise**: `#26ECB4` - Backgrounds, highlights
- **Supporting**: White (#FFFFFF), Black (#000000)

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React.js | 18.3.1 | UI framework |
| Vite | 5.4.21 | Build tool |
| Tailwind CSS | 3.4.11 | Styling |
| React Router | 6.26.2 | Routing |
| Framer Motion | 11.5.6 | Animations |

---

## 📁 Project Structure

```
KonnichiWow-Quiz/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Badge.jsx
│   │   ├── FeedbackMessage.jsx
│   │   ├── ProgressBar.jsx
│   │   └── QuestionCard.jsx
│   ├── data/
│   │   └── questions.json   # Quiz questions
│   ├── image/              # Brand assets
│   ├── pages/              # Route pages
│   │   ├── HomePage.jsx
│   │   ├── QuizPage.jsx
│   │   └── SummaryPage.jsx
│   └── App.jsx
├── screenshots/            # App screenshots
└── README.md
```

---

## 🚀 Getting Started

### Installation

```bash
# Clone repository
git clone <repository-url>
cd KonnichiWow-Quiz

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open `http://localhost:5173` in your browser.

---

## 🎮 User Flow

1. **Homepage**: Welcome screen with quiz introduction → "Start Quiz Now"
2. **Quiz Page**: 
   - Answer 10 questions with instant feedback
   - Track score and streak in real-time
   - Keyboard shortcuts: 1-4 (options), Enter (submit/next)
3. **Summary Page**: 
   - View final score and statistics
   - Review all answers with explanations
   - Retake quiz or return home

---

## 📱 Responsive Design

### Layouts
- **Mobile** (< 640px): Vertical stacked layout, touch-optimized buttons
- **Tablet** (640-1024px): Adjusted spacing, balanced layouts
- **Desktop** (> 1024px): Horizontal layouts, keyboard hints, side-by-side panels

### Key Responsive Features
- **Quiz Page**: Desktop splits into question panel (left) + feedback panel (right) after submission
- **Summary Page**: Desktop uses 3-column summary grid + 2-column review layout
- **Typography**: Scales from 14px (mobile) to 24px (desktop)

---

## ♿ Accessibility

- **Keyboard Navigation**: Full Tab/Enter/Arrow support
- **Screen Readers**: ARIA labels and semantic HTML
- **Focus Indicators**: Clear visual focus states
- **Color Contrast**: WCAG AA compliant (4.5:1+)
- **Shortcuts**: Number keys (1-4) for answer selection

---

## 🎨 Customization

### Add Questions
Edit `src/data/questions.json`:
```json
{
  "id": 11,
  "question": "Your question?",
  "options": ["A", "B", "C", "D"],
  "answer": "B",
  "explanation": "Why B is correct."
}
```

### Change Colors
Update `tailwind.config.js`:
```js
colors: {
  primary: '#EC265F',
  accent: '#26ECB4',
}
```

---

## 📸 Screenshots

See `screenshots/` folder for desktop and mobile views.

---

## 🧪 Testing

- [x] All 10 questions functional
- [x] Feedback displays correctly
- [x] Progress tracking accurate
- [x] Responsive on all devices
- [x] Keyboard navigation works
- [x] Screen reader compatible
- [x] No console errors

---

## 🔮 Future Enhancements

- User authentication and score saving
- Multiple quiz categories
- Leaderboard system
- Dark mode support
- Social sharing

---

## 📄 License

MIT License - Free to use for learning and portfolio.

---

## 👨‍💻 Author

**Developed for KonnichiWow Frontend Development Task**

📧 Email: your.email@example.com  
💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)  
🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- KonnichiWow Team for the opportunity
- React, Tailwind CSS, and Framer Motion communities
- Open-source contributors

---

**⭐ Built with ❤️ for KonnichiWow ⭐**

*Deadline: November 2, 2025, 11:59 PM*
