const LinkItem = ({ url, label }) => {
  return (
    <div>
      <a
        href={url}
        className="text-sm text-slate-700 transition-all hover:text-slate-900 hover:underline;"
      >
        {label}
      </a>
    </div>
  );
};

export default LinkItem;
