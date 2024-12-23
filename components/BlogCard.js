import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Chip, Grid } from "@material-ui/core";
import { htmlToText } from "html-to-text";
import OuterLink from "./OuterLink";
import Margin from "./Margin";
import { OpenInNewOutlined } from "@material-ui/icons";
import { extractImagePaths } from "../utils/extractImagePaths";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    objectFit: "contain",
    height: 210,
    backgroundColor: "#2b2b2b",
    filter: "brightness(0.8)",
  },
  button: {
    padding: "8px 16px",
    letterSpacing: 0.45,
  },
  cardAction: {
    padding: "10px 15px",
  },
  categoryChip: {
    margin: "4px 3px",
    lineHeight: 1.9,
  },
});

export default function BlogCard({
  title,
  description,
  thumbnail,
  categories,
  link,
}) {
  const classes = useStyles();

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const images = document.querySelectorAll("img");

      images.forEach((image) => {
        image.ondragstart = function (ev) {
          ev.preventDefault();
        };
      });
    });
  }, []);

  const imagePaths = extractImagePaths(description);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail || imagePaths?.[0]}
        className={classes.media}
        alt={title}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        <Margin />

        <div>
          {categories.map((category, index) => (
            <Chip
              key={`category-chip-${index}`}
              size="small"
              className={classes.categoryChip}
              label={category}
              variant="outlined"
              component="span"
            />
          ))}
        </div>
        <Margin />

        <Typography variant="body2" color="textSecondary" component="p">
          {htmlToText(description.slice(0, 200), {
            limits: {
              maxInputLength: 200,
            },
          })}
          {"... "}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Grid container justify="flex-end">
          <Grid item>
            <OuterLink link={link}>
              <Button
                startIcon={<OpenInNewOutlined />}
                variant="contained"
                size="small"
                color="primary"
                className={classes.button}
              >
                Read
              </Button>
            </OuterLink>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
