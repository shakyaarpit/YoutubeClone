import React from "react";
import ContextAPI from "./Context/ContextAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Feed from './Components/Feed';
import SearchResult from './Components/SearchResult'
import VedioDetails from './Components/VedioDetails'
const App = () => {
  return (
    <div>
      <ContextAPI>
        <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" exact element={<Feed/>} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />
          <Route path="/video/:id" element={<VedioDetails/>} />
        </Routes>
        </BrowserRouter>
      </ContextAPI>
      
    </div>
  );
};

export default App;

