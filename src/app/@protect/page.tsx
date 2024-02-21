import Logout from "@/components/Logout";
import { validateRequest } from "@/lib/auth";

export default async function Page() {
  const { user } = await validateRequest();
  return (
    <main className="p-24 flex flex-col items-center gap-2">
      <div>
        <h1>Admin page</h1>
        <h2>Welcome back, {user?.username}</h2>
      </div>
      <Logout />
    </main>
  );
}
