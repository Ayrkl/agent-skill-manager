type Skill = {
  id: string;
  name: string;
  description: string;
  category: string;
  level: string;
  experience: number;
  createdAt: Date;
  updatedAt: Date;
};

export const SKILLS: Skill[] = [
  {
    id: "1",
    name: "Skill 1",
    description: "Description 1",
    category: "Category 1",
    level: "Level 1",
    experience: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Skill 2",
    description: "Description 2",
    category: "Category 2",
    level: "Level 2",
    experience: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];