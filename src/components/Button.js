import { classNames } from "../utils";

export default function Button({ onClick, title, classes, disabled, type }) {
  return (
    <button
      className={classNames(
        classes,
        disabled
          ? "text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          : "text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      )}
      onClick={onClick}
      disabled={disabled}
      type={type ?? "button"}
    >
      {title}
    </button>
  );
}
