"use client";

import * as React from "react";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { on } from "events";

type MenuItem = {
  title: string;
  href: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: "Discover", href: "/pages/discover" },
  { title: "Bookmarks", href: "/pages/bookmarks" },
  { title: "Profile", href: "/pages/profile" },
];

const MenuItemComponent: React.FC<{
  item: MenuItem;
  depth?: number;
  onNavigate: () => void;
}> = ({ item, depth = 0, onNavigate }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "hover:text-primary flex w-full items-center justify-between py-2 text-lg font-medium transition-colors",
              depth > 0 && "pl-4",
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "hover:text-primary block py-2 text-lg font-medium transition-colors",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary",
      )}
      onClick={onNavigate}
    >
      {item.title}
    </Link>
  );
};

export default function HamburgerMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="inset-x-0 top-12 z-10"
        aria-label="Main navigation menu"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Main navigation</SheetTitle>
          <SheetDescription>Site-wide navigation links</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <MenuItemComponent
              key={item.title}
              item={item}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
