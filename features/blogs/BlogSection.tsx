import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import BlogCard from "./BlogCard";

interface BlogSectionProps {
  blogsData: {
    items: Array<{
      title: string;
      description: string;
      thumbnail?: string;
      categories: string[];
      link: string;
    }>;
  };
}

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

