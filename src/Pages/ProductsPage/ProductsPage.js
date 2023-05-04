import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { categories } from "../../static/data";

import Product from "../../components/Product/Product";
import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";

function ProductsPage() {
  const params = useParams();
  return (
    <Layout>
      <Link to="/">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Back button</span>
        </button>
      </Link>
      <Product product={categories[0].products[0]}></Product>
      <ProductsCarousel products={categories?.[0]?.products}></ProductsCarousel>
    </Layout>
  );
}

export default ProductsPage;
