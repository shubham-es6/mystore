import CategoryImageBox from "./CategoryImageBox";
import LinkItem from "./LinkItem";

const KidsMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200/80 bg-white shadow-xl">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-4 py-8 sm:px-6 lg:block lg:px-8">
        <div className="grid w-full grid-cols-12 items-start gap-8">
          {/* Boys Categories */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Boys
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/kids/boys" label="Boys' Fashion" />
              <LinkItem url="/kids/boys/new-arrivals" label="New Arrivals" />
              <LinkItem url="/kids/boys/t-shirts" label="T-Shirts & Shirts" />
              <LinkItem url="/kids/boys/jeans" label="Jeans & Trousers" />
              <LinkItem url="/kids/boys/shorts" label="Shorts" />
              <LinkItem url="/kids/boys/ethnic" label="Ethnic Wear" />
              <LinkItem url="/kids/boys/footwear" label="Footwear" />
              <LinkItem url="/kids/boys/accessories" label="Accessories" />
            </ul>
          </div>

          {/* Girls & Baby */}
          <div className="col-span-2">
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Girls & Baby
            </h3>

            <ul className="flex flex-col space-y-1">
              <LinkItem url="/kids/girls" label="Girls' Fashion" />
              <LinkItem url="/kids/girls/dresses" label="Dresses & Frocks" />
              <LinkItem url="/kids/girls/tops" label="Tops & T-Shirts" />
              <LinkItem url="/kids/girls/jeans" label="Jeans & Leggings" />
              <LinkItem url="/kids/girls/ethnic" label="Ethnic Wear" />
              <LinkItem url="/kids/baby-clothing" label="Baby Clothing" />
              <LinkItem url="/kids/toys" label="Toys & Games" />
              <LinkItem url="/kids/school-bags" label="School Bags" />
            </ul>
          </div>

          {/* Promotional Image 1 */}
          <div className="col-span-5">
            <CategoryImageBox
              url="/kids/boys"
              imageUrl="/images/kids-boys.jpg"
              label="Boys' Collection"
            />
          </div>

          {/* Promotional Image 2 */}
          <div className="col-span-3">
            <CategoryImageBox
              url="/kids/girls"
              imageUrl="/images/kids-girls.jpg"
              label="Girls' Collection"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsMenuDisplay;
