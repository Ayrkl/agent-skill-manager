import { getSkills } from "../SKILLS";

export default async function SkillPage({
  params,
}: {
  params: Promise<{ identifier: string }>;
}) {
  const skills = await getSkills();
  const { identifier } = await params;
  const skill = skills.find((s) => s.id === identifier);

  return skill ? (
    <article className="prose lg:prose-xl p-8">
      <h1 className="text-3xl font-bold">{skill.name}</h1>
      <p className="text-gray-600">{skill.description}</p>
      <div className="mt-4">
        <span className="badge badge-primary">{skill.category}</span>
        <span className="ml-2">Experience: {skill.experience}</span>
      </div>
    </article>
  ) : (
    <div className="p-8 text-red-500">Skill not found</div>
  );
}
