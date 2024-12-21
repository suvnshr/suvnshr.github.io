import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const profileData = {
  name: "Suvansh Rana",
  avatar: "./avatar-v2.jpg",
  backgroundImage: "./background-blurred-v2.jpg",
  about:
    "A software engineer with 4 years of experience specializing in the MERN stack, as well as expertise in React Native and Flutter. Passionate about building innovative solutions and collaborating with driven developers. Enjoys creating impactful software and listening to music.",

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
      icon: <FaGithub size="28px" />,
      link: "https://github.com/suvnshr",
    },
    {
      icon: <FaLinkedin size="28px" />,
      link: "https://linkedin.com/in/suvnshr",
    },
    {
      icon: <FaMedium size="28px" />,
      link: "https://medium.com/@suvnshr",
    },
    // {
    //   icon: <FaTwitter size="28px" />,
    //   link: "https://twitter.com/@suvnshr",
    // },
  ],
};

export default profileData;
