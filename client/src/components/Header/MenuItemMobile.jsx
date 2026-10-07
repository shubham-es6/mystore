

const MenuItemMobile = ({ url, label, icon: Icon }) => {
  return (
    <a
      href={url}
      className="flex w-full items-center gap-3 px-5 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600"
    >
      <Icon className="h-5 w-5 shrink-0" strokeWidth={2} />

      <span>{label}</span>
    </a>
  );
};

export default MenuItemMobile;
