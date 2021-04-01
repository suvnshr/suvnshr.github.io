import { SiDjango } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { ImMobile2 } from "react-icons/im";
import { IoCodeSlash, IoLogoPython } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const domainData = [
  {
    name: "Web Development",
    icon: <FiGlobe />,
    skills: [
      {
        name: "Django",
        SkillIcon: SiDjango,
        about_link: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      },
      {
        name: "React.js",
        SkillIcon: FaReact,
        about_link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
    ],
  },
  {
    name: "Mobile development",
    icon: <ImMobile2 />,
    skills: [
      {
        SkillIcon: RiFlutterFill,
        name: "Flutter",
        about_link: "https://en.wikipedia.org/wiki/Flutter_(software)",
      },
    ],
  },
  {
    name: "Programming Languages",
    icon: <IoCodeSlash />,
    skills: [
      {
        name: "Python",
        SkillIcon: IoLogoPython,
        about_link:
          "https://en.wikipedia.org/wiki/Python_(programming_language)",
      },
      {
        name: "Javascript",
        SkillIcon: DiJavascript1,
        about_link: "https://en.wikipedia.org/wiki/JavaScript",
      },
    ],
  },
];

export default domainData;
