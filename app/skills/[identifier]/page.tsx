type SkillPageProps = {
  params: Promise<{ identifier: string }>;
};
export default async function SkillPage({ params }: SkillPageProps) {
  const { identifier } = await params;
  return (
    <div>
      <h1>this is skill pages {identifier}</h1>
    </div>
  );
}
