import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Chip, Grid } from "@mui/material";
import { htmlToText } from "html-to-text";
import OuterLink from "../../shared/ui/OuterLink";
import Margin from "../../shared/ui/Margin";
import { OpenInNewOutlined } from "@mui/icons-material";
import { extractImagePaths } from "./utils/extractImagePaths";
import styles from "./BlogCard.module.scss";

interface BlogCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  categories: string[];
  link: string;
}

export default function BlogCard({
  title,
  description,
  thumbnail,
  categories,
  link,
}: BlogCardProps) {
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
    <Card variant="outlined" className={styles.card}>
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
              className={styles.categoryChip}
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
      <CardActions className={styles.cardActions}>
        <Grid container justifyContent="flex-end">
          <Grid>
            <OuterLink link={link}>
              <Button
                startIcon={<OpenInNewOutlined />}
                variant="contained"
                size="small"
                color="primary"
                className={styles.button}
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

