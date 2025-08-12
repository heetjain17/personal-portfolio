import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

function Navbar({ className }) {
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-4 sm:inset-x-0 sm:max-w-sm mx-auto z-50",
        className
      )}
    >
      <Menu>
        <a href="#home">
          <MenuItem item="Home" />
        </a>
        <a href="#projects">
          <MenuItem item="Projects" />
        </a>
        <a href="#contact">
          <MenuItem item="Contact" />
        </a>
      </Menu>
    </div>
  );
}

export default Navbar;
