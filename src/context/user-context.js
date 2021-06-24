import React, { Component } from "react";

//Let's create a user context
const USER_CONTEXT = React.createContext();

//Let's create a provider function that is going to provide the data
export const USER_PROVIDER = ({ children }) => {
  return (
    <USER_CONTEXT.Provider value={{ user: "STEVE" }}>
      {children}
    </USER_CONTEXT.Provider>
  );
};

export default USER_CONTEXT;
