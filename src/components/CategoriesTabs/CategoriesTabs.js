import { Tab } from "@headlessui/react";
import ProductList from "../ProductList/ProductList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CategoriesTabs({ categories }) {
  const tabChangeHandler = (index) => {
    console.log("Changed selected tab to:", index);
  };

  return (
    <div className="w-full px-2 mx-8 py-16 sm:px-0">
      <Tab.Group onChange={tabChangeHandler}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category.category_name}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category.category_name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {categories.map((category, idx) => (
            <Tab.Panel key={idx} className={"rounded-xl bg-white"}>
              <ProductList products={category.products}></ProductList>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
