import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IconType } from "react-icons";

import type { ProfileData } from "../types";

const profileData: ProfileData = {
  name: "Suvansh Rana",
  avatar: "./avatar-v3.jpg",
  backgroundImage: "./background-blurred-v2.jpg",
  about:
    "Full-stack software engineer with 4.5+ years of experience working with the MERN stack, focused on clean code, performance, and real-world products.",

  meta: {
    title: "Suvansh Rana's portfolio",
    url: "https://suvnshr.github.io",
    tags: [
      "developer",
      "portfolio",
      "profile",
      "web-developer",
      "python",
      "react.js",
      "django",
      "python",
      "firebase",
      "flutter",
      "engineer",
    ],
  },

  links: [
    {
      icon: FaGithub,
      link: "https://github.com/suvnshr",
      label: "Github",
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/suvnshr",
      label: "LinkedIn"
    },
    {
      icon: FaMedium,
      link: "https://medium.com/@suvnshr",
      label: "Medium"
    },
  ],
  mediumFeedURL:
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suvnshr",
};

export default profileData;

