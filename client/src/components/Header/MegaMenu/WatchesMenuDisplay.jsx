import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const WatchesMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200/80 bg-white shadow-xl">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-4 py-8 sm:px-6 lg:block lg:px-8">
        <div className="grid w-full grid-cols-12 items-start gap-8">
          {/* Categories */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Categories
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/category/watches" label="All Watches" />
              <LinkItem url="/category/luxury-watches" label="Luxury Watches" />
              <LinkItem url="/category/smart-watches" label="Smart Watches" />
              <LinkItem url="/category/mens-watches" label="Men's Watches" />
              <LinkItem
                url="/category/womens-watches"
                label="Women's Watches"
              />
              <LinkItem
                url="/category/classic-watches"
                label="Classic Watches"
              />
              <LinkItem url="/category/sports-watches" label="Sports Watches" />
              <LinkItem
                url="/category/digital-watches"
                label="Digital Watches"
              />
            </ul>
          </div>

          {/* Top Brands */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Top Brands
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/brands/rolex" label="Rolex" />
              <LinkItem url="/brands/casio" label="Casio" />
              <LinkItem url="/brands/titan" label="Titan" />
              <LinkItem url="/brands/fossil" label="Fossil" />
              <LinkItem url="/brands/seiko" label="Seiko" />
              <LinkItem url="/brands/timex" label="Timex" />
              <LinkItem url="/brands/sonata" label="Sonata" />
              <LinkItem url="/brands/apple" label="Apple Watch" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="/category/luxury-watches"
              imageUrl="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85"
              label="Luxury Watches"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="/category/smart-watches"
              imageUrl="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=85"
              label="Smart Watches"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchesMenuDisplay;
