import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const MenMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-4 py-8 lg:block">
        <div className="grid w-full grid-cols-12 items-start gap-6">
          {/* Categories */}
          <div className="col-span-2">
            <h6 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Categories
            </h6>

            <ul className="flex flex-col gap-y-3">
              <LinkItem url="#" label="Men's Fashion" />
              <LinkItem url="#" label="New Arrivals" />
              <LinkItem url="#" label="Clothing" />
              <LinkItem url="#" label="Footwear" />
              <LinkItem url="#" label="Watches" />
              <LinkItem url="#" label="Jewellery" />
              <LinkItem url="#" label="Backpacks" />
              <LinkItem url="#" label="Luggage" />
            </ul>
          </div>

          {/* Top Brands */}
          <div className="col-span-2">
            <h6 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Top Brands
            </h6>

            <ul className="flex flex-col gap-y-3">
              <LinkItem url="#" label="Nike" />
              <LinkItem url="#" label="Adidas" />
              <LinkItem url="#" label="H&M" />
              <LinkItem url="#" label="Zara" />
              <LinkItem url="#" label="Puma" />
              <LinkItem url="#" label="Gucci" />
              <LinkItem url="#" label="Levis" />
              <LinkItem url="#" label="Zudio" />
            </ul>
          </div>

          {/* Men's Watches */}
          <div className="col-span-5 h-[320px] min-w-0">
            <CategoryImageBox
              url="#"
              imageUrl="/images/men-watches-category.jpg"
              label="Men's Watches"
              fullHeight={true}
            />
          </div>

          {/* Men's Suits */}
          <div className="col-span-3 h-[320px] min-w-0">
            <CategoryImageBox
              url="#"
              imageUrl="/images/mens-suit-category.jpg"
              label="Men's Suits"
              fullHeight={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenMenuDisplay;
