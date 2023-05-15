import { useState } from "react";

import { response } from "../../static/data";

import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import BackButton from "../../components/BackButton";
import SearchBox from "../../components/SearchBox";
import DottedLoader from "../../components/DottedLoader";
import fetchProducts from "../../api";

function SearchPage() {
  const [responseProducts, setresponseProducts] = useState([]);

  const [loader, setLoader] = useState(false);
  const [isApiCallDone, setIsApiCallDone] = useState(false);

  const syncCompetitors = (searchText) => {
    setLoader(true);
    setIsApiCallDone(true);
    setresponseProducts([]);

    setTimeout(() => {
      setresponseProducts([]);
      setLoader(false);
    }, 10000);

    // fetchProducts(searchText)
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

  const searchHandler = (searchText) => {
    syncCompetitors(searchText);
  };

  return (
    <Layout>
      <div className="w-3/5 mx-auto mb-8">
        <BackButton></BackButton>
        <SearchBox searchHandler={searchHandler} disabled={loader}></SearchBox>
      </div>

      {isApiCallDone &&
        (responseProducts.length > 0 ? (
          <ProductsCarousel products={responseProducts}></ProductsCarousel>
        ) : (
          <DottedLoader isLoader={loader}></DottedLoader>
        ))}
    </Layout>
  );
}

export default SearchPage;
