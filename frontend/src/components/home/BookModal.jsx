import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full bg-white rounded-xl shadow-lg p-6 flex flex-col relative"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-4 top-4 text-2xl text-red-600 cursor-pointer hover:text-red-800"
          onClick={onClose}
        />

        {/* Book Details */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold px-4 py-2 bg-red-300 rounded-lg inline-block">
            {book.pubYear}
          </h2>
          <h3 className="mt-2 text-sm text-gray-500">Book ID: {book._id}</h3>
        </div>

        {/* Book Title and Author */}
        <div className="flex items-center mb-2 gap-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="text-xl font-medium">{book.title}</h2>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <HiOutlineUserCircle className="text-red-300 text-2xl" />
          <h2 className="text-lg">{book.author}</h2>
        </div>

        {/* Action Links */}
        <div className="flex justify-around items-center mt-4">
          <Link
            to={`/books/details/${book._id}`}
            className="hover:scale-105 transition-transform"
          >
            <HiOutlineUserCircle className="text-2xl text-green-800 hover:text-black" />
          </Link>
          <Link
            to={`/books/edit/${book._id}`}
            className="hover:scale-105 transition-transform"
          >
            <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
          </Link>
          <Link
            to={`/books/delete/${book._id}`}
            className="hover:scale-105 transition-transform"
          >
            <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
          </Link>
        </div>

        {/* Additional Information */}
        <p className="mt-4 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          magnam asperiores, tempore nemo quos facere ex labore delectus fuga
          eum officiis temporibus error quaerat, fugiat illum molestiae
          explicabo. Doloremque nesciunt, molestiae sequi exercitationem modi
          distinctio porro excepturi aliquam odit dolorum.
        </p>
      </div>
    </div>
  );
};

export default BookModal;
