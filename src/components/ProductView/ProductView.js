export default function ProductView({ product }) {
  return (
    <div className="flex flex-col shadow-lg p-8 bg-slate-800 rounded-lg gap-4 justify-center items-center">
      <img
        src={product.img}
        className="h-100 w-72 rounded-md cursor-pointer"
        alt="product"
      />
      <div className="text-slate-200 flex-col">
        <div className="mb-4">{product.title}</div>
        <div className="text-center text-xl font-bold">{product.price}</div>
      </div>
    </div>
  );
}
