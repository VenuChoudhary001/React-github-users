import { Grid, IconButton, Button } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
function Search() {
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className="my-4"
        spacing={1}
      >
        <Grid item xs={10}>
          <input
            type="text"
            className="search__input"
            placeholder="Search for users"
          />
        </Grid>
        <Grid item xs={2}>
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <Button variant="contained" color="secondary">
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Search;
