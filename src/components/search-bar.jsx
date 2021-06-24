import { Grid, IconButton, Button } from "@material-ui/core";
import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import SEARCH_CONTEXT from "../context/search-context";

function Search() {
  //Let us get the access to the variables stored in context object
  //useContext hook is used for consuming the data stored in the context object

  const data = useContext(SEARCH_CONTEXT);
  console.log(data);
  const { search, setSearch, setFlag } = data;
  // console.log(myName);
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          {/* <IconButton>
            <SearchIcon />
          </IconButton> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setFlag(true)}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Search;
