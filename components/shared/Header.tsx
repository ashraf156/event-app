import Link from "next/link"
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-5 xl:px-0 w-full">
        <Link href="/">
          <img src="/assets/images/logo-1.png" alt="logo" className="h-10 w-auto" />
        </Link>
        <nav className="md:flex-between hidden w-full max-w-xs mx-8">
          <NavItems />
        </nav>

        <div className="flex w-32 justify-end items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button className="text-sm font-medium px-4 py-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors hidden md:block">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
            <MobileNav />
          </Show>
          <Show when="signed-out">
            <MobileNav />
          </Show>
        </div>
      </div>
    </header>
  )
}

export default Header
