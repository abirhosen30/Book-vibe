<div align="center">

# 📚 Book Vibe

**Discover books, build your reading list, and track your reading journey, all in one beautiful place.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[🌐 Live Demo](#) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 📖 About the Project

**Book Vibe** is a responsive, single-page web application for book lovers. It lets you browse a curated collection of books, open a detailed page for each one, and save titles to your personal **Read** and **Wishlist** shelves. A built-in **Pages to Read** chart turns your reading list into a clear visual overview.

The project focuses on clean UI, smooth navigation, and persistent data, so your reading list is still there when you come back.

---

## ✨ Features

- 🏠 **Engaging Home Page**: hero banner with a call to action, followed by a grid of book cards
- 📖 **Book Cards**: cover image, title, author, category tags, and rating at a glance
- 🔍 **Book Details Page**: full description, publisher, year, total pages, rating, and tags
- ✅ **Mark as Read**: add books you have finished to your Read list
- 💖 **Add to Wishlist**: save books you want to read later
- 🚫 **Smart Validation**: prevents duplicates, and stops a read book from being added to the wishlist
- 🗂️ **Listed Books Page**: switch between **Read** and **Wishlist** tabs
- ↕️ **Sorting**: sort your lists by rating, number of pages, or publish year
- 📊 **Pages to Read Chart**: a bar chart visualizing the page count of each book you've read
- 🔔 **Toast Notifications**: instant feedback for every action
- 💾 **Persistent Storage**: your lists are saved in the browser using `localStorage`
- 📱 **Fully Responsive**: optimized for mobile, tablet, and desktop
- 🚧 **Custom 404 Page**: a friendly fallback for unknown routes

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| **Library** | React |
| **Build Tool** | Vite |
| **Routing** | React Router |
| **Styling** | Tailwind CSS + DaisyUI |
| **Charts** | Recharts |
| **Notifications** | React Toastify |
| **Icons** | React Icons |
| **Data** | Local JSON file |
| **Storage** | Browser `localStorage` |
| **Deployment** | Netlify / Vercel / Firebase |

> 💡 Adjust this table to match the packages listed in your `package.json`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm**, **pnpm**, or **yarn**

### 1. Clone the repository

```bash
git clone https://github.com/abirhosen30/Book-vibe.git
cd Book-vibe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

### 4. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
Book-vibe/
├── public/
│   └── booksData.json        # Book collection
├── src/
│   ├── assets/               # Images and icons
│   ├── components/           # Navbar, Banner, BookCard, Footer...
│   ├── pages/
│   │   ├── Home/             # Landing page
│   │   ├── BookDetails/      # Single book page
│   │   ├── ListedBooks/      # Read & Wishlist tabs
│   │   └── PagesToRead/      # Recharts bar chart
│   ├── utilities/            # localStorage helpers
│   ├── routes/               # Router configuration
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

> 📌 Folder names may differ in your repo. Update this tree to match.

---

## 🔄 How It Works

1. Books are loaded from a local JSON file and displayed as cards on the home page.
2. Clicking a card opens the book's details page using a dynamic route (`/book/:id`).
3. Marking a book as **Read** or adding it to the **Wishlist** saves its ID to `localStorage`.
4. The **Listed Books** page reads those saved IDs and shows the matching books with sorting.
5. The **Pages to Read** page feeds the read list into a Recharts bar chart.

---

## 🖼️ Screenshots

| Home | Book Details |
| :---: | :---: |
| _add screenshot_ | _add screenshot_ |

| Listed Books | Pages to Read |
| :---: | :---: |
| _add screenshot_ | _add screenshot_ |

> Save images in a `/screenshots` folder and link them like `![Home](./screenshots/home.png)`.

---

## 🗺️ Future Improvements

- [ ] User authentication with cloud-synced reading lists
- [ ] Search and category filters
- [ ] Reading progress tracker per book
- [ ] Dark mode toggle
- [ ] Book reviews and personal notes
- [ ] Integration with a public books API

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 Author

**Abir Hosen**

- GitHub: [@abirhosen30](https://github.com/abirhosen30)

---

<div align="center">

⭐ If you like this project, please give it a star! ⭐

Made with ❤️ and a love for books

</div>
