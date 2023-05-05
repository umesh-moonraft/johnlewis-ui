import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import SearchBox from "../../components/SearchBox";

function SearchPage() {
  const [responseProducts, setresponseProducts] = useState([]);

  const [loader, setLoader] = useState(false);
  const [isApiCallDone, setIsApiCallDone] = useState(false);

  const syncCompetitors = (searchText) => {
    setLoader(true);

    setIsApiCallDone(true);

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "http://localhost:3000/compare/" + encodeURIComponent(searchText),
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

  const searchHandler = (searchText) => {
    syncCompetitors(searchText);
  };

  return (
    <Layout>
      <div className="w-3/5 mx-auto my-8">
        <BackButton></BackButton>
        <SearchBox searchHandler={searchHandler}></SearchBox>
      </div>

      {!isApiCallDone &&
        (responseProducts.length > 0 ? (
          <ProductsCarousel products={responseProducts}></ProductsCarousel>
        ) : (
          <div className="text-center">
            {loader == true ? (
              <div className="flex justify-center gap-2 items-center">
                <div>Please wait, fetching Products from competitors</div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full animate-pulse dark:bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full animate-pulse dark:bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full animate-pulse dark:bg-blue-400"></div>
                </div>
              </div>
            ) : (
              "No Similar Products Found"
            )}
          </div>
        ))}
    </Layout>
  );
}

export default SearchPage;
