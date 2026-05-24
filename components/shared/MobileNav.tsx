'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Automatically close the sidebar when the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="align-middle" asChild>
          <Menu className="cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center gap-6 bg-white md:hidden">
          <img 
            src="/assets/images/logo-1.png"
            alt="logo"
            className="h-10 w-auto mt-4"
          />
          <Separator className="border border-gray-50 w-full" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav
