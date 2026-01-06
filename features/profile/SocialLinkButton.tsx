import { Fab } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";
import OuterLink from "@shared/ui/OuterLink";
import styles from "./SocialLinkButton.module.scss";

interface SocialLinkButtonProps {
  icon: IconType;
  link: string;
  label: string;
}

function SocialLinkButton({ icon: Icon, link, label }: SocialLinkButtonProps) {
  return (
    <OuterLink link={link}>
      <Fab color="primary" variant="extended" size="medium" className={styles.fab}>
        <Icon size="28px" style={{marginRight: "4px"}} />
        {label}
      </Fab>
    </OuterLink>
  );
}

export default SocialLinkButton;

