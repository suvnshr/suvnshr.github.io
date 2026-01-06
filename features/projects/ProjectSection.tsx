import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projectData from "./data/projectData";

/**
 * Renders a grid of ProjectCard components using project data.
 *
 * @returns JSX.Element List of projects section
 * @remarks Responsive display using MUI Grid and theme breakpoints.
 * @public
 */
export default function ProjectSection() {
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
