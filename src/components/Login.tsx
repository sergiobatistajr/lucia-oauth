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
    <div className="flex flex-1 justify-center items-center p-24">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl">Login with account</h1>
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
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <h1>OR</h1>
          <p>Continue with</p>
          <Link className="hover:cursor-pointer" href="/login/discord">
            <RiDiscordFill className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
