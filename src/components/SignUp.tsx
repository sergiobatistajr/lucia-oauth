"use client";
import { signup, type State } from "@/lib/action";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
  const [state, formAction] = useFormState<State, FormData>(signup, {
    error: "",
  });
  return (
    <div className="flex h-screen w-full flex-1 items-center justify-center p-24">
      <div className="flex flex-col gap-4 rounded-md border border-sky-100 bg-slate-50 p-4">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <form className="flex flex-col" action={formAction}>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" />
          <br />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
          <br />
          <p className="text-red-600">{state.error}</p>
          <Button>Sign-up</Button>
        </form>
        <p className="flex gap-2">
          Already have an account?
          <Link className="text-blue-700" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
