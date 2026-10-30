import { Link } from "react-router";

const LinkItem = ({ url, label }) => {
  return (
    <Link
      to={url}
      className="block rounded-md py-1 text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-slate-950"
    >
      {label}
    </Link>
  );
};

export default LinkItem;
