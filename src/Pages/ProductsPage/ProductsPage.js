import { useParams } from "react-router";

import { categories } from "../../static/data";

import Product from "../../components/Product/Product";
import ProductsCarousel from "../../components/ProductCarousel/ProductCarousel";
import Layout from "../../template/Layout";
import BackButton from "../../components/BackButton/BackButton";

function ProductsPage() {
  const params = useParams();
  return (
    <Layout>
      <BackButton></BackButton>
      <Product product={categories[0].products[0]}></Product>
      <ProductsCarousel products={categories?.[0]?.products}></ProductsCarousel>
    </Layout>
  );
}

export default ProductsPage;
