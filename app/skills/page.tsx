import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

export const metadata = {
  title: "Skills Gallery | Agent Skills Manager",
  description: "Browse all public agent skills",
};

async function getPublicSkills() {
  return prisma.skill.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
      author: { select: { name: true } },
    },
  });
}

export default async function SkillsPage() {
  const skills = await getPublicSkills();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Skills Gallery</h1>
          <p className="text-base-content/70 mt-1">
            Browse all public agent skills
          </p>
        </div>
        <Link href="/dashboard" className="btn btn-primary">
          My Dashboard
        </Link>
      </div>

      {skills.length === 0 ? (
        <div className="text-center py-12 bg-base-200 rounded-lg">
          <div className="text-4xl mb-4">🔍</div>
          <h2 className="text-lg font-semibold mb-2">No public skills yet</h2>
          <p className="text-base-content/70">
            Be the first to share a skill!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={`/skills/${skill.id}`}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body">
                <h2 className="card-title">{skill.name}</h2>
                <p className="text-base-content/70 text-sm line-clamp-2">
                  {skill.description}
                </p>
                <div className="flex justify-between items-center mt-4 text-xs text-base-content/50">
                  <span>By {skill.author.name}</span>
                  <span>{new Date(skill.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}