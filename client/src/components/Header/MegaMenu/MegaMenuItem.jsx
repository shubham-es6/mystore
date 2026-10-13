const MegaMenuItem = ({ label, currentMenu, setCurrentMenu }) => {
  const isActive = currentMenu === label;

  return (
    <button
      onClick={() => {
        if (currentMenu !== label) {
          setCurrentMenu(label);
        } else {
          setCurrentMenu(null);
        }
      }}
      type="button"
      aria-expanded={isActive}
      className={`group relative inline-flex items-center gap-1.5 shrink-0 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
        isActive
          ? "bg-slate-900 text-white shadow-sm"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
      }`}
    >
      <span>{label}</span>
      <svg
        className={`h-3.5 w-3.5 transition-transform duration-200 ${
          isActive
            ? "rotate-180 text-white"
            : "text-slate-400 group-hover:text-slate-600"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  );
};

export default MegaMenuItem;
