import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center bg-[#DFF4EF]">
      <div className="text-center">
        <h1
          className={cn(
            "text-[2rem] font-semibold text-black",
            font.className
          )}
        >
          Welcome to MVD
        </h1>
          <span className=" text-[1rem]">My virtual Doctor</span>
        <p className="text-black text-[0.8rem]">A simple authentication service</p>
        <div>
          <LoginButton asChild>
            <Button variant="signin" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
