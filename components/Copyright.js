import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.dark,
    padding: 20,
  },
}));

export default function Copyright() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="center">
      <Grid item>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © Suvansh Rana "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
    </Grid>
  );
}
