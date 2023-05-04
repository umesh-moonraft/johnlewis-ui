import { useParams } from "react-router";

import { categories, response } from "../../static/data";

import ProductView from "../../components/ProductView/ProductView";
import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import { generateIdByName } from "../../utils";

function ProductsPage() {
  const params = useParams();
  const [responseProducts, setresponseProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    categories.forEach((item) => {
      let categoryId = generateIdByName(item.category);
      if (categoryId === params.category) {
        // console.log(item);
        item.products.forEach((product) => {
          let id = generateIdByName(product.title);
          if (id === params.id) {
            setSelectedProduct(product);
          }
        });
      }
    });
  }, [params]);

  const syncCompetitors = () => {
    setLoader(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:3000/compare/" +
        encodeURIComponent(selectedProduct.title),
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
      <ProductView product={selectedProduct}></ProductView>
      <div className="flex justify-center">
        <button
          className="rounded-md"
          style={{
            margin: "1rem auto",
            background: "rgb(30 41 59)",
            padding: "1rem 3rem",
            color: "#fff",
          }}
          onClick={syncCompetitors}
        >
          {loader == true ? <Loader /> : "Sync"}
        </button>
      </div>
      {responseProducts.length > 0 && (
        <ProductsCarousel products={response}></ProductsCarousel>
      )}
    </Layout>
  );
}

export default ProductsPage;
