import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { categories, response } from "../../static/data";

import ProductView from "../../components/ProductView/ProductView";
import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import { generateIdByName } from "../../utils";
import BackButton from "../../components/BackButton";
import DottedLoader from "../../components/DottedLoader";
import Button from "../../components/Button";
import fetchProducts from "../../api";

function ProductsPage() {
  const params = useParams();
  const [responseProducts, setresponseProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const [loader, setLoader] = useState(false);
  const [isApiCallDone, setIsApiCallDone] = useState(false);

  useEffect(() => {
    categories.forEach((item) => {
      let categoryId = generateIdByName(item.category);
      if (categoryId === params.category) {
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

    setIsApiCallDone(true);

    setresponseProducts([]);

    setTimeout(() => {
      setresponseProducts(response);
      setLoader(false);
    }, 1000);

    // fetchProducts(selectedProduct.title, 10000)
    //   // fetchProducts(selectedProduct.title)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     setresponseProducts(result);
    //     setLoader(false);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     setLoader(false);
    //   });
  };

  return (
    <Layout>
      <BackButton></BackButton>
      <ProductView product={selectedProduct}></ProductView>

      <div className="flex justify-center m-8 ">
        <Button
          title="Sync Products"
          onClick={syncCompetitors}
          classes={"!text-base"}
          disabled={loader}
        ></Button>
      </div>

      {isApiCallDone &&
        (responseProducts.length > 0 ? (
          <ProductsCarousel products={responseProducts}></ProductsCarousel>
        ) : (
          <DottedLoader isLoader={loader} />
        ))}
      {!isApiCallDone && (
        <div className="text-center text-blue-600 text-xl font-medium">
          Click Sync Button to get similar products from competitors{" "}
        </div>
      )}
    </Layout>
  );
}

export default ProductsPage;
