import React from "react";

import {
  Paper,
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  useTheme,
} from "@mui/material";

import SkillChip from "./SkillChip";
import { Domain } from "./data/domainData";
import { IconType } from "react-icons";
import styles from "./DomainListItem.module.scss";

interface DomainListItemProps {
  name: string;
  icon: IconType;
  skills: Domain["skills"];
}

export default function DomainListItem({ name, icon: Icon, skills }: DomainListItemProps) {
  const theme = useTheme();

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

