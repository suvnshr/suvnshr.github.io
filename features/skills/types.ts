import { IconType } from "react-icons";

export interface Skill {
    name: string;
    SkillIcon: IconType;
    aboutLink: string;
}

export interface Domain {
    name: string;
    skills: Skill[];
}


export interface SkillChipProps {
    name: string;
    SkillIcon: IconType;
    aboutLink: string;
}


export interface DomainListItemProps {
    name: string;
    skills: Domain["skills"];
}