"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login, type State } from "@/lib/action";
import Link from "next/link";
import { useFormState } from "react-dom";
import { RiDiscordFill } from "react-icons/ri";

export default function Login() {
  const [state, formAction] = useFormState<State, FormData>(login, {
    error: "",
  });

  return (
    <div className="flex flex-1 items-center justify-center p-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Login with account</h1>
        <form className="flex flex-col" action={formAction}>
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" />
          <br />
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
          <br />
          <p className="text-red-600">{state.error}</p>
          <Button>Login</Button>
        </form>
        <p className="flex gap-2">
          Dont have an account?
          <Link className="text-blue-700" href="/signup">
            Sign-up
          </Link>
        </p>
        <div className="text-muted-foreground flex flex-col items-center gap-2">
          <h1>OR</h1>
          <p>Continue with</p>
          <Link className="hover:cursor-pointer" href="/login/discord">
            <RiDiscordFill className="h-8 w-8" />
          </Link>
          <Link className="hover:cursor-pointer" href="/login/github">
            github
          </Link>
        </div>
      </div>
    </div>
  );
}
