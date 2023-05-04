import Product from "../Product/Product";

function ProductList({ products }) {
  console.log(products);
  const listItems = products.map((product, index) => (
    <Product product={product} key={index}></Product>
  ));
  return <div className="flex flex-col gap-4">{listItems}</div>;
}

export default ProductList;
