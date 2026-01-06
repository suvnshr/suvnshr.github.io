import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectData from "./data/projectData";

function ProjectSection() {
  const theme = useTheme();
  const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      justifyContent={isTabletOrSmaller ? "center" : "flex-start"}
      spacing={2}
    >
      {projectData.map((_projectData, index) => (
        <Grid key={`project-card-${index}`}>
          <ProjectCard {..._projectData} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProjectSection;

