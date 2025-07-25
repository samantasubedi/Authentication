"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
export default function Dashboard() {
  const session = useSession();
  console.log(session);
  if (session.status === "unauthenticated") {
    return redirect("/signin");
  }

  const username = session.data?.user?.name;
  const useremail = session.data?.user?.email;

  return (
    <div>
      <div className="text-5xl text-bold text-red">
        welcome {username} ,you have sucessfully signned in
      </div>

      <div className="flex justify-center">
        <div className="border-2 border-black w-fit p-5 bg-neutral-500">
          <img
            alt="user image"
            src={
              session.data?.user?.image
                ? session.data?.user.image
                : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
            }
            onError={(e) => {
              e.currentTarget.src =
                "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg";
            }}
            className="h-30 w-30 rounded-full"
          ></img>
          <div className="font-bold text-3xl text-amber-900"> {username}</div>
          <div className="font-semibold text-green-800">{useremail}</div>
          <div className="flex justify-end-safe ">
            <Button
              onClick={() => signOut({ callbackUrl: "/signin" })}
              variant="outline"
              className="bg-red-900 text-bold text-white"
            >
              signout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
