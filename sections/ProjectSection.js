import React from "react";
import { Container, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

function ProjectSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Grid container justify={matches && "center"} spacing={3}>
        {projectData.map((_projectData, index) => (
          <Grid item key={`project-card-${index}`}>
            <ProjectCard {..._projectData} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectSection;
