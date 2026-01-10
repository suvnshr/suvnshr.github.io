import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Chip, Grid } from "@mui/material";
import { htmlToText } from "html-to-text";
import Margin from "../../shared/ui/Margin";
import { OpenInNewOutlined } from "@mui/icons-material";
import styles from "./BlogCard.module.scss";

import type { BlogCardProps } from "./types";

/**
 * Renders a card displaying blog post details, categories, and a link to the full article.
 *
 * @param props - Blog post data
 * @returns JSX.Element Blog card component
 * @remarks Styles content from BlogCard.module.scss and uses html-to-text for excerpt.
 * @public
 */
export default function BlogCard({
  title,
  description,
  categories,
  link,
}: BlogCardProps) {

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
            <Button
              startIcon={<OpenInNewOutlined />}
              variant="contained"
              size="small"
              color="primary"
              component="a"
              className={styles.button}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

