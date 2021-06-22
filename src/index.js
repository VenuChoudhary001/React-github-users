import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/*
Project Idea - We can search for any github user on this app 

What you get to learn -
 - Proper use of hooks - useState, useEffect , useContext
 - Aauthentication
 - Routing 
 - Protected Routes
 - Usage of charts

Functionalities 
 - Login Page : Unless the user is logged in , he cannot visit the dashboard page
 - Search Functionality : User can search for any github user 
                          IF user exists data would be shown  but if the user doesn't exist then 
                          Error message would be shown
 





Packages used
 - React Router DOM
 - Material UI/Bootstrap
 - Auth0 for authentication or npm react-google-login package
 - Fusion Charts 

Architecture
 - Components
    - Header
    - Search Bar 
    - GITHUB INFO
    - USER INFO
    - FOllowers List
    - Languages used Chart
    - Most Popular Repos chart
    - Most Forked Chart
    - Most starred repos
    - Loading 

Context
 - Search context
 



- Theme(For customising material Ui theme)
  -theme

- Private Route

- Pages 
    - Login Page
    - Dashboard Page
    - Error Page








*/
