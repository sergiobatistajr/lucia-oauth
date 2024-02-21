import { logout } from "@/lib/action";
import { Button } from "./ui/button";

export default function Logout() {
  return (
    <form action={logout}>
      <Button className="bg-gray-100" variant="outline">
        Logout
      </Button>
    </form>
  );
}
