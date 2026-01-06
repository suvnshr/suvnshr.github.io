import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import styles from "./Copyright.module.scss";

/**
 * Displays the copyright information and current year in a styled footer.
 *
 * @returns JSX.Element Copyright footer
 * @remarks Uses MUI Grid and theme for styling.
 * @public
 */
export default function Copyright() {
  const theme = useTheme();

  return (
    <Grid
      container
      className={styles.container}
      style={{
        backgroundColor: theme.palette.secondary.dark,
      }}
      justifyContent="center"
    >
      <Grid>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © Suvansh Rana "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
    </Grid>
  );
}

