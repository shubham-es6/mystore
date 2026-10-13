import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const CollectionsMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200/80 bg-white shadow-xl">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-4 py-8 sm:px-6 lg:block lg:px-8">
        <div className="grid w-full grid-cols-12 items-start gap-8">
          {/* Collections */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Collections
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/collections" label="All Collections" />
              <LinkItem url="/collections/new-arrivals" label="New Arrivals" />
              <LinkItem url="/collections/bestsellers" label="Bestsellers" />
              <LinkItem url="/collections/trending" label="Trending Now" />
              <LinkItem
                url="/collections/essentials"
                label="Daily Essentials"
              />
              <LinkItem url="/collections/premium" label="Premium Collection" />
              <LinkItem
                url="/collections/limited-edition"
                label="Limited Edition"
              />
              <LinkItem url="/collections/sale" label="Special Offers" />
            </ul>
          </div>

          {/* Shop By Occasion */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Shop By Style
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/collections/casual" label="Casual Styles" />
              <LinkItem url="/collections/formal" label="Formal Wear" />
              <LinkItem url="/collections/partywear" label="Party Wear" />
              <LinkItem url="/collections/ethnic" label="Ethnic Collection" />
              <LinkItem url="/collections/sportswear" label="Sportswear" />
              <LinkItem url="/collections/minimal" label="Minimal Essentials" />
              <LinkItem url="/collections/seasonal" label="Seasonal Picks" />
              <LinkItem url="/collections/gifting" label="Gift Collection" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="/collections/new-arrivals"
              imageUrl="/images/collections-new-arrivals.jpg"
              label="New Season Collection"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="/collections/bestsellers"
              imageUrl="/images/collections-bestsellers.jpg"
              label="Trending Styles"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsMenuDisplay;
