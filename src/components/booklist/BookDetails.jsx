import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const URL = "https://openlibrary.org/works/";

export default function BookDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <div>Loading....</div>;

  return (
    <div className="bg-green-100 w-full h-full">
      <div className="">
        <button type="button" onClick={() => navigate("/book")} className="flex " >
          <FaArrowLeft size={22} />
          <span className="ml-2 font-semibold text-xl">Go Back</span>
        </button>
        <div className="">
          <div className="flex">
            <div className="w-2/5 text-center">
              <img src={book?.cover_img} alt="Cover"  />
            </div>
            <div className="w-3/5">
              <div className="w-9/12 mt-3 mb-3">
                <span className="font-bold text-black text-4xl font-mono">{book?.title}</span>
              </div>
              <div className="font-serif">
                <span>{book?.description}</span>
              </div>
              <div className="font-serif mt-3 mb-3">
                <span className="font-bold">Subject Places:</span>
                <span>{book?.subject_places}</span>
              </div>
              <div className="font-serif mt-3 mb-3">
                <span className="font-bold">Subject Times:</span>
                <span>{book?.subject_times}</span>
              </div>
              <div className="font-serif mt-3 mb-3">
                <span className="font-bold">Subjects:</span>
                <span>{book?.subjects}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
