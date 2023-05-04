import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { categories } from "../../static/data";

import Product from "../../components/Product/Product";
import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import { useState } from "react";
import Loader from "../../components/Loader";

function ProductsPage() {
  const params = useParams();
  const [responseProducts, setresponseProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const syncCompetitors = () => {
    setLoader(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:3000/compare/" +
        encodeURIComponent(
          "lg  gsxv91mcae freestanding 60/40 american fridge freezer, matte black"
        ),
      // encodeURIComponent(categories[0].products[0].name),
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setresponseProducts(result);
        setLoader(false);
      })
      .catch((error) => {
        console.log("error", error);
        setLoader(false);
      });
  };

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
      <button
        style={{
          margin: "1rem",
          background: "rgb(30 41 59)",
          padding: "1rem 3rem",
          color: "#fff",
        }}
        onClick={syncCompetitors}
      >
        {loader == true ? <Loader /> : "Sync"}
      </button>
      <ProductsCarousel products={responseProducts}></ProductsCarousel>
    </Layout>
  );
}

export default ProductsPage;
