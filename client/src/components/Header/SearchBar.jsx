import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative hidden w-full lg:block">
      <Search
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        strokeWidth={2}
      />

      <input
        type="search"
        placeholder="What are you looking for?"
        className="
          h-10 w-full rounded-lg
          border border-slate-200
          bg-slate-100
          px-4 pl-10
          text-sm text-slate-700
          placeholder:text-slate-400
          outline-none
          transition-all duration-200
          hover:border-slate-300
          focus:border-slate-400
          focus:bg-white
          focus:ring-2 focus:ring-slate-200
        "
      />
    </div>
  );
};

export default SearchBar;
