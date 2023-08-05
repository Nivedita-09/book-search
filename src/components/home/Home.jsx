import { useRef, useEffect, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";

export default function Home() {
  const contextValue = useContext(AppContext);
  const searchText = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log(contextValue.books);
  }, [contextValue.books]);

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      // setSearch("the lost world");
      // setTitle("Please Enter Something ...");
    } else {
      // setSearch(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <>
      <div className="bg-green-400 text-black p-4 w-full text-center">
        <h1 className="font-bold text-4xl font-mono ">
          Search your Favourtie Book
        </h1>
      </div>
      <div className="relative inline-block">
        <img
          src="https://assets.weforum.org/article/image/responsive_big_webp_JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.webp"
          alt="Library"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-green-400 opacity-30"></div>

        <form
          className="absolute top-0 mx-auto w-full justify-center justify-self-center text-center h-full align-self-center "
          onSubmit={handleSubmit}
        >
          <div className="flex w-9/12 items-center justify-around mx-auto mt-28 ">
            <input
              type="text"
              placeholder="Search your book...."
              ref={searchText}
              className="p-2 w-4/5 rounded-lg"
            />
            <button type="submit" onClick={handleSubmit}>
              <FaSearch size={30} className="text-white" />
            </button>
          </div>
          <div className="text-white text-4xl w-4/5 mx-auto mt-52 font-mono font-semibold  bg-purple-400 ">
            &quot;Libraries store the energy that fuels the imagination. They
            open up windows to the world and inspire us to explore and achieve,
            and contribute to improving our quality of life.&quot; - Sidney
            Sheldon
          </div>
        </form>
      </div>
    </>
  );
}
