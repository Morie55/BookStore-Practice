import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar;

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      pubYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:3000/api/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened: Please check console");
        enqueueSnackbar("error", { variant: "error" });
        console.log("Error creating book", error);
      });
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Create Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4 w-full max-w-lg mx-auto shadow-lg bg-white">
        <div className="my-4">
          <label className="text-lg md:text-xl mb-2 block text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter the book title"
          />
        </div>
        <div className="my-4">
          <label className="text-lg md:text-xl mb-2 block text-gray-500">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter the author's name"
          />
        </div>
        <div className="my-4">
          <label className="text-lg md:text-xl mb-2 block text-gray-500">
            Publish Year
          </label>
          <input
            type="text"
            value={pubYear}
            onChange={(e) => setPubYear(e.target.value)}
            className="border-2 border-gray-300 px-4 py-2 w-full rounded-lg focus:outline-none focus:border-sky-500 transition duration-200"
            placeholder="Enter the publication year"
          />
        </div>
        <button
          className="p-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg mt-6 transition duration-200"
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
