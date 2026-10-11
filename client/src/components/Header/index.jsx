import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import MobileMenuIcon from "./MobileMenuIcon";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-14 w-full items-center justify-between gap-4 px-4 lg:gap-8">
          <Logo />

          <SearchBar />

          <DesktopMenu />

          <MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}

      <MegaMenu />
    </header>
  );
};

export default Header;
