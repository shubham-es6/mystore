import { Tag, User, ShoppingBag } from "lucide-react";

import MobileSearchBar from "./MobileSearchBar";
import MenuItemMobile from "./MenuItemMobile";

const MobileMenu = () => {
  return (
    <nav className="w-full border-t border-slate-200 bg-white shadow-sm sm:hidden">
      <MobileSearchBar />

      <div className="space-y-1 py-2">
        <MenuItemMobile url="/categories" label="Categories" icon={Tag} />

        <MenuItemMobile url="/login" label="Login" icon={User} />

        <MenuItemMobile url="/cart" label="Cart" icon={ShoppingBag} />
      </div>
    </nav>
  );
};

export default MobileMenu;
