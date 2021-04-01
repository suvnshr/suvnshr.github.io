import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

const profileData = {
  name: "Suvansh Rana",
  avatar: "./avatar.jpg",
  backgroundImage: "./background-blurred.webp",
  about:
    "A web developer and a computer science undergraduate. A person who loves creating stuff and listening to music. Looking forward to work with passionate developers",

  meta: {
    title: "Suvansh Rana's portfolio",
    url: "https://suvansh-rana.github.io",
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
      link: "https://github.com/suvansh-rana",
    },
    {
      icon: <FaLinkedin size="28px" />,
      link: "https://linkedin.com/in/suvansh-rana",
    },
    {
      icon: <FaMedium size="28px" />,
      link: "https://medium.com/@suvansh_rana",
    },
    {
      icon: <FaTwitter size="28px" />,
      link: "https://twitter.com/@suvansh_rana_",
    },
  ],
};

export default profileData;
