import React from "react";
import ReactDOM  from "react-dom/client";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home";
import BookList from "./components/booklist/BookList";
import BookDetails from "./components/booklist/BookDetails";
// import './styles.css';
import { AppProvider } from "./components/context/context";

function App() {
  return (
    <AppProvider>

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="book" element={<BookList/>} />
      <Route path="/book/:id" element={<BookDetails/>} />
      
     </Routes>
     </BrowserRouter> 
    </AppProvider>

    
  )
}

export default App
