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
import { IoLogoPython } from "react-icons/io5";
import {
  FaDocker,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import type { Domain } from "../types";


const domainData: Domain[] = [
  {
    name: "Web Development",
    skills: [
      {
        name: "React.js",
        SkillIcon: FaReact,
        aboutLink: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        name: "Next.js",
        SkillIcon: SiNextdotjs,
        aboutLink: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        name: "Node.js",
        SkillIcon: FaNodeJs,
        aboutLink: "https://en.wikipedia.org/wiki/Node.js",
      },
      {
        name: "Sails.js",
        SkillIcon: RiSailboatLine,
        aboutLink: "https://en.wikipedia.org/wiki/Sails.js",
      },
      {
        name: "Django",
        SkillIcon: SiDjango,
        aboutLink: "https://en.wikipedia.org/wiki/Django_(web_framework)",
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        SkillIcon: RiFlutterFill,
        name: "Flutter",
        aboutLink: "https://en.wikipedia.org/wiki/Flutter_(software)",
      },
      {
        SkillIcon: FaReact,
        name: "React Native",
        aboutLink: "https://en.wikipedia.org/wiki/React_Native",
      },
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      {
        name: "Python",
        SkillIcon: IoLogoPython,
        aboutLink:
          "https://en.wikipedia.org/wiki/Python_(programming_language)",
      },
      {
        name: "JavaScript",
        SkillIcon: DiJavascript1,
        aboutLink:
          "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        name: "Dart",
        SkillIcon: SiDart,
        aboutLink: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
      },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      {
        name: "Docker",
        SkillIcon: FaDocker,
        aboutLink: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        name: "Nginx",
        SkillIcon: SiNginx,
        aboutLink: "https://en.wikipedia.org/wiki/Nginx",
      },
      {
        name: "Ansible",
        SkillIcon: SiAnsible,
        aboutLink: "https://en.wikipedia.org/wiki/Ansible_(software)",
      },
    ],
  },
  {
    name: "Design",
    skills: [
      {
        name: "Material Design",
        SkillIcon: SiMaterialdesign,
        aboutLink: "https://en.wikipedia.org/wiki/Material_Design",
      },
      {
        name: "Ant Design",
        SkillIcon: SiAntdesign,
        aboutLink: "https://en.wikipedia.org/wiki/Ant_Design",
      },
    ],
  },
];

export default domainData;

