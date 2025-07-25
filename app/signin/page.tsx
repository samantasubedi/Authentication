"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
function signin() {
  const router = useRouter();
  function handleclick() {
    router.push("./");
  }
  return (
    <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 min-h-screen">
      <div className="flex justify-center flex-col gap-10">
        <h1 className="text-6xl">this is sign in page</h1>
      </div>
      <div>
        <Button
          variant="default"
          className="bg-blue-700"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          {" "}
          sign in with google
        </Button>
        <Button
          variant="default"
          className="bg-blue-700"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          {" "}
          sign in with github
        </Button>
      </div>
      <div className="flex justify-end">
        <Button
          variant="ghost"
          className="text-amber-800 bg-amber-100 "
          onClick={() => handleclick()}
        >
          Go back to the homepage
        </Button>
      </div>
      <div />
    </div>
  );
}
export default signin;
