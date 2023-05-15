import { Tab } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import { classNames } from "../../utils";

export default function CategoriesTabs({ categories }) {
  const navigate = useNavigate();
  const tabChangeHandler = (index) => {
    console.log("Changed selected tab to:", index);
  };

  return (
    <Tab.Group onChange={tabChangeHandler}>
      <Tab.List className="grid grid-cols-2 gap-4 space-x-1 rounded-xl bg-blue-900/20 p-1  justify-center md:grid-cols-3 lg:grid-cols-4">
        {categories.map((item) => (
          <Tab
            key={item.category}
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 basis-1/5",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-100 hover:bg-white/[0.50] hover:text-blue-900"
              )
            }
          >
            {item.category}
          </Tab>
        ))}
        <Tab
          className={({ selected }) =>
            classNames(
              "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 basis-1/5",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              selected
                ? "bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.50] hover:text-blue-900"
            )
          }
          onClick={() => {
            navigate("/search");
          }}
        >
          Custom Search
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        {categories.map((item, idx) => (
          <Tab.Panel key={idx} className={"rounded-xl bg-white"}>
            <ProductList
              products={item.products}
              category={item.category}
            ></ProductList>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
