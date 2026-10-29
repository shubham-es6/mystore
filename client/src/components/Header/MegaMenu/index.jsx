import { useState, useRef, useEffect } from "react";

import AllCategoriesMenuDisplay from "./AllCategoriesMenuDisplay";
import MegaMenuItem from "./MegaMenuItem";
import MenMenuDisplay from "./MenMenuDisplay";
import WomenMenuDisplay from "./WomenMenuDisplay";
import KidsMenuDisplay from "./KidsMenuDisplay";
import CollectionsMenuDisplay from "./CollectionsMenuDisplay";
import WatchesMenuDisplay from "./WatchesMenuDisplay";
import ShoesMenuDisplay from "./ShoesMenuDisplay";
import AccessoriesMenuDisplay from "./AccessoriesMenuDisplay";
import SaleMenuDisplay from "./SaleMenuDisplay";

const menuComponents = {
  "All Categories": AllCategoriesMenuDisplay,
  Men: MenMenuDisplay,
  Women: WomenMenuDisplay,
  Kids: KidsMenuDisplay,
  Collections: CollectionsMenuDisplay,
  Watches: WatchesMenuDisplay,
  Shoes: ShoesMenuDisplay,
  Accessories: AccessoriesMenuDisplay,
  Sale: SaleMenuDisplay,
};

const MegaMenu = () => {
  const [currentMenu, setCurrentMenu] = useState(null);

  const menuRef = useRef(null);

  const CurrentMenuComponent = currentMenu ? menuComponents[currentMenu] : null;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setCurrentMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative w-full border-b border-slate-200/80 bg-white"
    >
      <nav
        aria-label="Main navigation"
        className="relative z-40 mx-auto hidden w-full max-w-7xl items-center justify-center gap-1 px-4 py-2 bg-white lg:flex xl:gap-2"
      >
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="All Categories"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Men"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Women"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Kids"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Collections"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Watches"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Shoes"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Accessories"
        />
        <MegaMenuItem
          currentMenu={currentMenu}
          setCurrentMenu={setCurrentMenu}
          label="Sale"
        />
      </nav>

      <div className="relative w-full transition-all duration-200">
        {CurrentMenuComponent && <CurrentMenuComponent />}
      </div>
    </div>
  );
};

export default MegaMenu;
