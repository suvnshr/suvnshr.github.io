import { Chip, useTheme } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
import OuterLink from "../../shared/ui/OuterLink";
import styles from "./SkillChip.module.scss";

interface SkillChipProps {
  name: string;
  SkillIcon: IconType;
  about_link: string;
}

function SkillChip({ name, SkillIcon, about_link }: SkillChipProps) {
  const theme = useTheme();

  return (
    <OuterLink link={about_link}>
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
      />
    </OuterLink>
  );
}

export default SkillChip;

