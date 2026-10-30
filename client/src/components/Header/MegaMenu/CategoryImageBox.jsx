import { Link } from "react-router";

const CategoryImageBox = ({ url, imageUrl, label, fullHeight = false }) => {
  return (
    <Link
      to={url}
      className={`group relative block w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 ${
        fullHeight ? "h-full" : ""
      }`}
    >
      {/* Category Image */}
      <img
        src={imageUrl}
        alt={label}
        loading="lazy"
        className={`${
          fullHeight ? "h-full min-h-[20rem]" : "h-60 sm:h-64"
        } w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent transition-all duration-300 group-hover:from-black/70" />

      {/* Category Label */}
      <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center px-3">
        <span className="inline-flex max-w-full items-center gap-1.5 rounded-lg bg-white/95 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-slate-900 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white">
          <span>{label}</span>

          <svg
            className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default CategoryImageBox;
