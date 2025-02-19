import { signIn } from "@/lib/auth";
import { Github } from "./ui/github";
import { SignButton } from "./ui/sign-button";

const GithubSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <SignButton className="w-full" variant="outline">
        <Github />
        Continue with GitHub
      </SignButton>
    </form>
  );
};

export { GithubSignIn };
