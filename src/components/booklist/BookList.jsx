import React, {useContext, useEffect} from 'react'
import { AppContext } from '../context/context'
import Book from "../booklist/Book";
import coverImg from "../../img/cover_not_found.jpg";


export default function BookList() {
    const contextValue = useContext(AppContext);
    const {books, title} = contextValue;
    useEffect(() => {
      console.log(contextValue.books)
    }, [contextValue.books])
  const booksWithCovers = books.map((singleBook) => {
return{
  ...singleBook,
  id: singleBook.id.replace('/works/', '').trim(),
  cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
}
  });
  return (
    <div className='text-center align-middle justify-center bg-green-100'>
      <div className='bg-green-400 w-full'>
        <h1 className='text-6xl font-mono font-bold'>{title}</h1>
      </div>
      <div className=' grid grid-cols-4 gap-4 text-center w-full mx-auto' >
      {
        booksWithCovers.slice(0, 30).map((item, index) => {
          return(
            <Book key={index} {...item}   />
          )
        })
      }
      </div>
    </div>
  )
}
