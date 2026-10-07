import { Menu, X } from "lucide-react";

const MobileMenuIcon = ({ isOpen, setIsOpen }) => {
  return (
    <button
      type="button"
      aria-label="Open menu"
      className="block rounded-lg p-2 transition-colors duration-200 hover:bg-slate-100 sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <X className="h-6 w-6 text-slate-900" />
      ) : (
        <Menu className="h-6 w-6 text-slate-900" />
      )}
    </button>
  );
};

export default MobileMenuIcon;
