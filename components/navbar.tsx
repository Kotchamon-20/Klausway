"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { navItems, routes } from "@/lib/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    requestAnimationFrame(onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === routes.home) return pathname === routes.home;
    return pathname.startsWith(href.split("#")[0]);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={routes.home} className="flex items-center">
          <Logo size={36} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            "children" in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-foreground",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[220px] rounded-xl border border-white/10 bg-background/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5 hover:text-foreground",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={routes.docs}
            className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href={routes.pricing}
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10"
          >
            Access Portal
            <svg
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-foreground lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm hover:bg-white/5 hover:text-foreground",
                    isActive(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
                {"children" in item &&
                  item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm text-muted-foreground hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/5 pt-4">
              <Link
                href={routes.docs}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                Sign in
              </Link>
              <Link
                href={routes.pricing}
                className="rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-black"
              >
                Access Portal
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
