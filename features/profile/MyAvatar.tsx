import { Paper } from "@mui/material";
import React from "react";
import styles from "./MyAvatar.module.scss";

import type { MyAvatarProps } from "./types";

/**
 * Displays a user avatar wrapped in an outlined Paper component.
 *
 * @param props - Image src for the avatar
 * @returns JSX.Element Avatar display component
 * @remarks Styles are applied from MyAvatar.module.scss.
 * @public
 */
export default function MyAvatar({ src }: MyAvatarProps) {
  return (
    <Paper variant="outlined" className={styles.paper}>
      <img src={src} className={styles.image} alt="Suvansh Rana" />
    </Paper>
  );
}
