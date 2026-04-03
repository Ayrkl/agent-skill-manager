"use client";

import { useParams } from "next/navigation";
import { Skill, SKILLS } from "../SKILLS";
import { useEffect, useState } from "react";

export default function SkillPage() {
  const params = useParams<{ identifier: string }>();
  const [skills, setSkills] = useState(SKILLS);
  const [skill, setSkill] = useState<Skill | null>(null);

  useEffect(() => {
    const foundSkill = skills.find((s) => s.id === params.identifier);
    if (foundSkill) {
      setSkill(foundSkill);
    }
  }, [params.identifier, skills]);

  return skill ? (
    <article>
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <p>{skill.category}</p>
      <p>{skill.experience}</p>
    </article>
  ) : (
    <div>Skill not found</div>
  );
}
