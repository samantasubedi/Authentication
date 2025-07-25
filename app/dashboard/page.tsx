"use client";
import { getServerSession } from "next-auth";
import { authoptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
export default async function Dashboard() {
  const session = await getServerSession(authoptions);
  if (!session) {
    redirect("/signin");
  }
  const username = session.user?.name;
  const useremail = session.user?.email;

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
              session.user?.image
                ? session.user.image
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
