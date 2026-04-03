import { SKILLS } from "../SKILLS";

type SkillPageProps = {
  params: Promise<{ identifier: string }>;
};
export default async function SkillPage({ params }: SkillPageProps) {
  const { identifier } = await params;
  const skill = SKILLS.find((skill) => skill.id === identifier);
  return skill ? (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.description} </p>
      <p>{skill?.category}</p>
      <p>{skill?.experience}</p>
    </article>
  ) : (
    <div>Skill not found</div>
  );
}
