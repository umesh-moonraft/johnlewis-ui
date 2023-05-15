export default function DottedLoader({ isLoader }) {
  return (
    <div className="text-center text-blue-600 text-xl font-medium">
      {isLoader === true ? (
        <div className="flex flex-col justify-center gap-4 items-center">
          <div className="">
            Please wait, fetching Products from competitors
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-700"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-700"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-blue-700"></div>
          </div>
        </div>
      ) : (
        <div>No Similar Products Found</div>
      )}
    </div>
  );
}
