import Product from "../Product/Product";

function ProductList({ products, category }) {
  const listItems = products.map((product, index) => (
    <Product product={product} key={index} category={category}></Product>
  ));
  return <div className="flex flex-col gap-4">{listItems}</div>;
}

export default ProductList;
