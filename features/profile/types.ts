import type { IconType } from "react-icons";

export interface ProfileData {
  name: string;
  avatar: string;
  about: string;
  meta: {
    title: string;
    url: string;
    tags: string[];
  };
  links: Array<{
    icon: IconType;
    link: string;
    label: string;
  }>;
  mediumFeedURL: string;
}

export interface SocialLinkButtonProps {
  icon: IconType;
  link: string;
  label: string;
}
