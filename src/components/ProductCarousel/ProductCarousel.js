import { useEffect } from "react";
import { register } from "swiper/element/bundle";

import Product from "../Product/Product";

import "./ProductsCarousel.css";

// register Swiper custom elements
register();

function ProductsCarousel({ products }) {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      // pagination: {
      //   clickable: true,
      // },
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();
  }, []);
  return (
    <div className="products-carousel-container">
      <swiper-container class="mySwiper" init="false">
        {products.map((product) => (
          <swiper-slide>
            {/* <Product product={product}></Product> */}
            <div>
              <h2>{product.title}</h2>
              <h3>{product.price}</h3>
              <img src={product.img} style={{ height: "300px" }} />
              <a target="_blank" href={product.url}>
                View
              </a>
              <h4>{product.provider}</h4>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default ProductsCarousel;
