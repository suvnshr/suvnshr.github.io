import React from "react";

import { Paper, ListItem, ListItemText } from "@mui/material";

import SkillChip from "./SkillChip";
import styles from "./DomainListItem.module.scss";
import type { DomainListItemProps } from "./types";

/**
 * Renders a domain list item with its name, icon, and associated skills.
 *
 * Each skill is displayed using the {@link SkillChip} component.
 *
 * @param props - Component props.
 * @param props.name - Display name of the domain.
 * @param props.icon - Icon component representing the domain.
 * @param props.skills - Collection of skills associated with the domain.
 *
 * @returns A styled list item containing domain details.
 */
export default function DomainListItem({ name, skills }: DomainListItemProps) {
  return (
    <Paper variant="outlined" className={styles.paper}>
      <ListItem>
        <ListItemText
          primary={name}
          slotProps={{
            primary: {
              className: styles.primaryText,
            },
            secondary: {
              component: "div",
            },
          }}
          secondary={
            <div className={styles.chipsContainer}>
              {skills.map((skillData, index) => (
                <SkillChip key={`skill-chip-${index}`} {...skillData} />
              ))}
            </div>
          }
        />
      </ListItem>
    </Paper>
  );
}
