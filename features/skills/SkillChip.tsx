import { Chip, useTheme } from "@mui/material";
import React from "react";
import styles from "./SkillChip.module.scss";
import type { SkillChipProps } from "./types";


export default function SkillChip({ name, SkillIcon, aboutLink }: SkillChipProps) {
  const theme = useTheme();

  return (
    <Chip
      variant="outlined"
      avatar={
        <SkillIcon
          className={styles.icon}
          style={{ color: theme.palette.primary.light }}
        />
      }
      className={styles.chip}
      label={name}
      onClick={() => null}
      component="a"
      href={aboutLink}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}