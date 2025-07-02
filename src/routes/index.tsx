import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import CreateBook from "@/pages/CreateBook";
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
  }
]);
