import CategoryImageBox from "./CategoryImageBox";

const AllCategoriesMenuDisplay = () => {
  return (
    <section className="border-t border-slate-200/80 bg-white shadow-xl">
      <div className="relative z-50 mx-auto hidden max-w-7xl px-4 py-8 sm:px-6 lg:block lg:px-8">
        {/* Department Overview Header */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              All Categories
            </h3>
            <p className="mt-0.5 text-xs text-slate-500">
              Explore our complete catalog of apparel, footwear, and seasonal collections
            </p>
          </div>
          <span className="text-xs font-medium text-slate-400">
            8 Departments
          </span>
        </div>

        {/* Categories Grid */}
        <div className="grid w-full grid-cols-12 gap-6">
          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/men-category.jpg"
              label="Men"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/women-category.jpg"
              label="Women"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/kids-category.jpg"
              label="Kids"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/collections-category.jpg"
              label="Collections"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/watches-category.jpg"
              label="Watches"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/shoes-category.jpg"
              label="Shoes"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/accessories-category.jpg"
              label="Accessories"
            />
          </div>

          <div className="col-span-3">
            <CategoryImageBox
              url="#"
              imageUrl="/images/sale-category.jpg"
              label="Sale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategoriesMenuDisplay;
