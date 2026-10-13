import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const ShoesMenuDisplay = () => {
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
              <LinkItem url="/shoes" label="All Footwear" />
              <LinkItem url="/shoes/sneakers" label="Sneakers" />
              <LinkItem url="/shoes/sports" label="Sports Shoes" />
              <LinkItem url="/shoes/formal" label="Formal Shoes" />
              <LinkItem url="/shoes/casual" label="Casual Shoes" />
              <LinkItem url="/shoes/loafers" label="Loafers" />
              <LinkItem url="/shoes/sandals" label="Sandals & Slippers" />
              <LinkItem url="/shoes/boots" label="Boots" />
            </ul>
          </div>

          {/* Shop By Style */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Shop By Style
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/shoes/men" label="Men's Footwear" />
              <LinkItem url="/shoes/women" label="Women's Footwear" />
              <LinkItem url="/shoes/men/sneakers" label="Men's Sneakers" />
              <LinkItem url="/shoes/women/heels" label="Women's Heels" />
              <LinkItem url="/shoes/women/flats" label="Flats & Sandals" />
              <LinkItem url="/shoes/running" label="Running Shoes" />
              <LinkItem url="/shoes/gym" label="Gym Shoes" />
              <LinkItem url="/shoes/kids" label="Kids' Footwear" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="/shoes/sneakers"
              imageUrl="/images/shoes-sneakers.jpg"
              label="Everyday Sneakers"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="/shoes/sports"
              imageUrl="/images/shoes-sports.jpg"
              label="Sports Shoes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoesMenuDisplay;
