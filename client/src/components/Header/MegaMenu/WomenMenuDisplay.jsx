import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const WomenMenuDisplay = () => {
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
              <LinkItem url="#" label="Women's Fashion" />
              <LinkItem url="#" label="New Arrivals" />
              <LinkItem url="#" label="Clothing" />
              <LinkItem url="#" label="Ethnic Wear" />
              <LinkItem url="#" label="Footwear" />
              <LinkItem url="#" label="Handbags" />
              <LinkItem url="#" label="Jewellery" />
              <LinkItem url="#" label="Beauty" />
            </ul>
          </div>

          {/* Top Brands */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Top Brands
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="#" label="Zara" />
              <LinkItem url="#" label="H&M" />
              <LinkItem url="#" label="Biba" />
              <LinkItem url="#" label="Mango" />
              <LinkItem url="#" label="Levis" />
              <LinkItem url="#" label="Forever 21" />
              <LinkItem url="#" label="ONLY" />
              <LinkItem url="#" label="Vero Moda" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="#"
              imageUrl="/images/women-dresses-category.jpg"
              label="Women's Dresses"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/women-handbags-category.jpg"
              label="Women's Bags"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomenMenuDisplay;