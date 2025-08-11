import { Compass } from "lucide-react";
import { User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";


function Navbar() {
  return (
    <div className="bg-background sticky top-0 z-50 flex h-11 flex-1 flex-row items-center justify-between px-2 shadow-md md:h-16 md:p-4">
      <div className="flex flex-row items-center gap-1">
        <div className="flex">
          <Compass className="h-6 w-6 md:h-8 md:w-8" strokeWidth={2.5} />
        </div>
        <div className="text-xl font-bold md:text-2xl">Wanderlust</div>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-10">
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="md:text-base">
              <Link href="/pages/discover">Discover</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="md:text-base">
              <Link href="/pages/bookmarks">Bookmarks</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="md:text-base">
              <Link href="/pages/profile">Profile</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-3">
        <User />
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default Navbar;
