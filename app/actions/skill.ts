// app/actions/skill.ts

"use server";

import { addSkill, Skill } from "../skills/SKILLS"; // Skill tipini de ekledik
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSkill(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const category = (formData.get("category") ||
    formData.get("catagory")) as string;

  if (!name || !description || !category) {
    return { message: "All fields are required" };
  }

  const newSkill: Skill = {
    id: Date.now().toString(),
    name,
    description,
    category,
    level: "Beginner",
    experience: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  await addSkill(newSkill);
  revalidatePath("/skills");
  redirect("/skills");
}
