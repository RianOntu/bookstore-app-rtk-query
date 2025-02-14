import React, { useState } from "react";
import Header from "./Header";

function AddBook() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };
  return (
    <div>
      <Header />

      <main class="py-6 2xl:px-6">
        <div class="container">
          <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name">Book Name</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="input-Bookname"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="author">Author</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="input-Bookauthor"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="thumbnail">Image Url</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="input-Bookthumbnail"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="price">Price</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="input-Bookprice"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="rating">Rating</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="input-Bookrating"
                    name="rating"
                    value={formData.rating}
                    min="1"
                    max="5"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="input-Bookfeatured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={formData.featured}
                  onChange={handleChange}
                />
                <label htmlFor="featured" className="ml-2 text-sm">
                  This is a featured book
                </label>
              </div>

              <button type="submit" className="submit" id="submit">
                {editMode ? "Update Book" : "Add Book"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddBook;
