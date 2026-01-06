import { Fab } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
import OuterLink from "@shared/ui/OuterLink";
import styles from "./SocialLinkButton.module.scss";

import type { SocialLinkButtonProps } from "./types";

/**
 * Renders an extended floating action button for a social link.
 *
 * @param props - Includes the icon, link URL, and label
 * @returns JSX.Element Social network link button
 * @remarks Styled using FAB and custom SCSS. Uses OuterLink for navigation.
 * @public
 */
export default function SocialLinkButton({ icon: Icon, link, label }: SocialLinkButtonProps) {
  return (
    <OuterLink link={link}>
      <Fab color="primary" variant="extended" size="medium" className={styles.fab}>
        <Icon size="28px" style={{ marginRight: "4px" }} />
        {label}
      </Fab>
    </OuterLink>
  );
}
