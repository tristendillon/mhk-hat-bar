"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md  border-purple-200"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2"
          >
            <span
              className={cn(
                "text-xl font-bold font-heading tracking-tight transition-colors",
                isScrolled ? "text-purple-600" : "text-white"
              )}
            >
              The Manhatter
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-600",
                  isScrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              className={cn(
                "rounded-full px-6",
                isScrolled
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-white text-purple-600 hover:bg-white/90"
              )}
              render={
                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Event Inquiry — The Manhatter Hat Bar`}
                />
              }
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {NAV_LINKS.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="w-full"
                    >
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <a
                    href={`mailto:${SITE_CONFIG.email}?subject=Event Inquiry — The Manhatter Hat Bar`}
                    className="w-full text-purple-600 font-medium"
                  >
                    Book Now
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
