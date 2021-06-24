import React, { useState, useEffect } from "react";

// Contexxt Object .I m going to consume the data stored in this object
const SEARCH_CONTEXT = React.createContext();

// We need to provide this data to each and every component so let's create a provider
// Provider function is  a wrapper for our entire application that provides the data stored in context object
// Whatever the provider is going to wrap in that becomes its children
// We are not going to create the context object ever inside the Provider function.
export const PROVIDER = ({ children }) => {
  //Search container
  const [search, setSearch] = useState("");
  //Flag variable
  const [flag, setFlag] = useState(false);
  //This is how we are passing the data inside the contxt object
  const [searchResult, setSearchResult] = useState({});
  const getData = async () => {
    console.log("THis is 1st line of getDataa");
    let response = await fetch(`https://api.github.com/users/${search}`);
    console.log("this si after fetch");
    let result = await response.json();
    console.log(result);
    setSearchResult(result);
  };

  useEffect(() => {
    if (flag) {
      getData();
      console.log("This is after getData");
      setFlag(false);
    }
  }, [flag]);

  return (
    <SEARCH_CONTEXT.Provider
      value={{
        search,
        setSearch,
        setFlag,
        searchResult,
      }}
    >
      {children}
    </SEARCH_CONTEXT.Provider>
  );
};

export default SEARCH_CONTEXT;

/*
We need to wrap our application inside the Privder
*/
