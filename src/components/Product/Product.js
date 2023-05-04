import { useNavigate } from "react-router-dom";

import { generateIdByName } from "../../utils";

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

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={productClickHandler}
        >
          View Product
        </button>
      </div>
    </div>
  );
}

export default Product;
