import React from "react";

import { signIn, signOut } from "@/lib/auth";
import { Button } from "./ui/Button";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign up</Button>
    </form>
  );
}

export function SignOut({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button className="w-full p-0" {...props}>
        Logout
      </Button>
    </form>
  );
}
