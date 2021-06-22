import { Container, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import PeopleOutlineOutlinedIcon from "@material-ui/icons/PeopleOutlineOutlined";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";
import CodeOutlinedIcon from "@material-ui/icons/CodeOutlined";
function GithubInfo() {
  return (
    <>
      <Grid container justify="flex-start" alignItems="flex-start" spacing={3}>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="flex-start"
          xs={3}
          //   className="github__info"
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "#ffe0f0" }}>
              <DescriptionIcon style={{ fontSize: 40, color: "#da4a91" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Container className="d-flex flex-column">
              <Typography variant="h4">1234</Typography>
              <Typography variant="subtitle2">REPOS</Typography>
            </Container>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="flex-start"
          xs={3}
          //   className="github__info"
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "#e0fcff87" }}>
              <PeopleOutlineOutlinedIcon
                style={{ fontSize: 40, color: "#2caeba" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Container className="d-flex flex-column">
              <Typography variant="h4">5421</Typography>
              <Typography variant="subtitle2">FOLLOWERS</Typography>
            </Container>
          </Grid>
        </Grid>{" "}
        <Grid
          item
          container
          justify="flex-start"
          alignItems="flex-start"
          xs={3}
          //   className="github__info"
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "#716db93d" }}>
              <GroupAddOutlinedIcon
                style={{ fontSize: 40, color: "#7b75fb" }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <Container className="d-flex flex-column">
              <Typography variant="h4">0</Typography>
              <Typography variant="subtitle2">FOLLOWING</Typography>
            </Container>
          </Grid>
        </Grid>{" "}
        <Grid
          item
          container
          justify="flex-start"
          alignItems="flex-start"
          xs={3}
          //   className="github__info"
        >
          <Grid item>
            <IconButton style={{ backgroundColor: "#fffbea" }}>
              <CodeOutlinedIcon style={{ fontSize: 40, color: "#f0b429" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <Container className="d-flex flex-column">
              <Typography variant="h4">0</Typography>
              <Typography variant="subtitle2">GISTS</Typography>
            </Container>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default GithubInfo;
