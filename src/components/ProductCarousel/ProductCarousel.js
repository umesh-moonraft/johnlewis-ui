import { useEffect } from "react";
import { register } from "swiper/element/bundle";

import Product from "../Product/Product";

import "./ProductsCarousel.css";
import ExternalProduct from "../ExternalProduct/ExternalProduct";

// register Swiper custom elements
register();

function ProductsCarousel({ products }) {
  useEffect(() => {
    const swiperEl = document.querySelector("swiper-container");
    Object.assign(swiperEl, {
      slidesPerView: 3,
      spaceBetween: 10,
      // pagination: {
      //   clickable: true
      // },
      navigation: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    });
    swiperEl.initialize();
  }, []);
  return (
    <div className="products-carousel-container my-8">
      <swiper-container class="mySwiper" init="false">
        {products.map((product,index) => (
          <swiper-slide key={index}>
            <ExternalProduct product={product}></ExternalProduct>
            {/* <div>
              <h2>{product.title}</h2>
              <h3>{product.price}</h3>
              <img src={product.img} style={{ height: "300px" }} />
              <a target="_blank" href={product.url}>
                View
              </a>
              <h4>{product.provider}</h4>
            </div> */}
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}

export default ProductsCarousel;
