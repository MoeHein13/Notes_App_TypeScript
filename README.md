# Notes App 📝

A simple Notes App UI project built with **React 18** and **TypeScript**, inspired by [Traversy Media’s new React Udemy course](https://www.udemy.com/course/modern-react-from-the-beginning/). This version refactors the original project into full TypeScript, with localStorage persistence and modular reusable components.

---

## Features

- 📝 Add, list, and delete notes
- 📁 Store notes persistently using `localStorage`
- ✅ Form with validation and controlled inputs
- 💡 Category and priority selection with dynamic rendering
- ⚙️ Fully typed with TypeScript using `useState`, `useEffect`, and prop drilling
- 🎨 Styled using Tailwind CSS with conditionally colored components

---

## Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Project Structure

```
/src
├── App.tsx
├── Components/
│   ├── NoteForm.tsx
│   ├── Note.tsx
│   ├── NoteLilst.tsx
│   └── Inputs/
│       ├── TextInput.tsx
│       ├── SelectInput.tsx
│       └── TextAreaInput.tsx
```

---

## Getting Started

```bash
npm install
npm run dev
```

This project uses **Vite**. You can replace `dev` with `start` or `vite` depending on your setup.

---

## Credits

- Original tutorial by [Traversy Media](https://www.udemy.com/course/modern-react-from-the-beginning/)
- TypeScript and custom implementation by [Moe Hein Kyaw]
