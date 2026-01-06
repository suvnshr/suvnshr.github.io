import { Paper } from "@mui/material";
import React from "react";
import styles from "./MyAvatar.module.scss";

interface MyAvatarProps {
  src: string;
}

function MyAvatar({ src }: MyAvatarProps) {
  return (
    <Paper variant="outlined" className={styles.paper}>
      <img src={src} className={styles.image} alt="Suvansh Rana" />
    </Paper>
  );
}

export default MyAvatar;

