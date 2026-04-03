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
    <form action={formAction}>
      <input name="name" placeholder="Name" className="input input-bordered w-full" />
      <textarea
        name="description"
        placeholder="Description"
        rows={3}
        className="input input-bordered w-full"
      />
      <input name="category" placeholder="Category" className="input input-bordered w-full" />
      <p aria-live="polite" className="text-red-500">
        {state?.message}
      </p>
      <button disabled={pending}>{pending ? "Creating..." : "Create"}</button>
    </form>
  );
}
