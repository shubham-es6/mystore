import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full border-b border-slate-300 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-16 w-full items-center justify-between gap-6 px-4 lg:gap-10 xl:px-0">
          <Logo />

          <SearchBar />

          <DesktopMenu />

          <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      <div>{isOpen && <MobileMenu />}</div>
    </header>
  );
};

export default Header;
