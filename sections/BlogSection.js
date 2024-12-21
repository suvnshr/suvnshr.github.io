import React from "react";
import {
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import BlogCard from "../components/BlogCard";


export default function BlogSection({ blogsData }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid container justify={matches && "center"} spacing={3}>
        {blogsData.items.map((blogData, index) => (
          <Grid item key={`blog-card-${index}`}>
            <BlogCard {...blogData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
