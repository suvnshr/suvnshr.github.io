import {
  SiAnsible,
  SiAntdesign,
  SiDart,
  SiDjango,
  SiMaterialdesign,
  SiNextdotjs,
  SiNginx,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { RiFlutterFill, RiSailboatLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { ImMobile2 } from "react-icons/im";
import { IoCodeSlash, IoLogoPython } from "react-icons/io5";
import {
  FaDocker,
  FaNodeJs,
  FaPalette,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  SkillIcon: IconType;
  about_link: string;
}

export interface Domain {
  name: string;
  icon: IconType;
  skills: Skill[];
}

const domainData: Domain[] = [
  {
    name: "Web Development",
    icon: FiGlobe,
    skills: [
      {
        name: "React.js",
        SkillIcon: FaReact,
        about_link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        name: "Next.js",
        SkillIcon: SiNextdotjs,
        about_link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        name: "Node.js",
        SkillIcon: FaNodeJs,
        about_link: "https://en.wikipedia.org/wiki/Node.js",
      },
      {
        name: "Sails.js",
        SkillIcon: RiSailboatLine,
        about_link: "https://en.wikipedia.org/wiki/Sails.js",
      },
      {
        name: "Django",
        SkillIcon: SiDjango,
        about_link: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      },
    ],
  },
  {
    name: "Mobile development",
    icon: ImMobile2,
    skills: [
      {
        SkillIcon: RiFlutterFill,
        name: "Flutter",
        about_link: "https://en.wikipedia.org/wiki/Flutter_(software)",
      },
      {
        SkillIcon: FaReact,
        name: "React Native",
        about_link: "https://en.wikipedia.org/wiki/React_Native",
      },
    ],
  },
  {
    name: "Programming Languages",
    icon: IoCodeSlash,
    skills: [
      {
        name: "Python",
        SkillIcon: IoLogoPython,
        about_link:
          "https://en.wikipedia.org/wiki/Python_(programming_language)",
      },
      {
        name: "JavaScript",
        SkillIcon: DiJavascript1,
        about_link:
          "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        name: "Dart",
        SkillIcon: SiDart,
        about_link: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: FaTools,
    skills: [
      {
        name: "Docker",
        SkillIcon: FaDocker,
        about_link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        name: "Nginx",
        SkillIcon: SiNginx,
        about_link: "https://en.wikipedia.org/wiki/Nginx",
      },
      {
        name: "Ansible",
        SkillIcon: SiAnsible,
        about_link: "https://en.wikipedia.org/wiki/Ansible_(software)",
      },
    ],
  },
  {
    name: "Design",
    icon: FaPalette,
    skills: [
      {
        name: "Material Design",
        SkillIcon: SiMaterialdesign,
        about_link: "https://en.wikipedia.org/wiki/Material_Design",
      },
      {
        name: "Ant Design",
        SkillIcon: SiAntdesign,
        about_link: "https://en.wikipedia.org/wiki/Ant_Design",
      },
    ],
  },
];

export default domainData;

