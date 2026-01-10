import type { Project } from "../types";

const projectData: Project[] = [
  {
    name: "DevXplore",
    description:
      "A search engine for developers for finding Github repos, youtube tutorials, online courses, and documentation faster.",
    projectLink: "https://devxplore.suvanshrana.com",
    githubLink: "https://github.com/suvnshr/developer-search",
    tags: ["search-engine", "django", "materialize-css"],
  },
  {
    name: "Py Manager",
    description: "A simple GUI based package manager for python",
    projectLink:
      "https://github.com/suvnshr/py-manager/releases/tag/v0.1.0-alpha.1",
    githubLink: "https://github.com/suvnshr/py-manager",
    tags: ["package-manager", "electron-js", "desktop"],
  },

  {
    name: "C1O2",
    description:
      "A futuristic app which calculates your carbon footprint due to Travel, Food and Household activities. Gives you tips to reduce your carbon footprints.",
    tags: ["carbon-footprint-calculator", "flutter", "mobile"],
    projectLink: "https://github.com/suvnshr/C1O2/releases/latest",
    githubLink: "https://github.com/suvnshr/C1O2",
  },

  {
    name: "Pucho Kisan",
    description:
      "A forum for farmers where then can ask questions about the problems they face in farming",
    tags: ["forum", "django", "materialize-css"],
    githubLink: "https://github.com/aayushbisen/pucho-kisan",
  },
];

export default projectData;

