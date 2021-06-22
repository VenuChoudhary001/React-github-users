import {
  Grid,
  Typography,
  Avatar,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
const useStyles = makeStyles((theme) => ({
  avatar_root: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function UserInfo() {
  const classes = useStyles();
  return (
    <>
      <div className="my-4 py-2">
        <Grid container justify="flex-start" alignItems="center">
          <Grid
            item
            container
            xs={12}
            sm={5}
            direction="column"
            spacing={1}
            className="user__info p-3"
          >
            <Grid item className="d-flex align-items-center">
              <Avatar
                src="https://source.unsplash.com/random"
                alt="Venu"
                className={classes.avatar_root}
              />
              <Typography variant="h6" className="mx-2">
                Venu Choudhary
                <Typography variant="body1">Front End Web Developer</Typography>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className="mx-3 text-muted">
                Creator of apps
              </Typography>
            </Grid>
            <Grid item className="d-flex align-items-center text-muted">
              <IconButton>
                <LocationOnOutlinedIcon />
              </IconButton>
              <Typography variant="body2">
                Kolkata , West Bengal , India
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabledElevation
                size="small"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #123456",
                  color: "#123456",
                  outline: "none",
                }}
              >
                Go to github
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </div>
    </>
  );
}

export default UserInfo;
