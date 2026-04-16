export interface Project {
  name: string;
  description: string;
  tags: string[];
  projectLink?: string;
  githubLink: string;
}

export type ProjectCardProps = Project;
