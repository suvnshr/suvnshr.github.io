import { Fab } from "@mui/material";
import styles from "./SocialLinkButton.module.scss";

import type { SocialLinkButtonProps } from "./types";

/**
 * Renders an extended floating action button for a social link.
 *
 * @param props - Includes the icon, link URL, and label
 * @returns JSX.Element Social network link button
 * @remarks Styled using FAB and custom SCSS.
 * @public
 */
export default function SocialLinkButton({
  icon: Icon,
  link,
  label,
}: SocialLinkButtonProps) {
  return (
    <Fab
      color="primary"
      variant="extended"
      size="medium"
      className={styles.fab}
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size="28px" style={{ marginRight: "4px" }} />
      {label}
    </Fab>
  );
}
