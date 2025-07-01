import MainLayout from "@/layouts/MainLayout";
import AllBooks from "@/pages/AllBooks";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "/books",
    Component: AllBooks,
  }
]);
