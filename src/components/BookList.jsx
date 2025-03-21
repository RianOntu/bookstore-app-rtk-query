import React from "react";
import Header from "./Header";
import { useDeleteBookMutation, useGetBooksQuery } from "../features/apiSlice";
import { Link } from "react-router-dom";

function BookList() {
  const { data: Books } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const handleDelete = (id) => {
    deleteBook(id);
  };
  return (
    <div>
      <Header />

      <main class="py-12 px-6 2xl:px-6 container">
        <div class="order-2 xl:-order-1">
          <div class="flex items-center justify-between mb-12">
            <h4 class="mt-2 text-xl font-bold">Book List</h4>

            <div class="flex items-center space-x-4">
              <button class="lws-filter-btn active-filter">All</button>
              <button class="lws-filter-btn">Featured</button>
            </div>
          </div>
          <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {Books?.map((book) => (
              <div class="book-card">
                <img
                  class="h-[240px] w-[170px] object-cover"
                  src={book.thumbnail}
                  alt={book.name}
                />
                <div class="flex-1 h-full pr-2 pt-2 flex flex-col">
                  <div class="flex items-center justify-between">
                    <span class="lws-badge">featured</span>
                    <div class="text-gray-500 space-x-2 flex">
                      <Link class="lws-edit " to={`/books/${book.id}`}>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                      <button
                        class="lws-deleteBook"
                        onClick={() => handleDelete(book.id)}
                      >
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="space-y-2 mt-4 h-full">
                    <h4 class="lws-book-name">{book.name}</h4>
                    <p class="lws-author">{book.author}</p>
                    <div class="lws-stars">
                      <svg viewBox="0 0 20 20" fill="currentColor" class="star">
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg viewBox="0 0 20 20" fill="currentColor" class="star">
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <svg viewBox="0 0 20 20" fill="currentColor" class="star">
                        <path
                          fill-rule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <p class="lws-price">BDT {book.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookList;
