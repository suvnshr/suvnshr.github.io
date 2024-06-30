import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const profileData = {
  name: "Suvansh Rana",
  avatar: "./avatar.jpg",
  backgroundImage: "./background-blurred.webp",
  about:
    "A web developer and a computer science undergraduate. A person who loves creating stuff and listening to music. Looking forward to work with passionate developers",

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
