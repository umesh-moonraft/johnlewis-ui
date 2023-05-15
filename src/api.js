const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    "ngrok-skip-browser-warning": true,
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
  },
};

export default function fetchProducts(productTitle) {
  return fetch(
    "https://05a9-115-244-211-54.ngrok-free.app/compare/" +
      encodeURIComponent(productTitle),
    requestOptions
  );
}
