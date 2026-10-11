const CategoryImageBox = ({ url, imageUrl, label, fullHeight = false }) => {
  return (
    <a
      href={url}
      className="group relative block overflow-hidden rounded-2xl bg-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
    >
      {/* Category Image */}
      <img
        src={imageUrl}
        alt={label}
        loading="lazy"
        className={`${fullHeight ? "h-full" : "h-64"} w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110`}
      />

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-colors duration-300 group-hover:from-black/40" />

      {/* Category Label */}
      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center px-4">
        <span className="rounded-lg bg-white/95 px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-900 shadow-md transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white sm:text-sm">
          {label}
        </span>
      </div>
    </a>
  );
};

export default CategoryImageBox;
