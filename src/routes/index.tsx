import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import CreateBook from "@/pages/CreateBook";
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
  }
]);
