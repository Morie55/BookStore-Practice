import { Book } from "../models/book.model.js"; // Ensure correct import

// Get all books
export const getBooks = async (req, res) => {
  // Use named export
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single book by its ID
export const getBook = async (req, res) => {
  // Use named export
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a book
export const createBook = async (req, res) => {
  // Use named export
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book); // Use status 201 for created
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a book by its ID
export const updateBook = async (req, res) => {
  // Use named export
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book Not Found" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a book by its ID
export const deleteBook = async (req, res) => {
  // Use named export
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book Not Found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
