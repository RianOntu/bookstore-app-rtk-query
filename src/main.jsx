import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookList from "./components/BookList.jsx";
import AddBook from "./components/AddBook.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import EditBook from "./components/EditBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BookList />,
  },
  {
    path: "/add-book",
    element: <AddBook />,
  },
  {
    path: "/books/:bookId",
    element: <EditBook />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
