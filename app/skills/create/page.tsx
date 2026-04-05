"use client";

import { useActionState } from "react";
import { createSkill } from "@/app/actions/skill";

const initialState = {
  message: "",
};

export default function CreateSkillPage() {
  const [state, formAction, pending] = useActionState(
    createSkill,
    initialState,
  );

  return (
    <form action={formAction} className="p-4 max-w-md mx-auto form flex flex-col gap-4">
      <input name="name" placeholder="Skill name" className="input input-bordered w-full" />
      <textarea
        name="description"
        placeholder="Skill Description"
        rows={3}
        className="input input-bordered w-full"
      />
      <input name="category" placeholder="Skill Category" className="input input-bordered w-full" />
      <p aria-live="polite" className="text-red-500">
        {state?.message}
      </p>
      <button className="btn btn-primary" disabled={pending}>{pending ? "Creating..." : "Create"}</button>
    </form>
  );
}
