import React from "react";
import { Container } from "@material-ui/core";
import Header from "../components/header";
import Search from "../components/search-bar";
import GithubInfo from "../components/github-info";
import UserInfo from "../components/user-info";

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Search />
        <GithubInfo />
        <UserInfo />
      </Container>
    </>
  );
}

export default Dashboard;
