import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const AccessoriesMenuDisplay = () => {
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
              <LinkItem url="/accessories" label="All Accessories" />
              <LinkItem url="/accessories/sunglasses" label="Sunglasses" />
              <LinkItem url="/accessories/belts" label="Belts" />
              <LinkItem url="/accessories/wallets" label="Wallets" />
              <LinkItem url="/accessories/bags" label="Bags & Backpacks" />
              <LinkItem url="/accessories/jewellery" label="Jewellery" />
              <LinkItem url="/accessories/watches" label="Watches" />
              <LinkItem url="/accessories/hats" label="Hats & Caps" />
            </ul>
          </div>

          {/* Trending Accessories */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Trending Now
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/accessories/new-arrivals" label="New Arrivals" />
              <LinkItem url="/accessories/bestsellers" label="Bestsellers" />
              <LinkItem url="/accessories/premium" label="Premium Collection" />
              <LinkItem url="/accessories/men" label="Men's Accessories" />
              <LinkItem url="/accessories/women" label="Women's Accessories" />
              <LinkItem
                url="/accessories/everyday"
                label="Everyday Essentials"
              />
              <LinkItem url="/accessories/gifting" label="Gift Collection" />
              <LinkItem url="/accessories/sale" label="Special Offers" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="/accessories/sunglasses"
              imageUrl="/images/accessories-sunglasses.jpg"
              label="Sunglasses Collection"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="/accessories/bags"
              imageUrl="/images/accessories-bags.jpg"
              label="Premium Bags"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesMenuDisplay;
