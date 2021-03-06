import React, { useContext } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import USER_CONTEXT from "../context/user-context";
function Header() {
  const { user } = useContext(USER_CONTEXT);
  console.log(user);
  return (
    <>
      <AppBar position="static" elevation={2}>
        <Container className="text-center d-flex align-items-center justify-content-center p-2">
          <Avatar
            src="https://source.unsplash.com/random"
            alt="Venu"
            className="mx-1"
          />
          <Typography variant="h6">Welcome {user}</Typography>

          <Button
            variant="contained"
            size="small"
            disableElevation
            color="secondary"
            className="mx-3"
          >
            LOGout
          </Button>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
