import React, { createContext, useEffect, useState } from "react";

import { fetchDataFromApi } from "../Utils/Api";

export const Context = createContext();

const ContextAPI = (props) => {
  const [loding, setLoding] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoriesData(selectedCategories);
  }, [selectedCategories]);

  const fetchSelectedCategoriesData = (query) => {
    setLoding(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResult(contents);
      // console.log(contents);
      setLoding(false);
    });
  };

  return (
    <div>
      <Context.Provider
        value={{
          loding,
          setLoding,
          searchResult,
          setSearchResult,
          selectedCategories,
          setSelectedCategories,
          mobileMenu,
          setMobileMenu,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
};

export default ContextAPI;
