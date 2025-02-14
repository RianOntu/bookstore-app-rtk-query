import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./components/BookList.jsx";
import AddBook from "./components/AddBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList />,
  },
  {
    path:"/add-book",
    element:<AddBook/>
  }
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
