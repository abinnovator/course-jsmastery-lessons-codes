import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <h1 className="h1-bold">Welcome to the world of Next.js</h1> */}
      {/* <div className="mx-auto mt-10 max-w-sm rounded-lg border border-gray-300 bg-gray-100 p-6 text-center text-lg font-semibold leading-relaxed tracking-wide text-gray-700 shadow-lg">
        Tailwind CSS is Fun
      </div> */}
    </>
  );
}
