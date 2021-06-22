import React, { Component } from "react";

const USER = React.createContext();

export const PROVIDER = ({ children }) => {
  return <USER.Provider value={{ name: "Venu" }}>{children}</USER.Provider>;
};

export default USER;
