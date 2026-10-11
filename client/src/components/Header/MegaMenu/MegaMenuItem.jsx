const MegaMenuItem = ({ label, currentMenu, setCurrentMenu }) => {
  return (
    <button
      onClick={() => {
        if (currentMenu != label) {
          setCurrentMenu(label);
        } else {
          setCurrentMenu(null);
        }
      }}
      type="button"
      className="shrink-0 whitespace-nowrap rounded-md px-2 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
    >
      {label}
    </button>
  );
};

export default MegaMenuItem;
