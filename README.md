# 📚 Minimal Library Management System – Frontend

&#x20;

A **minimal, clean, and fully‑typed** Library Management System built with **React + TypeScript** and **Redux Toolkit Query (RTK Query)**. The application lets anyone (no sign‑in required) browse, create, update, delete, and borrow books, and view a borrow summary—perfect for demonstrating modern React patterns, state management with RTK Query, and a tidy component architecture.

> **Backend API**: Node.js | Express | MongoDB | Mongoose\
> **Frontend** (this repo): React | TypeScript | Redux Toolkit | RTK Query | Tailwind CSS | Shadcn | DaisyUI

---

## ✨ Key Features

|  # | Feature             | Description                                                                                                                                     |
| -- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | **Public Routes**   | Every page is publicly accessible—no authentication flows to distract from core book logic.                                                     |
| 2  | **Book Management** | View, add, edit, and delete books. Smart UI rules: if `copies === 0` the book is marked *Unavailable*.                                          |
| 3  | **Borrow Flow**     | Borrow books via a lightweight form. Quantity is validated against available copies; borrowing the last copy toggles the book to *Unavailable*. |
| 4  | **Borrow Summary**  | Aggregated table (title, ISBN, total quantity borrowed) pulled from a dedicated aggregation endpoint.                                           |
| 5  | **Responsive UI**   | Built with Tailwind CSS & accessible components. Looks great on mobile, tablet, and desktop.                                                    |

---

## 🗺️ Route Map

| Path              | Purpose                      |
| ----------------- | ---------------------------- |
| `/books`          | List & manage all books      |
| `/create-book`    | Add a new title              |
| `/books/:id`      | Detailed single‑book view    |
| `/edit-book/:id`  | Update book details          |
| `/borrow/:bookId` | Borrow selected book         |
| `/borrow-summary` | View aggregated borrow stats |

---

## ⚙️ Tech Stack

| Layer                  | Tech                                   |
| ---------------------- | -------------------------------------- |
| **Frontend Framework** | React + Vite                           |
| **Language**           | TypeScript                             |
| **State Management**   | Redux Toolkit + RTK Query              |
| **Routing**            | React Router DOM                       |
| **Styling**            | Tailwind CSS + Shadcn + DaisyUI        |
| **HTTP Client**        | Fetch API under the hood via RTK Query |

---

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your‑username/library‑frontend.git
cd library‑frontend
npm install   # or pnpm install / yarn
```

### 2. Environment Variables

Create `.env.local` at project root:
# I didn't use it but it's a safe way

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

### 3. Run Locally

```bash
npm run dev            # start Vite dev server at http://localhost:5173
```

### 4. Production Build

```bash
npm run build          # generates dist/
```

---

## 🔗 API Endpoints Consumed
# starts with: `/api`

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| GET    | `/books`          | Fetch all books              |
| GET    | `/books/:bookId`  | Single book details          |
| POST   | `/books`          | Create book                  |
| PUT    | `/books/:bookId`  | Update book                  |
| DELETE | `/books/:bookId`  | Remove book                  |
| POST   | `/borrow`         | Borrow a book                |
| GET    | `/borrow`         | Aggregated borrow statistics |

> All endpoints follow REST conventions and return JSON.

---

Made with ❤️ in Bangladesh

---

## ✨ Live Link

[Minimal Library Management System Frontend](https://minimal-library-management-frontend.vercel.app/)