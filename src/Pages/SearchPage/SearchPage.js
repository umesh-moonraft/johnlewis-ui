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
      headers: {
        "ngrok-skip-browser-warning": true,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36"
      }
    };
    //https://yellow-onions-fail-202-83-29-86.loca.lt/compare/jigsaw%20Supima%20Cotton%20T-Shirt
    // fetch(
    //   "http://localhost:3000/compare/" + encodeURIComponent(searchText),
    //   requestOptions
    // )
    fetch(
      "https://05a9-115-244-211-54.ngrok-free.app/compare/" + encodeURIComponent(searchText),
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

      {isApiCallDone &&
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
