import Link from "next/link";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo textColor="white"/>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" asChild>
            <Link href="/sign-in" className="font-bold group inline-block rounded bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75">
            <span className="font-bold">Login</span>
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up" className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75">
            <span className="font-bold">Get SyncSphere for free</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
