import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookQuery, useUpdateBookMutation } from "../features/apiSlice";

function EditBook() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookQuery(bookId);
  const [editBook] = useUpdateBookMutation();

  // Initialize formData state
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  // Update formData when book data is available
  useEffect(() => {
    if (book) {
      setFormData({
        name: book.name || "",
        author: book.author || "",
        thumbnail: book.thumbnail || "",
        price: book.price || "",
        rating: book.rating || "",
        featured: book.featured || false,
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({ id: bookId, data: formData });
    navigate("/");
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input
                  required
                  className="text-input"
                  value={formData.name}
                  type="text"
                  id="lws-bookName"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input
                  required
                  value={formData.author}
                  className="text-input"
                  type="text"
                  id="lws-author"
                  name="author"
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input
                  required
                  value={formData.thumbnail}
                  className="text-input"
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="lws-price">Price</label>
                  <input
                    required
                    value={formData.price}
                    className="text-input"
                    type="number"
                    id="lws-price"
                    name="price"
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lws-rating">Rating</label>
                  <input
                    required
                    value={formData.rating}
                    className="text-input"
                    type="number"
                    id="lws-rating"
                    name="rating"
                    min="1"
                    max="5"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm">
                  This is a featured book
                </label>
              </div>

              <button type="submit" className="submit" id="lws-submit">
                Edit Book
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EditBook;
