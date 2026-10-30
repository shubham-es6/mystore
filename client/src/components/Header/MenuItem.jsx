import { Link } from "react-router";

const MenuItem = ({ url, label, icon: Icon }) => {
  return (
    <Link
      to={url}
      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-indigo-600"
    >
      <Icon
        className="h-4 w-4 text-slate-500 transition-colors duration-200 group-hover:text-indigo-600"
        strokeWidth={2}
      />
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
