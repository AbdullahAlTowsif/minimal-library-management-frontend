import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import BorrowBook from "@/pages/BorrowBook";
import BorrowedBooks from "@/pages/BorrowedBooks";
import CreateBook from "@/pages/CreateBook";
import ErrorPage from "@/pages/ErrorPage";
import UpdateBook from "@/pages/UpdateBook";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "/books",
    Component: AllBooks,
  },
  {
    path: "/create-book",
    Component: CreateBook,
  },
  {
    path: "/edit-book/:id",
    Component: UpdateBook,
  },
  {
    path: "/borrow-summary",
    Component: BorrowedBooks,
  },
  {
    path: "/borrow/:bookId",
    Component: BorrowBook
  },
  {
    path: "*",
    Component: ErrorPage,
  }
]);
