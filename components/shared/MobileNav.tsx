import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import NavItems from "./NavItems"
import { Menu } from "lucide-react"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
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
