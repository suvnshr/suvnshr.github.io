import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Chip, Grid } from "@mui/material";
import Margin from "../../shared/ui/Margin";
import { OpenInNewOutlined } from "@mui/icons-material";
import styles from "./ProjectCard.module.scss";

import type { ProjectCardProps } from "./types";

/**
 * Renders a styled card for each project, displaying its details, tags, and links.
 *
 * @param props - Project details
 * @returns JSX.Element Single project card
 * @remarks Displays project and GitHub links, uses custom SCSS.
 * @public
 */
export default function ProjectCard({
  name,
  description,
  tags,
  projectLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card variant="outlined" className={styles.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>

        <Margin />

        <div>
          {tags.map((tag, index) => (
            <Chip
              key={`tag-chip-${index}`}
              className={styles.tagChip}
              size="small"
              label={tag}
              variant="outlined"
              component="span"
            />
          ))}
        </div>
        <Margin />

        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Grid container justifyContent="flex-end" spacing={2}>
          <Grid>
            <Button
              variant={!projectLink ? "contained" : "outlined"}
              className={styles.button}
              size="small"
              color="primary"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
          </Grid>

          {projectLink && (
            <Grid>
              <Button
                size="small"
                color="primary"
                variant="contained"
                className={styles.button}
                startIcon={<OpenInNewOutlined />}
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </Button>
            </Grid>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
}
