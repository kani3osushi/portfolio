"use client";
import { signOut } from "next-auth/react";
import { SignButton } from "./ui/sign-button";

const SignOut = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex justify-center">
      <SignButton variant="destructive" onClick={handleSignOut}>
        Sign Out
      </SignButton>
    </div>
  );
};

export { SignOut };
