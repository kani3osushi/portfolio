import { auth } from "@/lib/auth";
import { SignIn, SignOut } from "./auth-components";
export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <SignIn variant="signIn" />;

  return (
    <div className="flex gap-2 items-center">
      <SignOut variant="signIn" />
    </div>
  );
}
