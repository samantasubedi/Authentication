"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();
  const handleclick = () => {
    router.push("./signin");
  };
  return (
    <>
      <div className="flex justify-center">
        <Button
          onClick={() => handleclick()}
          variant="outline"
          className="bg-neutral-900 hover:bg-neutral-700 text-white hover:text-white cursor-pointer"
        >
          Sign in
        </Button>
      </div>
    </>
  );
}
export default Page;
