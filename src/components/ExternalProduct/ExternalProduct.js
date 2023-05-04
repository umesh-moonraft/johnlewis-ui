import { Link } from "react-router-dom";

function ExternalProduct({ product }) {
  return (
    <div className="flex flex-col shadow-lg p-8 bg-slate-800 rounded-lg gap-4 items-center external-product">
      <Link to={product.url}>
        <img
          src={product.img}
          className="h-60 rounded-md cursor-pointer"
          alt="product"
        />
      </Link>
      <div className="text-slate-200 flex-col">
        <div className="mb-4">{product.title}</div>
        <div className="text-xl font-bold mb-8">{product.price}</div>

        <Link to={product.url}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            View Product
          </button>
        </Link>

        <div>{product.provider}</div>
      </div>
    </div>
  );
}

export default ExternalProduct;
