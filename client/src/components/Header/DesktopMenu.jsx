import { TagIcon, User, ShoppingBag } from "lucide-react";

import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <nav className="hidden items-center lg:ml-6 lg:flex lg:space-x-8">
      <MenuItem url="/categories" label="Categories" icon={TagIcon} />
      <MenuItem url="/login" label="Login" icon={User} />
      <MenuItem url="/cart" label="Cart" icon={ShoppingBag} />
    </nav>
  );
};

export default DesktopMenu;
