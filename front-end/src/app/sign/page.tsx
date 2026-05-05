"use client";

import Image from "next/image";
import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SignPage() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "signin";
  const isSignIn = mode === "signin";

  return (
    <main className="min-h-screen bg-bg flex">
      {/* Left Side - Brand */}
      <div className="hidden lg:flex lg:w-3/5 flex-col items-center justify-center p-12 bg-linear-to-br from-bg via-surface to-bg">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-6">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Fullstack Academy"
                width={128}
                height={128}
                className="object-contain opacity-90 w-auto h-auto"
                priority
              />
            </Link>
          </div>
          <h1 className="text-2xl font-medium text-textPrimary mb-2">
            Fullstack Academy
          </h1>
          <p className="text-sm text-textSecondary max-w-md">
            Transforme sua carreira em tecnologia
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-2/5 flex flex-col min-h-screen bg-surface/30 border-l border-outline">
        <div className="flex-1 flex flex-col p-6 lg:p-12">
          {/* Mobile Logo */}
          <div className="lg:hidden flex flex-col items-center mb-6">
            <div className="w-20 h-20 mb-3">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Fullstack Academy"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            <h1 className="text-lg font-medium text-textPrimary">
              Fullstack Academy
            </h1>
          </div>

          {/* Forms - centered with flex */}
          <div className="flex-1 flex flex-col justify-center items-center w-full">
            <div className="w-full max-w-md">
              {isSignIn ? <SignIn /> : <SignUp />}
            </div>
          </div>
        </div>

        {/* Footer - shrink-0 keeps it at bottom */}
        <div className="shrink-0 flex justify-center p-4">
          <p className="text-xs text-textSecondary/50">
            © 2026 Fullstack Academy
          </p>
        </div>
      </div>
    </main>
  );
}
