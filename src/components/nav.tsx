import { Button } from "./ui/button";
import { Menu } from "lucide-react";
const Nav = () => {
  return (
    <nav className="w-full sticky top-0 z-50 px-4">
      <div className="mx-auto max-w-7xl py-3">
        {/* Main nav */}
        <div className="relative flex items-center justify-between rounded-xl border border-white/15 bg-white/10 dark:bg-black/20 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {/* Spacer to balance the right menu button on mobile */}
          <div className="w-10 h-10 m-1 md:hidden" />

          {/* Logo on desktop/tablet (left-aligned) */}
          <div className="hidden md:flex px-3 py-2 items-center">
            <img src="/LOGO.png" className="h-10" />
          </div>

          {/* Logo on mobile (centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 md:hidden px-3 py-2 flex items-center">
            <img src="/LOGO.png" className="h-10" />
          </div>

          <div className="hidden md:flex gap-2 px-3">
            <Button variant="secondary" asChild>
              <a href="#">Home</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#why">Why AnatoLearn</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="#">The Team</a>
            </Button>
          </div>

          <Button
            type="button"
            size="icon"
            className="inline-flex md:hidden m-1 h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/20 text-foreground hover:bg-white/30 active:bg-white/40 dark:bg-black/30 dark:hover:bg-black/40"
          >
            <Menu />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
