import { Link } from "react-router";

const SaleMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200 bg-white shadow-xl">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-6 py-8 lg:block">
        {/* Sale Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-rose-50 via-white to-orange-50 px-10 py-10 ring-1 ring-rose-100">
          {/* Decorative Background */}
          <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative flex items-center justify-between gap-8">
            {/* Sale Information */}
            <div className="max-w-2xl text-left">
              <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-700">
                Special Offers
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 xl:text-4xl">
                Big Style.
                <span className="text-rose-600"> Bigger Savings.</span>
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-600">
                Discover amazing deals on fashion, footwear, accessories and
                more. Find your favourites at special prices.
              </p>

              <Link
                to="/sale"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-rose-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600 focus-visible:ring-offset-2"
              >
                Shop Sale
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Discount Highlight */}
            <div className="hidden shrink-0 sm:block">
              <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full border-2 border-dashed border-rose-300 bg-white/80 shadow-sm">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
                  Sale
                </span>

                <span className="mt-1 text-5xl font-black tracking-tight text-slate-900">
                  OFF
                </span>

                <span className="mt-2 text-xs font-medium text-slate-500">
                  Explore available deals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Links */}
        <div className="mt-5 grid grid-cols-3 gap-4">
          <Link
            to="/sale/men"
            className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition duration-300 hover:border-rose-200 hover:bg-rose-50"
          >
            <div>
              <p className="text-sm font-bold text-slate-900">Men's Sale</p>
              <p className="mt-1 text-xs text-slate-500">
                Fashion & essentials
              </p>
            </div>

            <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-rose-600">
              →
            </span>
          </Link>

          <Link
            to="/sale/women"
            className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition duration-300 hover:border-rose-200 hover:bg-rose-50"
          >
            <div>
              <p className="text-sm font-bold text-slate-900">Women's Sale</p>
              <p className="mt-1 text-xs text-slate-500">
                Everyday & occasion wear
              </p>
            </div>

            <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-rose-600">
              →
            </span>
          </Link>

          <Link
            to="/sale/kids"
            className="group flex items-center justify-between rounded-xl border border-slate-200 p-4 transition duration-300 hover:border-rose-200 hover:bg-rose-50"
          >
            <div>
              <p className="text-sm font-bold text-slate-900">Kids' Sale</p>
              <p className="mt-1 text-xs text-slate-500">
                Little styles & essentials
              </p>
            </div>

            <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-rose-600">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SaleMenuDisplay;
