import Link from "next/link"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <header className="w-full border-b bg-gray-50 dark:bg-gray-900">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-5 xl:px-0 w-full">
        <Link href="/">
          <img src="/assets/images/logo-1.png" alt="logo" className="h-10 w-auto" />
        </Link>
        <nav className="md:flex md:justify-between hidden w-full max-w-xs mx-8">
          <NavItems />
        </nav>

        <div className="flex justify-end items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="text-sm font-medium px-4 py-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors hidden md:block">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors hidden md:block">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>

          <ModeToggle />
          
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
