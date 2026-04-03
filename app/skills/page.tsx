import Link from "next/link";
import { SKILLS } from "./SKILLS";

export default function SkillsPage() {
  const skills = SKILLS;
  return (
    <section>
      <Link href="/skills/create">Create Skill</Link>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            {skill.name}
            <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
