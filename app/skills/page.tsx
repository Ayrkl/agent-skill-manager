import Link from "next/link";
import { SKILLS } from "./SKILLS";

export default function SkillsPage() {
  const skills = SKILLS;
  return (
    <section className="p-4 flex flex-col gap-4 max-w-md mx-auto">
      <Link href="/skills/create" className="btn btn-primary self-end">Create Skill</Link>
      <ul className="menu">
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
