import { Link } from "react-router-dom";
import Button from "../Button";

function ExternalProduct({ product }) {
  return (
    <div className="flex flex-col shadow-lg px-4 py-8 bg-slate-800 rounded-lg gap-4 items-center external-product">
      <Link to={product.url} target="_blank">
        <img
          src={product.img}
          className="h-60 rounded-md cursor-pointer"
          alt="product"
        />
      </Link>
      <div className="text-slate-200 flex-col">
        <div className="mb-4 text-sm">{product.title}</div>
        <div className="text-xl font-bold mb-8">{product.price}</div>
        <Link to={product.url} target="_blank">
          <Button title="View Product" classes="mb-4"></Button>
        </Link>
        <div>{product.provider}</div>
      </div>
    </div>
  );
}

export default ExternalProduct;
