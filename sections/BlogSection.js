import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import BlogCard from "../components/BlogCard";

export default function BlogSection({ blogsData }) {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      <Grid
        container
        justify={isTabletOrSmaller ? "center" : "flex-start"}
        spacing={3}
      >
        {blogsData.items.map((blogData, index) => (
          <Grid item key={`blog-card-${index}`}>
            <BlogCard {...blogData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
