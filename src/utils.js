import { response } from "./static/data";

export const generateIdByName = (name) => {
  return name.replace(/\s+|[,\/]/g, "-").toLowerCase();
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export function getProducts(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve(response), delay));
}
