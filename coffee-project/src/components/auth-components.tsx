import React from "react";

import { signIn, signOut } from "@/auth";
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
      <Button {...props}>サインイン</Button>
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
        ログアウト
      </Button>
    </form>
  );
}
