import { useState, useRef, useEffect } from "react";

import AllCategoriesMenuDisplay from "./AllCategoriesMenuDisplay";
import MegaMenuItem from "./MegaMenuItem";
import MenMenuDisplay from "./MenMenuDisplay";

const menuComponents = {
  "All Categories": AllCategoriesMenuDisplay,
  Men: MenMenuDisplay,
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
    <>
      <nav
        aria-label="Main navigation"
        className="relative z-40 mx-auto hidden w-full max-w-7xl items-center gap-6 bg-white px-4 py-3 lg:flex"
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

      <div ref={menuRef}>
        {CurrentMenuComponent && <CurrentMenuComponent />}
      </div>
    </>
  );
};

export default MegaMenu;
