import { useNavigate } from "react-router-dom";

import { generateIdByName } from "../../utils";
import Button from "../Button";

function Product({ product, category }) {
  const navigate = useNavigate();

  const productClickHandler = () => {
    let id = generateIdByName(product.title);
    let categoryId = generateIdByName(category);
    navigate(`/product/${categoryId}/${id}`);
  };
  return (
    <div className="flex shadow-lg p-4 bg-slate-800 rounded-lg gap-4">
      <img
        src={product.img}
        className="h-72 rounded-md cursor-pointer"
        alt="product"
        onClick={productClickHandler}
      />
      <div className="text-slate-200 flex-col">
        <div className="mb-4">{product.title}</div>
        <div className="text-xl font-bold mb-8">{product.price}</div>

        <Button title="View Product" onClick={productClickHandler}></Button>
      </div>
    </div>
  );
}

export default Product;
