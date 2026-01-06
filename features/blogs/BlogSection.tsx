import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import BlogCard from "./BlogCard";

import type { BlogSectionProps } from "./types";

/**
 * Renders a responsive grid of BlogCard components based on Medium feed data.
 *
 * @param blogsData - Object containing an array of blog post items
 * @returns JSX.Element List of blog cards
 * @remarks Uses MUI Grid and theme breakpoints for layout.
 * @public
 */
export default function BlogSection({ blogsData }: BlogSectionProps) {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justifyContent={isTabletOrSmaller ? "center" : "flex-start"}
      spacing={3}
    >
      {blogsData.items.map((blogData, index) => (
        <Grid key={`blog-card-${index}`}>
          <BlogCard {...blogData} />
        </Grid>
      ))}
    </Grid>
  );
}
