import { categories } from "../../static/data";

import CategoriesTabs from "../../components/CategoriesTabs/CategoriesTabs";
import Layout from "../../template/Layout";

function Home() {
  return (
    <Layout>
      <CategoriesTabs categories={categories}></CategoriesTabs>
    </Layout>
  );
}

export default Home;
